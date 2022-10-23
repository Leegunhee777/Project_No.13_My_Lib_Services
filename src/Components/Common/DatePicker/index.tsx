import React from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  getWeekOfMonth,
  startOfWeek,
  addDays,
} from 'date-fns';

import {
  CalendarWrapper,
  CalendarTitle,
  YearWrapper,
  CalendarHeader,
  TableWrapper,
  TrWrapper,
  TdWrapper,
  TrHeaderWrapper,
  ThHeaderWrapper,
} from './styled';
const useCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    format(new Date(), 'yyyyMMdd')
  );

  const [date, setDate] = React.useState(new Date());
  const activeDate = date;
  const activeMonth = format(activeDate, 'MM');
  const activeYear = format(activeDate, 'yyyy');

  //달의 시작일
  const firstDateofMonth = startOfMonth(activeDate);
  //달이 시작주
  const firstWeekOfMonth = getWeekOfMonth(firstDateofMonth);
  //달의 끝일
  const lastDateofMonth = endOfMonth(activeDate);
  //달의 마지막주
  const lastWeekOfMonth =
    getWeekOfMonth(lastDateofMonth) === 1
      ? 53
      : getWeekOfMonth(lastDateofMonth);

  const onClickNextMonth = () => {
    setDate(addMonths(activeDate, 1));
  };

  const onClickPreMonth = () => {
    setDate(subMonths(activeDate, 1));
  };

  const isToday = (firstDateofMonth: any, week: any, index: any) => {
    if (
      format(
        addDays(startOfWeek(firstDateofMonth), (week - 1) * 7 + index),
        'yyyyMMdd'
      ) === format(new Date(), 'yyyyMMdd')
    ) {
      return true;
    }
    return false;
  };

  const isHoliday = (index: any) => {
    if (index === 0 || index === 6) {
      return true;
    }
    return false;
  };

  const isDifferMonth = (firstDateofMonth: any, week: any, index: any) => {
    if (
      format(
        addDays(startOfWeek(firstDateofMonth), (week - 1) * 7 + index),
        'MM'
      ) !== format(firstDateofMonth, 'MM')
    ) {
      return true;
    }
    return false;
  };

  const isSelectedDate = (firstDateofMonth: any, week: any, index: any) => {
    if (
      format(
        addDays(startOfWeek(firstDateofMonth), (week - 1) * 7 + index),
        'yyyyMMdd'
      ) === selectedDate
    ) {
      return true;
    }
    return false;
  };

  const onClickHandler = (selectedDay: any) => {
    setSelectedDate(selectedDay);
  };

  const tableHeaderContent = () => {
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    return (
      <TrHeaderWrapper key="trHeader_01">
        {dayList?.map((value, index) => (
          <ThHeaderWrapper key={index}>{value}</ThHeaderWrapper>
        ))}
      </TrHeaderWrapper>
    );
  };
  const makeCalendarData = () => {
    let result = [tableHeaderContent()];
    for (let week = firstWeekOfMonth; week <= lastWeekOfMonth; week++) {
      result = result.concat(
        <TrWrapper key={week}>
          {Array(7)
            .fill(0)
            ?.map((data, index) => {
              return (
                <TdWrapper
                  key={index}
                  isDifferMonth={isDifferMonth(firstDateofMonth, week, index)}
                  isHoliday={isHoliday(index)}
                  isToday={isToday(firstDateofMonth, week, index)}
                  isSelectedDate={isSelectedDate(firstDateofMonth, week, index)}
                  onClick={() => {
                    onClickHandler(
                      format(
                        addDays(
                          startOfWeek(firstDateofMonth),
                          (week - 1) * 7 + index
                        ),
                        'yyyyMMdd'
                      )
                    );
                  }}
                >
                  <span style={{ margin: '6px' }}>
                    {format(
                      addDays(
                        startOfWeek(firstDateofMonth),
                        (week - 1) * 7 + index
                      ),
                      'dd'
                    )}
                  </span>
                </TdWrapper>
              );
            })}
        </TrWrapper>
      );
    }

    return result;
  };
  const CalendarComponent = () => {
    return (
      <CalendarWrapper>
        <CalendarTitle>달력</CalendarTitle>
        <YearWrapper>{activeYear} 년</YearWrapper>
        <CalendarHeader>
          <button
            name="prev"
       
            onClick={onClickPreMonth}
          >
            이전
          </button>
          <span>{activeMonth} 월</span>
          <button
            name="next"
   
            onClick={onClickNextMonth}
          >
            다음
          </button>
        </CalendarHeader>

        <TableWrapper>
          <tbody>{makeCalendarData()}</tbody>
        </TableWrapper>
      </CalendarWrapper>
    );
  };

  return {
    CalendarComponent,
    selectedDate,
  };
};

export default useCalendar;
