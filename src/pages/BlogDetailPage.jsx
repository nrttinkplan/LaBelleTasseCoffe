import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Spinner from '../components/Spinner';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const postDocRef = doc(db, "blogPosts", id);
        const docSnap = await getDoc(postDocRef);

        if (docSnap.exists()) {
          const postData = docSnap.data();
          const formattedDate = new Date(postData.date).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
          setPost({ id: docSnap.id, ...postData, date: formattedDate });
        } else {
          console.log("No such document!");
          setPost(null);
        }
      } catch (error) {
        console.error("Error fetching post: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-coffee-light/10 min-h-screen">
        <div className="content-container">
          <div className="text-center py-12">
            <h1 className="section-title mb-2">Blog Yazısı Bulunamadı</h1>
            <p className="mb-6">Aradığınız blog yazısı mevcut değil.</p>
            <Link to="/blog" className="btn btn-primary">Blog Sayfasına Dön</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-coffee-light/10 min-h-screen">
      <div className="content-container">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-coffee-dark hover:text-coffee-darkest inline-flex items-center">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link to="/blog" className="text-coffee-dark hover:text-coffee-darkest">
                    Blog
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-coffee-dark/60">{post.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Blog Post Header */}
        <div className="mb-8">
          <span className="inline-block bg-coffee-dark text-white text-sm px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-coffee-darkest mb-4">
            {post.title}
          </h1>
    
            <div>
              
              <p className="text-sm text-coffee-dark/60">{post.date}</p>
            </div>
          
        </div>
        
        {/* Featured Image */}
        <div className="rounded-lg overflow-hidden mb-8 h-96 md:h-[500px]">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Blog Content */}
        <div className="prose prose-coffee lg:prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-coffee-darkest/90 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Share and Navigation */}
        <div className="mt-12 pt-8 border-t border-coffee-light/30">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-6 md:mb-0">
              <span className="block text-sm font-medium text-coffee-dark mb-2">Bu Yazıyı Paylaş:</span>
              <div className="flex space-x-4">
                <button className="text-coffee-dark hover:text-coffee-darkest">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="text-coffee-dark hover:text-coffee-darkest">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </button>
                <button className="text-coffee-dark hover:text-coffee-darkest">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.593 7.203c-.23-.951-.957-1.692-1.871-1.834-2.166-.332-6.824-.333-11.722-.333s-9.556.001-11.722.333c-.914.142-1.641.883-1.871 1.834-.332 1.388-.333 4.201-.333 5.797s.001 4.409.333 5.797c.23.951.957 1.692 1.871 1.834 2.166.332 6.824.333 11.722.333s9.556-.001 11.722-.333c.914-.142 1.641-.883 1.871-1.834.332-1.387.333-4.2.333-5.797s-.001-4.409-.333-5.797zm-13.593 8.797v-6l5.001 3-5.001 3z"/>
                  </svg>
                </button>
                <button className="text-coffee-dark hover:text-coffee-darkest">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link to="/blog" className="btn btn-secondary">
                Blog'a Dön
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetailPage;