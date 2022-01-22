import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

import jsonPlaceholder from '../api/jsonPlaceholder'
import { EActionTypes, IPost, IUser } from '../common/types'

interface IUserResponse {
  data: IUser
}

export const getUser = (id: number) =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const response: IUserResponse = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({
      type: EActionTypes.getUser,
      payload: response.data
    })
  }

interface IPostResponse {
  data: IPost[]
}

export const fetchPosts = () =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const response: IPostResponse = await jsonPlaceholder.get('/posts')
    dispatch({
      type: EActionTypes.fetchPosts,
      payload: response.data
    })
  }