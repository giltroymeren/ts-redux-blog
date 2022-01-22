import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser, IUser } from '../actions';
import { IRootState } from '../reducers';

interface IUserHeaderProps {
  userId: number
  users: IUser[]
  getUser: (id: number) => Promise<void>
}

const UserHeader: React.FC<IUserHeaderProps> = ({
  userId,
  users,
  getUser
}) => {
  useEffect(() => {
    getUser(userId)
  }, [])

  const user = users.find((user: IUser) => user.id === userId)

  if (!user) {
    return <div>Loading...</div>
  }
  return (
    <div className="header">{user.name}</div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    users: state.users
  }
}

export default connect(
  mapStateToProps,
  { getUser }
)(UserHeader)
