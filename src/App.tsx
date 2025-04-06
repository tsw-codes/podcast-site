import React from 'react'
import { Header } from './components/Header'
import { Welcome } from './components/Welcome'
import { Dillemas } from './components/Dillemas'
import { Youtube } from './components/youtube'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Other sections will be added later */}
        <Welcome />
        <Dillemas />
     
      </main>
      <Footer />
    </div>
  )
}

export default App
