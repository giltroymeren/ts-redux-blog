import { EActionTypes, IUser } from "../actions"

interface IGetUserActionType {
  type: EActionTypes.getUser
  payload: IUser
}

export default (
  state = [],
  action: IGetUserActionType
) => {
  switch (action.type) {
    case EActionTypes.getUser:
      if (state.some((user: IUser) => user.id === action.payload.id)) {
        return state
      }
      return [...state, action.payload]

    default:
      return state
  }
}