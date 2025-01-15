import React from 'react'

const Footer = () => {
  return (
   <section className="c-space pt-7 pb-3
   bordeer-t border-black-300 flex justify-between
   items-center flex-wrap gap-5">
    <div className="text-white-500 flex gap-2">
        <p>terms & conditions</p>
        <p></p>
        <p>privacy policy</p>
    </div>
    <div className="flex gap-3">
        <a href="https://github.com/Ahmednaf03" target="_blank">
        <div className="social-icon">
            <img src="../assets/github.svg" alt="github" 
            className="w-1/2 h-1/2"/>
           
        </div>
        </a>

        <div className="social-icon">
            <img src="../assets/twitter.svg" alt="twitter" 
            className="w-1/2 h-1/2"/>
        </div>
        <div className="social-icon">
            <img src="../assets/instagram.svg" alt="instagram" 
            className="w-1/2 h-1/2"/>
        </div>
    </div>
    <p className="text-white-500">
        &copy; 2025 Ahmed. All rights reserved
    </p>
   </section>
  )
}

export default Footer
