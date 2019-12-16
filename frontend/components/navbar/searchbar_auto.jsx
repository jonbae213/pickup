import React from 'react';

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
  }

  onChange(e) {
    const userInput = e.currentTarget.value;
    const filtered = this.filterSuggs(this.props.suggestions, userInput);
    
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
   
    if (e.keyCode === 13) {
      this.setState({
        activeSuggIndex: 0,
        show: false,
        userInput: filteredSuggArr[activeSuggIndex]
      });
    } else if (e.keyCode === 38) {
      if (activeSuggIndex === 0) {
        return;
      }
      this.setState({ activeSuggIndex: activeSuggIndex - 1 });
    } else if (e.keyCode === 40) {
      debugger;
      if (activeSuggIndex - 1 !== filteredSuggArr.length ) {
        return;
      }
      this.setState({ activeSuggIndex: activeSuggIndex + 1 });
    }
  }

  filterSuggs(suggArr, userInput) {
    return (
      suggArr.filter((sugg) => 
        sugg.toLowerCase().includes(userInput.toLowerCase()))
    );
  }

  render() {
    let suggestionList;
    
    if (this.state.show && this.state.userInput) {
      suggestionList = (
        <ul className="autocomplete-suggestions">
          {this.state.filteredSuggArr.map((suggestion, i) => {
            let className;
            if (i === this.state.activeSuggIndex) {
              className = 'suggestion-active'
            }
            return (
              <li className={ className } key={i} >
                {suggestion}
              </li>
            )
          })}
        </ul>
      );
    } 

    return (
      <>
        <input type="text"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.state.userInput}
        />
        {suggestionList}
      </>
    );
  }
}

export default SearchbarAuto