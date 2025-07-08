import { useState } from 'react';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    date: '',
    time: '',
    requests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Rezervasyon talebi:', formData);
    alert('Rezervasyon talebiniz alınmıştır. Onay için sizinle iletişime geçeceğiz.');
    
    setFormData({ name: '', guests: '', date: '', time: '', requests: '' });
  };

  return (
    <div className="bg-coffee-light/10 min-h-screen">
      <div className="content-container">
        {/* Header */}
       <div className="text-center mb-12">
  <h1 className="section-title mb-2">Rezervasyon Yapın</h1>
  <p className="text-coffee-dark/80 max-w-2xl mx-auto">
    La Belle Tasse'de yerinizi ayırtın ve kahve keyfini garantileyin. Aşağıdaki formu doldurarak rezervasyon talebinizi bize iletebilirsiniz.
  </p>
  <div className="mt-8 text-left max-w-2xl mx-auto text-base text-coffee-dark/90 space-y-4">
    <h2 className="text-xl font-serif font-medium text-coffee-dark mb-2">Neden Rezervasyon Yapmalısınız?</h2>
    <p>
      Özellikle hafta sonları ve yoğun saatlerde misafirlerimize en iyi hizmeti sunabilmek için rezervasyon öneriyoruz. Rezervasyon yaptığınızda, sizin için özel olarak ayrılmış bir masa ve kişisel hizmet garantisi sağlıyoruz. 
    </p>
    <p>
      Doğum günü, kutlama, iş toplantısı veya arkadaş buluşması gibi özel etkinlikleriniz için de rezervasyon yaptırabilirsiniz. Ekibimiz, taleplerinizi karşılamak ve etkinliğinizi unutulmaz kılmak için hazırdır.
    </p>
    <h2 className="text-xl font-serif font-medium text-coffee-dark mb-2">Rezervasyonun Avantajları</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Yoğun saatlerde beklemeden masa garantisi</li>
      <li>Özel günleriniz için kişiselleştirilmiş masa süslemeleri</li>
      <li>Çocuklu aileler için uygun masa ve bebek sandalyesi temini</li>
      <li>Evcil hayvan dostu alanlarda yer ayırma imkanı</li>
      <li>Grup rezervasyonlarında özel indirimler ve ikramlar</li>
      <li>İş toplantıları için sessiz ve izole alanlar</li>
    </ul>
    <h2 className="text-xl font-serif font-medium text-coffee-dark mb-2">Rezervasyon Süreci Nasıl İşler?</h2>
    <ol className="list-decimal pl-6 space-y-2">
      <li>Formu eksiksiz doldurun ve gönderin.</li>
      <li>Ekibimiz, talebinizi en kısa sürede inceleyip onay için sizinle iletişime geçer.</li>
      <li>Rezervasyonunuz onaylandığında, SMS veya e-posta ile bilgilendirilirsiniz.</li>
      <li>Rezervasyon saatinizden 15 dakika önce kafemize gelmeniz yeterlidir.</li>
    </ol>
    <h3 className="text-xl font-serif font-medium text-coffee-dark mb-2">Sıkça Sorulan Sorular</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><b>Rezervasyonumu nasıl iptal edebilirim?</b> Rezervasyonunuzu iptal etmek için bize telefon veya e-posta yoluyla ulaşabilirsiniz. Lütfen en az 2 saat önceden bilgi verin.</li>
      <li><b>Kaç kişiye kadar rezervasyon yapabilirim?</b> Online form ile 8 kişiye kadar rezervasyon yapılabilir. Daha büyük gruplar için lütfen doğrudan iletişime geçin.</li>
      <li><b>Özel isteklerimi nasıl iletebilirim?</b> Formdaki "Özel İstekler" alanını kullanarak taleplerinizi belirtebilirsiniz.</li>
      <li><b>Evcil hayvan getirebilir miyim?</b> Evet, evcil hayvan dostu alanlarımız mevcuttur. Lütfen rezervasyon sırasında belirtin.</li>
      <li><b>Çocuklar için imkanlarınız var mı?</b> Çocuklu aileler için bebek sandalyesi ve çocuk menüsü sunuyoruz.</li>
    </ul>
    <h3 className="text-xl font-serif font-medium text-coffee-dark mb-2">La Belle Tasse'de Rezervasyon Deneyimi</h3>
    <p>
      La Belle Tasse olarak misafirlerimizin konforunu ve memnuniyetini ön planda tutuyoruz. Rezervasyon yaptığınızda, masanız özenle hazırlanır ve talepleriniz dikkate alınır. Güler yüzlü ekibimiz, sıcak atmosferimiz ve taze kahvelerimizle sizleri ağırlamaktan mutluluk duyarız.
    </p>
    <p>
      Rezervasyon formunu doldurduktan sonra, ekibimiz en kısa sürede sizinle iletişime geçecektir. Rezervasyonunuzu iptal etmek veya değiştirmek isterseniz, lütfen en az 2 saat önceden bize bilgi verin.
    </p>
    <h3 className="text-xl font-serif font-medium text-coffee-dark mb-2">İletişim ve Destek</h3>
    <p>
      Rezervasyonunuzla ilgili herhangi bir sorunuz varsa, <a href="tel:+902125554433" className="font-medium underline hover:text-coffee-dark">+90 212 555 44 33</a> numaralı telefondan veya <a href="mailto:info@labelletasse.com" className="font-medium underline hover:text-coffee-dark">info@labelletasse.com</a> adresinden bize ulaşabilirsiniz.
    </p>
    <p>
      Ayrıca sosyal medya hesaplarımızdan da bize ulaşabilir, güncel kampanya ve etkinliklerimizden haberdar olabilirsiniz.
    </p>
    <h3 className="text-xl font-serif font-medium text-coffee-dark mb-2">Kahve Keyfinizi Planlayın</h3>
    <p>
      La Belle Tasse'de rezervasyon yaptırarak, sevdiklerinizle birlikte unutulmaz bir kahve deneyimi yaşayabilirsiniz. İster sabah kahvaltısı, ister öğle arası, ister akşamüstü buluşmaları için rezervasyon yapın; her zaman taze kahve ve lezzetli atıştırmalıklar sizi bekliyor.
    </p>
    <p>
      Kafemizde düzenli olarak canlı müzik ve temalı etkinlikler de düzenlenmektedir. Rezervasyon sırasında bu etkinlikler hakkında bilgi alabilir, katılımınızı önceden planlayabilirsiniz.
    </p>
  </div>
</div>
        {/* Reservation Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif font-medium text-coffee-dark mb-6">Rezervasyon Formu</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-coffee-darkest mb-1 font-medium">Ad Soyad</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-coffee-light/50 focus:outline-none focus:border-coffee-dark"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guests" className="block text-coffee-darkest mb-1 font-medium">Kişi Sayısı</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-coffee-light/50 focus:outline-none focus:border-coffee-dark"
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-coffee-darkest mb-1 font-medium">Tarih</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-coffee-light/50 focus:outline-none focus:border-coffee-dark"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="time" className="block text-coffee-darkest mb-1 font-medium">Saat</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-coffee-light/50 focus:outline-none focus:border-coffee-dark"
                required
              />
            </div>

            <div>
              <label htmlFor="requests" className="block text-coffee-darkest mb-1 font-medium">Özel İstekler</label>
              <textarea
                id="requests"
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                rows="4"
                placeholder="Örneğin: Pencere kenarı, bebek sandalyesi vb."
                className="w-full px-4 py-3 rounded border border-coffee-light/50 focus:outline-none focus:border-coffee-dark"
              ></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="btn btn-primary w-full">Rezervasyon Talebi Gönder</button>
            </div>
          </form>
        </div>

        {/* Reservation Info */}
        <div className="text-center mt-12 max-w-2xl mx-auto text-sm text-coffee-dark/70">
          <h2 className="text-xl font-serif font-medium text-coffee-dark mb-2">Bilgilendirme</h2>
          <p>8 kişiden fazla gruplar için lütfen <a href="tel:+902125554433" className="font-medium underline hover:text-coffee-dark">+90 212 555 44 33</a> numaralı telefondan bizimle iletişime geçin.</p>
          <p className="mt-2">Rezervasyonunuz, tarafımızdan onaylandıktan sonra geçerli olacaktır. Onay için size e-posta veya telefon yoluyla ulaşacağız.</p>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;