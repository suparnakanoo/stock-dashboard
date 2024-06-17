import React, { useState } from 'react';



function getDate() {
 const months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December",
 ];
 const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
  const today = new Date();
  const month = months[today.getMonth()];
  const date = today.getDate();
  const day = days[today.getDay()];
  return `${day}, ${month} ${date}`;
}

function App() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div className=''>
      <p className="text-neutral-500">{currentDate}</p>
    </div>
  );
}

export default App;