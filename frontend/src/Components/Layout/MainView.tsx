import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import AdminDashBoard from "../Admin/AdminDashboard";
import NavBar from "./NavBar";

function MainView() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
          <Grid container>
            <Grid item xs={0.75} className="bg-gray-500 h-screen">
              sidebar
            </Grid>
            {/** views  maybe a side bar thing*/}
            <Grid item xs={11.25}>
              <Stack spacing={2}>
                {/** SET UP DASHBOARD VIEWS */}
                <Outlet />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default MainView;
