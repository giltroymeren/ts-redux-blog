import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

import jsonPlaceholder from '../api/jsonPlaceholder'

export enum EActionTypes {
  'fetchPosts'
}

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export const fetchPosts = () =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const response: IPost[] = await jsonPlaceholder.get('/posts')
    dispatch({
      type: EActionTypes.fetchPosts,
      payload: response
    })
  }