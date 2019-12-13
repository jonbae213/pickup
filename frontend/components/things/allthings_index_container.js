import { ThingsIndex } from "./allthings_index";
import { connect } from 'react-redux';

const msp = state => ({
  things: state.entities.things
});

export default connect(msp)(ThingsIndex);