import { connect } from 'react-redux';
import SearchbarAuto from './searchbar_auto';

const msp = state => ({
  suggestions: Object.values(state.entities.things).map(thing => {
    return thing.name
  })
});

export default connect(msp)(SearchbarAuto);