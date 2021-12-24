import { Button } from "@material-ui/core";
import { TextField } from "formik-mui";
import { useLogin } from "../../hooks/login";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router";
import "./login.css";

export default function Login() {
  const [{ error, loading, isLoggedIn }, { run: execLogin }] = useLogin();

  if (isLoggedIn) {
    // Kembali ke home setelah login
    return <Navigate to="/" replace />;
  }

  const formikSetup = {
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: async ({ username, password }, { resetForm }) => {
      try {
        await execLogin(username, password);
      } catch (error) {
        resetForm();
      }
    },
  };

  return (
    <div className="loginWrapper">
      <Formik {...formikSetup}>
        {(formik) => (
          <Form>
            <div className="loginForm">
              <div className="loginTitle">
                <h3>Login Admin</h3>
              </div>

              <Field
                component={TextField}
                name="username"
                className="field"
                id="outlined-uncontrolled"
                label="Username"
                variant="outlined"
              />
              <Field
                password
                component={TextField}
                name="password"
                className="field"
                id="outlined-uncontrolled"
                label="Password"
                variant="outlined"
              />
              {!!error && (
                <p style={{ color: "red" }}>Wrong username or password!</p>
              )}
              <Button type="submit" variant="contained" className="button">
                {loading ? "Loading..." : "Login"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
