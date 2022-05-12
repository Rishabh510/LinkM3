import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  getAllUsers,
  getWeekUserId,
  getUser,
  getUserData,
} from "../services/appwrite";
import { useNavigate } from "react-router-dom";
import EditDialog from "./EditDialog";
import { IconButton, InputBase, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import Item from "../components/Item";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import AccountMenu from "../components/AccountMenu";
import Highlight from "../components/Highlight";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        LinkM3
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [weekUser, setWeekUser] = React.useState(null);
  const [users, setUsers] = React.useState(null);

  async function initUser() {
    try {
      const response = await getUser();
      if (!response) navigate("/login");
      console.log(response);
      setUser(response);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }

  async function getWeekUser() {
    try {
      const response = await getWeekUserId();
      const response2 = await getUserData(response.id);
      setWeekUser(response2);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSearch(query) {
    console.log(query);
    try {
      const response = await getAllUsers(query);
      console.log("ALL: ", response.documents);
      setUsers(response.documents);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    initUser();
    getWeekUser();
    handleSearch();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Container component="main" maxWidth="lg">
            <CssBaseline />
            <AppBar position="static" color="transparent" elevation={0}>
              <Toolbar sx={{ flexWrap: "wrap" }}>
                <Typography
                  variant="h4"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
                >
                  LinkM3
                </Typography>
                {user && <EditDialog id={user.$id} />}
              </Toolbar>
            </AppBar>
            {weekUser && <Highlight user={weekUser} />}
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Search */}
              <Paper
                // component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "50vw",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search user by their ETH Domain"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <IconButton sx={{ p: "10px" }} aria-label="search">
                  <Search />
                </IconButton>
              </Paper>
              <Container>
                {users && (
                  <Box sx={{ flexGrow: 1, color: "black" }}>
                    <Grid item xl={12}>
                      <Typography
                        sx={{ mt: 4, mb: 2 }}
                        variant="h6"
                        component="div"
                      ></Typography>
                      <Demo>
                        <List>
                          {users.map((item) => (
                            <Item user={item} key={item.walletAddress} />
                          ))}
                        </List>
                      </Demo>
                    </Grid>
                  </Box>
                )}
              </Container>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </header>
      </div>
    </ThemeProvider>
  );
}
