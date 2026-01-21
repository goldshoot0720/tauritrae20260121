import { Box, BarChart3, Headphones, Info } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg shadow-purple-200">
                鋒塗
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">鋒兄塗哥公開資訊</h1>
            <p className="text-gray-500 leading-relaxed">
                我們是專業的公關團隊，致力於為客戶提供最優質的公關服務和智能管理解決方案。
                <br />
                透過創新技術和專業服務，幫助企業和個人實現更高效的管理目標。
            </p>
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-16">
            <div className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-blue-100">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-200">
                    鋒
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">鋒兄</h2>
                <div className="text-blue-600 text-sm font-medium mb-4">技術總監 & 創新領袖</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                    專精於系統架構設計與技術創新，擁有豐富的軟體開發經驗，
                    致力於打造用戶友好的智能管理解決方案。
                </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-purple-100">
                <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-purple-200">
                    塗
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">塗哥</h2>
                <div className="text-purple-600 text-sm font-medium mb-4">公關總監 & 策略專家</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                    擅長品牌策略規劃與公關活動執行，具備敏銳的市場洞察力，
                    專注於建立企業與客戶之間的良好關係。
                </p>
            </div>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center w-full max-w-4xl">
            <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">
                    <Box size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">智能管理</h3>
                <p className="text-xs text-gray-500 max-w-[200px]">
                    提供全方位的智能管理解決方案，讓生活更有序
                </p>
            </div>

            <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform">
                    <BarChart3 size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">數據洞察</h3>
                <p className="text-xs text-gray-500 max-w-[200px]">
                    深度數據分析，提供精準的決策支援
                </p>
            </div>

            <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
                    <Info size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">專業服務</h3>
                <p className="text-xs text-gray-500 max-w-[200px]">
                    24/7 專業客服支援，確保最佳使用體驗
                </p>
            </div>
        </div>
    </div>
  );
}
