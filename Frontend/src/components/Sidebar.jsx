import React, { useState } from 'react';
import { FiGrid, FiFileText, FiUpload, FiEdit3, FiUsers, FiFile, FiLogOut, FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dashboardItems = [
    { icon: <FiGrid size={18} />, label: 'Dashboard', active: true },
    { icon: <FiFileText size={18} />, label: 'View Taluka Summary Details' },
    { icon: <FiUsers size={18} />, label: 'View Family Details' },
  ];

  const manageExcelItems = [
    { icon: <FiUpload size={18} />, label: 'Import Excel File' },
    { icon: <FiEdit3 size={18} />, label: 'Family Entry' },
  ];

  const reportItems = [
    { icon: <FiUsers size={18} />, label: 'View All Family' },
    { icon: <FiFile size={18} />, label: 'Taluka Summary' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <FiGrid size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">DistrictHub</h1>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-4">
          {/* DASHBOARD Section */}
          <div className="px-4 mb-6">
            <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3 px-3">
              Dashboard
            </h3>
            <ul className="space-y-1">
              {dashboardItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${
                      item.active
                        ? 'bg-blue-50 text-blue-700 font-medium shadow-sm'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`${item.active ? 'text-blue-600' : 'text-gray-500'}`}>
                      {item.icon}
                    </span>
                    <span className="ml-3 text-sm">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MANAGE EXCEL FILE Section */}
          <div className="px-4 mb-6">
            <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3 px-3">
              Manage Excel File
            </h3>
            <ul className="space-y-1">
              {manageExcelItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200"
                  >
                    <span className="text-gray-500">{item.icon}</span>
                    <span className="ml-3 text-sm">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* REPORT Section */}
          <div className="px-4 mb-6">
            <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3 px-3">
              Report
            </h3>
            <ul className="space-y-1">
              {reportItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200"
                  >
                    <span className="text-gray-500">{item.icon}</span>
                    <span className="ml-3 text-sm">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SETTING Section */}
          <div className="px-4">
            <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3 px-3">
              Setting
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200"
                >
                  <span className="text-gray-500">
                    <FiLogOut size={18} />
                  </span>
                  <span className="ml-3 text-sm">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3">
            <p className="text-xs text-gray-600 mb-1">Version</p>
            <p className="text-sm font-semibold text-gray-800">v1.0.0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
