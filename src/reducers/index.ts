import { combineReducers } from 'redux'
import { IPost, IUser } from '../actions'
import postReducer from './postReducer'
import userReducer from './userReducer'

export interface IRootState {
  posts: IPost[],
  users: IUser[]
}

export default combineReducers({
  posts: postReducer,
  users: userReducer
})