import '../../src/App.css';
import ArtistsDisplay from './ArtistsDisplay';
import ConcertsDisplay from './ConcertsDisplay';
import VenuesDisplay from './VenuesDisplay';
import GenreDisplay from './GenreDisplay';
import Login from './Login';
import SignUp from './SignUp';
import NotFound from './NotFound';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UsersPage from './UsersPage';
import EachArtistCard from './EachArtistCard';
import EachConcertCard from './EachConcertCard';
import EachVenueCard from './EachVenueCard';
import EachGenreCard from './EachGenreCard';
import CreatePost from './CreatePost';
import Footer from './Footer';

function App() {
  const [user, setUser] = useState('');
  const [sessionInfo, setSessionInfo] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cookies, setCookies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [genres, setGenres] = useState([]);
  const [venues, setVenues] = useState([]);
  const [artists, setArtists] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [posts, setPosts] = useState([]);

  //TODO
  //* break search button off into it's own component but fix the routing first to make it smooth
  //* create an error message for user not found on the Login component if a wrong user renders
  //* clean up all the props once the app is finished

  useEffect(() => {
    fetch('/artists')
      .then((r) => r.json())
      .then((info) => setArtists(info));
  }, []);

  useEffect(() => {
    fetch('/venues')
      .then((r) => r.json())
      .then((info) => setVenues(info));
  }, []);

  useEffect(() => {
    fetch('/concerts')
      .then((r) => r.json())
      .then((info) => setConcerts(info));
  }, []);

  useEffect(() => {
    fetch('/genres')
      .then((r) => r.json())
      .then((info) => setGenres(info));
  }, []);

  function getPosts() {
    fetch('/posts')
      .then((r) => r.json())
      .then((info) => setPosts(info));
  }

  useEffect(() => {
    getPosts();
  }, []);

  //* our initial fetch to get user's ID for maintaining session state
  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else console.log('fetch /me failed due to: ', response);
    });
  }, []);

  // the onLogin function for SignUp & Login submissions
  function onLogin(username) {
    setUser(username);
    setLoggedIn(true);
    getSession();
  }

  // to log the user out
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

  return (
    <div>
      <Header
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
              posts={posts}
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
              genres={genres}
              user={user}
              posts={posts}
              setPosts={setPosts}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path='/artists/:id'
          element={
            <EachArtistCard
              artists={artists}
              concerts={concerts}
              posts={posts}
              setPosts={setPosts}
              user={user}
            />
          }
        />

        <Route
          path='/concerts'
          element={
            <ConcertsDisplay
              concerts={concerts}
              artists={artists}
              posts={posts}
              genres={genres}
              venues={venues}
              user={user}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path='/concerts/:id'
          element={
            <EachConcertCard
              artists={artists}
              concerts={concerts}
              posts={posts}
              setPosts={setPosts}
              user={user}
            />
          }
        />
        <Route
          path='/venues'
          element={
            <VenuesDisplay
              venues={venues}
              user={user}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path='/venues/:id'
          element={
            <EachVenueCard
              venues={venues}
              user={user}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path='/genres'
          element={
            <GenreDisplay
              genres={genres}
              user={user}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path='/genres/:id'
          element={
            <EachGenreCard
              genres={genres}
              user={user}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path='/createNewPost'
          element={
            <CreatePost
              user={user}
              concerts={concerts}
              venues={venues}
              artists={artists}
            />
          }
        />
        <Route path='/login' element={<Login onLogin={onLogin} />} />
        <Route path='/signup' element={<SignUp onLogin={onLogin} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Header />}>
//           <Route index element={<UsersPage />} />
//           <Route path='/artists' element={<ArtistsDisplay />} />
//           <Route path='/concerts' element={<ConcertsDisplay />} />
//           <Route path='/venues' element={<VenuesDisplay />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='*' element={<NotFound />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;
