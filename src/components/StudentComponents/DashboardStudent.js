import moment from 'moment';
import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
const localizer = momentLocalizer(moment);


const DashboardStudent = () => {

    const events = [
        // Events data
    ];
    
  return (
    <div>
        <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500 }} />
    </div>
  )
}

export default DashboardStudent
