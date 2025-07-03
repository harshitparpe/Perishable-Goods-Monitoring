import React, { useState } from "react";
import "./style/Calendar.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

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

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  // const currentDay = date.getDate();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const goToPrevMonth = () => {
    const prev = new Date(currentYear, currentMonth - 1);
    setDate(prev);
  };

  const goToNextMonth = () => {
    const next = new Date(currentYear, currentMonth + 1);
    setDate(next);
  };

  const days = [];

  // Empty cells for alignment
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      day === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear();

    const isHighlighted = [23].includes(day);

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
        <button className="nav-btn" onClick={goToPrevMonth}>
          ‹
        </button>

        <div className="calendar-title">
          <div className="calendar-year">{currentYear}</div>
          <div className="calendar-month">{monthNames[currentMonth]}</div>
        </div>

        <button className="nav-btn" onClick={goToNextMonth}>
          ›
        </button>
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
