import { Link, useLocation, Outlet } from 'react-router-dom';
import { Home, LayoutDashboard, CreditCard, Package, PlayCircle, Music, Landmark, Info, Menu } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const SidebarItem = ({ to, icon: Icon, label, active }) => (
  <Link
    to={to}
    className={clsx(
      "flex items-center gap-3 px-4 py-3 rounded-r-full text-sm font-medium transition-colors mb-1",
      active
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100"
    )}
  >
    <Icon size={20} />
    <span>{label}</span>
  </Link>
);

export default function MainLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: '首頁', icon: Home },
    { path: '/dashboard', label: '儀表板', icon: LayoutDashboard },
    { path: '/subscriptions', label: '訂閱管理', icon: CreditCard },
    { path: '/food', label: '食品管理', icon: Package },
    { path: '/videos', label: '影片介紹', icon: PlayCircle },
    { path: '/music', label: '鋒兄音樂歌詞', icon: Music },
    { path: '/banking', label: '銀行統計', icon: Landmark },
    { path: '/about', label: '關於我們', icon: Info },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className={clsx(
        "bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-30 w-64 transition-transform duration-300 lg:static lg:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                鋒
            </div>
            <div className="overflow-hidden">
                <h1 className="font-bold text-gray-800 leading-tight truncate">鋒兄Next資訊管理</h1>
                <p className="text-xs text-gray-500 truncate">鋒兄Next資訊管理系統</p>
            </div>
        </div>

        <nav className="mt-4 pr-4 space-y-1 overflow-y-auto max-h-[calc(100vh-100px)]">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.path}
              to={item.path}
              icon={item.icon}
              label={item.label}
              active={location.pathname === item.path}
            />
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center z-10">
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 p-1">
                <Menu size={24} />
             </button>
             <span className="ml-4 font-bold text-lg">鋒兄Next資訊管理</span>
        </header>

        <main className="flex-1 overflow-auto p-4 lg:p-8">
            <Outlet />
        </main>
      </div>
    </div>
  );
}
