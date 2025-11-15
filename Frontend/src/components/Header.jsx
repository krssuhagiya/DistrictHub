import React from 'react';
import { useContext } from 'react';
import { TalukaContext } from '../contexts/TalukaContext.js';

const Header = () => { 
const { selectedTaluka, setSelectedTaluka } = useContext(TalukaContext);
 
  return (
    <header className="relative">
      {/* Background Image with Overlay */}
      <div
        className="relative h-72 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-600/90"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6">
          {/* Top Section */}
          <div className="flex justify-end">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
              <span className="text-white text-sm">Admin Panel</span>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              DistrictHub
            </h1>
            <p className="text-xl text-blue-100">District Level - Tapi</p>
          </div>

          {/* Bottom Section - Taluka Selector */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <label className="text-blue-900 font-semibold text-sm md:text-base">
                Select Sub-district
              </label>
              <select
                value={selectedTaluka}  
                onChange={(e) => setSelectedTaluka(e.target.value)}
                className="w-full md:w-auto bg-blue-600 text-white px-6 py-2.5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium"
              >
                <option value="all">All Sub-districts</option>
                <option value="vyara">Vyara</option>
                <option value="songadh">Songadh</option>
                <option value="valod">Valod</option>
                <option value="nizar">Nizar</option>
                <option value="uchchhal">Uchchhal</option>
                <option value="kukarmunda">Kukarmunda</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
