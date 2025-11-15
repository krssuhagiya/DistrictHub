import React, { useContext, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

import { TalukaContext } from '../contexts/TalukaContext.js';

const EducationChart = () => {
  const { talukaData } = useContext(TalukaContext);
  const arr = Array.isArray(talukaData) ? talukaData : [];

  const buckets = useMemo(() => {
    let yes = 0, no = 0, other = 0;
    for (const r of arr) {
      const v = String(r['Aadhaar Card'] || '').trim();
      if (v === 'હા') yes++;
      else if (v === 'ના') no++;
      else other++;
    }
    return { yes, no, other };
  }, [talukaData, arr]);

  const data = {
    labels: ['Yes', 'No', 'Other'],
    datasets: [
      {
        label: 'Aadhaar Availability',
        data: [buckets.yes, buckets.no, buckets.other],
        backgroundColor: ['#22C55E', '#EF4444', '#FBBF24'],
        borderRadius: 4,
        barThickness: 60,
      },
    ],
  };

  const maxVal = Math.max(...data.datasets[0].data, 0);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(10, maxVal + 5),
        grid: {
          display: true,
          color: '#F3F4F6',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Aadhaar Availability</h3>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default EducationChart;
