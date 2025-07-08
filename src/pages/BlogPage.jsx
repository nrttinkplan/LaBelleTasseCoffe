import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { db } from '../firebaseConfig';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import Spinner from '../components/Spinner';
const BlogPage = () => {
   const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const postsCollectionRef = collection(db, "blogPosts");
        const q = query(postsCollectionRef, orderBy("date", "desc")); 
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          
          const formattedDate = new Date(data.date).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
          return { 
            id: doc.id, 
            ...data,
            date: formattedDate,
            excerpt: data.content 
          };
        });
        setBlogPosts(postsData);
      } catch (error) {
        console.error("Blog yazıları çekilirken hata oluştu: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="bg-coffee-light/10 min-h-screen">
      <div className="content-container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="section-title mb-2">Kahve Dünyamız</h1>
          <p className="text-coffee-dark/80 max-w-2xl mx-auto">
            La Belle Tasse'nin lezzetli dünyasına hoş geldiniz. Kahve kültürü, yeni içeceklerimiz ve özel tariflerimiz 
            hakkında yazılarımızı keşfedin.
          </p>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Card 
              key={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              category={post.category}
              id={post.id}
            />
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 bg-coffee-dark/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-medium text-coffee-dark mb-3">Blog'umuza Abone Olun</h3>
          <p className="mb-6 text-coffee-darkest/80 max-w-xl mx-auto">
            En yeni içecek tariflerimiz, etkinliklerimiz ve kahve dünyasındaki güncel haberler için bültenimize abone olun.
          </p>
          <div className="flex max-w-md mx-auto flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="flex-grow px-4 py-3 rounded border border-coffee-light/50 focus:outline-none focus:border-coffee-dark"
            />
            <button className="btn btn-primary whitespace-nowrap">Abone Ol</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;