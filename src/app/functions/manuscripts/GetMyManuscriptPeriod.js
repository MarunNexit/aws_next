
import {getAuthorManuscripts} from "@/app/functions/manuscripts/GetAuthorManuscripts";

export async function GetMyManuscriptPeriod(period) {
    try {
        const manuscripts = await getAuthorManuscripts();

        console.log(manuscripts)

        const currentDate = new Date();
        console.log(currentDate)

        if(period === "week"){
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(currentDate.getDate() - 7);

            const manuscriptsLastWeek = manuscripts.filter(item => {
                const itemDate = new Date(item.DateAdding);
                return itemDate >= oneWeekAgo && itemDate <= currentDate;
            });
            console.log(manuscriptsLastWeek)
            // Створюємо об'єкт для зберігання кількості рукописів для кожного дня тижня
            const manuscriptsByDay = {
                Пн: 0,
                Вт: 0,
                Ср: 0,
                Чт: 0,
                Пт: 0,
                Сб: 0,
                Нд: 0,
            };

            console.log(manuscriptsByDay)

            // Перебираємо дані з tempChartData і додаємо кількість рукописів для кожного дня
            if (manuscriptsLastWeek && manuscriptsLastWeek.length > 0) {
                console.log(manuscriptsLastWeek)
                manuscriptsLastWeek.forEach(author => {
                    console.log(author)
                    if ( Object.keys(author).length > 0) {
                        console.log(author)
                        console.log('manuscript.DateAdding:', author.DateAdding);
                        if (author.DateAdding) {
                            console.log('INSIDEmanuscript.DateAdding:', author.DateAdding);

                            const dateAdded = new Date(author.DateAdding);

                            // Check if the parsed date is a valid date
                            if (!isNaN(dateAdded.getTime())) {
                                const dayOfWeek = dateAdded.toLocaleDateString('en-US', { weekday: 'short' });

                                // Check if the dayOfWeek is a valid key in manuscriptsByDay
                                if(dayOfWeek === "Sun"){
                                    manuscriptsByDay["Нд"] += 1;
                                }
                                else if(dayOfWeek === "Mon"){
                                    manuscriptsByDay["Пн"] += 1;
                                }
                                else if(dayOfWeek === "Tue"){
                                    manuscriptsByDay["Вт"] += 1;
                                }
                                else if(dayOfWeek === "Wed"){
                                    manuscriptsByDay["Ср"] += 1;
                                }
                                else if(dayOfWeek === "Thu"){
                                    manuscriptsByDay["Чт"] += 1;
                                }
                                else if(dayOfWeek === "Fri"){
                                    manuscriptsByDay["Пт"] += 1;
                                }
                                else if(dayOfWeek === "Sat"){
                                    manuscriptsByDay["Сб"] += 1;
                                }
                            } else {
                                console.log('Invalid date:', author.DateAdding);
                            }


                        }
                    }
                });
            }
            console.log(manuscriptsByDay)

            return manuscriptsByDay
        }
        else if (period === "month") {
            const oneMonthAgo = new Date();
            oneMonthAgo.setMonth(currentDate.getMonth() - 1);

            const manuscriptsByWeek = [];
            const startOfWeek = new Date(oneMonthAgo);

            // Розділити місяць на тижні
            while (startOfWeek < currentDate) {
                const endOfWeek = new Date(startOfWeek);
                endOfWeek.setDate(endOfWeek.getDate() + 6);

                const manuscriptsThisWeek = manuscripts.filter(item => {
                    const itemDate = new Date(item.DateAdding);
                    return itemDate >= startOfWeek && itemDate <= endOfWeek;
                });

                manuscriptsByWeek.push({
                    startDate: startOfWeek.toISOString(),
                    endDate: endOfWeek.toISOString(),
                    manuscripts: manuscriptsThisWeek,
                });

                startOfWeek.setDate(endOfWeek.getDate() + 1);
            }
            const newArray = manuscriptsByWeek.slice(-4);
            return newArray;
        }
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}
