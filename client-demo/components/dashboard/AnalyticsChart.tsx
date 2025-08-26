// components/dashboard/AnalyticsChart.tsx
"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
];

// Types for tooltip to avoid `any`
interface TooltipPayloadItem { value?: number }
interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}

// Custom Tooltip for a more polished look
const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && Array.isArray(payload) && payload.length) {
    const value = typeof payload[0]?.value === 'number' ? payload[0].value : 0;
    return (
      <div className="p-2 bg-white/80 backdrop-blur-sm border border-[#85421C]/20 rounded-lg shadow-lg">
        <p className="label font-semibold text-[#6B3416]">{label}</p>
        <p className="intro text-gray-700">Revenue : ${value}</p>
      </div>
    );
  }
  return null;
};

export const AnalyticsChart = () => {
  return (
    // ResponsiveContainer makes the chart adapt to its parent's size.
    // Setting height to "100%" makes it fill the parent div.
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: -10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
        <XAxis 
          dataKey="name" 
          stroke="#888888" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false}
        />
        <YAxis 
          stroke="#888888" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false}
          tickFormatter={(value) => `$${value/1000}K`}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(133, 66, 28, 0.1)' }} />
        <Legend iconSize={10} />
        <Bar dataKey="revenue" fill="#f8ceb5ff" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
