import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import {
  CameraAlt,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Demo = styled("div")(({ theme }) => ({
  // backgroundColor: "yellow",
  background: "rgb(194,190,255)",
  background:
    "linear-gradient(90deg, rgba(194,190,255,1) 0%, rgba(208,181,13,1) 35%, rgba(0,212,255,1) 100%)",
  borderRadius: "16px",
}));

export default function Highlight({ user }) {
  return (
    user && (
      <Demo>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          HIGHLIGHT OF THE WEEK
        </Typography>
        <Box sx={{ color: "black" }}>
          <ListItem
            alignItems="flex-start"
            secondaryAction={
              <div>
                <ButtonGroup variant="text" aria-label="text button group">
                  {user.twitter && (
                    <Button href={user.twitter} target="_blank">
                      <Twitter />
                    </Button>
                  )}
                  {user.linkedin && (
                    <Button href={user.linkedin} target="_blank">
                      <LinkedIn />
                    </Button>
                  )}
                  {user.github && (
                    <Button href={user.github} target="_blank">
                      <GitHub />
                    </Button>
                  )}
                  {user.instagram && (
                    <Button href={user.instagram} target="_blank">
                      <Instagram />
                    </Button>
                  )}
                </ButtonGroup>
              </div>
            }
          >
            <ListItemAvatar>
              <Avatar
                src={`${process.env.REACT_APP_APPWRITE_ENDPOINT}/storage/buckets/photos/files/${user.photo}/view?project=${process.env.REACT_APP_APPWRITE_PROJECT_ID}&mode=admin`}
              >
                <CameraAlt />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={user.walletAddress ? user.walletAddress : "No Address"}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {user.name ? user.name : "No Name"}
                  </Typography>
                  {user.about && ` -- ${user.about}`}
                </React.Fragment>
              }
            />
          </ListItem>
        </Box>
      </Demo>
    )
  );
}
