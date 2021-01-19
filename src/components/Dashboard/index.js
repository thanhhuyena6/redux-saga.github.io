import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles";
import PropTypes from "prop-types";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as uiActions from "./../../actions/ui";
import cn from "classnames";

class Dashboard extends Component {
  handleToggleSidebar = (value) => {
    const { uiActionCreators } = this.props;
    const { showSidebar, hideSidebar } = uiActionCreators;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };
  render() {
    const { children, classes, name, showSidebar } = this.props;
    return (
      <div className={classes.dashBoard}>
        <Header
          name={name}
          showSidebar={showSidebar}
          onToggleSidebar={this.handleToggleSidebar}
        />
        <div className={classes.wrapper}>
          <Sidebar
            showSidebar={showSidebar}
            onToggleSidebar={this.handleToggleSidebar}
          />
          <div className={cn(classes.wrapperContent,{
            [classes.shiftLeft]: showSidebar === false,
          })}>{children}</div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
  name: PropTypes.string,
  showSidebar: PropTypes.bool,
  uiActionCreators: PropTypes.shape({
    showSidebar: PropTypes.func,
    hideSidebar: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    showSidebar: state.ui.showSidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActionCreators: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
