import { Modal, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Clear";
import { connect } from "react-redux";
import * as modalActions from "./../../actions/modal";
import { compose, bindActionCreators } from "redux";

class CommonModal extends Component {
  render() {
    const { classes, open, component, modalActionCreators, title } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <CloseIcon className={classes.icon} onClick={hideModal} />
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

CommonModal.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  title: PropTypes.string,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  component: PropTypes.object,
};

const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title: state.modal.title,
});

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(CommonModal);
