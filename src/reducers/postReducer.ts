import { EActionTypes, IPost } from "../actions";

export interface IPostState {
  posts: IPost[]
}

interface IFetchPostsActionType {
  type: EActionTypes.fetchPosts
  payload: IPost
}

const initialState: IPostState = { posts: [] }

export default (state: IPostState = initialState, action: IFetchPostsActionType) => {
  switch (action.type) {
    case EActionTypes.fetchPosts:
      return action.payload

    default:
      return state
  }
}