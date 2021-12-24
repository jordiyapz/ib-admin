import "./user.css";
import { Publish } from "@mui/icons-material/";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField1 from "../TextField1";

const UserForm = ({ initialValues, onSubmit }) => {
  // Setting untuk Formik
  const formikSetup = {
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string().required(),
      nama: Yup.string().required(),
      alamat: Yup.string(),
      email: Yup.string().email().required(),
      no_hp: Yup.string().required(),
      avatar: Yup.mixed().required(),
    }),
    onSubmit,
  };

  return (
    <div className="userUpdate">
      <span className="userUpdateTitle">Edit</span>
      <Formik {...formikSetup}>
        {(formik) => (
          <Form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <TextField1
                  type="text"
                  name="username"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <TextField1
                  type="text"
                  name="nama"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <TextField1
                  type="text"
                  name="email"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <TextField1
                  type="text"
                  name="no_hp"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <TextField1
                  type="text"
                  name="alamat"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={initialValues.avatar}
                  alt={`Foto avatar ${initialValues.nama}`}
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" type="submit">
                {formik.isSubmitting ? "Loading..." : "Update"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
