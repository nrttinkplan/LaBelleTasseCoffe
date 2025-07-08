import { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebaseConfig';
import { collection, getDocs, doc, updateDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import Spinner from '../components/Spinner';

const AdminPanelPage = () => {
  const [menuCategories, setMenuCategories] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState(''); 
  const navigate = useNavigate();

  
  const fetchMenuData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "menuCategories"));
    const categoriesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setMenuCategories(categoriesData);
    setLoading(false);
  };

  
   const fetchBlogData= async () => {
    const querySnapshot = await getDocs(collection(db, "blogPosts"));
    const postsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setBlogPosts(postsData);
   }

  useEffect(() => {
    const fetchAllData = async () => {
        setLoading(true);
        await Promise.all([fetchMenuData(), fetchBlogData()]);
        setLoading(false);
    }
    fetchAllData();
  }, []);



  const handleItemSubmit = async (e, categoryId) => {
    e.preventDefault();
    const categoryDocRef = doc(db, "menuCategories", categoryId);
    const categoryToUpdate = menuCategories.find(cat => cat.id === categoryId);
    
    let updatedItems;
    if (editingItem.isNew) { // Yeni ürün ekleme
      const { isNew, categoryId: catId, index, ...newItem } = editingItem;
      updatedItems = [...categoryToUpdate.items, newItem];
    } else { // Mevcut ürünü güncelleme
      updatedItems = categoryToUpdate.items.map((item, index) => 
        index === editingItem.index ? { name: editingItem.name, price: editingItem.price, description: editingItem.description } : item
      );
    }

    await updateDoc(categoryDocRef, { items: updatedItems });
    setEditingItem(null);
    fetchMenuData(); // Listeyi yenile
  };

  // Ürün silme
  const handleItemDelete = async (categoryId, itemIndex) => {
    if (!window.confirm("Bu ürünü silmek istediğinizden emin misiniz?")) return;
    const categoryDocRef = doc(db, "menuCategories", categoryId);
    const categoryToUpdate = menuCategories.find(cat => cat.id === categoryId);
    const updatedItems = categoryToUpdate.items.filter((_, index) => index !== itemIndex);
    
    await updateDoc(categoryDocRef, { items: updatedItems });
    fetchMenuData(); // Listeyi yenile
  };

  // Kategori ekleme fonksiyonu
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    try {
      await addDoc(collection(db, "menuCategories"), {
        name: newCategoryName,
        items: [] // Kategori ilk oluşturulduğunda boş bir ürün dizisi içerir
      });
      setNewCategoryName(''); // Input alanını temizle
      fetchMenuData(); // Listeyi yenile
    } catch (error) {
      console.error("Kategori eklenirken hata oluştu: ", error);
      alert("Kategori eklenirken bir hata oluştu.");


    }
  };

  // Kategori silme fonksiyonu
  const handleCategoryDelete = async (categoryId) => {
    if (!window.confirm("Bu kategoriyi ve içindeki tüm ürünleri silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.")) return;
    try {
      await deleteDoc(doc(db, "menuCategories", categoryId));
      fetchMenuData(); // Listeyi yenile
    } catch (error) {
      console.error("Kategori silinirken hata oluştu: ", error);
      alert("Kategori silinirken bir hata oluştu.");
    }
  };


    // Blog gönderisi ekleme/güncelleme
    const handlePostSubmit = async (e) => {
        e.preventDefault();
        const { id, ...postData } = editingPost;
    try {
      if (id) { // Güncelleme
        const postDocRef = doc(db, "blogPosts", id);
        await updateDoc(postDocRef, postData);
      } else { // Yeni ekleme
        await addDoc(collection(db, "blogPosts"), {
          ...postData,
          date: new Date().toISOString() // Ekleme tarihini ayarla
        });
      }
      setEditingPost(null);
      await fetchBlogData(); // Listeyi yenile
    } catch (error) {
      console.error("Blog yazısı kaydedilirken hata oluştu: ", error);
      alert("Blog yazısı kaydedilirken bir hata oluştu.");
    }
  };

  // Blog yazısı silme
  const handlePostDelete = async (postId) => {
    if (!window.confirm("Bu blog yazısını silmek istediğinizden emin misiniz?")) return;
    try {
      await deleteDoc(doc(db, "blogPosts", postId));
      await fetchBlogData(); // Listeyi yenile
    } catch (error) {
      console.error("Blog yazısı silinirken hata oluştu: ", error);
      alert("Blog yazısı silinirken bir hata oluştu.");
    }
  };

  // Çıkış yapma
  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><Spinner /></div>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="section-title">Yönetim Paneli</h1>
        <button onClick={handleLogout} className="btn btn-secondary">Çıkış Yap</button>
      </div>

      {/* Kategori Ekleme Formu */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-coffee-dark mb-4">Yeni Kategori Ekle</h2>
        <form onSubmit={handleAddCategory} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Yeni Kategori Adı"
            className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-coffee-dark"
            required
          />
          <button type="submit" className="btn btn-primary">Kategori Ekle</button>
        </form>
      </div>

      {/* Ürün Düzenleme/Ekleme Formu (Modal) */}
      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">{editingItem.isNew ? 'Yeni Ürün Ekle' : 'Ürünü Düzenle'}</h2>
            <form onSubmit={(e) => handleItemSubmit(e, editingItem.categoryId)}>
              <div className="mb-4">
                <label className="block mb-1">Ürün Adı</label>
                <input type="text" value={editingItem.name} onChange={(e) => setEditingItem({...editingItem, name: e.target.value})} className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Fiyat</label>
                <input type="text" value={editingItem.price} onChange={(e) => setEditingItem({...editingItem, price: e.target.value})} className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Açıklama (Opsiyonel)</label>
                <input type="text" value={editingItem.description} onChange={(e) => setEditingItem({...editingItem, description: e.target.value})} className="w-full p-2 border rounded" />
              </div>
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setEditingItem(null)} className="btn btn-secondary">İptal</button>
                <button type="submit" className="btn btn-primary">Kaydet</button>
              </div>
            </form>
          </div>
        </div>
      )}

{/* Blog Yazısı Düzenleme/Ekleme Formu (Modal) */}
      {editingPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl max-h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{editingPost.id ? 'Yazıyı Düzenle' : 'Yeni Yazı Ekle'}</h2>
            <form onSubmit={handlePostSubmit}>
              <div className="mb-4">
                <label className="block mb-1">Başlık</label>
                <input type="text" value={editingPost.title} onChange={(e) => setEditingPost({...editingPost, title: e.target.value})} className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Kategori</label>
                <input type="text" value={editingPost.category} onChange={(e) => setEditingPost({...editingPost, category: e.target.value})} className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Görsel URL</label>
                <input type="text" value={editingPost.image} onChange={(e) => setEditingPost({...editingPost, image: e.target.value})} className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block mb-1">İçerik</label>
                <textarea value={editingPost.content} onChange={(e) => setEditingPost({...editingPost, content: e.target.value})} className="w-full p-2 border rounded" rows="10" required />
              </div>
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setEditingPost(null)} className="btn btn-secondary">İptal</button>
                <button type="submit" className="btn btn-primary">Kaydet</button>
              </div>
            </form>
          </div>
        </div>
      )}






      {/* Kategoriler ve Ürünler */}
     {/* Kategoriler ve Ürünler */}
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-coffee-dark mb-4">Menü Yönetimi</h2>
          {menuCategories.map(category => (
            <div key={category.id} className="mb-6 border-t pt-4">
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h3 className="text-xl font-semibold text-coffee-dark">{category.name}</h3>
                <div className="flex gap-2">
                  <button onClick={() => setEditingItem({ name: '', price: '', description: '', categoryId: category.id, isNew: true })} className="btn btn-primary text-sm">
                    + Ürün Ekle
                  </button>
                  <button onClick={() => handleCategoryDelete(category.id)} className="btn btn-secondary bg-red-600 text-white hover:bg-red-700 text-sm">
                    Kategoriyi Sil
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                {category.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border-b hover:bg-coffee-light/10 rounded">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-coffee-dark mr-4">{item.price}</span>
                      <button onClick={() => setEditingItem({ ...item, index, categoryId: category.id, isNew: false })} className="text-blue-600 hover:text-blue-800">Düzenle</button>
                      <button onClick={() => handleItemDelete(category.id, index)} className="text-red-600 hover:text-red-800">Sil</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
 {/* Blog Yönetimi */}
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-coffee-dark">Blog Yönetimi</h2>
                <button onClick={() => setEditingPost({ title: '', content: '', image: '', category: '' })} className="btn btn-primary">
                    + Yeni Yazı Ekle
                </button>
            </div>
            <div className="space-y-2">
                {blogPosts.map(post => (
                    <div key={post.id} className="flex justify-between items-center p-3 border-b hover:bg-coffee-light/10 rounded">
                        <div>
                            <p className="font-medium">{post.title}</p>
                            <p className="text-sm text-gray-500">{post.category}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setEditingPost(post)} className="text-blue-600 hover:text-blue-800">Düzenle</button>
                            <button onClick={() => handlePostDelete(post.id)} className="text-red-600 hover:text-red-800">Sil</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
export default AdminPanelPage;