// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import styles from './LoginPage.module.css'; // Importing as a CSS Module

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     console.log("Logging in with:", email, password);
//     navigate('/'); // Redirect home upon success
//   };

//   return (
//     <div className={styles.pageContainer}>
//       <div className={styles.loginCard}>


//         <button 
//           type="button" 
//           className={styles.backBtn} 
//           onClick={() => navigate('/')}
//         >
//           &larr; Back to Home
//         </button>

//         <h2>Welcome Back</h2>
//         <p>Login to your Nexcent account</p>
        
//         <form onSubmit={handleLoginSubmit}>
//           <div className={styles.formGroup}>
//             <label htmlFor="email">Email Address</label>
//             <input 
//               type="email" 
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="name@company.com" 
//               required 
//             />
//           </div>
          
//           <div className={styles.formGroup}>
//             <label htmlFor="password">Password</label>
//             <input 
//               type="password" 
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••" 
//               required 
//             />
//           </div>
          
//           <button type="submit" className={styles.submitBtn}>
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './LoginPage.module.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // 1. You would normally handle authentication API requests here
    console.log("Authenticating:", email);

    // 2. Redirect to the fresh new dashboard page entirely
    navigate('/dashboard');
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginCard}>
        <button type="button" className={styles.backBtn} onClick={() => navigate('/')}>
          &larr; Back to Home
        </button>

        <h2>Welcome Back</h2>
        <p>Login to your Nexcent account</p>
        
        <form onSubmit={handleLoginSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="name@company.com" 
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••" 
              required 
            />
          </div>
          
          <button type="submit" className={styles.submitBtn}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;