import { Trash2, Edit, ExternalLink } from 'lucide-react';

export default function Subscriptions() {
  const subscriptions = [
      { id: 1, name: '天恩/處方箋/心臟內科', date: '2026-01-21', status: '今天', cost: 0, url: '#' },
      { id: 2, name: 'Google One 100GB/暫時取消', date: '2026-01-24', status: '3天後', cost: 65, url: '#' },
      { id: 3, name: '已取消/Google AI Pro (2 TB)/2份邀請試用4個月/中信', date: '2026-01-24', status: '3天後', cost: 650, url: '#' },
      { id: 4, name: '天恩/處方箋/身心科', date: '2026-02-02', status: '', cost: 0, url: '#' },
      { id: 5, name: '暫時取消trae/中國信託/paypal/goldshoot0720@gmail.com', date: '2026-02-04', status: '', cost: 330, url: '#' },
      { id: 6, name: 'Suno', date: '2026-02-10', status: '', cost: 316, url: '#' },
      { id: 7, name: 'YagHost/Drupal/中國信託', date: '2026-02-12', status: '', cost: 163, url: '#' },
      { id: 8, name: 'YagHost/WordPress/台新銀行', date: '2026-02-14', status: '', cost: 163, url: '#' },
      { id: 9, name: '天恩/處方箋/心臟內科', date: '2026-02-17', status: '', cost: 0, url: '#' },
  ];

  return (
    <div className="space-y-6">
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">訂閱管理</h1>
                <p className="text-gray-500 text-sm">共 27 個訂閱服務</p>
            </div>
             <div className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg text-center">
                <div className="text-xs opacity-80">總月費</div>
                <div className="text-xl font-bold">NT$ 13,544</div>
            </div>
        </div>

        {/* Add Subscription Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-4 border-l-4 border-green-500 pl-2">
                <h2 className="font-bold text-gray-800">新增訂閱</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-4">
                    <input type="text" placeholder="服務名稱" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                </div>
                <div className="md:col-span-4">
                    <input type="text" placeholder="網站 URL" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                </div>
                 <div className="md:col-span-2">
                    <input type="number" placeholder="0" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                </div>
                <div className="md:col-span-2">
                    <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                </div>
            </div>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                新增訂閱
            </button>
        </div>

        {/* Subscription List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4">服務名稱</th>
                            <th className="px-6 py-4">下次付款日期</th>
                            <th className="px-6 py-4">月費</th>
                            <th className="px-6 py-4">網站</th>
                            <th className="px-6 py-4 text-right">操作</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {subscriptions.map((sub) => (
                            <tr key={sub.id} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        {/* Icon placeholder */}
                                        {/* <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs text-gray-500">Logo</div> */}
                                        <span className="font-medium text-gray-800">{sub.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-gray-600">{sub.date}</div>
                                    {sub.status && (
                                        <div className={`text-xs mt-0.5 px-2 py-0.5 rounded w-fit ${
                                            sub.status === '今天' ? 'bg-orange-100 text-orange-600' : 'bg-orange-50 text-orange-500'
                                        }`}>
                                            {sub.status}
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4 font-medium text-green-600">
                                    NT$ {sub.cost}
                                </td>
                                <td className="px-6 py-4">
                                    <a href={sub.url} className="text-blue-500 hover:text-blue-700 flex items-center gap-1 text-xs">
                                        前往網站 <ExternalLink size={12} />
                                    </a>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                                            <Edit size={16} />
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
