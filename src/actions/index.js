// we'll need axios
import axios from 'axios'
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_STATUS = 'FETCHING_STATUS'
export const SUCCESS_STATUS = 'SUCCESS_STATUS'
export const ERROR_STATUS = 'ERROR_STATUS'
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


export const getCharacters = () => dispatch => {
  dispatch({ type: FETCHING_STATUS }); // action type here!
  axios.get("https://swapi.co/api/people")
  .then( res => {
    console.log(res);
    dispatch({ type: SUCCESS_STATUS, payload: res.data.results });
  })
  .catch(err => {
    console.log(err);
    dispatch({ type: ERROR_STATUS })
  });
}