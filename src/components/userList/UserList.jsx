import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Add, DeleteOutline } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import useAxios from "axios-hooks";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    sortable: false,
    renderCell: (params) => {
      return (
        <>
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
              margin: 0,
              padding: 0,
            }}
            to={"/user/" + params.row.id}
          >
            <Button
              style={{
                marginRight: "20px",
                backgroundColor: "#5cb996",
                textTransform: "capitalize",
                padding: "5px",
              }}
              variant="contained"
              color="secondary"
              size="small"
              sx={{ mr: 1 }}
            >
              Edit
            </Button>
          </Link>

          <DeleteOutline style={{ color: "red", cursor: "pointer" }} />
        </>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ENDPOINT_BASE = "http://localhost:8081/api";

export default function UserList() {
  const [{ data, loading, error }, refetch] = useAxios(
    `${ENDPOINT_BASE}/admin/getUser`
  );

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
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
