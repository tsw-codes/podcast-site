import React, { useEffect, useMemo, useState } from 'react'

type YoutubeVideo = {
  id: string
  title: string
  publishedAt: string
  thumbnailUrl: string
  url: string
}

async function fetchLatestChannelVideos(apiKey: string, channelId: string, maxResults: number = 3): Promise<YoutubeVideo[]> {
  // First call: search for latest videos by channel
  const searchParams = new URLSearchParams({
    key: apiKey,
    channelId,
    part: 'snippet',
    order: 'date',
    type: 'video',
    maxResults: String(maxResults * 2), // Get more to filter out shorts
  })

  const searchResp = await fetch(`https://www.googleapis.com/youtube/v3/search?${searchParams.toString()}`)
  if (!searchResp.ok) throw new Error('Failed to fetch YouTube search results')
  const searchJson = await searchResp.json()

  const items: any[] = Array.isArray(searchJson.items) ? searchJson.items : []
  const videoIds = items.map(item => item.id?.videoId).filter(Boolean).join(',')

  if (!videoIds) return []

  // Second call: get video details to filter out shorts
  const detailsParams = new URLSearchParams({
    key: apiKey,
    id: videoIds,
    part: 'contentDetails',
  })

  const detailsResp = await fetch(`https://www.googleapis.com/youtube/v3/videos?${detailsParams.toString()}`)
  if (!detailsResp.ok) throw new Error('Failed to fetch video details')
  const detailsJson = await detailsResp.json()

  const videoDetails: any[] = Array.isArray(detailsJson.items) ? detailsJson.items : []
  const detailsMap = new Map(videoDetails.map(video => [video.id, video.contentDetails?.duration]))

  // Filter out shorts (duration < 60 seconds) and limit to maxResults
  const filteredItems = items
    .filter(item => {
      const videoId = item.id?.videoId
      const duration = detailsMap.get(videoId)
      if (!duration) return false
      
      // Parse ISO 8601 duration (PT1M30S = 1 minute 30 seconds)
      const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
      if (!match) return false
      
      const hours = parseInt(match[1] || '0')
      const minutes = parseInt(match[2] || '0')
      const seconds = parseInt(match[3] || '0')
      const totalSeconds = hours * 3600 + minutes * 60 + seconds
      
      return totalSeconds >= 60 // Filter out videos shorter than 1 minute
    })
    .slice(0, maxResults)

  return filteredItems.map((item) => {
    const videoId = item.id?.videoId as string
    const snippet = item.snippet
    return {
      id: videoId,
      title: snippet?.title ?? 'Untitled',
      publishedAt: snippet?.publishedAt ?? '',
      thumbnailUrl: snippet?.thumbnails?.medium?.url ?? snippet?.thumbnails?.high?.url ?? '',
      url: `https://www.youtube.com/watch?v=${videoId}`,
    }
  })
}

export const LatestEpisodes: React.FC = () => {
  const [videos, setVideos] = useState<YoutubeVideo[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const apiKey = import.meta.env.VITE_YT_API_KEY as string | undefined
  const channelId = import.meta.env.VITE_YT_CHANNEL_ID as string | undefined
  
  // Debug: log environment variables (remove this after testing)
  console.log('API Key exists:', !!apiKey)
  console.log('Channel ID exists:', !!channelId)
  const channelUrl = useMemo(() => 'https://www.youtube.com/@XstysEssencePodcast', [])

  useEffect(() => {
    let isCancelled = false
    async function run() {
      if (!apiKey || !channelId) {
        setLoading(false)
        setVideos(null)
        return
      }
      try {
        const data = await fetchLatestChannelVideos(apiKey, channelId, 3)
        if (!isCancelled) {
          setVideos(data)
          setError(null)
        }
      } catch (e: any) {
        if (!isCancelled) {
          setError('Could not load latest episodes right now.')
          setVideos(null)
        }
      } finally {
        if (!isCancelled) setLoading(false)
      }
    }
    run()
    return () => {
      isCancelled = true
    }
  }, [apiKey, channelId])

  return (
    <section className="bg-white py-16 px-4" id="latest">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-gray-900 text-center mb-3">Latest Episodes</h2>
        <p className="text-gray-600 text-center mb-10">Newest uploads from our YouTube channel</p>

        {!apiKey || !channelId ? (
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Connect your YouTube API credentials to show latest episodes here.
            </p>
            <a
              href={channelUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
            >
              Visit the YouTube Channel
            </a>
          </div>
        ) : loading ? (
          <div className="text-center text-gray-600">Loading latest episodes…</div>
        ) : error ? (
          <div className="text-center">
            <p className="text-gray-700 mb-4">{error}</p>
            <a
              href={channelUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
            >
              Visit the YouTube Channel
            </a>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos?.map((video) => (
              <article
                key={video.id}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white flex flex-col"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  {video.thumbnailUrl ? (
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <time className="text-xs text-gray-500 mb-2">
                    {new Date(video.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                    {video.title}
                  </h3>

                  <div className="mt-auto">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full rounded-md bg-red-600 text-white px-4 py-2 text-sm hover:bg-red-500 transition-colors"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default LatestEpisodes


