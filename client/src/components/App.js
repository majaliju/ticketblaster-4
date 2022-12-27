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
import ShowPosts from './ShowPosts';

function App() {
  const [currentUser, setCurrentUser] = useState('');
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
  useEffect(() => {
    getUser();
    getSession();
  }, []);

  function getUser() {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
        });
      } else {
        console.log('fetch /me failed due to: ', response);
        setLoggedIn(false);
      }
    });
  }

  //^ the onLogin function for SignUp & Login submissions
  function onLogin(username) {
    setCurrentUser(username);
    setLoggedIn(true);
    getSession();
  }

  //^ to log the user out
  function onLogout() {
    setCurrentUser('');
    setLoggedIn(false);
    setSessionInfo([]);
  }

  function getSession() {
    fetch('/show_session')
      .then((r) => r.json())
      .then((thisInfo) => setSessionInfo(thisInfo));
  }

  //! HANDLE DELETE FUNCTION NEEDS UPDATING
  function handleDelete(post) {
    fetch(`/delete_post/${post.id}`, {
      method: 'DELETE',
    });
    console.log('deletedPost :', post);
  }

  return (
    <div>
      <Header
        getUser={getUser}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        onLogin={onLogin}
        onLogout={onLogout}
        loggedIn={loggedIn}
      />
      <Routes>
        <Route
          path='/'
          element={
            <UsersPage
              currentUser={currentUser}
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
              currentUser={currentUser}
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
              currentUser={currentUser}
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
              currentUser={currentUser}
              users={users}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />

        <Route
          path='/thisUser'
          element={
            <EachUser
              currentUser={currentUser}
              users={users}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path='/showPosts'
          element={<ShowPosts currentUser={currentUser} />}
        />
        <Route
          path='/createNewPost'
          element={<CreatePost currentUser={currentUser} users={users} />}
        />
        <Route
          path='/editPost'
          element={<EditPost currentUser={currentUser} users={users} />}
        />
        <Route path='/login' element={<Login onLogin={onLogin} />} />
        <Route path='/signup' element={<SignUp onLogin={onLogin} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
