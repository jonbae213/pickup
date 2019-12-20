import { connect } from 'react-redux';
import SearchbarAuto from './searchbar_auto';
import { withRouter } from 'react-router-dom';

const msp = state => {
  if (Object.keys(state.entities.things).length === 0) {
    return { suggestions: {} }
  }
  return {
    suggestions: state.entities.things
  }
};

export default withRouter(connect(msp)(SearchbarAuto));