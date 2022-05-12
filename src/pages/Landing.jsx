import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import {
  BookmarkAdd,
  ConnectWithoutContactTwoTone,
  PersonSearch,
  Stars,
} from "@mui/icons-material";

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

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

const features = [
  {
    icon: <ConnectWithoutContactTwoTone />,
    description:
      "LinkM3 (pronounced 'link me') helps you connect on social Web2 profiles like Instagram, Discord, Twitter, LinkedIn, etc through your friend's wallet address/ETH domain.",
  },

  {
    icon: <PersonSearch />,
    description:
      "Moreover, LinkM3 also helps you discover other prominent Web3 players and connect with them.",
  },

  {
    icon: <Stars />,
    description:
      "Creator highlight system highlights the profile of a qualified creator (chosen randomly) once a week.",
  },
  {
    icon: <BookmarkAdd />,
    description:
      "You can also bookmark & view real-time feeds of your favorite cryptos/tokens and directly open respective authentic sites of your favorite Dapps!",
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            LinkM3
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#features"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              target="_blank"
              href="https://github.com/Rishabh510/LinkM3"
              sx={{ my: 1, mx: 1.5 }}
            >
              Github Code
            </Link>
          </nav>
          <Button
            href="/login"
            style={{
              borderRadius: 50,
              backgroundColor: "#21b6ae",
              padding: "8px 16px",
              fontSize: "18px",
            }}
            variant="contained"
            sx={{ my: 1, mx: 1.5 }}
          >
            Get Started
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Connect with the world's best web3 peeps!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          LinkM3 helps you connect to Web3 builders on social Web2 profiles like
          Instagram, Discord, Twitter, LinkedIn, etc through their wallet
          address/ETH domain.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            href="/login"
            style={{
              borderRadius: 50,
              backgroundColor: "#21b6ae",
              padding: "8px 16px",
              fontSize: "18px",
            }}
            variant="contained"
          >
            Get Started
          </Button>
          <Button
            style={{
              borderRadius: 50,
              padding: "8px 16px",
              fontSize: "18px",
              backgroundColor: "white",
            }}
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#features");
            }}
          >
            Explore more
          </Button>
        </Stack>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {features.map((feature, i) => (
            <Grid
              id="features"
              item
              key={i}
              xs={12}
              // Enterprise card is full width at sm breakpoint
              // sm={feature.title === "Features" ? 12 : 6}
              md={6}
            >
              <Card>
                <CardHeader
                  title="⭐"
                  subheader={i === 3 ? "COMING SOON" : ""}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Typography component="li" variant="subtitle1" align="center">
                    {feature.description}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Made with 🤍 by{" "}
          <Link
            href="https://twitter.com/raizadarishabh"
            target="_blank"
            variant="subtitle1"
            color="text.secondary"
          >
            Rishabh Raizada
          </Link>
        </Typography>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Landing() {
  return <PricingContent />;
}
