import "./broadcast.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Broadcast() {
  return (
    <div className="broadcast">
      <h1 className="titleBroadcast">Pesan Broadcast</h1>
      <div className="broadcastContainer">
        <TextField
          id="outlined-multiline-static"
          label="Isi Pesan Broadcast"
          multiline
          rows={4}
        />
        <Button className="button" variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
}
