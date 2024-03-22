import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Completed', value: 10 },
  { name: 'Pending', value: 8 },
  { name: 'Cancelled', value: 2 },
];
const COLORS = ['#2D9D46', '#E63E36', '#2cb766'];
const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
