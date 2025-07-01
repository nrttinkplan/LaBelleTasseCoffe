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
    // Gerçek bir uygulamada bu veriler sunucuya gönderilir.
    console.log('Rezervasyon talebi:', formData);
    alert('Rezervasyon talebiniz alınmıştır. Onay için sizinle iletişime geçeceğiz.');
    // Formu sıfırla
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
        </div>

        {/* Reservation Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
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
          <p>8 kişiden fazla gruplar için lütfen <a href="tel:+902125554433" className="font-medium underline hover:text-coffee-dark">+90 212 555 44 33</a> numaralı telefondan bizimle iletişime geçin.</p>
          <p className="mt-2">Rezervasyonunuz, tarafımızdan onaylandıktan sonra geçerli olacaktır. Onay için size e-posta veya telefon yoluyla ulaşacağız.</p>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;