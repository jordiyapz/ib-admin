import { DeleteOutline } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const ActionCell = ({ userId }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
          margin: 0,
          padding: 0,
        }}
        to={"/user/" + userId}
      >
        <Button
          style={{
            backgroundColor: "#5cb996",
            textTransform: "capitalize",
            padding: "5px",
          }}
          variant="contained"
          color="secondary"
          size="small"
        >
          Edit
        </Button>
      </Link>
      <IconButton>
        <DeleteOutline style={{ color: "red", cursor: "pointer" }} />
      </IconButton>
    </Stack>
  );
};

export default ActionCell;
