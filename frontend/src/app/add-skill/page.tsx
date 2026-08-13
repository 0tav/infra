"use client"; 

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Category } from '@/types'; 
import { fetchAPI } from '@/lib/api';

export default function AddSkillPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  
  const [formData, setFormData] = useState({
    categoryName: '', // Menampung Nama Kategori teks murni
    skillname: '',
    description: '',
  });

  useEffect(() => {
    fetchAPI('/api/skills')
      .then((resData) => {
        setCategories(resData?.data || []);
      })
      .catch((err) => console.error("Failed to load category:", err));
  }, []);

  return (
    <main className="p-8 max-w-xl mx-auto bg-white min-h-screen border shadow-sm rounded-xl mt-6">
      <button 
        onClick={() => router.push('/')} 
        className="text-sm text-blue-600 font-medium hover:underline mb-6 block"
      >
        ← Back to Dashboard
      </button>
      
      <h1 className="text-2xl font-extrabold text-gray-900 mb-6 border-b pb-2">Add new skills</h1>

      <form 
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);

          try {
            const payload = {
              name: formData.categoryName, // Mengirim teks Nama Kategori langsung
              skills: [
                {
                  skillname: formData.skillname,
                  description: formData.description,
                  metadata: { 
                    source: "Next.js Frontend Client", 
                    retry_count: 3 
                  }
                }
              ]
            };

            await fetchAPI('/api/skills', {
              method: 'POST',
              body: JSON.stringify(payload),
            });

            router.push('/'); 
            router.refresh();
            
          } catch (error) {
            console.error('Network error:', error);
            alert('Failed to connect to server.');
          } finally {
            setLoading(false);
          }
        }} 
        className="space-y-5"
      >
        <div>
          <label className="block text-sm font-semibold text-gray-700">Category Name</label>
          <input 
            type="text" 
            required
            list="category-suggestions"
            placeholder="Ex: Cloud infrastructure(AWS) or input new category"
            className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            value={formData.categoryName}
            onChange={(e) => setFormData({...formData, categoryName: e.target.value})}
          />
          <datalist id="category-suggestions">
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Skill Name</label>
          <input 
            type="text" 
            required
            placeholder="Ex: Advanced Production Kafka"
            className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            value={formData.skillname || ''}
            onChange={(e) => setFormData({...formData, skillname: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea 
            required
            rows={4}
            placeholder="Input description or your learning progress"
            className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            value={formData.description || ''}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition mt-4"
        >
          {loading ? 'Save data to server...' : 'Save skill'}
        </button>
      </form>
    </main>
  );
}
