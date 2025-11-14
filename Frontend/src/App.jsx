import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import AgeDistribution from './components/AgeDistribution';
import EducationChart from './components/EducationChart';
import HouseholdStats from './components/HouseholdStats';
import DistrictMap from './components/DistrictMap';

function App() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area - vertical layout */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main Dashboard Content - scrollable */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
          {/* Header at the top of the scrollable area */}
          <Header />
          
          {/* Statistics Cards */}
          <StatsCards />
          
          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
            <AgeDistribution />
            <EducationChart />
          </div>
          
          {/* Household Statistics */}
          <HouseholdStats />
          
          {/* District Map */}
          <DistrictMap />
        </main>
      </div>
    </div>
  );
}


export default App;
