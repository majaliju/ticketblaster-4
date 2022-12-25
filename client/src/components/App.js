import '../../src/App.css';
import ArtistsDisplay from './ArtistsDisplay';
import ConcertsDisplay from './ConcertsDisplay';

import Login from './Login';
import SignUp from './SignUp';
import NotFound from './NotFound';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UsersPage from './UsersPage';
import ArtistsPage from './ArtistsPage';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import EachUser from './EachUser';

function App() {
  const [user, setUser] = useState('');
  const [sessionInfo, setSessionInfo] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cookies, setCookies] = useState([]);

  // just preliminary but everything can be handled here within Artists ideally or Users
  const [searchTerm, setSearchTerm] = useState('');
  const [artists, setArtists] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [users, setUsers] = useState([]);

  //TODO
  //^ create an error message for user not found on the Login component if a wrong user renders

  //? this whole area can be cleaned up but needs to be viewed at the end of the project, not just yet
  //& need to manage the useEffects here as well, trigger only essential ones
  //! dependencies are what need to be checked here
  useEffect(() => {
    fetch('/artists')
      .then((r) => r.json())
      .then((info) => setArtists(info));
  }, []);

  useEffect(() => {
    fetch('/concerts')
      .then((r) => r.json())
      .then((info) => setConcerts(info));
  }, []);

  useEffect(() => {
    fetch('/users')
      .then((r) => r.json())
      .then((info) => setUsers(info));
  }, []);

  //? INITIAL FETCH BELOW FOR REGISTERING THE USER

  //! show error message for bad login
  //^ create an error for user error messages
  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else console.log('fetch /me failed due to: ', response);
    });
  }

  //^ the onLogin function for SignUp & Login submissions
  function onLogin(username) {
    setUser(username);
    setLoggedIn(true);
    getSession();
  }

  //^ to log the user out
  function onLogout() {
    setUser('');
    setLoggedIn(false);
    setSessionInfo([]);
  }

  function getSession() {
    fetch('/show_session')
      .then((r) => r.json())
      .then((thisInfo) => setSessionInfo(thisInfo));
  }

  useEffect(() => {
    getSession();
  }, []);

  //! HANDLE DELETE FUNCTION NEEDS UPDATING
  // function handleDelete(eachPost) {
  //   fetch(`/delete_post/${eachPost.id}`, {
  //     method: 'DELETE',
  //   });
  //   console.log('deletedPost :', eachPost);
  //   //* map thru Artists.map((artist) => artist.posts.map((post) =>))
  //   const remainingPosts = posts.filter(
  //     (thisPost) => parseInt(thisPost.id) !== parseInt(eachPost.id)
  //   );
  //   setPosts(remainingPosts);
  // }

  return (
    <div>
      <Header
        getUser={getUser}
        user={user}
        setUser={setUser}
        onLogin={onLogin}
        onLogout={onLogout}
        loggedIn={loggedIn}
      />
      <Routes>
        <Route
          path='/'
          element={
            <UsersPage
              user={user}
              users={users}
              // handleDelete={handleDelete}

              cookies={cookies}
              sessionInfo={sessionInfo}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path='/artists'
          element={
            <ArtistsDisplay
              artists={artists}
              concerts={concerts}
              user={user}
              users={users}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path='/thisArtist'
          element={
            <ArtistsPage
              artists={artists}
              concerts={concerts}
              user={user}
              users={users}
            />
          }
        />
        <Route
          path='/concerts'
          element={
            <ConcertsDisplay
              artists={artists}
              concerts={concerts}
              setConcerts={setConcerts}
              user={user}
              users={users}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        {/* <Route
          path='/concerts/:id'
          element={
            <EachConcertCard concerts={concerts} user={user} users={users} />
          }
        /> */}
        <Route
          path='/users/:id'
          element={
            <EachUser
              user={user}
              users={users}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path='/createNewPost'
          element={<CreatePost user={user} users={users} />}
        />
        <Route
          path='/editPost'
          element={<EditPost user={user} users={users} />}
        />
        <Route path='/login' element={<Login onLogin={onLogin} />} />
        <Route path='/signup' element={<SignUp onLogin={onLogin} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
