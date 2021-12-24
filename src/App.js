import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./components/userList/UserList";
import EventCalender from "./components/eventCalender/EventCalender";
import User from "./components/user/User";
import NewUser from "./components/newUser/NewUser";
import Broadcast from "./components/broadcast/Broadcast";
import Artikel from "./components/artikel/Artikel";
import Logout from "./components/Logout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/event" element={<EventCalender />} />
          <Route path="/broadcast" element={<Broadcast />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
