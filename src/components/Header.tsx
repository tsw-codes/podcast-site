import React from 'react';
import { MicVocal, Home, MessageSquare, Youtube } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-900 h-15">
      <div className="flex justify-between items-center py-5 px-4 md:px-8 lg:px-12">
        <div className="flex items-center gap-2">
          <span className="text-white text-xl md:text-2xl lg:text-3xl font-serif font-medium">XSTY'S Podcast</span>
          <MicVocal className="w-6 h-6 text-white" />
        </div>
        
        <nav className="flex items-center gap-6">
          <a href="#home" className="text-white hover:text-gray-300 transition-colors">
            <Home className="w-6 h-6" />
          </a>
          <a href="#latest" className="text-white hover:text-gray-300 transition-colors">
            Latest
          </a>
          <a href="#dilemmas" className="text-white hover:text-gray-300 transition-colors">
            <MessageSquare className="w-6 h-6" />
          </a>
          <a href="#youtube" className="text-white hover:text-red-500 transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </nav>
      </div>
    </header>
  )
}