import { TextField, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles";
import PropTypes from "prop-types";

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className={classes.textField}
            autoComplete="off"
            id="standard-basic"
            label="Nhập từ khóa"
            onChange={handleChange}
          />
        </form>
      </div>
    );
  }
}

SearchBox.propsTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
