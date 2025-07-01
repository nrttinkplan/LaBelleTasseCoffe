import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-6xl font-bold text-amber-800 mb-4">404</h1>
      <h2 className="text-3xl mb-6">Sayfa Bulunamadı</h2>
      <p className="text-xl mb-10">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <Link 
        to="/" 
        className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default NotFoundPage;