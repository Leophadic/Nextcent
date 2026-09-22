import React from 'react';
import styles from './Footer.module.css';

// Export these assets from your Figma footer layers
import sendIcon from '../../assets/footer-logo.svg.png';
import instagramIcon from '../../assets/icon-instagram.svg.png';
import twitterIcon from '../../assets/icon-twitter.svg.png';
import youtubeIcon from '../../assets/icon-youtube.svg.png';
import logo from '../../assets/logo.svg.png';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Column 1: Brand Info & Socials */}
        <div className={styles.brandColumn}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Nexcent Logo" className={styles.logoIcon} />
            <span className={styles.logoText}>Nexcent</span>
          </div>
          <div className={styles.copyrightGroup}>
            <p className={styles.copyright}>Copyright © 2026 Nexcent ltd.</p>
            <p className={styles.copyright}>All rights reserved</p>
          </div>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <img src={instagramIcon} alt="" />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube">
              <img src={youtubeIcon} alt="" />
            </a>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className={styles.linksColumn}>
          <h4 className={styles.columnHeading}>Company</h4>
          <ul className={styles.linksList}>
            <li><a href="#about" className={styles.link}>About us</a></li>
            <li><a href="#blog" className={styles.link}>Blog</a></li>
            <li><a href="#contact" className={styles.link}>Contact us</a></li>
            <li><a href="#pricing" className={styles.link}>Pricing</a></li>
            <li><a href="#testimonials" className={styles.link}>Testimonials</a></li>
          </ul>
        </div>

        {/* Column 3: Support Links */}
        <div className={styles.linksColumn}>
          <h4 className={styles.columnHeading}>Support</h4>
          <ul className={styles.linksList}>
            <li><a href="#help" className={styles.link}>Help center</a></li>
            <li><a href="#terms" className={styles.link}>Terms of service</a></li>
            <li><a href="#legal" className={styles.link}>Legal</a></li>
            <li><a href="#privacy" className={styles.link}>Privacy policy</a></li>
            <li><a href="#status" className={styles.link}>Status</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Subscription Input */}
        <div className={styles.newsletterColumn}>
          <h4 className={styles.columnHeading}>Stay up to date</h4>
          <form className={styles.inputWrapper} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className={styles.inputField}
              required 
            />
            <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
              <img src={sendIcon} alt="Send" />
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}




// import React from 'react';

// export default function Footer() {
//   return (
//     <footer className="bg-[#263238] text-[#F5F7FA] py-12 px-6 md:px-24 grid md:grid-cols-4 gap-8">
//       <div>
//         <div className="flex items-center space-x-2 mb-4">
//           <div className="w-6 h-6 bg-[#4CAF4F] rounded-tl-md rounded-br-md"></div>
//           <span className="text-xl font-bold text-white">Nexcent</span>
//         </div>
//         <p className="text-xs text-[#717171]">Copyright © 2026 Nexcent ltd.</p>
//         <p className="text-xs text-[#717171] mt-1">All rights reserved</p>
//       </div>
//       <div>
//         <h4 className="text-white font-medium mb-4">Company</h4>
//         <ul className="space-y-2 text-xs text-[#E8F5E9] opacity-80">
//           <li><a href="#" className="hover:underline">About us</a></li>
//           <li><a href="#" className="hover:underline">Blog</a></li>
//           <li><a href="#" className="hover:underline">Contact us</a></li>
//           <li><a href="#" className="hover:underline">Pricing</a></li>
//         </ul>
//       </div>
//       <div>
//         <h4 className="text-white font-medium mb-4">Support</h4>
//         <ul className="space-y-2 text-xs text-[#E8F5E9] opacity-80">
//           <li><a href="#" className="hover:underline">Help center</a></li>
//           <li><a href="#" className="hover:underline">Terms of service</a></li>
//           <li><a href="#" className="hover:underline">Legal</a></li>
//           <li><a href="#" className="hover:underline">Privacy policy</a></li>
//         </ul>
//       </div>
//       <div>
//         <h4 className="text-white font-medium mb-4">Stay up to date</h4>
//         <div className="relative mt-2">
//           <input 
//             type="email" 
//             placeholder="Your email address" 
//             className="w-full bg-[#4D4D4D] text-white placeholder-gray-400 px-4 py-2 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-[#4CAF4F]"
//           />
//           <button className="absolute right-3 top-2.5 text-white">
//             <span role="img" aria-label="send">▶</span>
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }



