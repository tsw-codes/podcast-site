import React from 'react'
import { Header } from './components/Header'
import { Welcome } from './components/Welcome'
import { Dillemas } from './components/Dillemas'
import { LatestEpisodes } from './components/LatestEpisodes'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Other sections will be added later */}
        <Welcome />
        <LatestEpisodes />
        <Dillemas />
     
      </main>
      <Footer />
    </div>
  )
}

export default App
