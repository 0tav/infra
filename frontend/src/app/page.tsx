import { CategoryWithSkills } from '@/types';
import Link from 'next/link';
import { fetchAPI } from '@/lib/api';

async function getCategoryWithSkills(){
  try {
    const responseData = await fetchAPI('/api/skills');

    return responseData?.data || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function HomePage() {
  const categories: CategoryWithSkills[] = await getCategoryWithSkills();

  return (
    <main className="p-8 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Full-Stack Realtime Connection via PostgreSQL & Cache</p>
        </div>
        <Link href="/add-skill" className="bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg shadow-sm hover:bg-blue-700 transition">
          + Add new record
        </Link>
      </div>

      {categories.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">Category not found.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {categories.map((category: CategoryWithSkills) => (
            <div key={category.id} className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-xl font-extrabold text-blue-600 mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                📁 Category: {category.name}
              </h2>

              {!category.skills || category.skills.length === 0 ? (
                <p className="text-sm text-gray-400 italic">No skills on this category</p>
              ) : (
                <div className="grid gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-300 transition">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-800 text-lg">{skill.skillname || 'No skill name.'}</h3>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${skill.isfinish ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                          {skill.isfinish ? 'Done' : 'in Progress'}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{skill.description || 'No description.'}</p>
                      
                      {skill.enddate && (
                        <div className="text-right text-xs text-gray-400 mt-3">
                          End Date: <span className="font-medium text-gray-500">{new Date(skill.enddate).toLocaleDateString('id-ID')}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
