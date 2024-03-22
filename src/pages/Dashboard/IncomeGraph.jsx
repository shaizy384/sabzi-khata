import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DatePicker from 'tailwind-datepicker-react';
import DatePickerComponent from './DatePicker';

const SkeletonLoader = () => (

  <div className="animate-pulse bg-gray-300 rounded-lg h-[371px]">
    {/* Placeholder for loading state */}
  </div>
);
const IncomeGraph = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(false)
  const [income_type, setIncome_type] = useState("road")
  const road_income = [
    { "date": "2023-11-01", "income": 1500.00 },
    { "date": "2023-11-02", "income": 1200.50 },
    { "date": "2023-11-03", "income": 1800.25 },
    { "date": "2023-11-04", "income": 2000.75 },
    { "date": "2023-11-05", "income": 1600.90 },
    { "date": "2023-11-06", "income": 1400.30 },
    { "date": "2023-11-07", "income": 1750.60 },
    { "date": "2023-11-08", "income": 1900.10 },
    { "date": "2023-11-09", "income": 1650.80 },
    { "date": "2023-11-10", "income": 2100.45 }
  ];
  const restaurant_income = [
    { "date": "2023-11-01", "income": 1750.25 },
    { "date": "2023-11-02", "income": 1300.75 },
    { "date": "2023-11-03", "income": 1850.50 },
    { "date": "2023-11-04", "income": 2150.30 },
    { "date": "2023-11-05", "income": 1550.90 },
    { "date": "2023-11-06", "income": 1200.20 },
    { "date": "2023-11-07", "income": 1925.80 },
    { "date": "2023-11-08", "income": 2050.40 },
    { "date": "2023-11-09", "income": 1700.60 },
    { "date": "2023-11-10", "income": 1980.15 }
  ]

  const handleChange = (e) => {
    setIncome_type(e.target.value)
    console.log("value: ", income_type);
  }
  const handleStartDateChange = (selectedDate) => {
    setStartDate(selectedDate);
  };

  const handleEndDateChange = (selectedDate) => {
    setEndDate(selectedDate);
  };

  const filteredData = income_type === "road" ? road_income : restaurant_income;

  // Filter data based on selected date range
  const filteredIncomeData = filteredData.filter((item) => {
    if (startDate && endDate) {
      const currentDate = new Date(item.date);
      return currentDate >= startDate && currentDate <= endDate;
    }
    return true;
  });

  return (
    <>
      <div className="flex flex-col">
        {/* <!-- Dropdown --> */}
        <div className="mb-3 w-[fit-content]">
          <select id="countries" class="bg-gray-50 text-gray-900 font-semibold text-xl focus-visible:outline-none block w-full p-2.5" onChange={handleChange}>
            <option value="road" selected>Daily Income</option>
            <option value="restuarant">Revinew Income</option>
          </select>
        </div>

        <div className="flex flex-col justify-between mb-4 p-4 rounded bg-white h-[371px]">

          {/* <!-- Dropdown Date Picker --> */}
          <div className='flex items-center'>
            <DatePickerComponent label="Start Date" onChange={handleStartDateChange} />
            <span className='mx-2 text-gray-500'>to</span>
            <DatePickerComponent label="End Date" onChange={handleEndDateChange} />
          </div>

          {/* <!-- Graph --> */}
          {loading ? <SkeletonLoader /> :
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={900}
                data={filteredIncomeData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke='#F7FAFC' />
                <XAxis dataKey="date" axisLine={false} />
                <YAxis dataKey="income" orientation='right' axisLine={false} />
                <Tooltip />
                <Legend />
                <Line type="linear" dataKey="income" stroke="#2cb766" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          }
        </div>
      </div>
    </>
  )
}

export default IncomeGraph