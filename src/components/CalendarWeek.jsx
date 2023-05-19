import styles from "./CalendarWeek.module.css";
import { startOfWeek, addDays } from "date-fns";
import Day from "./Day";

function CalendarWeek() {
  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekDays = [];

  for (let i = 0; i < 7; i++) {
    const nextDay = addDays(new Date(startDate), i);
    weekDays.push(new Intl.DateTimeFormat().format(nextDay));
  }

  return (
    <div className={styles.calendarWeek}>
      <table>
        <thead>
          <tr>
            <td>Available</td>
            <td>Date</td>
            <td>Weekday</td>
            <td>from</td>
            <td>to</td>
            <td>Comment</td>
          </tr>
        </thead>
        <tbody>
          <Day date={weekDays[0]} day={"Monday"} />
          <Day date={weekDays[1]} day={"Tuesday"} />
          <Day date={weekDays[2]} day={"Wednesday"} />
          <Day date={weekDays[3]} day={"Thursday"} />
          <Day date={weekDays[4]} day={"Friday"} />
          <Day date={weekDays[5]} day={"Saturday"} />
          <Day date={weekDays[6]} day={"Sunday"} />
        </tbody>
      </table>
    </div>
  );
}

export default CalendarWeek;
