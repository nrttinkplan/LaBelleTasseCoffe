import React, { useState, useEffect } from 'react';
// import { menuCategories } from '../data/menuData'; // Bu satırı kaldırıyoruz
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, cardVariants, categoryVariants, titleVariants } from '../animations/commonVariants';
import { db } from '../firebaseConfig'; // Firebase konfigürasyonunu import ediyoruz
import { collection, getDocs } from 'firebase/firestore'; // Firestore fonksiyonlarını import ediyoruz

function MenuPage() {
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "menuCategories"));
        const categoriesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMenuCategories(categoriesData);
      } catch (error) {
        console.error("Menü verileri çekilirken hata oluştu: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []); // Boş dependency array, bu etkinin sadece component ilk yüklendiğinde çalışmasını sağlar.

  if (loading) {
    return <div className="container mx-auto py-20 text-center text-xl text-coffee-dark">Menü Yükleniyor...</div>;
  }

  return (
    <motion.div 
      className="container mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-4xl font-bold text-center text-amber-800 mb-10"
        variants={titleVariants}
      >
        Menümüz
      </motion.h1>

      <motion.section
    className="max-w-3xl mx-auto mb-12 text-lg text-coffee-darkest bg-white/70 p-6 rounded-lg shadow"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <p>
      La Belle Tasse olarak, kahve tutkumuzu ve lezzet anlayışımızı menümüze yansıtıyoruz. Her bir içeceğimiz ve atıştırmalığımız, özenle seçilmiş malzemelerle, deneyimli baristalarımız ve şeflerimiz tarafından hazırlanır. 
      Kahve çekirdeklerimiz, Kolombiya ve Etiyopya'nın en iyi çiftliklerinden tedarik edilmekte olup, her fincanda tazelik ve yoğun aroma sunar. 
      Sütlü içeceklerimizde günlük taze süt kullanıyor, vegan misafirlerimiz için bitkisel süt alternatifleri de sunuyoruz. 
      Tatlılarımız ve atıştırmalıklarımız ise yerel üreticilerden temin edilen doğal malzemelerle hazırlanır.
    </p>
    <p className="mt-4">
      Menümüzde klasik espresso bazlı içeceklerden, üçüncü nesil demleme yöntemlerine; taze demlenmiş çaylardan, ev yapımı limonatalara kadar geniş bir yelpaze bulabilirsiniz. 
      Ayrıca glutensiz ve vegan seçeneklerimizle her damak zevkine hitap ediyoruz. 
      Her ürünümüzün yanında, içeriği ve önerilen sunum şekliyle ilgili detaylı açıklamalar bulabilirsiniz.
    </p>
    <p className="mt-4">
      Lezzet yolculuğumuza katılın ve La Belle Tasse farkını keşfedin!
    </p>
  </motion.section>

      {menuCategories.map((category, categoryIndex) => (
        <motion.section 
          key={category.id} // Firestore'dan gelen benzersiz doküman ID'sini kullanmak daha güvenilirdir.
          className="mb-12"
          variants={categoryVariants}
          custom={categoryIndex}
        >
        <motion.h2 
          className="text-3xl font-semibold text-amber-700 border-b-2 border-amber-200 pb-2 mb-6"
          whileHover={{ 
            color: "#955A38", 
            borderBottomColor: "#955A38", 
            scale: 1.01,
            originX: 0 
          }}
        >
          {category.name}
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-x-8 gap-y-6"
          variants={containerVariants}
        >
          {category.items.map((item) => (
            <motion.div 
              key={item.name} 
              className="flex justify-between items-start p-3 rounded-lg"
              variants={cardVariants}
              whileHover="hover"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                {item.description && 
                  <motion.p 
                    className="text-sm text-gray-600 mt-1"
                    variants={itemVariants}
                  >
                    {item.description}
                  </motion.p>
                }
              </div>
              <motion.span 
                className="text-lg font-semibold text-amber-900 whitespace-nowrap pl-4"
                whileHover={{ scale: 1.05 }}
              >
                {item.price}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    ))}
  </motion.div>
  );
}

export default MenuPage;