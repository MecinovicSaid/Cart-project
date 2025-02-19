import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Popover from "@mui/material/Popover";
import Paper from "@mui/material/Paper";
import { useFilter } from "./FilterContext";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePageClick = (event, page) => {
    if (page === "Blog") {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    }
  };

  const {setFilter} = useFilter();
  
  const handleFilterChange = (event) => {
    setFilter(event.target.checked ? 'domaći'  : '')
  }
  const handleFilterrChange = (event) => {
    setFilter(event.target.checked ? 'veštački'  : '')
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ONLINE-CART
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={(event) => handlePageClick(event, page)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    position: "relative",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Paper
          sx={{
            p: 2,
            width: 250,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            Filteri
          </Typography>
          <FormControlLabel control={<Checkbox />} onChange={handleFilterChange} label="Domaći proizvodi" />
          <FormControlLabel control={<Checkbox />}  onChange={handleFilterrChange} label="Veštački proizvodi" />
        </Paper>
      </Popover>
    </>
  );
}

export default ResponsiveAppBar;
