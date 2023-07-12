const time = document.querySelector('.time');
const dateHTML = document.querySelector('.date');
const dayWeekHTML = document.querySelector('.day-week');

const addZero = (num) => {
  return num < 10 ? '0' + num : num;
};

const timeChange = () => {
  const daysWeekArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dateObj = new Date();

  const hours = addZero(dateObj.getHours());
  const minutes = addZero(dateObj.getMinutes());
  const seconds = addZero(dateObj.getSeconds());

  const date = addZero(dateObj.getDate());
  const month = addZero(dateObj.getMonth() + 1);
  const year = dateObj.getFullYear();

  const dayWeek = daysWeekArray[dateObj.getDay()];

  time.textContent = hours + ' : ' + minutes + ' : ' + seconds;
  dateHTML.textContent = `${date}/${month}/${year}`;
  dayWeekHTML.textContent = dayWeek;
};

setInterval(timeChange, 1000);

export default timeChange;
