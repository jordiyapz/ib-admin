import "./sidebar.css";
import {
  PersonOutline,
  Podcasts,
  Article,
  EventAvailable,
} from "@mui/icons-material/";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Pengguna</h3>
          <ul className="sidebarList">
            <Link
              to="/users"
              style={{
                textDecoration: "none",
                color: "inherit",
                margin: 0,
                padding: 0,
              }}
            >
              <li className="sidebarListItem">
                <PersonOutline className="sidebarIcon" />
                Users
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Pesan Broadcast</h3>
          <ul className="sidebarList">
            <Link
              to="/broadcast"
              style={{
                textDecoration: "none",
                color: "inherit",
                margin: 0,
                padding: 0,
              }}
            >
              <li className="sidebarListItem">
                <Podcasts className="sidebarIcon" />
                Broadcast
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Tulis Artikel</h3>
          <ul className="sidebarList">
          <Link
              to="/artikel"
              style={{
                textDecoration: "none",
                color: "inherit",
                margin: 0,
                padding: 0,
              }}
            >
            <li className="sidebarListItem">
              <Article className="sidebarIcon" />
              Artikel
            </li>
            </ Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Event Kalender</h3>
          <ul className="sidebarList">
            <Link
              to="/event"
              style={{
                textDecoration: "none",
                color: "inherit",
                margin: 0,
                padding: 0,
              }}
            >
              <li className="sidebarListItem">
                <EventAvailable className="sidebarIcon" />
                Kalender
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
