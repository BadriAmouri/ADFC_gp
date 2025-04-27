'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const ContinuousCalendar = ({ onClick }) => {
  const today = new Date();
  const monthRefs = useRef([]);
  const [year, setYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const monthOptions = monthNames.map((month, index) => ({ name: month, value: `${index}` }));

  const highlightStartDate = new Date(2025, 3, 1); // April 1, 2025
  const highlightEndDate = new Date(2025, 5, 30);  // June 30, 2025

  const scrollToMonth = (monthIndex) => {
    const targetElement = monthRefs.current[monthIndex];
    if (targetElement) {
      const container = document.querySelector('.calendar-container');
      const elementRect = targetElement.getBoundingClientRect();
      const is2xl = window.matchMedia('(min-width: 1536px)').matches;
      const offsetFactor = is2xl ? 3 : 2.5;

      if (container) {
        const containerRect = container.getBoundingClientRect();
        const offset =
          elementRect.top -
          containerRect.top -
          containerRect.height / offsetFactor +
          elementRect.height / 2;

        container.scrollTo({
          top: container.scrollTop + offset,
          behavior: 'smooth',
        });
      } else {
        const offset =
          window.scrollY +
          elementRect.top -
          window.innerHeight / offsetFactor +
          elementRect.height / 2;

        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      }
    }
  };

  const handlePrevYear = () => setYear((prevYear) => prevYear - 1);
  const handleNextYear = () => setYear((prevYear) => prevYear + 1);

  const handleMonthChange = (event) => {
    const monthIndex = parseInt(event.target.value, 10);
    setSelectedMonth(monthIndex);
    scrollToMonth(monthIndex);
  };

  const handleTodayClick = () => {
    setYear(today.getFullYear());
    scrollToMonth(today.getMonth());
  };

  const handleMonthClick = (month, year) => {
    if (!onClick) return;
    onClick(month, year);
  };

  const generateCalendar = useMemo(() => {
    return monthNames.map((monthName, monthIndex) => {
      const monthStartDate = new Date(year, monthIndex, 1);
      const monthEndDate = new Date(year, monthIndex + 1, 0);

      const isHighlighted =
        highlightStartDate <= monthEndDate && highlightEndDate >= monthStartDate;

      const isCurrentMonth =
        today.getFullYear() === year && today.getMonth() === monthIndex;

      return (
        <div
          key={monthIndex}
          ref={(el) => (monthRefs.current[monthIndex] = el)}
          onClick={() => handleMonthClick(monthIndex, year)}
          className={`flex items-center justify-center p-8 rounded-2xl border-2 font-semibold text-2xl cursor-pointer transition-all hover:border-cyan-400 ${
            isHighlighted ? 'bg-yellow-100 border-yellow-300' : 'bg-white border-gray-300'
          } ${isCurrentMonth ? 'bg-blue-100 border-blue-400' : ''}`}
        >
          {monthName}
        </div>
      );
    });
  }, [year]);

  useEffect(() => {
    const calendarContainer = document.querySelector('.calendar-container');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const month = parseInt(entry.target.getAttribute('data-month'), 10);
            if (!isNaN(month)) {
              setSelectedMonth(month);
            }
          }
        });
      },
      {
        root: calendarContainer,
        rootMargin: '-75% 0px -25% 0px',
        threshold: 0,
      }
    );

    monthRefs.current.forEach((ref, monthIndex) => {
      if (ref) {
        ref.setAttribute('data-month', monthIndex);
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="no-scrollbar calendar-container max-h-full overflow-y-scroll rounded-t-2xl bg-white pb-10 text-slate-800 shadow-xl">
      <div className="sticky -top-px z-50 w-full rounded-t-2xl bg-white px-5 pt-7 sm:px-8 sm:pt-8">
        <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <select
              name="month"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="rounded-lg border p-2"
            >
              {monthOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleTodayClick}
              type="button"
              className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 lg:px-5 lg:py-2.5"
            >
              Today
            </button>

            <button
              type="button"
              onClick={handlePrevYear}
              className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 lg:px-5 lg:py-2.5"
            >
              Previous Year
            </button>

            <button
              type="button"
              onClick={handleNextYear}
              className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 lg:px-5 lg:py-2.5"
            >
              Next Year
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {generateCalendar}
      </div>
    </div>
  );
};
