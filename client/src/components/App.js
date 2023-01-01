import '../../src/App.css';
import ArtistsDisplay from './ArtistsDisplay';
import ConcertsDisplay from './ConcertsDisplay';

import Login from './Login';
import SignUp from './SignUp';
import NotFound from './NotFound';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import ThisArtist from './ThisArtist';
import CreateArtist from './CreateArtist';
import CreateConcert from './CreateConcert';
import CreateNewPost from './CreateNewPost';
import EditPost from './EditPost';
import ThisUser from './ThisUser';
import ShowPosts from './ShowPosts';
import DeleteConfirmation from './DeleteConfirmation';

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
  }, [users]);
  // for a concert update, maybe include a submittedNewConcert one

  useEffect(() => {
    fetch('/users')
      .then((r) => r.json())
      .then((info) => setUsers(info));
  }, [currentUser]);

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

  // ! HANDLE DELETE FUNCTION NEEDS UPDATING
  // ! try a local version in each spot
  function handleDelete(post) {
    // console.yarn('post in handleDelete in App: ', post);
    fetch(`/delete_post/${post.id}`, {
      method: 'DELETE',
    }).then(() => {
      const updatedPosts = currentUser.posts.filter(
        (thisPost) => thisPost.id !== post.id
      );
      setCurrentUser({ ...currentUser, posts: updatedPosts });
      const updatedUsers = users.filter((user) => {
        if (user.id === currentUser.id) {
          return currentUser;
        } else {
          return user;
        }
      });
      setUsers(updatedUsers);
    });
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
            <HomePage
              currentUser={currentUser}
              users={users}
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
            <ThisArtist
              artists={artists}
              concerts={concerts}
              currentUser={currentUser}
              users={users}
              loggedIn={loggedIn}
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
              loggedIn={loggedIn}
              users={users}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />

        <Route
          path='/thisUser'
          element={
            <ThisUser
              currentUser={currentUser}
              users={users}
              concerts={concerts}
            />
          }
        />
        {/* //! for showPosts, createNewPost, editPost -- create the loggedIn === true condition to show these  */}
        <Route
          path='/showPosts'
          element={
            <ShowPosts
              currentUser={currentUser}
              users={users}
              concerts={concerts}
            />
          }
        />
        <Route
          path='/createNewPost'
          element={
            <CreateNewPost
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              users={users}
              setUsers={setUsers}
            />
          }
        />
        <Route
          path='/editPost'
          element={
            <EditPost
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              users={users}
              setUsers={setUsers}
            />
          }
        />
        <Route
          path='/createArtist'
          element={<CreateArtist artists={artists} setArtists={setArtists} />}
        />
        <Route
          path='/createConcert'
          element={
            <CreateConcert
              concerts={concerts}
              artists={artists}
              setConcerts={setConcerts}
            />
          }
        />
        <Route
          path='/deletePost'
          element={
            <DeleteConfirmation
              handleDelete={handleDelete}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              users={users}
              setUsers={setUsers}
            />
          }
        />
        <Route
          path='/login'
          element={
            <Login
              loggedIn={loggedIn}
              onLogin={onLogin}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              users={users}
              setUsers={setUsers}
            />
          }
        />
        <Route
          path='/signup'
          element={
            <SignUp
              onLogin={onLogin}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              users={users}
              setUsers={setUsers}
            />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
