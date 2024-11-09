import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, 
  Image, 
  Wallet, 
  Receipt, 
  Database,
  LayoutDashboard,
  Webhook,
  BookImage,
  GraduationCap
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: Image, label: 'Image Generations', path: '/generations' },
    { icon: Database, label: 'Loras', path: '/loras' },
    { icon: Wallet, label: 'Wallets', path: '/wallets' },
    { icon: Receipt, label: 'Transactions', path: '/transactions' },
    { icon: BookImage, label: 'Training Images', path: '/training-images' },
    { icon: Webhook, label: 'Webhooks', path: '/webhooks' },
    { icon: GraduationCap, label: 'Lora Trainings', path: '/lora-trainings' }
  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen px-4 py-6">
      <div className="flex items-center mb-8 px-2">
        <Database className="w-8 h-8 mr-2" />
        <span className="text-xl font-bold">Admin Panel</span>
      </div>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;