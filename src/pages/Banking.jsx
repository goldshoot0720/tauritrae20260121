import { Landmark, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Banking() {
  const banks = [
    { name: '台北富邦', balance: 423, logo: 'https://logo.clearbit.com/fubon.com' },
    { name: '國泰世華', balance: 213, logo: 'https://logo.clearbit.com/cathaybk.com.tw' },
    { name: '兆豐銀行', balance: 452, logo: 'https://logo.clearbit.com/megabank.com.tw' },
    { name: '王道銀行', balance: 500, logo: 'https://logo.clearbit.com/obank.com.tw' },
    { name: '新光銀行', balance: 200, logo: 'https://logo.clearbit.com/skbank.com.tw' },
    { name: '中華郵政', balance: 601, logo: 'https://logo.clearbit.com/post.gov.tw' },
    { name: '玉山銀行', balance: 496, logo: 'https://logo.clearbit.com/esunbank.com.tw' },
    { name: '中國信託', balance: 696, logo: 'https://logo.clearbit.com/ctbcbank.com' },
    { name: '台新銀行', balance: 611, logo: 'https://logo.clearbit.com/taishinbank.com.tw' },
  ];

  return (
    <div className="space-y-6">
       <div>
            <h1 className="text-2xl font-bold text-gray-800">銀行統計</h1>
            <p className="text-gray-500 text-sm">財務概況與帳戶餘額統計</p>
       </div>

       {/* Summary Cards */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-600 text-white p-6 rounded-xl flex flex-col justify-between shadow-md h-32">
                <div className="text-sm opacity-90">合計</div>
                <div className="text-4xl font-bold">4192</div>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-xl flex flex-col justify-between shadow-md h-32">
                <div className="text-sm opacity-90">銀行數</div>
                <div className="text-4xl font-bold">9</div>
            </div>
             <div className="bg-green-500 text-white p-6 rounded-xl flex flex-col justify-between shadow-md h-32">
                <div className="text-sm opacity-90">可編輯</div>
                <div className="text-4xl font-bold">是</div>
            </div>
       </div>

       {/* Bank Grid */}
       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {banks.map((bank, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                <Landmark size={20} className="text-gray-400" />
                                {/* Use actual logos if available, falling back to icon */}
                                {/* <img src={bank.logo} alt={bank.name} className="w-full h-full object-cover" /> */}
                            </div>
                            <span className="font-medium text-gray-700">{bank.name}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                            <span className="font-bold text-gray-800">{bank.balance}</span>
                            <div className="flex flex-col gap-0.5">
                                <button className="text-gray-400 hover:text-gray-600">
                                    <ArrowUpRight size={10} />
                                </button>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <ArrowDownRight size={10} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    </div>
  );
}
