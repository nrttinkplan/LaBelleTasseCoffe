import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { testimonials } from '../data/customerData';
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};


const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  },
  tap: {
    scale: 0.95
  }
};


const HomePage = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);


  const particleOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    particles: {
      number: {
        value: 25, 
      },
      color: {
        value: '#AF8260',
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: 2, 
      },
      move: {
        enable: true,
        speed: 0.8, 
      },
    },
    interactivity: { 
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },
  };

  return (
  <div className="relative min-h-screen">
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    />
    <div className="relative z-10 content-container">
      
      <motion.section 
        className="text-center max-w-4xl mx-auto mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible" 
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-6"
          variants={itemVariants}
        >
          La Belle Tasse
        </motion.h1>
          <motion.p 
            className="text-xl mb-10 text-coffee-darkest"
            variants={itemVariants}
          >
            Sıcak bir atmosferde, lezzetli kahveler ve tatlılar sunan kafe.
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link to="/menu" className="btn btn-primary">
                Menüyü Görüntüle
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

       
        <motion.section 
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
        >
          <motion.h2 
            className="section-title text-center"
            variants={itemVariants}
          >
            Neden Biz?
          </motion.h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
          >
            
            <motion.div 
              className="card p-6 border border-gray-100 bg-white/75" 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }} 
            >
              <h3 className="text-2xl font-bold mb-4 text-coffee-dark">
                Kaliteli Ürünler
              </h3>
              <p className="text-gray-700">
                Taze ve doğal malzemelerle hazırlanan lezzetler.
              </p>
            </motion.div>
            <motion.div 
              className="card p-6 border border-gray-100 bg-white/75"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-coffee-dark">
                Sıcak Atmosfer
              </h3>
              <p className="text-gray-700">
                Konforlu mekanımızda kendinizi evinizde hissedeceksiniz.
              </p>
            </motion.div>
            <motion.div 
              className="card p-6 border border-gray-100 bg-white/75"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-coffee-dark">
                Müşteri Memnuniyeti
              </h3>
              <p className="text-gray-700">
                Her zaman en iyi hizmeti sunmayı taahhüt ediyoruz.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="mt-24 py-16 bg-coffee-light/10" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="section-title text-center mb-12"
              variants={itemVariants}
            >
              Müşterilerimiz Ne Diyor?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.name}
                  className="bg-white/80 p-6 rounded-lg shadow-md"
                  variants={itemVariants} 
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-coffee-dark">{testimonial.name}</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.comment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="mt-20">
          <motion.div 
            className="rounded-lg p-8 md:p-12 text-coffee-darkest"
            style={{
              backgroundImage: "url('/images/coffeeCup.png')",
              backgroundSize: '40%',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              minHeight: '500px' 
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="section-title mb-4"
                variants={itemVariants}
              >
                Kahve Keyfini Bizimle Yaşayın
              </motion.h2>
              <motion.p 
                className="text-lg mb-8"
                variants={itemVariants}
              >
                Özel harmanlarımız ve deneyimli baristalarımızla sizi benzersiz bir kahve deneyimine davet ediyoruz.
              </motion.p>
              <motion.div variants={itemVariants}>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link to="/reservation" className="btn btn-primary">
                    Rezervasyon Yap
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;