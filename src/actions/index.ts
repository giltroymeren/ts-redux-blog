import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

import jsonPlaceholder from '../api/jsonPlaceholder'

export enum EActionTypes {
  'fetchPosts',
  'getUser'
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
}

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

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
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