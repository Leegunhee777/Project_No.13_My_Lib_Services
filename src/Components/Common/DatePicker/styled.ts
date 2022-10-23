import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  border: 4px solid rgb(4 23 36);
  border-radius: 4px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #0b7db2;
`;

export const CalendarTitle = styled.b`
  font-size: 24px;
  color: #12316e;
`;

export const YearWrapper = styled.b`
  color: white;
  margin-top: 24px;
`;

export const CalendarHeader = styled.div`
  margin: 18px;
  button {
    width: 80px;
    height: 30px;
    padding: 0 15px;
    border: 0;
    border-radius: 3px;
    outline: none;
    &:hover {
      transform: scale(1.2);
    }
  }
  span {
    display: inline-block;
    margin: 0 50px;
    color: white;
  }
`;

export const TableWrapper = styled.table`
  border: 5px solid white;
`;

export const TrHeaderWrapper = styled.tr`
  display: flex;
  background: white;
  padding-bottom: 3px;
`;

export const ThHeaderWrapper = styled.th`
  border: none;
  width: 80px;
  display: flex;
  justify-content: flex-end;
`;
export const TrWrapper = styled.tr`
  display: flex;
`;

interface ShadowedProps {
  readonly isDifferMonth: any;
  readonly isSelectedDate: any;
  readonly isHoliday: any;
  readonly isToday: any;
}

export const TdWrapper = styled.td<ShadowedProps>`
  display: flex;
  border: none;
  outline: 1.5px solid gray;
  width: 80px;
  height: 80px;
  justify-content: flex-end;
  cursor: pointer;
  :hover {
    background-color: #fdcb6e;
  }
  background-color: ${({ isDifferMonth, isSelectedDate }: any) =>
    isSelectedDate
      ? '#fdcb6e'
      : isDifferMonth
      ? 'rgb(186 187 188 / 87%)'
      : 'white'};
  color: ${({ isHoliday, isToday }: any) =>
    isHoliday ? 'red' : isToday ? 'blue' : ''};
`;
