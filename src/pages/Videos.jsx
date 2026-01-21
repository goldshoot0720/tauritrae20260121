import { Play, Download, Trash2, X } from 'lucide-react';
import { useState } from 'react';

export default function Videos() {
  const [playingVideo, setPlayingVideo] = useState(null);

  // Load all video files from ../assets/videos
  const videoFiles = import.meta.glob('../assets/videos/*.mp4', { eager: true, query: '?url', import: 'default' });
  
  const videos = Object.entries(videoFiles).map(([path, url]) => {
    const fileName = path.split('/').pop();
    return {
      id: fileName,
      title: fileName,
      url: url,
      description: '本地影片資源',
      duration: '未知', 
    };
  });

  return (
    <div className="space-y-6">
       <div>
            <h1 className="text-2xl font-bold text-gray-800">影片介紹</h1>
            <p className="text-gray-500 text-sm">觀看精彩影片內容，支援本地快取減少流量使用</p>
       </div>

       {/* Video Grid */}
       {videos.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((video) => (
                    <div key={video.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                        <div 
                            className="aspect-video bg-gray-900 relative group cursor-pointer flex items-center justify-center"
                            onClick={() => setPlayingVideo(video.url)}
                        >
                             {/* Thumbnail placeholder or video preview */}
                             <video src={video.url} className="w-full h-full object-cover opacity-60" />
                            
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <Play size={32} fill="white" />
                                </div>
                            </div>
                            {/* <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                {video.duration}
                            </span> */}
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-gray-800 mb-1 break-all">{video.title}</h3>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{video.description}</p>
                            
                            <div className="mt-auto flex gap-3">
                                <button 
                                    onClick={() => setPlayingVideo(video.url)}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                                >
                                    <Play size={16} /> 播放影片
                                </button>
                                <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                                    <Download size={16} /> 快取
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
           </div>
       ) : (
           <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200 border-dashed">
               <p className="text-gray-500">暫無影片資源 (src/assets/videos)</p>
           </div>
       )}

       {/* Cache Management */}
       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-gray-800">快取管理</h2>
                 <button className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 font-medium">
                    <Trash2 size={16} /> 清空快取
                 </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-600">{videos.length}</div>
                    <div className="text-xs text-gray-500 mt-1">已掃描影片</div>
                </div>
                 <div className="bg-green-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-600">0</div>
                    <div className="text-xs text-gray-500 mt-1">下載中</div>
                </div>
                 <div className="bg-purple-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-purple-600">{videos.length}</div>
                    <div className="text-xs text-gray-500 mt-1">總影片數</div>
                </div>
                 <div className="bg-orange-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-orange-600">-- MB</div>
                    <div className="text-xs text-gray-500 mt-1">快取大小</div>
                </div>
            </div>
       </div>

       {/* Video Modal */}
       {playingVideo && (
           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setPlayingVideo(null)}>
               <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                   <button 
                        onClick={() => setPlayingVideo(null)}
                        className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2 bg-black/50 rounded-full"
                   >
                       <X size={24} />
                   </button>
                   <video 
                        src={playingVideo} 
                        controls 
                        autoPlay 
                        className="w-full max-h-[80vh]"
                   />
               </div>
           </div>
       )}
    </div>
  );
}
