import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, X, AlertCircle, CheckCircle, Clock, Calendar } from 'lucide-react';

export default function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [notifications, setNotifications] = React.useState([
    {
      id: 1,
      type: 'warning',
      title: '3-Month Pregnancy Check Overdue',
      message: 'Cow C-023 bred on Oct 5 - Pregnancy check is overdue',
      animalId: 'C-023',
      timestamp: '2 hours ago',
      read: false,
      link: '/breeding/BR-002'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Vaccination Overdue',
      message: 'Rabies vaccine overdue for Boer Doe G-012',
      animalId: 'G-012',
      timestamp: '5 hours ago',
      read: false,
      link: '/vaccination'
    },
    {
      id: 3,
      type: 'info',
      title: 'Pregnancy Check Due Soon',
      message: 'Cow C-011 bred on Sep 15 - Check due by Dec 15 (23 days)',
      animalId: 'C-011',
      timestamp: '1 day ago',
      read: false,
      link: '/breeding/BR-001'
    },
    {
      id: 4,
      type: 'success',
      title: 'Withdrawal Period Ending',
      message: 'Brahman Bull C-008 withdrawal period ends today - Can be cleared for sale',
      animalId: 'C-008',
      timestamp: '1 day ago',
      read: false,
      link: '/vaccination'
    },
    {
      id: 5,
      type: 'info',
      title: 'Upcoming Vaccination',
      message: 'CDT vaccine due for Dorper Ewe S-005 on Dec 8 (16 days)',
      animalId: 'S-005',
      timestamp: '2 days ago',
      read: true,
      link: '/vaccination'
    },
    {
      id: 6,
      type: 'info',
      title: 'Vitamin B Booster Due',
      message: 'Boer Maiden Doe G-019 - Next dose due Dec 10',
      animalId: 'G-019',
      timestamp: '3 days ago',
      read: true,
      link: '/vaccination'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertCircle size={16} className="text-amber-600" />;
      case 'success':
        return <CheckCircle size={16} className="text-emerald-600" />;
      case 'info':
        return <Clock size={16} className="text-blue-600" />;
      default:
        return <Bell size={16} className="text-slate-600" />;
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl">🌾</span>
          <span className="text-xl font-bold text-green-700">DigiFarm</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-slate-700 hover:text-green-700 transition"
          >
            Dashboard
          </Link>
          <a
            href="#"
            className="text-sm font-medium text-slate-700 hover:text-green-700 transition"
          >
            Livestock
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-700 hover:text-green-700 transition"
          >
            Reports
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-700 hover:text-green-700 transition"
          >
            Settings
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <button 
              type="button"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
          </div>

          {/* Notification Dropdown - rendered outside button container */}
          {isNotificationOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsNotificationOpen(false)}
              ></div>
              <div className="fixed right-4 top-16 w-96 bg-white rounded-lg shadow-lg border border-slate-200 z-50 max-h-[80vh] flex flex-col">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">Notifications</h3>
                      <p className="text-xs text-slate-500">{unreadCount} unread</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Mark all read
                        </button>
                      )}
                      <button
                        onClick={() => setIsNotificationOpen(false)}
                        className="p-1 hover:bg-slate-100 rounded"
                      >
                        <X size={16} className="text-slate-500" />
                      </button>
                    </div>
                  </div>

                  {/* Notification List */}
                  <div className="flex-1 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-8 text-center">
                        <Bell size={32} className="mx-auto text-slate-300 mb-2" />
                        <p className="text-sm text-slate-500">No notifications</p>
                      </div>
                    ) : (
                      <div className="divide-y divide-slate-100">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 hover:bg-slate-50 transition-colors ${
                              !notification.read ? 'bg-blue-50/50' : ''
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 mt-0.5">
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-1">
                                  <p className={`text-sm font-medium ${
                                    !notification.read ? 'text-slate-900' : 'text-slate-700'
                                  }`}>
                                    {notification.title}
                                  </p>
                                  <button
                                    onClick={() => deleteNotification(notification.id)}
                                    className="flex-shrink-0 p-1 hover:bg-slate-200 rounded"
                                  >
                                    <X size={12} className="text-slate-400" />
                                  </button>
                                </div>
                                <p className="text-xs text-slate-600 mb-2">
                                  {notification.message}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-xs text-slate-500">
                                      {notification.timestamp}
                                    </span>
                                    {notification.animalId && (
                                      <>
                                        <span className="text-xs text-slate-400">•</span>
                                        <span className="text-xs font-medium text-slate-600">
                                          {notification.animalId}
                                        </span>
                                      </>
                                    )}
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    {!notification.read && (
                                      <button
                                        onClick={() => markAsRead(notification.id)}
                                        className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                                      >
                                        Mark read
                                      </button>
                                    )}
                                    {notification.link && (
                                      <Link
                                        to={notification.link}
                                        onClick={() => {
                                          markAsRead(notification.id);
                                          setIsNotificationOpen(false);
                                        }}
                                        className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                                      >
                                        View
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  {notifications.length > 0 && (
                    <div className="px-4 py-3 border-t border-slate-200 text-center">
                      <button className="text-xs font-medium text-primary-600 hover:text-primary-700">
                        View all notifications
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}

          <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition">
            <span className="text-sm font-medium">User</span>
            <span>▼</span>
          </button>
        </div>
      </div>
    </header>
  );
}
