import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser, IUser } from '../actions';
import { IRootState } from '../reducers';

interface IOwnProps {
  userId: number
}

interface IConnectedProps {
  userId: number
  user: IUser | undefined
  getUser: (id: number) => Promise<void>
}

type TComponentProps = IConnectedProps & IOwnProps

const UserHeader = ({
  userId,
  user,
  getUser
}: TComponentProps) => {
  useEffect(() => {
    getUser(userId)
  })

  if (!user) {
    return <div>Loading...</div>
  }
  return (
    <div className="header">{user.name}</div>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: IOwnProps
) => {
  return {
    user: state.users.find(
      (user: IUser) => user.id === ownProps.userId)
  }
}

export default connect(
  mapStateToProps,
  { getUser }
)(UserHeader)
