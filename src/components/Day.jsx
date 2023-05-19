import { useState } from "react";

function Day(props) {
  const [checked, setChecked] = useState(false);

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          value={checked}
          onChange={() => setChecked((checked) => !checked)}
        />
      </td>
      <td>{props.date}</td>
      <td>{props.day}</td>
      <td>
        {checked ? (
          <input name="timeFrom" type="time" />
        ) : (
          <input name="timeFrom" type="time" disabled />
        )}
      </td>
      <td>
        {checked ? (
          <input name="timeTo" type="time" />
        ) : (
          <input name="timeTo" type="time" disabled />
        )}
      </td>
      <td>
        <input name="comment" type="text" />
      </td>
    </tr>
  );
}

export default Day;
