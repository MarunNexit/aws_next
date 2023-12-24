"use client"
import styles from "./form-container1.module.css";
import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import {GetMyManuscriptPeriod} from "@/app/functions/manuscripts/GetMyManuscriptPeriod";

const Chart = ({state, role}) => {

    const [tempChartData, setTempChartData] = useState([]);
    const currentDate = new Date();
    const [categoriesChart, setCategoriesChart] = useState([]);
    const [period, setPeriod] = useState("week");
    const [isMounted, setIsMounted] = useState(false);

    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: 'manuscript-chart',
            },
            xaxis: {
                categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: false,
            },
            title: {
                text: 'Кількість рукописів за тиждень',
                align: 'center',
                style: {
                    fontSize: '24px',
                },
            },
        },
        series: [
            {
                name: 'Ви',
                data: [0, 0, 0, 0, 0, 0, 0],
            },

            // Додайте інші автори за потребою
        ],
    });


    const OnWeek = () => {
        if(role === "author"){
            const defaultCategories = [(currentDate.getDay() - 6 + 7) % 7, (currentDate.getDay() - 5 + 7) % 7, (currentDate.getDay() - 4 + 7) % 7, (currentDate.getDay() - 3 + 7) % 7, (currentDate.getDay() - 2 + 7) % 7, (currentDate.getDay() - 1 + 7) % 7, currentDate.getDay()];

            const convertedCategories = defaultCategories.map(dayNumber => {
                // Ваша логіка перетворення числа на назву дня тижня
                switch (dayNumber) {
                    case 0:
                        return "Пн";
                    case 1:
                        return "Вт";
                    case 2:
                        return "Ср";
                    case 3:
                        return "Чт";
                    case 4:
                        return "Пт";
                    case 5:
                        return "Сб";
                    case 6:
                        return "Нд";
                    default:
                        return ""; // Ви можете додати власну логіку обробки інших значень
                }
            });

            console.log(convertedCategories)
            setIsMounted(true)
            setCategoriesChart(convertedCategories);
        }
    };


    const OnMonth = () => {
        if(role === "author"){
            const defaultCategories = ["Тиждень 1","Тиждень 2","Тиждень 3","Тиждень 4"];

            console.log(defaultCategories)
            setIsMounted(true)
            setCategoriesChart(defaultCategories);
        }
    };



    useEffect(() => {
        if(state === "week"){
            OnWeek()
        }
        else{
            OnMonth()
        }
    }, []);

    useEffect(() => {
        if(isMounted){
            console.log(tempChartData)
            setChartData({ ...chartData, options: { ...chartData.options, xaxis: { categories: categoriesChart } } })

            async function WritingsInfoPeriod() {
                try {
                    const newTemp = await GetMyManuscriptPeriod(period)
                    console.log(newTemp)
                    setTempChartData(newTemp);

                } catch (error) {
                    console.log(error)
                }
            }
            WritingsInfoPeriod()
        }
    }, [categoriesChart]);


    useEffect(() => {
        if(isMounted) {
            console.log(tempChartData)
            if(period === "week"){
                const sortedData = categoriesChart.map(day => tempChartData[day]);
                const seriesData = Object.values(sortedData);
                console.log(seriesData)
                setChartData({
                    ...chartData,
                    series: [{data: seriesData}],
                });
            }
            else if (period === "month"){

            }
        }

    }, [tempChartData]);


  return (
    <div className={styles.bigField}>
        <div>
            <div>
                <select className={styles.Selector}
                    onChange={(e) => {
                        const selectedOption = e.target.value;
                        if (selectedOption === 'week') {
                            setPeriod("week")
                            OnWeek()

                        } else if (selectedOption === 'month') {
                            setPeriod("month")

                            setChartData({
                                ...chartData,
                                options: {
                                    ...chartData.options,
                                    xaxis: { categories: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень'] },
                                },
                            });
                            OnMonth()
                        }
                    }}
                >
                    <option value="week">Тиждень</option>
                    <option value="month">Місяць</option>
                </select>
                {/* Додайте інші кнопки для зміни періоду відображення */}
            </div>
            <ReactApexChart options={chartData.options} series={chartData.series} type="bar" width={800} />
        </div>
    </div>
  );
};

export default Chart;
