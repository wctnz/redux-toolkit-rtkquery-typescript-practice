import React, { useEffect } from 'react';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/actionCreators';
import { userSlice } from './store/reducers/UserSlice';

const App = () => {

  // const dispatch = useAppDispatch()
  // const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  // useEffect(() => {
  //     dispatch(fetchUsers())
  // }, [])

  return (
    <div className='App'>
      {/* {JSON.stringify(users, null, 2)} */}
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {users.map(user =>
        <div key={user.id}>{user.id}. {user.name} - {user.email}</div>
      )} */}
      <div style={{display: "flex"}}>
      <PostContainer/>
      <PostContainer2 />
      </div>
    </div>
  );
};

export default App;