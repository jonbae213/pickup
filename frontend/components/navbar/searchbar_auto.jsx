import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

// inspiration from alligator.io/react/react-autocomplete/
class SearchbarAuto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggIndex: 0,
      filteredSuggArr: [],
      show: false,
      userInput: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.closeBar = this.closeBar.bind(this);
  }

  onChange(e) {
    const userInput = e.currentTarget.value;
    const things = Object.values(this.props.suggestions)
    const filtered = this.filterSuggs(things, userInput);
    
    this.setState({
      activeSuggIndex: 0,
      filteredSuggArr: filtered,
      show: true,
      userInput: e.currentTarget.value
    });
    
  }

  onClick(e) {
    this.setState({
      activeSuggIndex: 0,
      filteredSuggArr: [],
      show: false,
      userInput: e.currentTarget.innerText
    });
  }

  onKeyDown(e) {
    const { activeSuggIndex, filteredSuggArr } = this.state;
    let actInd = activeSuggIndex;
    if (e.keyCode === 13) {
      this.props.history.push(`/things/${filteredSuggArr[activeSuggIndex].id}`)
      this.setState({
        activeSuggIndex: 0,
        filteredSuggArr: [],
        show: false,
        userInput: ''
      });
      closeModal();
    } else if (e.keyCode === 38) {
      if (actInd === 0) {
        return;
      }
      this.setState({ activeSuggIndex: actInd - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggIndex + 1 === filteredSuggArr.length ) {
        return;
      }
      this.setState({ activeSuggIndex: actInd + 1 });
    }
  }

  closeBar() {
    this.setState({
      activeSuggIndex: 0,
      filteredSuggArr: [],
      show: false,
      userInput: e.currentTarget.innerText
    });
  }

  filterSuggs(thingArr, userInput) {
    return (
      thingArr.filter((thing) => 
        thing.name.toLowerCase().includes(userInput.toLowerCase()))
    );
  }

  render() {
    let suggestionList;
    
    if (this.state.show && this.state.userInput) {
      
      suggestionList = this.state.filteredSuggArr.map((thing, i) => {
        let className;
        if (i === this.state.activeSuggIndex) {
          className = 'suggestion-active';
        } else {
          className = 'suggestion-list-item';
        }
        return (
          <li className={ className } key={i} >
            <Link to={`/things/${thing.id}`}>
              {thing.name}
            </Link>
          </li>
        )
      });
    } 
    
    return (
      <>
        <input type="text"
          placeholder="Search..."
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.state.userInput}
        />
        <ul className="autocomplete-suggestions">
          {suggestionList}
        </ul>
      </>
    );
  }
}

export default SearchbarAuto