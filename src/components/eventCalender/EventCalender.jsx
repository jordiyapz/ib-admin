import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./eventCalender.css";

export default function EventCalender() {
  const [date, setDate] = React.useState(new Date());
  console.log(date);

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="eventCalender">
      <div className="eventCalenderWrap">
        <div className="datePicker">
          <h3>Pilih Tanggal Event</h3>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={1}>
              <Grid item xs={0} md={0}>
                <CalendarPicker
                  className="calender"
                  date={date}
                  onChange={(newDate) => setDate(newDate)}
                />
              </Grid>
            </Grid>
          </LocalizationProvider>
        </div>
      </div>
      <div className="eventCalenderWrap">
        <div className="Wrapper2">
          <h3 className="titleeventCalender">Event Massage</h3>
          <TextField
            id="outlined-multiline-flexible"
            label="Pesan Event"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
          <Button className="button" variant="contained">Submit</Button>
        </div>
      </div>
    </div>
  );
}
