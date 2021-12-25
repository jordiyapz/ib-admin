import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import useAxios from "axios-hooks";
import ActionCell from "./ActionCell";
import "./userList.css";

// const ENDPOINT_BASE = "http://localhost:8081/api";
const ENDPOINT_BASE = process.env.REACT_APP_ENDPOINT;

export default function UserList() {
  // mengambil data user
  const [{ data, loading, error }, refetchUsers] = useAxios(`${ENDPOINT_BASE}/admin/getUser`);
  const [, deleteUser] = useAxios({ method: "DELETE" }, { manual: true });
  if (error) return <h1>Error fetching user</h1>;

  const getDeleteEndpoint = (id) =>
    `${ENDPOINT_BASE}/admin/users/${Number(id)}`;

  const handleDelete = async (id) => {
    try {
      await deleteUser({ url: getDeleteEndpoint(id) });
      await refetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const columnSchemas = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nama", headerName: "Nama", width: 130 },
    { field: "nik", headerName: "NIK", width: 120 },
    { field: "email", headerName: "Email", width: 120 },
    { field: "no_hp", headerName: "HP", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <ActionCell userId={params.row.id} onDelete={handleDelete} />
      ),
    },
  ];

  return (
    <div className="userList">
      <div className="topBarList">
        <h2 className="titleList">User List</h2>
        <Link
          to={"/newUser"}
          style={{
            textDecoration: "none",
          }}
        >
          <Button variant="contained" startIcon={<Add />}>
            Add New User
          </Button>
        </Link>
      </div>
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid
          loading={loading}
          rows={data === undefined ? [] : data.data}
          columns={columnSchemas}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
