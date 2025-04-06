import { Line } from 'react-chartjs-2';
import { Chart, LineController, LineElement } from "chart.js";

Chart.register(LineController, LineElement);

const customerData = [
    {
        id: 1,
        day: "00:00",
        customersGained: 2000
    },
    {
        id: 2,
        day: "01:00",
        customersGained: 10000
    },
    {
        id: 3,
        day: "02:00",
        customersGained: 7500
    },
    {
        id: 4,
        day: "03:00",
        customersGained: 4000
    },
    {
        id: 5,
        day: "04:00",
        customersGained: 7000
    },
    {
        id: 6,
        day: "05:00",
        customersGained: 1000
    },
    {
        id: 7,
        day: "06:00",
        customersGained: 1200
    },
    {
        id: 8,
        day: "07:00",
        customersGained: 12000
    },
    {
        id: 9,
        day: "08:00",
        customersGained: 500
    },
    {
        id: 10,
        day: "09:00",
        customersGained: 9000
    }
];

const customerData2 = [
    {
        id: 1,
        day: "00:00",
        customersGained: 5000
    },
    {
        id: 2,
        day: "01:00",
        customersGained: 1000
    },
    {
        id: 3,
        day: "02:00",
        customersGained: 3500
    },
    {
        id: 4,
        day: "03:00",
        customersGained: 4900
    },
    {
        id: 5,
        day: "04:00",
        customersGained: 7900
    },
    {
        id: 6,
        day: "05:00",
        customersGained: 6000
    },
    {
        id: 7,
        day: "06:00",
        customersGained: 5200
    },
    {
        id: 8,
        day: "07:00",
        customersGained: 12000
    },
    {
        id: 9,
        day: "08:00",
        customersGained: 500
    },
    {
        id: 10,
        day: "09:00",
        customersGained: 9000
    }
];

const ChartCourses = () => {
    const chartData = {
        labels: customerData.map((data) => data.day),
        datasets: [
            {
                label: "Test text",
                data: customerData.map((data) => data.customersGained),
                lineTension: 0.5,
                fill: true,
                borderColor: "#4eec6ec3",
                backgroundColor: "#4eec6e45",
                pointBorderColor: "#40aaf6",
                pointBackgroundColor: "#40aaf6",
                pointRadius: 5,
            },
            {
                label: "Test text2",
                data: customerData2.map((data) => data.customersGained),
                lineTension: 0.5,
                fill: true,
                borderColor: "#c24eecea",
                backgroundColor: "#c24eec45",
                pointBorderColor: "#40aaf6",
                pointBackgroundColor: "#40aaf6",
                pointRadius: 5,
            }
        ]
    }

    return (
        <Line data={chartData} />
    )
}

export default ChartCourses