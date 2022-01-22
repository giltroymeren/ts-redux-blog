import { EActionTypes, IPost } from "../actions";

interface IFetchPostsActionType {
  type: EActionTypes.fetchPosts
  payload: IPost
}

const postReducer = (
  state = [],
  action: IFetchPostsActionType) => {
  switch (action.type) {
    case EActionTypes.fetchPosts:
      return action.payload

    default:
      return state
  }
}

export default postReducer