import { Box, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import TaskItem from "../TaskItem";
import PropTypes from "prop-types";

class TaskList extends Component {
  render() {
    const { classes, tasks, status, onClickEdit, onClickDetele } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => {
            return (
              <TaskItem
                task={task}
                status={status}
                key={task.id}
                onClickEdit={() => onClickEdit(task)}
                onClickDetele={() => onClickDetele(task)}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  tasks: PropTypes.array,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDetele: PropTypes.func,
};

export default withStyles(styles)(TaskList);
