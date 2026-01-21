import { Package, CreditCard, AlertTriangle, DollarSign } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
       <div>
            <h1 className="text-2xl font-bold text-gray-800">儀表板</h1>
            <p className="text-gray-500 text-sm">鋒兄Next資訊管理 - 數據匯總與分析</p>
       </div>

       {/* Summary Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-500 text-white p-6 rounded-xl flex justify-between items-center shadow-md">
                <div>
                    <div className="text-sm opacity-90 mb-1">食品項目</div>
                    <div className="text-3xl font-bold">11</div>
                </div>
                <Package size={32} className="opacity-80" />
            </div>
            <div className="bg-green-500 text-white p-6 rounded-xl flex justify-between items-center shadow-md">
                <div>
                    <div className="text-sm opacity-90 mb-1">訂閱服務</div>
                    <div className="text-3xl font-bold">27</div>
                </div>
                <CreditCard size={32} className="opacity-80" />
            </div>
            <div className="bg-orange-500 text-white p-6 rounded-xl flex justify-between items-center shadow-md">
                <div>
                    <div className="text-sm opacity-90 mb-1">需要關注</div>
                    <div className="text-3xl font-bold">3</div>
                </div>
                <AlertTriangle size={32} className="opacity-80" />
            </div>
             <div className="bg-purple-600 text-white p-6 rounded-xl flex justify-between items-center shadow-md">
                <div>
                    <div className="text-sm opacity-90 mb-1">月費總計</div>
                    <div className="text-2xl font-bold">NT$ 13,544</div>
                </div>
                <DollarSign size={32} className="opacity-80" />
            </div>
       </div>

       {/* Stats Sections */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Food Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4 text-blue-600 bg-blue-50 w-fit px-3 py-1.5 rounded-lg">
                    <Package size={20} />
                    <span className="font-bold">食品管理統計</span>
                </div>
                
                <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>正常食品</span>
                        </div>
                        <span className="font-bold text-gray-700">10</span>
                    </div>

                    <div className="p-3 bg-yellow-50 rounded-lg text-sm">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <span>7天內過期</span>
                            </div>
                            <span className="font-bold text-gray-700">1</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 pl-4">
                             <span>雞蛋</span>
                             <span>1天後</span>
                        </div>
                    </div>

                    <div className="p-3 bg-orange-50 rounded-lg text-sm">
                        <div className="flex justify-between items-center mb-1">
                             <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <span>30天內過期</span>
                            </div>
                            <span className="font-bold text-gray-700">1</span>
                        </div>
                         <div className="flex justify-between text-xs text-gray-500 pl-4">
                             <span>雞蛋</span>
                             <span>1天後</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span>已過期</span>
                        </div>
                        <span className="font-bold text-gray-700">0</span>
                    </div>
                </div>

                <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    前往食品管理
                </button>
            </div>

            {/* Subscription Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4 text-green-600 bg-green-50 w-fit px-3 py-1.5 rounded-lg">
                    <CreditCard size={20} />
                    <span className="font-bold">訂閱管理統計</span>
                </div>
                
                 <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>正常訂閱</span>
                        </div>
                        <span className="font-bold text-gray-700">24</span>
                    </div>

                    <div className="p-3 bg-yellow-50 rounded-lg text-sm">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <span>3天內到期</span>
                            </div>
                            <span className="font-bold text-gray-700">2</span>
                        </div>
                        <div className="space-y-1 pl-4">
                             <div className="flex justify-between text-xs text-gray-500">
                                <span>Google One 100GB/暫時取消</span>
                                <span>3天後</span>
                             </div>
                             <div className="flex justify-between text-xs text-gray-500">
                                <span>已取消/Google AI Pro (2 TB)/2份邀請試用4個月/中信</span>
                                <span>3天後</span>
                             </div>
                        </div>
                    </div>

                    <div className="p-3 bg-orange-50 rounded-lg text-sm">
                         <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <span>7天內到期</span>
                            </div>
                            <span className="font-bold text-gray-700">2</span>
                        </div>
                         <div className="space-y-1 pl-4">
                             <div className="flex justify-between text-xs text-gray-500">
                                <span>Google One 100GB/暫時取消</span>
                                <span>3天後</span>
                             </div>
                             <div className="flex justify-between text-xs text-gray-500">
                                <span>已取消/Google AI Pro (2 TB)/2份邀請試用4個月/中信</span>
                                <span>3天後</span>
                             </div>
                        </div>
                    </div>

                    <div className="p-3 bg-red-50 rounded-lg text-sm">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span>已過期</span>
                            </div>
                            <span className="font-bold text-gray-700">1</span>
                        </div>
                         <div className="flex justify-between text-xs text-gray-500 pl-4">
                             <span>天恩/處方箋/心臟內科</span>
                             <span>1天前</span>
                        </div>
                    </div>
                </div>

                <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                    前往訂閱管理
                </button>
            </div>
       </div>

        {/* Quick Actions (Placeholder) */}
        <div>
             <h2 className="text-lg font-bold text-gray-800 mb-3">快速操作</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Package size={20}/></div>
                    <span className="text-sm font-medium">新增食品</span>
                 </div>
                 <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                    <div className="p-2 bg-green-100 text-green-600 rounded-lg"><CreditCard size={20}/></div>
                    <span className="text-sm font-medium">新增訂閱</span>
                 </div>
             </div>
        </div>
    </div>
  );
}
