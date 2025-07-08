import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';
import NotFoundPage from './pages/NotFoundPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPanelPage from './pages/AdminPanelPage';
import ProtectedRoute from './components/ProtectedRoute'; // Yeni import



function App() {
   const [showInfoModal, setShowInfoModal] = useState(false);
   useEffect(() => {
    setShowInfoModal(true);
  }, []);
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
       {/* Bilgilendirme Popup'ı */}
        {showInfoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
              <h2 className="text-xl font-bold mb-4 text-coffee-dark">Bilgilendirme</h2>
              <p className="mb-4 text-coffee-darkest">
                Bu site, geliştirici <b>Erhan Nurettin Kaplan</b> tarafından portföy amacıyla oluşturulmuştur. Gerçek bir işletme değildir.
              </p>
              <p className="mb-6 text-coffee-darkest text-sm">
                İletişim: <a href="mailto:erhannurettinkplan14@gmail.com" className="text-blue-600 underline">erhannurettinkplan14@gmail.com</a>
              </p>
              <button
                className="btn btn-primary w-full"
                onClick={() => setShowInfoModal(false)}
              >
                Tamam
              </button>
            </div>
          </div>
        )}

        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminPanelPage />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;