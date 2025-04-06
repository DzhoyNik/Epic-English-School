import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart, LineController, LineElement } from 'chart.js/auto';

import "../css/test.css";

Chart.register(LineController, LineElement);

const CustomerData = [
    {
        id: 1,
        year: 2017,
        customersLost: 820,
        customersGained: 60000
    },
    {
        id: 2,
        year: 2018,
        customersLost: 435,
        customersGained: 35000
    },
    {
        id: 3,
        year: 2019,
        customersLost: 565,
        customersGained: 48000
    },
    {
        id: 4,
        year: 2020,
        customersLost: 230,
        customersGained: 50000
    },
    {
        id: 5,
        year: 2021,
        customersLost: 120,
        customersGained: 40000
    },
];

const Test = () => {
    const data = {
        labels: CustomerData.map((data) => data.year),
        datasets: [
          {
            label: 'Cutomers Gained',
            data: CustomerData.map((data) => data.customersGained),
            backgroundColor: ['#4FD1C5'],
            borderColor: "#48DD00",
            fill: true,
          },
        ],
      };
    
      return (
        <div>
          <h1 style={{ color: '#319795' }}>Bar Chart</h1>
          <Line data={data} />
        </div>
      );
}

export default Test;