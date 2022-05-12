import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { InputAdornment } from "@mui/material";
import {
  AddPhotoAlternate,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import {
  createFile,
  getUserData,
  updateUserData,
  uploadUserData,
} from "../services/appwrite";
import { ConnectWallet } from "../components/ConnectWallet";
import AccountMenu from "../components/AccountMenu";

export default function EditDialog({ id }) {
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: "",
    walletAddress: "",
    about: "",
    twitter: "",
    linkedin: "",
    github: "",
    instagram: "",
    photo: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setUserData({
      ...userData,
      name: data.get("name"),
      walletAddress: data.get("walletAddress"),
      about: data.get("about"),
      twitter: data.get("twitter"),
      linkedin: data.get("linkedin"),
      github: data.get("github"),
      instagram: data.get("instagram"),
      //   photo: photo,
    });
    console.log(userData);
    try {
      const response = await uploadUserData(id, userData);
      console.log(response);
    } catch (error) {
      try {
        const response = await updateUserData(id, userData);
        console.log(response);
      } catch (error2) {
        console.log(error2);
      }
    }
  };

  const imageUpload = async (file) => {
    try {
      const response = await createFile(id, file);
      console.log(response);
      setUserData({ ...userData, photo: response.$id });
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await getUserData(id);
      console.log(response);
      setUserData(response);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Add Profile Details
      </Button> */}
      <AccountMenu openDialog={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Profile Details</DialogTitle>
        <form id="myform" onSubmit={handleSubmit}>
          <DialogContent>
            {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="file-upload"
                  type="file"
                  onChange={(e) => imageUpload(e.target.files[0])}
                />
                <label htmlFor="file-upload">
                  <Avatar
                    sx={{
                      m: 1,
                      bgcolor: "secondary.main",
                      width: 64,
                      height: 64,
                    }}
                    src={`${process.env.REACT_APP_APPWRITE_ENDPOINT}/storage/buckets/photos/files/${userData.photo}/view?project=${process.env.REACT_APP_APPWRITE_PROJECT_ID}&mode=admin`}
                    onClick={() => console.log("Pick file")}
                  >
                    <AddPhotoAlternate />
                  </Avatar>
                </label>
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  variant="filled"
                  margin="dense"
                  fullWidth
                  name="walletAddress"
                  label="Wallet Address"
                  id="walletAddress"
                  helperText="Enter ETH Domain or get from wallet"
                  autoFocus
                  value={userData.walletAddress}
                  onChange={(e) =>
                    setUserData({ ...userData, walletAddress: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <ConnectWallet userData={userData} setUserData={setUserData} />
                {/* <Button variant="outlined">🦊</Button>
                Connect Wallet */}
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  margin="dense"
                  autoComplete="name"
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  id="name"
                  autoFocus
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  margin="dense"
                  fullWidth
                  name="about"
                  label="About"
                  id="about"
                  placeholder="Short intro about yourself"
                  inputProps={{ maxLength: 60 }}
                  value={userData.about}
                  onChange={(e) =>
                    setUserData({ ...userData, about: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  fullWidth
                  name="twitter"
                  id="twitter"
                  label="Twitter"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Twitter />
                      </InputAdornment>
                    ),
                  }}
                  value={userData.twitter}
                  onChange={(e) =>
                    setUserData({ ...userData, twitter: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  fullWidth
                  name="linkedin"
                  id="linkedin"
                  label="LinkedIn "
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LinkedIn />
                      </InputAdornment>
                    ),
                  }}
                  value={userData.linkedin}
                  onChange={(e) =>
                    setUserData({ ...userData, linkedin: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  fullWidth
                  name="github"
                  id="github"
                  label="Github "
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <GitHub />
                      </InputAdornment>
                    ),
                  }}
                  value={userData.github}
                  onChange={(e) =>
                    setUserData({ ...userData, github: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  fullWidth
                  name="instagram"
                  id="instagram"
                  label="Instagram "
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Instagram />
                      </InputAdornment>
                    ),
                  }}
                  value={userData.instagram}
                  onChange={(e) =>
                    setUserData({ ...userData, instagram: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              //   onClick={handleSubmit}
              type="submit"
              form="myform"
              variant="outlined"
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
