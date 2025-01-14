import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import ShareIcon from "@material-ui/icons/Share";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { FacebookButton, TwitterButton, EmailButton } from "react-social";
import clsx from "clsx";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import articles from "../const/devblogposts";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    color: theme.palette.common.white,
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  color: theme.palette.common.white,

  root: {
    backgroundColor: "#383838",
    "&:nth-of-type(odd)": {
      color: theme.palette.common.white,
    },
    "&:hover": {
      backgroundColor: "#505050",
      cursor: "pointer",
    },
    "&:onCellClick": {
      backgroundColor: "grey !important",
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#222629",
  },

  table: {
    fontSize: 14,
    color: theme.palette.common.white,
  },

  hidden: {
    padding: "0 !important",
  },

  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url('/blog.jpg')`,
    height: "520px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },

  horiz: {
    display: "inline-block",
  },

  expand: {
    art: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    ann: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    news: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
  },

  expandOpen: {
    art: { transform: "rotate(180deg)" },
    ann: { transform: "rotate(180deg)" },
    news: { transform: "rotate(180deg)" },
  },

  blogsContainer: {
    paddingTop: theme.spacing(3),
  },

  blogTitle: {
    fontWeight: 800,
    alignItems: "center",
    textAlign: "center",
    color: "white",
    paddingBottom: theme.spacing(3),
  },

  title: {
    marginBottom: "0 0px",
    marginTop: "0 0px",
    color: "black",
  },

  authorDate: {
    width: "300px",
    marginLeft: "0 0px",
    marginTop: "0 0px",
    padding: "0 0px",
    margin: "0 0px",
    textAlign: "left",
  },

  card: {
    maxWidth: "100%",
    position: "relative",
    backgroundColor: "white", //#010d0d
    "&:hover": {
      backgroundColor: "#66FCF1",
      textDecoration: "none",
    },
  },

  subtextalign: {
    textAlign: "justify",
    alignItems: "justifyContent",
    color: "black",
  },

  creditRow: {
    color: "black",
  },

  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
    maxWidth: "100%",
  },

  root: {
    maxWidth: 345,
    backgroundColor: "#222629",
  },
  
  media: {
    height: 240,
  },

  align: {
    textAlign: "justifyContent",
  },

  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },

  author: {
    display: "flex",
  },

  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function DevelopmentBlog(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  let url = process.env.PUBLIC_URL + "developmentblog/date-2";

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (id, title) => {
    return (event) => {
      window.location.assign("/developmentblog/Post" + id);
    };
  };

  return (
    <div className="App" style={{ backgroundColor: "#222629" }}>
      <AppBar
        className={classes.appBar}
        style={{ background: "#222629", boxShadow: "none" }}
        position="static"
      >
        <Toolbar></Toolbar>
      </AppBar>
      
      <Grid container spacing={3}>
        <Grid item xs>
          <Box className={classes.hero}>
            <Box>
              <Typography>Articles & Announcements</Typography>
              <Typography variant="h1">Delineo Blog</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                      Latest Posts
                    </span>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {articles.map((row) => {
                  if (row.id <= 3) {
                    return (
                      <StyledTableRow key={row}>
                        <StyledTableCell
                          style={{ paddingTop: "20px", paddingBottom: "20px" }}
                          onClick={handleClick(row.id, row.title)}
                          align="left"
                          component="th"
                          scope="row"
                        >
                          <span style={{ fontWeight: "bold", color: "grey" }}>
                            {row.date}{" "}
                          </span>
                          <br />
                          <Typography className={classes.subtitle2}>
                            {row.title}
                          </Typography>
                          <Typography className={classes.subtitle}>
                            {row.subtext}
                          </Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  } else {
                    return null;
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Card
          maxWidth="lg"
          style={{ background: "#222629", boxShadow: "none" }}
        >
          <CardActions
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" className={classes.blogTitle}>
              Articles
            </Typography>

            <IconButton
              className={clsx(classes.expand.art, {
                [classes.expandOpen.art]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: "-20px",
                color: "white",
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Grid container spacing={3} alignItems="center" justify="center">
                {articles.map((row) => {
                  if (row.type === "Article") {
                    return (
                      <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardActionArea href={row.href}>
                            <CardMedia
                              className={classes.media}
                              image={row.img}
                              title="Development Blog Img"
                            />
                            <CardContent className={classes.align}>
                              <Typography
                                className={classes.title}
                                style={{
                                  fontWeight: "bold",
                                  marginTop: "0 0px",
                                }}
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {row.title}
                              </Typography>
                              <Typography
                                className={classes.subtextalign}
                                variant="body2"
                                component="p"
                              >
                                {row.subtext}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                              <Box
                                component="span"
                                m={1}
                                className={classes.authorDate}
                              >
                                <Typography className={classes.creditRow} variant="subtitle2" component="p">
                                  <span style={{ fontWeight: "bold" }}>
                                    {row.author}{" "}
                                  </span>
                                  - {row.date}
                                </Typography>
                              </Box>
                            </Box>
                            <Box>
                              <PopupState
                                variant="popover"
                                popupId="demo-popup-menu"
                              >
                                {(popupState) => (
                                  <React.Fragment>
                                    <IconButton
                                      aria-label="share"
                                      {...bindTrigger(popupState)}
                                    >
                                      <ShareIcon style={{ color: "black" }} />
                                    </IconButton>
                                    <Menu
                                      anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center",
                                      }}
                                      transformOrigin={{
                                        vertical: "top",
                                        horizontal: "center",
                                      }}
                                      {...bindMenu(popupState)}
                                    >
                                      <MenuItem
                                        style={{ color: "white" }}
                                        onClick={popupState.close}
                                      >
                                        <TwitterButton url={url}>
                                          <TwitterIcon fontSize="small" />
                                        </TwitterButton>
                                      </MenuItem>
                                      <MenuItem
                                        style={{ color: "white" }}
                                        onClick={popupState.close}
                                      >
                                        <FacebookButton
                                          url={url}
                                          appId={"appId"}
                                        >
                                          <FacebookIcon fontSize="small" />
                                        </FacebookButton>
                                      </MenuItem>

                                      <MenuItem
                                        style={{ color: "white" }}
                                        onClick={popupState.close}
                                      >
                                        <EmailButton url={url}>
                                          <EmailIcon fontSize="small" />
                                        </EmailButton>
                                      </MenuItem>
                                    </Menu>
                                  </React.Fragment>
                                )}
                              </PopupState>
                            </Box>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  } else {
                    return null;
                  }
                })}
              </Grid>
              <Box my={4} className={classes.paginationContainer}></Box>
            </CardContent>
          </Collapse>
        </Card>
      </Container>
    </div>
  );
}

export default DevelopmentBlog;
