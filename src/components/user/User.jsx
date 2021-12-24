import "./user.css";
import Button from "@mui/material/Button";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import useAxios from "axios-hooks";
import UserForm from "./UserForm";
import { useLogin } from "../../hooks/login";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

function User() {
  const { userId } = useParams();
  const [{ token, isLoggedIn }] = useLogin();
  const [{ data: userDataResult, loading: userLoading }, refetchUser] =
    useAxios(`${ENDPOINT}/admin/getUser`);
  const [, editUser] = useAxios(
    { url: `${ENDPOINT}/edit-ortu`, method: "PUT" },
    { manual: true }
  );

  if (!isLoggedIn) return <p>You must logged in first</p>;
  if (userLoading) return <p>Loading...</p>;

  // Pilih user dengan id `userId`
  const user = userDataResult?.data?.find((user) => {
    return user.id === Number(userId);
  });
  if (!userLoading && !user) return <h1>User tidak ditemukan</h1>;

  const handleSubmit = async (values) => {
    try {
      await editUser({
        headers: { "x-auth-token": token },
        data: { ...values, updatedAt: new Date().toISOString() },
      });
      await refetchUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link style={{ textDecoration: "none" }} to={"/newUser"}>
          <Button variant="contained">Create User</Button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={user.avatar}
              alt={`Foto avatar ${user.nama}`}
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.nama}</span>
              <span className="userShowUserTitle">{user.pekerjaan}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{user.tanggal_lahir}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{user.no_hp}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{user.alamat}</span>
            </div>
          </div>
        </div>
        <UserForm initialValues={user} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default User;
