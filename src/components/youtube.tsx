import React from 'react'

export const Youtube: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-16 px-4" id="youtube">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-white text-center mb-8">
          Watch Our Intro
        </h2>
        <div style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingTop: '88.8889%', // Changed from 177.7778% to half
          paddingBottom: 0,
          boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
          marginTop: '1.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '8px',
          willChange: 'transform'
        }}>
          <iframe 
            loading="lazy" 
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
              padding: 0,
              margin: 0
            }}
            src="https://www.canva.com/design/DAGjyuLsAxo/AxNPSqcUyWR2J5bUkY87aw/watch?embed"
            allowFullScreen
            allow="fullscreen"
          />
        </div>
        <div className="text-center mt-4">
          <a 
            href="https://www.canva.com/design/DAGjyuLsAxo/AxNPSqcUyWR2J5bUkY87aw/watch?utm_content=DAGjyuLsAxo&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
            target="_blank" 
            rel="noopener"
            className="text-gray-400 hover:text-gray-300 text-sm"
          >
            
          </a>
        </div>
      </div>
    </section>
  )
}
