import React from 'react';
import DatePicker from '../../../../Components/Common/DatePicker';
import CalendarPicker from '../../../../Components/Common/CalendarPicker';

import TooltipComponent from '../../../../Components/Common/Tooltip';
const CalendarContainer = () => {
  const { CalendarComponent, selectedDate } = DatePicker();

  return (
    <div>
     <CalendarComponent />
     <TooltipComponent
     color='white'
     bgColor='blue'
     pointPosition='left'
     content='이걸말하고 싶었다니까?'
     isActive={true}
     >
     <b style={{ fontSize: '18px', }}>선택된날짜 :{selectedDate}</b>
     </TooltipComponent>
  
      <CalendarPicker style={{}}/>
    </div>
  )
}

export default CalendarContainer;