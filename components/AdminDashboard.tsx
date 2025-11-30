import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Tags, 
  Star, 
  Users, 
  ExternalLink, 
  LogOut, 
  Plus, 
  List, 
  Edit, 
  Eye, 
  CheckCircle,
  FileEdit,
  Trash2,
  X
} from 'lucide-react';
import { Post } from '../types';

interface AdminDashboardProps {
  onLogout: () => void;
  posts: Post[];
  onAddPost: (post: Post) => void;
  onUpdatePost: (post: Post) => void;
  onDeletePost: (id: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout, posts, onAddPost, onUpdatePost, onDeletePost }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    categoryId: 'marketing-tools',
    status: 'Published'
  });

  const categories = [
    { id: 'marketing-tools', name: 'Marketing Tools' },
    { id: 'solo-ads', name: 'Solo Ads Marketing' },
    { id: 'seo-tips', name: 'SEO Tips' },
    { id: 'make-money', name: 'Make Money Online' },
    { id: 'proxies', name: 'Proxies & Scrapers' },
    { id: 'cpa', name: 'CPA Marketing' },
  ];

  // Calculate Stats
  const totalPosts = posts.length;
  const publishedPosts = posts.filter(p => p.status === 'Published').length;
  const draftPosts = posts.filter(p => p.status === 'Draft').length;

  const handleOpenModal = (post?: Post) => {
    if (post) {
      setEditingPost(post);
      setFormData({
        title: post.title,
        categoryId: post.categoryId,
        status: post.status
      });
    } else {
      setEditingPost(null);
      setFormData({
        title: '',
        categoryId: 'marketing-tools',
        status: 'Published'
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPost(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const categoryName = categories.find(c => c.id === formData.categoryId)?.name || 'Uncategorized';
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    if (editingPost) {
      // Update existing
      onUpdatePost({
        ...editingPost,
        title: formData.title,
        categoryId: formData.categoryId,
        categoryName: categoryName,
        status: formData.status as 'Published' | 'Draft',
      });
    } else {
      // Create new
      const newPost: Post = {
        id: Date.now().toString(),
        title: formData.title,
        categoryId: formData.categoryId,
        categoryName: categoryName,
        status: formData.status as 'Published' | 'Draft',
        date: date
      };
      onAddPost(newPost);
    }
    handleCloseModal();
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a202c] text-white flex flex-col flex-shrink-0 transition-all duration-300">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-2">
             <div className="bg-brand-cyan rounded-full w-2 h-2"></div> 
             <span className="text-xl font-bold tracking-tight">Enara's Desk</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-600 rounded-lg text-white shadow-lg transition-all">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-all">
            <FileText size={20} />
            <span className="font-medium">Posts</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-all">
            <Tags size={20} />
            <span className="font-medium">Categories</span>
          </button>
        </nav>

        <div className="p-4 border-t border-gray-700 space-y-2">
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white transition-colors">
            <ExternalLink size={18} />
            <span className="text-sm">View Site</span>
          </button>
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 transition-colors">
            <LogOut size={18} />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <LayoutDashboard className="text-gray-800" size={28} />
            Dashboard
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
               <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                 <Users size={16} />
               </div>
               <span>admin</span>
            </div>
            <button onClick={onLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2 transition-colors">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{totalPosts}</h3>
                <p className="text-sm text-gray-500">Total Posts</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{publishedPosts}</h3>
                <p className="text-sm text-gray-500">Published</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                <FileEdit size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{draftPosts}</h3>
                <p className="text-sm text-gray-500">Drafts</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">0</h3>
                <p className="text-sm text-gray-500">Subscribers</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h3>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => handleOpenModal()} 
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Plus size={20} /> Add New Post
              </button>
              <button className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-4 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer">
                <List size={20} /> Manage Posts
              </button>
              <button className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-4 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer">
                <Tags size={20} /> Categories
              </button>
            </div>
          </div>

          {/* Recent Posts Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-20">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-800">Recent Posts</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                    <th className="p-4 font-semibold">Title</th>
                    <th className="p-4 font-semibold">Category</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold">Date</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-900 line-clamp-1 max-w-xs">{post.title}</td>
                      <td className="p-4 text-gray-600">{post.categoryName}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${post.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'}`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-500">{post.date}</td>
                      <td className="p-4 text-right flex justify-end gap-2">
                        <button onClick={() => handleOpenModal(post)} className="p-1 text-blue-600 hover:bg-blue-50 rounded" title="Edit">
                          <Edit size={16} />
                        </button>
                        <button onClick={() => onDeletePost(post.id)} className="p-1 text-red-500 hover:bg-red-50 rounded" title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {posts.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-gray-500">
                        No posts found. Create one!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add/Edit Post Modal Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">
                  {editingPost ? 'Edit Post' : 'Add New Post'}
                </h3>
                <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Post Title</label>
                  <input 
                    type="text" 
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="Enter resource title..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select 
                    value={formData.categoryId}
                    onChange={(e) => setFormData({...formData, categoryId: e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={handleCloseModal}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
                  >
                    {editingPost ? 'Update Post' : 'Publish Post'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;
