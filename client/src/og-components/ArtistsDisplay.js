import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';

function ArtistsDisplay({ artists, user, searchTerm, setSearchTerm }) {
  let navigate = useNavigate();

  useEffect(() => {
    setSearchTerm('');
  }, [artists]);

  //* fix the search bar better to reset values once the app is exited

  return (
    <div class='bg-base-900 py-6 sm:py-8 lg:py-12'>
      <div class='form-control'>
        <label class='flex input-group input-group-lg'>
          <span>SEARCH</span>
          <input
            type='text'
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search for your favorite artists here by typing their name or their genre...'
            class='input input-bordered w-full input-lg text-center'
          />
        </label>
      </div>
      <div>
        {artists !== undefined ? (
          <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
            <div class='mb-10 md:mb-16'>
              <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
                ARTISTS
              </h1>
              <p class='mx-auto uppercase text-center max-w-screen-md text-secondary text-gray-500 md:text-lg'></p>
            </div>
            <div class='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
              {artists
                .filter((artist) => {
                  if (searchTerm === '') {
                    return artist;
                  } else if (
                    artist.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    artist.genre
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return artist;
                  }
                })
                .map((artist) => (
                  <div>
                    <div
                      key={artist.id}
                      class='card w-96 max-w-xs bg-neutral text-neutral-content shadow-xl'>
                      <div class='card-body p-4 m-2 mx-0 items-center text-center'>
                        <div class='avatar'>
                          <div class='w-30 rounded'>
                            <img
                              src={artist.image}
                              alt='a small avatar of the musical artist'
                            />
                          </div>
                        </div>
                        <h1 class='card-title'>{artist.name}</h1>
                        <h2>{artist.genre}</h2>
                        <div class='card-actions justify-end'>
                          <button
                            class='btn btn-primary'
                            onClick={() => navigate(`/artists/${artist.id}`)}>
                            view ticket activity
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default ArtistsDisplay;

// for line 70, 71
// check if using a Link is better than using a navigate
