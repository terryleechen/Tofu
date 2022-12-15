import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

function AdminDashBoard() {
  return (
    <div>
      <Button
        variant="contained"
        component={Link}
        to={{ pathname: "/admin/add" }}
      >
        Add
      </Button>
      <Button
        variant="contained"
        component={Link}
        to={{ pathname: "/admin/list" }}
      >
        List
      </Button>
    </div>
  );
}
export default AdminDashBoard;
