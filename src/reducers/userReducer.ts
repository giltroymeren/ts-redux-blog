import { EActionTypes, IUser } from "../actions"

interface IGetUserActionType {
  type: EActionTypes.getUser
  payload: IUser
}

const userReducer = (
  state = [],
  action: IGetUserActionType
) => {
  switch (action.type) {
    case EActionTypes.getUser:
      return [...state, action.payload]

    default:
      return state
  }
}

export default userReducer