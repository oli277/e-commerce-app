import React from 'react';
import { 
  FaFacebook, 
  FaYoutube, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaTiktok 
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#e9ecef] w-full flex items-center justify-end px-8 py-4">
      
      <div className="flex items-center gap-6 text-slate-500">
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-slate-800 transition-colors"
          aria-label="Facebook"
        >
          <FaFacebook className="w-[22px] h-[22px]" />
        </a>
        
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-slate-800 transition-colors"
          aria-label="YouTube"
        >
          <FaYoutube className="w-[22px] h-[22px]" />
        </a>
        
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-slate-800 transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram className="w-[22px] h-[22px]" />
        </a>
        
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-slate-800 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-[22px] h-[22px]" />
        </a>
        
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-slate-800 transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter className="w-[22px] h-[22px]" />
        </a>
        
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-slate-800 transition-colors"
          aria-label="TikTok"
        >
          <FaTiktok className="w-[22px] h-[22px]" />
        </a>
      </div>
    </footer>
  );
}