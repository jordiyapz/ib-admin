import "./login.css";
import { TextField, Button } from "@material-ui/core";

export default function Login() {
  return (
    <div className="loginWrapper">
      <div className="loginForm">
        <div className="loginTitle">
          <h3>Login Admin</h3>
        </div>
        <TextField
          className="field"
          id="outlined-uncontrolled"
          label="Username"
          variant="outlined"
        />
        <TextField
          className="field"
          id="outlined-uncontrolled"
          label="Password"
          variant="outlined"
        />
        <Button variant="contained" className="button">Login</Button>
      </div>
    </div>
  );
}
