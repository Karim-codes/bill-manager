import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Chart.css'; // Import the CSS file

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data }) => {
    // Summing housing costs properly
    const housingCosts = parseFloat(data.housingCosts.rent || 0) + 
                         parseFloat(data.housingCosts.utilities || 0) + 
                         parseFloat(data.housingCosts.water || 0) + 
                         parseFloat(data.housingCosts.internet || 0) + 
                         parseFloat(data.housingCosts.councilTax || 0);

    const outgoings = parseFloat(data.outgoings.personalCare || 0) + 
                      parseFloat(data.outgoings.transport || 0) + 
                      parseFloat(data.outgoings.food || 0) + 
                      (parseFloat(data.outgoings.entertainment || 0) || 0);
                      
    const subscriptions = parseFloat(data.subscriptions.gym || 0) + 
                          parseFloat(data.subscriptions.audible || 0) + 
                          parseFloat(data.subscriptions.amazonPrime || 0) + 
                          (parseFloat(data.subscriptions.netflix || 0) || 0) + 
                          (parseFloat(data.subscriptions.spotify || 0) || 0);
                          
    const finance = parseFloat(data.finance.income || 0) + 
                    parseFloat(data.finance.savings || 0) + 
                    parseFloat(data.finance.investments || 0); 

    const chartData = {
        labels: ['Housing Costs', 'Outgoings', 'Subscriptions', 'Finance'],
        datasets: [
            {
                label: 'Monthly Expenses',
                data: [housingCosts, outgoings, subscriptions, finance],
                backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0', '#FFCE56'],
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': £' + tooltipItem.raw.toLocaleString(); // Format the tooltip
                    }
                }
            }
        }
    };

    return (
        <div className="chart-container">
            <h2 className="chart-title">Monthly Expenses Overview</h2>
            <Pie className="chart" data={chartData} options={options} />
        </div>
    );
};

export default Chart;
