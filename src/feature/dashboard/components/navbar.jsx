import React from 'react'
import { 
  Menu,
  Bell,
  User,
  LogOut,
  ChevronDown,
} from 'lucide-react';
export const NavbarHome = () => {
  return (
    <header className="bg-[rgb(8_123_203)] shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left side - Menu toggle and breadcrumb */}
            <div className="flex items-center space-x-4">
              <button className="lg:hidden p-2 rounded-lg hover:bg-gray-50">
                <Menu size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Right side - User info and notifications */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-400 relative">
                <Bell size={20} className="text-white" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User size={16} className="text-gray-600" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-800">Juan Pérez</p>
                  <p className="text-xs text-white">Administrador</p>
                </div>
                <button className="flex items-center space-x-1 text-white hover:text-gray-800">
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* Logout Button */}
              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-white hover:bg-red-50 hover:text-red-600 transition-colors">
                <LogOut size={18} />
                <span className="hidden sm:block text-sm">Salir</span>
              </button>
            </div>
          </div>
        </header>
  )
}
