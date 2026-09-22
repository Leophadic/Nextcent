import { Navbar, Hero, Clients, Community, Unlock, Stats, SiteDesignUnlock, Testimonial, Blog, CTA, Footer  } from '../../component/index.jsx';



import { memo } from 'react';
const Home = () => {
  return (
    <div>
    
      <Navbar />
     
      
            <main>
              <Hero />
              <Clients />
              <Community />
              <Unlock />
                <Stats />
                <SiteDesignUnlock />
                <Testimonial />
                  <Blog />
              <CTA />
            </main>
            <Footer />
    </div>
  );
};

export default (Home);