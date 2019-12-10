import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_container';
import SignupFormContainer from '../session/signup_container';
import { Route } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'Log In':
      component = <LoginFormContainer />;
      break;
    case 'Sign Up':
      component = <SignupFormContainer />
      break;
    default:
      return null;
  }

  return (
    <div className="account-modal" onClick={closeModal}>
      <div className="account-modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);