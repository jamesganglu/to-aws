import axios from 'axios';
import { resources } from '../config';

export const login = (isLogin)=>{
  return {
    type:'LOGIN_STATE',
    payload: isLogin
  }
}

export const getPosts = () => dispatch => {
  axios.get(resources.POST_URL).then(
    res=>{
      dispatch({
        type: 'posts',
        payload: res.data
      })
    }
  )
}

export const getSelectedPost = (id) => dispatch => {
  axios.get(`${resources.POST_URL}/${id}`).then(
    res=>{
       dispatch({
        type: 'selectedPost',
        payload: res.data
      })
    }
  )
}