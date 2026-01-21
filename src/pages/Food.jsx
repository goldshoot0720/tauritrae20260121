import { Trash2, Edit, Plus, Minus } from 'lucide-react';

export default function Food() {
  const foodItems = [
      { id: 1, name: '樂事', expiry: '2026-01-22', status: '1天後', count: 5, img: '#' },
      { id: 2, name: '萬丹保久乳', expiry: '2026-02-26', status: '', count: 12, img: '#' },
      { id: 3, name: '【義美】純豬肉鬆', expiry: '2026-04-14', status: '', count: 2, img: '#' },
      { id: 4, name: '【義美】煎餅（花生）（杏仁）', expiry: '2026-05-19', status: '', count: 7, img: '#' },
      { id: 5, name: '黑松FIN補給飲料', expiry: '2026-06-10', status: '', count: 6, img: '#' },
      { id: 6, name: '義美榛果巧克力酥片', expiry: '2026-07-15', status: '', count: 1, img: '#' },
  ];

  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
             <div>
                <h1 className="text-2xl font-bold text-gray-800">食品管理</h1>
                <p className="text-gray-500 text-sm">共 11 項食品</p>
            </div>
             <button className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                即時同步
             </button>
        </div>

        {/* Add Food Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <div className="flex items-center gap-2 mb-4 border-l-4 border-blue-500 pl-2">
                <h2 className="font-bold text-gray-800">新增食品</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                 <div className="md:col-span-3">
                    <input type="text" placeholder="食品名稱" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                </div>
                 <div className="md:col-span-2">
                    <input type="number" placeholder="0" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                </div>
                 <div className="md:col-span-3">
                    <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                </div>
                 <div className="md:col-span-4">
                    <input type="text" placeholder="圖片 URL" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                </div>
            </div>
             <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                新增食品
            </button>
        </div>

        {/* Food List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4">名稱</th>
                            <th className="px-6 py-4">有效期限</th>
                            <th className="px-6 py-4">數量</th>
                            <th className="px-6 py-4">圖片</th>
                            <th className="px-6 py-4 text-right">操作</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {foodItems.map((item) => (
                            <tr key={item.id} className={`hover:bg-gray-50/50 ${item.status ? 'bg-orange-50/30' : ''}`}>
                                <td className="px-6 py-4 font-medium text-gray-800">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4">
                                     <div className="text-gray-600">{item.expiry}</div>
                                     {item.status && (
                                         <span className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded mt-1">
                                            {item.status}
                                         </span>
                                     )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100">
                                            <Minus size={12} />
                                        </button>
                                        <span className="w-4 text-center font-medium">{item.count}</span>
                                        <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100">
                                            <Plus size={12} />
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
                                        Img
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                     <div className="flex items-center justify-end gap-2">
                                        <button className="px-3 py-1.5 text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-xs font-medium transition-colors">
                                            編輯
                                        </button>
                                        <button className="p-1.5 bg-red-500 text-white hover:bg-red-600 rounded-lg transition-colors">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
            </div>
        </div>
    </div>
  );
}
