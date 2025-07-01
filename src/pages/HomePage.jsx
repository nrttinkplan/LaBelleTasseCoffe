import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, cardVariants } from '../animations/commonVariants';
import { testimonials } from '../data/customerData';
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

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
      value: 50,
    },
    color: {
      value: '#AF8260',
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 3,
    },
    move: {
      enable: true,
      speed: 1,
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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/menu" className="btn btn-primary">
                Menüyü Görüntüle
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Neden Biz?
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="card p-6 border border-gray-100 bg-white/50 backdrop-blur-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-bold mb-4 text-coffee-dark">
                Kaliteli Ürünler
              </h3>
              <p className="text-gray-700">
                Taze ve doğal malzemelerle hazırlanan lezzetler.
              </p>
            </motion.div>
            <motion.div 
              className="card p-6 border border-gray-100 bg-white/50 backdrop-blur-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-bold mb-4 text-coffee-dark">
                Sıcak Atmosfer
              </h3>
              <p className="text-gray-700">
                Konforlu mekanımızda kendinizi evinizde hissedeceksiniz.
              </p>
            </motion.div>
            <motion.div 
              className="card p-6 border border-gray-100 bg-white/50 backdrop-blur-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-bold mb-4 text-coffee-dark">
                Müşteri Memnuniyeti
              </h3>
              <p className="text-gray-700">
                Her zaman en iyi hizmeti sunmayı taahhüt ediyoruz.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          className="mt-24 py-16 bg-coffee-light/10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="section-title text-center mb-12"
              variants={itemVariants}
            >
              Müşterilerimiz Ne Diyor?
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/80 p-6 rounded-lg shadow-md"
                  variants={cardVariants}
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
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        )).slice(0, testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.comment}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="rounded-lg p-8 md:p-12 text-coffee-darkest"
            style={{
              backgroundImage: "url('/images/coffeeCup.png')",
              backgroundSize: '40%',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              minHeight: '500px' 
            }}
            initial={{ 
              x: 100,
              opacity: 0 
            }}
            whileInView={{ 
              x: 0,
              opacity: 1 
            }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 20 
            }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="section-title mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Kahve Keyfini Bizimle Yaşayın
              </motion.h2>
              <motion.p 
                className="text-lg mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                Özel harmanlarımız ve deneyimli baristalarımızla sizi benzersiz bir kahve deneyimine davet ediyoruz.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/reservation" className="btn btn-primary">
                    Rezervasyon Yap
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default HomePage;