import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerDate() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}

// export default function DatePickerDate({ customStyles = {} }) {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker
//       //   style={{ ...customStyles }}
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//     />
//   );
// }
