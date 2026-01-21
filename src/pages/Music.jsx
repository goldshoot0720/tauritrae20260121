import { Search, Plus, Heart, Play, Volume2, Copy, FileText, Download, Share2 } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function Music() {
  const [selectedSong, setSelectedSong] = useState(1);
  const [selectedLang, setSelectedLang] = useState('中文');

  const songs = [
    { 
      id: 1, 
      title: '塗哥水電王子爆紅', 
      artist: '鋒兄 & 塗哥', 
      album: '鋒兄音樂精選', 
      year: '2024', 
      tags: ['台灣民謠'], 
      languages: ['中文', 'English', '日本語', '粵語', '韓語'],
      lyrics: [
        {
          title: "故事開始",
          content: "西元兩零零四年六月十五日，這一天是國中畢業生可以在畢業紀念冊留下紀念簽名的一天，同時也是我們故事主角塗神：塗三傑一江湖人稱塗哥一切的開始。"
        },
        {
          title: "台中小吃店對話",
          content: "塗哥人在台中小吃店，同行（姓同名行，塗哥師傅）指著電視畫面說台北爆發學運太陽花學運，塗哥說我不懂政治，等一下我們去買太陽餅。我聽鋒兄說彰化盛產向日葵，下個月我們去彰化農場踏青，同行職業病發作對農場施工頭頭是道。"
        },
        {
          title: "遇見鋒兄小學堂",
          content: "後來他們遇到了鋒兄，鋒兄開始講述關於人生的哲理，塗哥聽得津津有味，決定跟隨鋒兄學習水電技術，開啟了一段傳奇的水電王子之旅。"
        }
      ]
    },
    { 
      id: 2, 
      title: '史上最瞎結婚理由', 
      artist: '鋒兄 & 塗哥', 
      album: '鋒兄音樂精選', 
      tags: ['流行'], 
      languages: ['中文', 'EN', '日', '粵', '韓'],
      year: '2023',
      lyrics: [
        {
          title: "序章",
          content: "這是一個關於結婚的荒謬故事，發生在一個陽光明媚的午後。"
        },
        {
          title: "求婚現場",
          content: "男主角單膝下跪，拿出的不是戒指，而是一把水電鉗，他說：嫁給我吧，我能幫你修一輩子的水管。"
        }
      ]
    },
    { 
      id: 3, 
      title: '鋒兄進化Show 🔥', 
      artist: '鋒兄 feat. 塗哥', 
      album: '鋒兄音樂精選', 
      tags: ['搖滾'], 
      languages: ['中文', 'EN', '日', '粵'],
      year: '2025',
      lyrics: [
        {
          title: "Intro",
          content: "Yeah! 這是鋒兄的進化秀！Are you ready?"
        },
        {
          title: "Verse 1",
          content: "從水電工到技術總監，這條路充滿了汗水與淚水，但我們從未放棄。"
        }
      ]
    },
  ];

  const currentSong = songs.find(s => s.id === selectedSong) || songs[0];

  return (
    <div className="h-[calc(100vh-theme(spacing.24))] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
           <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
             <span className="text-purple-600">♫</span> 鋒兄音樂歌詞
           </h1>
           <p className="text-gray-500 text-sm">收藏和管理您喜愛的歌曲歌詞</p>
        </div>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            <Plus size={16} /> 新增歌曲
        </button>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden">
         {/* Left Sidebar: Song List */}
         <div className="w-1/3 flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-800 mb-3">歌曲庫</h2>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input 
                        type="text" 
                        placeholder="搜尋歌曲、歌手或專輯..." 
                        className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
                {songs.map(song => (
                    <div 
                        key={song.id}
                        onClick={() => setSelectedSong(song.id)}
                        className={clsx(
                            "p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-start",
                            selectedSong === song.id ? "bg-purple-50 border-l-4 border-l-purple-600" : "border-l-4 border-l-transparent"
                        )}
                    >
                        <div>
                            <div className="font-bold text-gray-800 mb-1">{song.title}</div>
                            <div className="text-xs text-gray-500 mb-2">{song.artist}</div>
                            <div className="text-xs text-gray-400">{song.album}</div>
                            <div className="flex gap-1 mt-2">
                                {song.languages.slice(0, 3).map((lang, i) => (
                                    <span key={i} className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                                        {lang === 'English' ? 'EN' : lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <Heart size={16} className="text-red-500 fill-red-500" />
                    </div>
                ))}
            </div>
         </div>

         {/* Right Content: Detail View */}
         <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-1">{currentSong.title}</h2>
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                            <span>{currentSong.artist}</span>
                            <span>•</span>
                            <span>{currentSong.album}</span>
                            <span>•</span>
                            <span>{currentSong.year}</span>
                        </div>
                        <div className="mt-3">
                            {currentSong.tags.map(tag => (
                                <span key={tag} className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium mr-2">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2">
                         <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Heart size={20} className="fill-red-500 text-red-500" /></button>
                         <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors border border-gray-200 rounded-lg"><Play size={20} /></button>
                         <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors border border-gray-200 rounded-lg"><Volume2 size={20} /></button>
                         <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors border border-gray-200 rounded-lg"><Download size={20} /></button>
                         <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors border border-gray-200 rounded-lg"><Share2 size={20} /></button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center justify-between mt-6">
                     <div className="flex bg-gray-100 p-1 rounded-lg">
                        {['中文', 'English', '日本語', '粵語', '韓語'].map(lang => (
                            <button
                                key={lang}
                                onClick={() => setSelectedLang(lang)}
                                className={clsx(
                                    "px-4 py-1.5 text-sm rounded-md transition-all",
                                    selectedLang === lang 
                                        ? "bg-white text-gray-800 shadow-sm font-medium" 
                                        : "text-gray-500 hover:text-gray-700"
                                )}
                            >
                                {lang}
                            </button>
                        ))}
                     </div>
                     <div className="flex gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                            <Copy size={14} /> 複製
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                            <Download size={14} /> TXT
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                            <Download size={14} /> MD
                        </button>
                     </div>
                </div>

                <div className="mt-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                        <input 
                            type="text" 
                            placeholder="在歌詞中搜尋..." 
                            className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                </div>

                 <div className="mt-4">
                    <label className="text-xs text-gray-500 mb-1 block">選擇版本 / Version</label>
                    <select className="w-full md:w-48 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-purple-500">
                        <option>原始音檔</option>
                        <option>Remix版</option>
                    </select>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
                <div className="max-w-3xl mx-auto space-y-8">
                    {currentSong.lyrics ? (
                        currentSong.lyrics.map((section, index) => (
                            <section key={index}>
                                <div className="flex justify-center mb-4">
                                     <span className="bg-purple-500 text-white text-xs px-4 py-1 rounded-full font-bold">{section.title}</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-lg text-center">
                                    {section.content}
                                </p>
                            </section>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">暫無歌詞內容</p>
                    )}
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}
