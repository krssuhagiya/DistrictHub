import React from 'react';
import { FiHome } from 'react-icons/fi';
import { BsLightbulb } from 'react-icons/bs';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { AiOutlineIdcard, AiOutlineSafetyCertificate } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';

const HouseholdStats = () => {
  const categories = [
    {
      title: 'House',
      icon: <FiHome size={24} />,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      stats: [
        { label: 'Pakka', value: '11825', color: 'bg-green-500', percent: 85 },
        { label: 'Kachha', value: '1272', color: 'bg-red-500', percent: 9 },
        { label: 'Other', value: '9211', color: 'bg-yellow-500', percent: 66 },
      ],
    },
    {
      title: 'Electricity',
      icon: <BsLightbulb size={24} />,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      stats: [
        { label: 'Yes', value: '1915', color: 'bg-green-500', percent: 17 },
        { label: 'No', value: '1682', color: 'bg-red-500', percent: 15 },
        { label: 'Other', value: '7519', color: 'bg-yellow-500', percent: 68 },
      ],
    },
    {
      title: 'Toilet',
      icon: <IoHomeOutline size={24} />,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      stats: [
        { label: 'Yes', value: '1808', color: 'bg-green-500', percent: 19 },
        { label: 'No', value: '162', color: 'bg-red-500', percent: 2 },
        { label: 'Other', value: '7691', color: 'bg-yellow-500', percent: 79 },
      ],
    },
    {
      title: 'MGNREGA',
      icon: <FaRegMoneyBillAlt size={24} />,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      stats: [
        { label: 'Yes', value: '2365', color: 'bg-green-500', percent: 32 },
        { label: 'No', value: '3319', color: 'bg-red-500', percent: 45 },
        { label: 'Other', value: '1675', color: 'bg-yellow-500', percent: 23 },
      ],
    },
    {
      title: 'PM Kisan Yojana',
      icon: <MdOutlineWaterDrop size={24} />,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      stats: [
        { label: 'Yes', value: '772', color: 'bg-green-500', percent: 5 },
        { label: 'No', value: '5945', color: 'bg-red-500', percent: 41 },
        { label: 'Other', value: '7762', color: 'bg-yellow-500', percent: 54 },
      ],
    },
    {
      title: 'Aadhaar Card',
      icon: <AiOutlineIdcard size={24} />,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      stats: [
        { label: 'Yes', value: '21834', color: 'bg-green-500', percent: 81 },
        { label: 'No', value: '2767', color: 'bg-red-500', percent: 10 },
        { label: 'Other', value: '2630', color: 'bg-yellow-500', percent: 9 },
      ],
    },
    {
      title: 'Caste Certificate',
      icon: <AiOutlineSafetyCertificate size={24} />,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      stats: [
        { label: 'Yes', value: '3416', color: 'bg-green-500', percent: 13 },
        { label: 'No', value: '18402', color: 'bg-red-500', percent: 68 },
        { label: 'Other', value: '5213', color: 'bg-yellow-500', percent: 19 },
      ],
    },
    {
      title: 'PMJAY Card',
      icon: <AiOutlineSafetyCertificate size={24} />,
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      stats: [
        { label: 'Yes', value: '10673', color: 'bg-green-500', percent: 47 },
        { label: 'No', value: '9073', color: 'bg-red-500', percent: 40 },
        { label: 'Other', value: '2879', color: 'bg-yellow-500', percent: 13 },
      ],
    },
    {
      title: 'Jan Dhan Account',
      icon: <FaRegMoneyBillAlt size={24} />,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      stats: [
        { label: 'Yes', value: '10002', color: 'bg-green-500', percent: 37 },
        { label: 'No', value: '12138', color: 'bg-red-500', percent: 45 },
        { label: 'Other', value: '4891', color: 'bg-yellow-500', percent: 18 },
      ],
    },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Household Statistics
        </h2>
        <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
          Total Families: <span className="font-bold text-gray-900">13,879</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-xl ${category.iconBg} shadow-sm`}>
                  <span className={category.iconColor}>{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">{category.title}</h3>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="p-5">
              <div className="space-y-4">
                {category.stats.map((stat, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${stat.color}`}></div>
                        <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-gray-900">{stat.value}</span>
                        <span className="text-xs text-gray-500">({stat.percent}%)</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${stat.color} rounded-full transition-all duration-500 ease-out group-hover:opacity-90`}
                        style={{ width: `${stat.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Total Summary */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Total Coverage</span>
                  <span className="font-semibold">
                    {category.stats.reduce((acc, stat) => acc + parseInt(stat.value.replace(',', '')), 0).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseholdStats;
