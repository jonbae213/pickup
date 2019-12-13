import React from 'react';
import { connect } from 'react-redux';

const HobbiesIndex = ({ hobbies }) => {
  const hobbyList = hobbies.map((hobby) => (
    <li key={hobby.id} className="hobby-dropdown">{hobby.name}</li>
  ));
  return (
    <ul>
      {hobbyList}
    </ul>
  )
}

const msp = state => {
  let usersHobbies = state.session.currentUser.hobby_ids;
  let hobbies= usersHobbies.map((hobbyId) => state.entities.hobbies[hobbyId]);
  return {
    hobbies: hobbies
  }
}

export default connect(msp)(HobbiesIndex);