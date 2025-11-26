import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Beef, 
  Syringe, 
  Heart, 
  Activity, 
  FileText,
  Users,
  Baby,
  type LucideIcon
} from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
  badge?: number;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: '',
    items: [
      { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
      { name: 'Livestock', path: '/livestock', icon: Beef, badge: 67 },
      { name: 'Health', path: '/vaccination', icon: Syringe, badge: 12 },
      { name: 'Breeding', path: '/breeding', icon: Heart },
      { name: 'Pregnancy', path: '/pregnancy', icon: Baby, badge: 1 },
      { name: 'Activity', path: '/activity', icon: Activity },
      { name: 'Reports', path: '/reports', icon: FileText },
    ],
  },
  {
    title: 'ADMINISTRATION',
    items: [
      { name: 'Manage Users', path: '/manage-users', icon: Users },
    ],
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen bg-white
        border-r border-slate-200 transition-all duration-300 ease-in-out z-50
        ${collapsed ? 'w-16' : 'w-64'}
        flex flex-col
      `}
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200">
        {!collapsed && (
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/images/main_logo.png" 
              alt="DigiFarm Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-base font-semibold text-slate-900">
              DigiFarm
            </span>
          </Link>
        )}
        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            className="mx-auto"
          >
            <img 
              src="/images/main_logo.png" 
              alt="DigiFarm Logo" 
              className="w-10 h-10 object-contain"
            />
          </button>
        )}
      </div>

      {/* Toggle Button */}
      {!collapsed && (
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:border-slate-300 transition-colors shadow-sm"
          aria-label="Toggle sidebar"
        >
          <span className="text-xs text-slate-400">◀</span>
        </button>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden py-6 px-3 scrollbar-thin">
        {navSections.map((section) => (
          <div key={section.title} className="mb-2">
            {!collapsed && section.title && (
              <h3 className="px-3 mb-2 text-xs font-medium text-slate-400">
                {section.title}
              </h3>
            )}
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(item.path);
                const IconComponent = item.icon;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`
                        group flex items-center px-3 py-2 rounded-lg transition-all duration-150
                        ${
                          active
                            ? 'bg-primary-600 text-white'
                            : 'text-slate-600 hover:bg-primary-50 hover:text-primary-700'
                        }
                        ${collapsed ? 'justify-center' : 'justify-between'}
                      `}
                      title={collapsed ? item.name : undefined}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent size={16} className="flex-shrink-0" />
                        {!collapsed && (
                          <span className="text-sm font-medium">{item.name}</span>
                        )}
                      </div>
                      {!collapsed && item.badge !== undefined && (
                        <span
                          className={`
                          px-2 py-0.5 text-xs font-medium rounded-full
                          ${
                            active
                              ? 'bg-white/20 text-white'
                              : 'bg-slate-200 text-slate-600'
                          }
                        `}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className={`border-t border-slate-200 p-3 ${collapsed ? 'px-2' : ''}`}>
        {!collapsed ? (
          <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer group">
            <img 
              src="/images/main_logo.png" 
              alt="User Avatar" 
              className="w-10 h-10 rounded-lg object-contain"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Doc Alexis</p>
              <p className="text-xs text-slate-500 truncate">Veterinarian</p>
            </div>
          </div>
        ) : (
          <button className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs font-semibold mx-auto hover:bg-primary-600 transition-colors">
            JD
          </button>
        )}
      </div>
    </aside>
  );
}
