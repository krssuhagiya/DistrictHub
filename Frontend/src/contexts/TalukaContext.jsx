import React, { useState, useEffect } from 'react';
import { TalukaContext } from './TalukaContext.js';


const TalukaProvider = ({ children }) => {
  const [selectedTaluka, setSelectedTaluka] = useState('all');
  const [talukaData, setTalukaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!selectedTaluka) {
      setTalukaData(null);
      return;
    }

    setLoading(true);
    setError('');
    fetch(`/api/taluka/${encodeURIComponent(selectedTaluka)}`)
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => {
        setTalukaData(data?.data ?? null);
        setLoading(false);
      })
      .catch(() => {
        setError(`Failed to fetch data for ${selectedTaluka}`);
        setLoading(false);
      });
  }, [selectedTaluka]);

  return (
    <TalukaContext.Provider value={{
      selectedTaluka,
      setSelectedTaluka,
      talukaData,
      loading,
      error
    }}>
      {children}
    </TalukaContext.Provider>
  );
};

export default TalukaProvider;
