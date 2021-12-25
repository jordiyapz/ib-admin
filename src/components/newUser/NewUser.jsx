import { Box, styled } from "@mui/material";
import useAxios from "axios-hooks";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { StyledFieldError } from "../FieldError";
import TextField2 from "../TextField2";
import UploadBtn from "../UploadBtn";
import "./newUser.css";

const StyledUploadBtn = styled(UploadBtn)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const NewUser = () => {
  const navigateTo = useNavigate();
  const [{ error }, postUser] = useAxios(
    {
      method: "POST",
      url: process.env.REACT_APP_ENDPOINT + "/register",
    },
    { manual: true }
  );
  const [{}, refetchUser] = useAxios(
    process.env.REACT_APP_ENDPOINT + "/admin/getUser",
    { manual: true }
  );

  const formikSetup = {
    initialValues: {
      username: "",
      nama: "",
      email: "",
      password: "",
      confirmPassword: "",
      no_hp: "",
      no_hp_alternatif: "",
      alamat: "",
      pekerjaan: "",
      isHamil: "",
      avatar: "",
      status: "",
      nik: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      faskes: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      nama: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(8).required(),
      confirmPassword: Yup.string()
        .min(8)
        .oneOf([Yup.ref("password"), null], "Password tidak sama")
        .required(),
      no_hp: Yup.string().required(),
      no_hp_alternatif: Yup.string().required(),
      alamat: Yup.string().required(),
      pekerjaan: Yup.string().required(),
      isHamil: Yup.string()
        .oneOf(
          ["Hamil", "Tidak hamil"],
          'Pilih salah satu diantara "Hamil" atau "Tidak hamil"'
        )
        .required(),
      avatar: Yup.string().required(),
      status: Yup.string().oneOf(["Bapak", "Ibu"]).required(),
      nik: Yup.string().length(16).required(),
      tempat_lahir: Yup.string().required(),
      tanggal_lahir: Yup.date().required(),
      faskes: Yup.string().max(20).required(),
    }),
    onSubmit: async (values) => {
      try {
        await postUser({
          data: {
            ...values,
            isHamil: values.isHamil === "Hamil",
            anak: [],
            adaAnak: false,
          },
        });
        await refetchUser();
        navigateTo("/users");
      } catch (error) {}
    },
  };

  // [TODO] Ubah semua input menjadi TextField
  return (
    <Formik {...formikSetup}>
      {(formik) => (
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <Form className="newUserForm">
            <TextField2 name="username" label="Username" placeholder="Risa" />
            <TextField2
              name="nama"
              label="Nama Lengkap"
              placeholder="Risa Budi"
            />
            <TextField2
              type="email"
              name="email"
              label="Email"
              placeholder="risa@gmail.com"
            />
            <TextField2
              type="password"
              name="password"
              label="Password"
              placeholder="password"
            />
            <TextField2
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="password"
            />
            <TextField2
              name="no_hp"
              label="Phone"
              placeholder="+62 823 456 78"
            />
            <TextField2
              name="no_hp_alternatif"
              label="Alternative Phone"
              placeholder="+62 823 456 78"
            />
            <TextField2
              name="alamat"
              label="Alamat"
              placeholder="Bandung, Jawa Barat"
            />
            <TextField2
              name="pekerjaan"
              label="Pekerjaan"
              placeholder="Ibu Rumah Tangga"
            />
            <TextField2
              name="status"
              label="Status"
              placeholder="Bapak / Ibu"
            />
            <TextField2
              name="isHamil"
              label="Status Kehamilan"
              placeholder="Hamil / Tidak hamil"
            />
            <TextField2 name="nik" label="NIK" placeholder="1234567891234567" />
            <TextField2
              name="tempat_lahir"
              label="Tempat Lahir"
              placeholder="Medan"
            />
            <TextField2
              name="tanggal_lahir"
              label="Tanggal Lahir"
              placeholder="YYYY-MM-DD (e.g., 2021-12-02)"
            />
            <TextField2 name="faskes" label="Fasilitas Kesehatan" />
            <Box
              sx={{
                width: "100%",
                mr: 2,
                mt: 1.25,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <StyledUploadBtn name="avatar" />
            </Box>
            <button type="submit" className="newUserButton">
              {formik.isSubmitting ? "Submitting..." : "Create"}
            </button>
            {error && (
              <StyledFieldError>
                {error?.response.data?.message ||
                  error?.response.data?.error ||
                  "Terjadi kesalahan"}
              </StyledFieldError>
            )}
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default NewUser;
