import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getResults } from '../utils/storage';

const ProgressChart = () => {
  const results = getResults() || [];

  return (
    <div className="progress-chart">
      <h2>Progress Over Time</h2>
      <LineChart
        width={600}
        height={300}
        data={results}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={(date) => new Date(date).toLocaleDateString()} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="typingSpeed" stroke="#8884d8" name="Typing Speed (WPM)" />
        <Line type="monotone" dataKey="accuracy" stroke="#82ca9d" name="Accuracy (%)" />
      </LineChart>
    </div>
  );
};

export default ProgressChart;