import { connect } from 'react-redux';
import SearchbarAuto from './searchbar_auto';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const msp = state => {
  if (Object.keys(state.entities.things).length === 0) {
    return { suggestions: {} }
  }
  return {
    suggestions: state.entities.things
  }
};

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(msp, mdp)(SearchbarAuto));