import React, { useState } from 'react'
import DatePicker from 'tailwind-datepicker-react'
const DatePickerComponent = ({ onChange }) => {
    const currentDate=new Date();
    const options = {
        title: "Select Date",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        clearBtnText: "Clear",
        maxDate: currentDate,
        minDate: new Date("2023-01-01"),
        theme: {
            background: "bg-white",
            todayBtn: "bg-yellowPrimary hover:bg-yellow-500 ",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "text-gray-400",
            input: "border bg-white focus:border-yellowPrimary ring-transparent focus:ring-yellowPrimary focus-visible: border-yellowPrimary",
            inputIcon: "",
            selected: "bg-yellowPrimary",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span>Previous</span>,
            next: () => <span>Next</span>,
        },
        datepickerClassNames: "top-30",
        defaultDate: new Date(),
        language: "en",
        disabledDates: [],
        weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }
    const handleChange = (selectedDate) => {
        console.log(selectedDate);
        onChange(selectedDate); // Pass the selected date to the parent component
      };
    const [show, setShow] = useState (false)
	const handleClose = (state) => {
		setShow(state)
	}
  return (
    <div className='m-2'>
    <DatePicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
</div>
  )
}

export default DatePickerComponent