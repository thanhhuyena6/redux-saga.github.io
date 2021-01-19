import { Grid, withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import styles from "./styles";
import PropTypes from "prop-types";

class TaskItem extends Component {
  render() {
    const { classes, task, status, onClickEdit, onClickDetele } = this.props;
    const { id, title } = task;
    return (
      <Card className={classes.card} key={id}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            onClick={onClickEdit}
            color="primary"
            aria-label="Edit"
            size="small"
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            onClick={onClickDetele}
            color="primary"
            aria-label="Delete"
            size="small"
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDetele: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
