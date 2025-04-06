import React from 'react'

export const Welcome: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-300">
      <div className="flex flex-col items-center pt-20 px-4 md:px-8">
        <div className="mb-12 w-full md:w-3/4 lg:w-1/2">
          <img 
            src="mainpic2.jpg" 
            alt="XSTY'S ESSENCE" 
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg object-cover"
          /> 
        </div>
        <h1 className="text-2xl font-medium text-black mb-6 text-left font-serif">
          Welcome to XSTY'S ESSENCE
        </h1>
        <p className="text-xl text-gray-900 mb-8 text-center font-serif max-w-4xl">
         Hosted by your fave girl Christabel, this is the space for real talk—unfiltered, fun, and full of heart. We dive into life, faith, relationships, trends, and everything in between.
    I started this podcast to bring value—whether it’s educational, relatable, or just good vibes. It’s a safe, fun space where authenticity reigns and girlhood + sisterhood thrive.
Why “Xsty’s Essence”? Because it’s me—my voice, my faith, my stories—all poured into each episode. Expect deep convos, laughs, and a whole lot of realness.
So grab your headphones and vibe with me. Here at Xsty’s Essence, it’s always real, raw, and refreshing.
Welcome to the Essence of Xsty! 🎀
        </p>
      </div>
    </section>
  )
}