import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_container';
import SignupFormContainer from '../session/signup_container';
import SearchbarAutoContainer from '../navbar/searchbar_auto_container';
import { Route } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  let className;
  switch (modal) {
    case 'Log In':
      component = <LoginFormContainer />;
      className = "account-modal-child";
      break;
    case 'Sign Up':
      component = <SignupFormContainer />;
      className = "account-modal-child";
      break;
    case 'Searchbar':
      component = <SearchbarAutoContainer />;
      className = "searchbar-modal"
      break;
    default:
      return null;
  }
  
  return (
    <div className="account-modal" onClick={closeModal}>
      <div className={className} onClick={e => e.stopPropagation()}>
        {component}
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