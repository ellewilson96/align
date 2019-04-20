import axios from 'axios';
import { ADD_APOD, ADD_EARTH } from './types'

export function addApod() {
  return (dispatch) => {
    return axios.get('https://api.nasa.gov/planetary/apod?api_key=SsF83u5PXYJ4mmitP4In0Jq02rSg6TS5PJ5NyPVs')
      .then(response => {
        dispatch({
          type: ADD_APOD,
          apod: response.data
        })
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function addEarth() {
  return (dispatch) => {
    return axios.get('https://api.nasa.gov/planetary/earth/imagery?api_key=SsF83u5PXYJ4mmitP4In0Jq02rSg6TS5PJ5NyPVs')
      .then(response => {
        dispatch({
          type: ADD_EARTH,
          image: response.data
        })
      })
      .catch(error => {
        throw(error);
      })
  }
}
