import { DeleteOutline } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const ActionCell = ({ userId, onClick }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick(userId, e);
    }
  };

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
      <IconButton onClick={handleDelete}>
        <DeleteOutline style={{ color: "red" }} />
      </IconButton>
    </Stack>
  );
};

export default ActionCell;
