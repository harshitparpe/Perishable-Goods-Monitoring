import React, { useState } from "react";
import "./style/Calendar.css";

const Calendar = () => {
  const [currentDate] = useState(new Date());

  const monthNames = [
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

  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentYear,
    currentDate.getMonth(),
    1
  ).getDay();

  const days = [];

  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === currentDate.getDate();
    const isHighlighted = [14, 15, 16, 28, 29, 30].includes(day);

    days.push(
      <div
        key={day}
        className={`calendar-day ${isToday ? "today" : ""} ${
          isHighlighted ? "highlighted" : ""
        }`}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="calendar-card card">
      <div className="calendar-header">
        <button className="nav-btn">‹</button>
        <h3>{currentMonth}</h3>
        <button className="nav-btn">›</button>
      </div>

      <div className="calendar-weekdays">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid">{days}</div>
    </div>
  );
};

export default Calendar;
