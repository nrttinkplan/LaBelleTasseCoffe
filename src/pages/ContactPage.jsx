import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderim işlemi burada yapılacak
    console.log('Form gönderildi:', formData);
    // Form gönderildikten sonra alanları temizle
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.');
  };

  return (
    <div className="bg-coffee-light/10 min-h-screen">
      <div className="content-container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="section-title mb-2">Bize Ulaşın</h1>
          <p className="text-coffee-dark/80 max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya rezervasyon talepleriniz için aşağıdaki iletişim bilgilerini kullanabilir veya formu doldurarak bize mesaj gönderebilirsiniz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex">
            <div className="bg-white p-8 rounded-lg shadow-md w-full flex flex-col">
              <h2 className="text-2xl font-serif font-medium text-coffee-dark mb-6">İletişim Bilgilerimiz</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-coffee-darkest mb-1">Adres</h3>
                  <p className="text-coffee-dark/80">Kahveci Sokak No: 42<br />Istanbul, Türkiye</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-coffee-darkest mb-1">Telefon</h3>
                  <p className="text-coffee-dark/80">+90 212 555 44 33</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-coffee-darkest mb-1">E-posta</h3>
                  <p className="text-coffee-dark/80">info@labelletasse.com</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-coffee-darkest mb-2">Çalışma Saatlerimiz</h3>
                <div className="grid grid-cols-2 gap-2 text-coffee-dark/80">
                  <div>Pazartesi - Cuma</div>
                  <div>08:00 - 22:00</div>
                  <div>Cumartesi</div>
                  <div>09:00 - 23:00</div>
                  <div>Pazar</div>
                  <div>10:00 - 20:00</div>
                </div>
              </div>
              
              <div className="mt-auto pt-10">
                <div className="bg-coffee-light/20 p-4 rounded-lg">
                  <h3 className="font-medium text-coffee-darkest mb-2">Sosyal Medya</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-coffee-dark hover:text-coffee-darkest transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-coffee-dark hover:text-coffee-darkest transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-coffee-dark hover:text-coffee-darkest transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex">
            <div className="bg-white p-8 rounded-lg shadow-md w-full">
              <h2 className="text-2xl font-serif font-medium text-coffee-dark mb-6">Bize Mesaj Gönderin</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-coffee-darkest mb-1">İsim</label>
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
                
                <div>
                  <label htmlFor="email" className="block text-coffee-darkest mb-1">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-coffee-light/50 focus:outline-none focus:border-coffee-dark"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-coffee-darkest mb-1">Konu</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-coffee-light/50 focus:outline-none focus:border-coffee-dark"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-coffee-darkest mb-1">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded border border-coffee-light/50 focus:outline-none focus:border-coffee-dark"
                    required
                  ></textarea>
                </div>
                
                <div className="mt-6">
                  <button type="submit" className="btn btn-primary w-full">Gönder</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-medium text-coffee-dark mb-6">Bizi Ziyaret Edin</h2>
            <div className="rounded-lg overflow-hidden h-[400px] bg-coffee-light/20 flex items-center justify-center">
              
              <p className="text-coffee-dark">Google Maps veya başka bir harita servisi buraya entegre edilebilir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;