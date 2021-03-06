import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

// const menuItems = [
//   { listIcon: <InboxIcon />, listText: <Link to="/">Home</Link> },
//   { listIcon: <InboxIcon />, listText: <Link to="/exercises">Exercises</Link> },
//   { listIcon: <InboxIcon />, listText: <Link to="/map">Maps</Link> },
//   { listIcon: <InboxIcon />, listText: <Link to="/upload">Uploads</Link> }
// ];

export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            style={{ color: "#30F2F2" }}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            React Feature Library
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* {menuItems.map((item, i) => (
            <ListItem button key={i}>
              <ListItemIcon>{item.listIcon}</ListItemIcon>

              <ListItemText>{item.listText}</ListItemText>
            </ListItem>
          ))} */}
          <ListItem>
            <ListItemIcon>
              {" "}
              <span role="img" aria-label="home">
                {" "}
                🏡{" "}
              </span>
            </ListItemIcon>
            <ListItemText>
              <Link style={{ color: "teal", textDecoration: "none" }} to="/">
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              {" "}
              <span role="img" aria-label="exercise">
                {" "}
                💥{" "}
              </span>
            </ListItemIcon>
            <ListItemText>
              <Link
                style={{ color: "purple", textDecoration: "none" }}
                to="/exercises"
              >
                Exercises
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              {" "}
              <span role="img" aria-label="home">
                {" "}
                🌄{" "}
              </span>
            </ListItemIcon>
            <ListItemText>
              <Link
                style={{ color: "green", textDecoration: "none" }}
                to="/map"
              >
                Maps
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              {" "}
              <span role="img" aria-label="home">
                {" "}
                ⏫{" "}
              </span>
            </ListItemIcon>
            <ListItemText>
              <Link
                style={{ color: "blue", textDecoration: "none" }}
                to="/upload"
              >
                Uploads
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              {" "}
              <span role="img" aria-label="home">
                {" "}
                📊{" "}
              </span>
            </ListItemIcon>
            <ListItemText>
              <Link
                style={{ color: "orange", textDecoration: "none" }}
                to="/chart"
              >
                Charts
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              {" "}
              <span role="img" aria-label="home">
                {" "}
                🔥{" "}
              </span>
            </ListItemIcon>
            <ListItemText>
              <Link
                style={{ color: "red", textDecoration: "none" }}
                to="/covid"
              >
                Covid 19
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main>
    </div>
  );
}
