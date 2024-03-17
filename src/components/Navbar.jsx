import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  useClerk,
} from "@clerk/clerk-react";

function SignUpButton() {
  const clerk = useClerk();

  return (
    <button className="sign-up-btn" onClick={() => clerk.openSignUp({})}>
      Sign up
    </button>
  );
}

function SignInButton() {
  const clerk = useClerk();

  return (
    <button className="sign-in-btn" onClick={() => clerk.openSignIn({})}>
      Sign in
    </button>
  );
}

const drawerWidth = 240;
const navItems = ["Home", "Profile", "Configuration", "Policy"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { firstName, signedIn } = useUser();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link href={`/${item.toLowerCase()}`}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "white" }}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    color="inherit"
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "none",
                        color: "red",
                      },
                    }}
                  >
                    {item}
                  </Link>
                </Button>
              ))}
            </Box>
            <SignedIn>
              <Box sx={{ ml: 1 }}>
                <UserButton afterSignOutUrl="/" />
              </Box>
            </SignedIn>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box>
        <Box component="main" sx={{ p: 1 }}>
          <Toolbar />
        </Box>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
