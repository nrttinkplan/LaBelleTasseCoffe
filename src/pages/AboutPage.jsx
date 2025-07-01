import { useState, useEffect } from 'react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="page-container">
      <div className="relative h-80 overflow-hidden">
        <img 
          src="src/assets/images/aboutCoffee.jpg" 
          alt="La Belle Tasse kahve hazırlama" 
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)',width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            maxHeight: '500px',
            transition: 'transform 0.3s ease-in-out'  } 

        }
        />
        <div className="absolute inset-0 bg-coffee-darkest/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Hakkımızda</h1>
        </div>
      </div>

      <section className={`content-container transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Hikayemiz</h2>
          <p className="text-lg mb-6">
            2018 yılında küçük bir tutkuyla başlayan La Belle Tasse yolculuğu, bugün İstanbul'un kalbinde kahve severlerin buluşma noktası haline geldi. Kurucumuz Mehmet Yılmaz'ın Güney Amerika'daki kahve çiftliklerini ziyaret etmesiyle ateşlenen tutku, döndüğünde en kaliteli kahve deneyimini ülkemize getirme hayaline dönüştü.
          </p>
          <p className="text-lg mb-10">
            Misyonumuz sadece kahve satmak değil, her fincanda bir hikaye, her yudumda bir deneyim sunmaktır. Vizyonumuz, sürdürülebilir kaynaklardan elde edilen en kaliteli kahveleri, uzman baristalarımızın ellerinde sanat eserine dönüştürerek misafirlerimize unutulmaz anlar yaşatmaktır.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-coffee-light flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-coffee-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-coffee-dark mb-2">Tutku</h3>
              <p>Kahveye olan tutkumuz, her detayda kendini gösterir. Çekirdeğin seçiminden fincanın sunumuna kadar.</p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-coffee-light flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-coffee-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-coffee-dark mb-2">Topluluk</h3>
              <p>Biz sadece bir cafe değil, bir topluluğuz. Misafirlerimiz, çalışanlarımız ve tedarikçilerimizle büyük bir aileyiz.</p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-coffee-light flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-coffee-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-coffee-dark mb-2">Sürdürülebilirlik</h3>
              <p>Doğaya saygılı üretim ve tedarik zincirimizle, gelecek nesillere daha yaşanabilir bir dünya bırakmayı hedefliyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-coffee-light/30 py-16">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Kahve Felsefemiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-lg mb-6">
                  La Belle Tasse'da kullandığımız kahve çekirdekleri, dünya genelindeki seçkin bölgelerden özenle seçilmektedir. Özellikle Kolombiya'nın yüksek rakımlı çiftliklerinden, Etiyopya'nın bereketli topraklarından ve Brezilya'nın zengin kahve geleneklerinden gelen çekirdekleri tercih ediyoruz.
                </p>
                <p className="text-lg mb-6">
                  Sürdürülebilirlik anlayışımız, çekirdekten fincana kadar uzanır. Adil Ticaret sertifikalı çiftliklerle çalışıyor, atıklarımızı kompost yapıyor ve kahve telvelerimizi yerel çiftçilere gübre olarak sağlıyoruz. İçecek kaplarımız ve peçetelerimiz geri dönüştürülebilir malzemelerden üretilmiştir.
                </p>
                <p className="text-lg">
                  Yerel tedarikçilerle kurduğumuz güçlü bağlar, hem ekonomiye katkı sağlıyor hem de "tarladan fincana" felsefemizi güçlendiriyor. Sütlerimizi yakındaki çiftliklerden, tatlı ve yiyeceklerimiz için gereken malzemeleri yerel üreticilerden temin ediyoruz.
                </p>
              </div>
              <div className="relative h-full">
                <img 
                  src="src/assets/images/coffe.jpg" 
                  alt="La Belle Tasse kahve çekirdekleri" 
                  className="rounded-lg shadow-lg h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-container">
        <h2 className="section-title text-center mb-10">Mekanımız</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card overflow-hidden h-80">
            <img 
              src="src/assets/images/coffeicmekan.jpg" 
              alt="La Belle Tasse iç mekan" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
          <div className="card overflow-hidden h-80">
            <img 
              src="src/assets/images/oturmaalanı.jpg" 
              alt="La Belle Tasse oturma alanı" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
          <div className="card overflow-hidden h-80">
            <img 
              src="src/assets/images/disMekan.jpg" 
              alt="La Belle Tasse dış mekan" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
          <div className="card overflow-hidden h-80">
            <img 
              src="src/assets/images/kahveHazirlama.jpg" 
              alt="La Belle Tasse kahve hazırlama" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
          <div className="card overflow-hidden h-80">
            <img 
              src="src/assets/images/barista.jpg" 
              alt="La Belle Tasse barista" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
          <div className="card overflow-hidden h-80">
            <img 
              src="src/assets/images/outdoor.jpg" 
              alt="La Belle Tasse bahçe" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
        </div>
      </section>

      <section className="bg-coffee-dark py-16 mt-16">
        <div className="content-container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Ekibimizle Tanışın</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            La Belle Tasse'ın kalbinde, kahveye tutkuyla bağlı olan harika ekibimiz var. Her biri kendi alanında uzman olan takımımız, size en iyi deneyimi sunmak için burada.
          </p>
          <a href="/contact" className="btn bg-white text-coffee-dark hover:bg-coffee-light">Bizimle İletişime Geçin</a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;