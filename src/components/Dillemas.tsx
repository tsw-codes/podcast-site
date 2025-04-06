import React, { useEffect } from 'react'

export const Dillemas: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//embed.typeform.com/next/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="min-h-screen bg-gray-900 py-16 px-4" id="dilemmas">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-white text-center mb-8">
          Submit Your Dilemma
          <img 
            src="pic5.jpg" 
            alt="XSTY'S ESSENCE" 
            className="w-full h-[250px] md:h-[300px] lg:h-[400px] rounded-lg object-cover"
          /> 
        </h2>
        <p className="text-gray-300 text-center text-xl mb-12 font-serif">
          Have a situation you'd like us to discuss? Submit your dilemma anonymously and we might feature it in an upcoming episode!
        </p>
        
        <div 
          data-tf-live="01JR3N72JE45X34VM5RW7KEAKY"
          className="w-full min-h-[500px] rounded-lg overflow-hidden"
        />
      </div>
    </section>
  )
}