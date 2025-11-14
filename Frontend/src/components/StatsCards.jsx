import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';
import { IoMaleOutline, IoFemaleOutline } from 'react-icons/io5';

const StatsCards = () => {
  const stats = [
    {
      title: 'Total Families',
      value: '13879',
      icon: <FiUsers size={32} className="text-blue-600" />,
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Total Population',
      value: '27031',
      icon: <BsPeople size={32} className="text-green-600" />,
      bgColor: 'bg-green-50',
    },
    {
      title: 'Male',
      value: '9859',
      icon: <IoMaleOutline size={32} className="text-pink-600" />,
      bgColor: 'bg-pink-50',
    },
    {
      title: 'Female',
      value: '6430',
      icon: <IoFemaleOutline size={32} className="text-yellow-600" />,
      bgColor: 'bg-yellow-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-xl ${stat.bgColor}`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;