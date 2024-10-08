import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Chart from './Chart';
import './Summary.css';

const Summary = ({ formData }) => {
    // Calculate totals
    const housingCosts = (parseFloat(formData.housingCosts.rent) || 0) + 
                         (parseFloat(formData.housingCosts.utilities) || 0) + 
                         (parseFloat(formData.housingCosts.water) || 0) + 
                         (parseFloat(formData.housingCosts.internet) || 0) + 
                         (parseFloat(formData.housingCosts.councilTax) || 0);
    
    const outgoings = (parseFloat(formData.outgoings.personalCare) || 0) + 
                      (parseFloat(formData.outgoings.transport) || 0) + 
                      (parseFloat(formData.outgoings.food) || 0);
    
    const subscriptions = (parseFloat(formData.subscriptions.gym) || 0) + 
                          (parseFloat(formData.subscriptions.audible) || 0) + 
                          (parseFloat(formData.subscriptions.amazonPrime) || 0);
    
    const income = (parseFloat(formData.finance.income) || 0);
    const totalExpenses = housingCosts + outgoings + subscriptions;
    const remainingIncome = income - totalExpenses;

    // Function to generate and download the PDF
    const generatePdf = () => {
        const input = document.getElementById('summary-content');

        // Use html2canvas to capture the content of the summary
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            // Calculate the dimensions to fit the A4 page
            const imgWidth = 184; // width of the image
            const pageHeight = pdf.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // aspect ratio
            let heightLeft = imgHeight;

            let position = 0;

            // Add image to PDF and handle page breaks if necessary
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Save the generated PDF
            pdf.save('summary.pdf');
        });
    };

    return (
        <div>
            <div id="summary-content">
                <div className="chart-container">
                    <Chart data={formData} />
                </div>

                <div className="summary-container">
                    <div className="summary-section">
                        <h3>Housing Costs</h3>
                        <p>Rent: £{formData.housingCosts.rent || 0}</p>
                        <p>Utilities: £{formData.housingCosts.utilities || 0}</p>
                        <p>Water: £{formData.housingCosts.water || 0}</p>
                        <p>Internet: £{formData.housingCosts.internet || 0}</p>
                        <p>Council Tax: £{formData.housingCosts.councilTax || 0}</p>
                    </div>
                    <div className="summary-section">
                        <h3>Outgoings</h3>
                        <p>Personal Care: £{formData.outgoings.personalCare || 0}</p>
                        <p>Transport: £{formData.outgoings.transport || 0}</p>
                        <p>Food: £{formData.outgoings.food || 0}</p>
                    </div>
                    <div className="summary-section">
                        <h3>Finance</h3>
                        <p>Income: £{formData.finance.income || 0}</p>
                        <p>Savings: £{formData.finance.savings || 0}</p>
                        <p>Investments: £{formData.finance.investments || 0}</p>
                    </div>
                    <div className="summary-section">
                        <h3>Subscriptions</h3>
                        <p>Gym: £{formData.subscriptions.gym || 0}</p>
                        <p>Audible: £{formData.subscriptions.audible || 0}</p>
                        <p>Amazon Prime: £{formData.subscriptions.amazonPrime || 0}</p>
                    </div>
                </div>

                <div className="income-status">
                    <h3>Income Coverage Status</h3>
                    <p>Total Expenses: £{totalExpenses.toLocaleString()}</p>
                    <p>Total Income: £{income.toLocaleString()}</p>
                    {remainingIncome >= 0 ? (
                        <p>You have £{remainingIncome.toLocaleString()} left at the end of the month.</p>
                    ) : (
                        <p>You are in debt by £{Math.abs(remainingIncome).toLocaleString()}.</p>
                    )}
                </div>
            </div>

            <button onClick={generatePdf} className="download-btn">Download as PDF</button>
        </div>
    );
};

export default Summary;
