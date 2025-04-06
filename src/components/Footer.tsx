import React from 'react'
import { Instagram, Youtube, Mail, Heart } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Social Links */}
          <div className="flex gap-8 md:gap-6">
            <a 
              href="https://www.instagram.com/xstys_pod?igsh=MThnYmFkYzgzeHUzaA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-8 h-8 md:w-6 md:h-6" />
            </a>
            <a 
              href="https://www.youtube.com/@XstysEssencePodcast" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <Youtube className="w-8 h-8 md:w-6 md:h-6" />
            </a>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center w-full px-4 md:px-0">
            <h3 className="text-2xl md:text-xl font-serif mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">Subscribe to get notified about new episodes</p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-gray-400 text-xs md:text-sm text-center">
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-500" />
              <span>for XSTY'S ESSENCE</span>
            </div>
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} | Designed by</span>
              <a 
                href="https://tsw.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300"
              >
                TSW.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}