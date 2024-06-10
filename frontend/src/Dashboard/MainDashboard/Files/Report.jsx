import React from 'react';
import { Card, CardContent, Tab, Tabs } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Report = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [
    { month: 'Jan', products: 50, services: 100 },
    { month: 'Feb', products: 45, services: 95 },
    { month: 'Mar', products: 75, services: 125 },
    { month: 'Apr', products: 60, services: 110 },
    { month: 'May', products: 80, services: 120 },
    { month: 'Jun', products: 70, services: 115 },
    { month: 'Jul', products: 85, services: 150 },
    { month: 'Aug', products: 70, services: 100 },
    { month: 'Sep', products: 75, services: 105 },
  ];

  return (
   <div className='w-[55%] sm:w-2/4'>
     <div className="flex flex-col p-4 font-[Chivo] bg-white shadow-md rounded-md">
      <div className="pb-2">
        <h2 className="font-semibold text-base sm:text-xl text-gray-700">Recent Reports</h2>
      </div>

      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
        <Tab label="Products" />
        <Tab label="Services" />
      </Tabs>

      {value === 0 && (
        <Card>
          <CardContent>
            <LineChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="products" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </CardContent>
        </Card>
      )}

      {value === 1 && (
        <Card>
          <CardContent>
            <LineChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="services" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </CardContent>
        </Card>
      )}
    </div>
   </div>
  );
};

export default Report;
