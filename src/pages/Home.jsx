import { RefreshCw, Image as ImageIcon, Wallet, FileImage } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">鋒兄塗哥公開資訊</h1>
        <p className="text-sm opacity-90 mb-4">© 版權所有 2025 ~ 2125</p>
        <div className="flex justify-center gap-4 text-xs opacity-75">
            <span>前端使用 React (Next.js)</span>
            <span>|</span>
            <span>後端使用 Appwrite</span>
            <span>|</span>
            <span>網頁存放於 Vercel</span>
            <span>|</span>
            <span>影片存放於 Vercel Blob</span>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">圖片展示</h2>
                <p className="text-gray-500 text-sm">共 79 張圖片</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors">
                <RefreshCw size={16} />
                重新載入
            </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-500 text-white p-6 rounded-xl flex justify-between items-center shadow-md">
                <div>
                    <div className="text-sm opacity-90 mb-1">總圖片數</div>
                    <div className="text-3xl font-bold">79</div>
                </div>
                <ImageIcon size={32} className="opacity-80" />
            </div>
            <div className="bg-green-500 text-white p-6 rounded-xl flex justify-between items-center shadow-md">
                <div>
                    <div className="text-sm opacity-90 mb-1">JPG/JPEG</div>
                    <div className="text-3xl font-bold">14</div>
                </div>
                <Wallet size={32} className="opacity-80" />
            </div>
             <div className="bg-purple-500 text-white p-6 rounded-xl flex justify-between items-center shadow-md">
                <div>
                    <div className="text-sm opacity-90 mb-1">PNG</div>
                    <div className="text-3xl font-bold">65</div>
                </div>
                <FileImage size={32} className="opacity-80" />
            </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Mock Images */}
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-gray-200 relative">
                         {/* Placeholder for image */}
                         <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <ImageIcon size={32} />
                         </div>
                         {/* Badge if needed */}
                         {i % 3 === 0 && (
                            <span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded">JPEG</span>
                         )}
                    </div>
                    <div className="p-3">
                        <h3 className="text-sm font-medium text-gray-800 truncate" title="ChatGPT Image">ChatGPT Image...</h3>
                        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                            <span>2.14 MB</span>
                            <span>10/20</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
