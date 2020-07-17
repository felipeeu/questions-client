import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import AddQuestion from "./question/AddQuestion";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import DeleteQuestionMutation from "./mutations/DeleteQuestionMutation";
import DeleteConfirmation from "./DeleteConfirmation";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Home({ questions }) {
  const classes = useStyles();
  const [questionIdentifier, setQuestionIdentifier] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [id, setId] = React.useState("");
  const handleExpandClick = idx => {
    questionIdentifier === idx
      ? setQuestionIdentifier("")
      : setQuestionIdentifier(idx);
  };
  const openModal = () => setModalOpen(!modalOpen);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    onClick={openModal}
                    variant="contained"
                    color="primary"
                  >
                    Criar Questão
                  </Button>
                  <Modal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <AddQuestion />
                  </Modal>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {questions &&
              questions.map((question, idx) => (
                <Grid item key={idx} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    {/* <CardMedia
                    className={classes.cardMedia}
                    image= {`https://loremflickr.com/285/160/${topic}/`} //"https://source.unsplash.com/random"
                    title="Image title"
                  /> */}

                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {question.body}
                      </Typography>
                      <IconButton
                        onClick={() => handleExpandClick(idx)}
                        aria-expanded={idx === questionIdentifier}
                        aria-label="show more"
                      >
                        {idx === questionIdentifier ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </IconButton>
                      <Collapse
                        in={idx === questionIdentifier}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Typography>Resposta</Typography>
                      </Collapse>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        <DeleteTwoToneIcon
                          onClick={() => {
                            setDeleteModalOpen(true);
                            setId(question.id);
                          }}
                        />
                      </Button>
                      <Modal
                        open={deleteModalOpen}
                        onClose={() => setDeleteModalOpen(false)}
                      >
                        <DeleteConfirmation questionId={id} />
                      </Modal>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </React.Fragment>
  );
}
