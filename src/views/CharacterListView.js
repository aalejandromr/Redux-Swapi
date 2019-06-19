import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions"
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    setTimeout(() => {
      this.props.getCharacters();
    }, 5000);
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return(
        <h1> Loading... </h1>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);
