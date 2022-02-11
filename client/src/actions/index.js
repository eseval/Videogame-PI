import axios from "axios";

import { VIDEOGAMES, GENRES, VIDEOGAMES_NAME } from "../utils/backroutes.js";

export const getVideogames = () => async (dispatch) => {
  try {
    const resp = await axios.get(VIDEOGAMES);
    return dispatch({ type: "GET_VIDEOGAMES", payload: resp.data });
  } catch (error) {
    console.log(error);
  }
};

export const getVideogameSearchName = (name) => async (dispatch) => {
  try {
    const resp = await axios.get(`${VIDEOGAMES_NAME}${name}`);
    return dispatch({ type: "GET_VIDEOGAMES_NAME", payload: resp.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_VIDEOGAMES_NAME", payload: [] });
  }
};

export const getVideogameGenres = () => async (dispatch) => {
  try {
    const resp = await axios.get(GENRES);
    return dispatch({ type: "GET_GENRES", payload: resp.data });
  } catch (error) {
    console.log(error);
  }
};

export const getVideogameDetail = (id) => async (dispatch) => {
  try {
    const resp = await axios.get(`${VIDEOGAMES}/${id}`);
    return dispatch({ type: "GET_VIDEOGAMES_DETAIL", payload: resp.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_VIDEOGAMES_DETAIL", payload: [] });
  }
};


export const setVideogamesOrder = (order) => {
  return {
    type: "SET_FILTER_VIDEOGAMES_ORDER",
    payload: order,
  };
};
export function setVideogamesOrigin(origin) {
  return {
    type: "SET_FILTER_VIDEOGAMES_ORIGIN",
    payload: origin,
  };
}

export const setVideogamesGenres = (genre) => {
  return {
    type: "SET_FILTER_VIDEOGAMES_GENRES",
    payload: genre,
  };
};

export const setVideogamesRating = (rating) => {
  return {
    type: "SET_FILTER_VIDEOGAMES_RATING",
    payload: rating,
  };
};

export function createVideogames(dataForm) {
  return async function () {
    const infoGame = await axios.post(
      VIDEOGAMES,
      dataForm
    );

    return infoGame;
  };
}

export const getPlatforms = () => async (dispatch) => {
  try {
    const resp = await axios.get("http://localhost:3001/videogamesplatforms");
    return dispatch({ type: "GET_PLATFORMS", payload: resp.data });
  } catch (error) {
    console.log(error);
  }
};

export const clearVideogameDetail = () => (dispatch) => {
	dispatch({type: 'CLEAR_VIDEOGAME_DETAIL'});
};

