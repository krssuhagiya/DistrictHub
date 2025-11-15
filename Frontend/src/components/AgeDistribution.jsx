import React, { useContext, useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { TalukaContext } from '../contexts/TalukaContext.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AgeDistribution = () => {
  const { talukaData } = useContext(TalukaContext);
  const arr = Array.isArray(talukaData) ? talukaData : [];

  const toNumber = (v) => {
    if (typeof v === 'number') return v;
    const s = String(v || '').trim();
    const gu = '૦૧૨૩૪૫૬૭૮૯';
    const en = '0123456789';
    let t = '';
    for (const ch of s) {
      const i = gu.indexOf(ch);
      t += i >= 0 ? en[i] : ch;
    }
    const n = parseInt(t, 10);
    return isNaN(n) ? 0 : n;
  };

  const totals = useMemo(() => {
    let male = 0, female = 0, children = 0;
    for (const r of arr) {
      male += toNumber(r['Male']);
      female += toNumber(r[' Female']);
      children += toNumber(r['children']);
    }
    return { male, female, children };
  }, [talukaData, arr]);

  const data = {
    labels: ['Children', 'Female', 'Male'],
    datasets: [
      {
        data: [totals.children, totals.female, totals.male],
        backgroundColor: ['#EF4444', '#22C55E', '#FBBF24'],
        borderWidth: 0,
        cutout: '0%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Population Distribution</h3>
      <div className="h-64">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default AgeDistribution;
