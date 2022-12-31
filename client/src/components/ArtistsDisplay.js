import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EachArtistCard from './EachArtistCard';
import Loading from './Loading';

function ArtistsDisplay({
  artists,
  concerts,
  user,
  searchTerm,
  setSearchTerm,
}) {
  let navigate = useNavigate();

  useEffect(() => {
    setSearchTerm('');
  }, [artists]);

  //* fix the search bar better to reset values once the app is exited

  return (
    <div class='bg-base-900 justify-center py-6 sm:py-8 lg:py-12'>
      <div className='flex w-full input-group input-group-lg'>
        <Link to='/createArtist' replace={true}>
          <button className='btn btn-secondary btn-outline'>
            Add An Artist
          </button>
        </Link>
      </div>

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
        {artists !== (undefined || [] || null) ? (
          <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
            <div class='mb-10 md:mb-16'>
              <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
                ARTISTS
              </h1>
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
                  <EachArtistCard artist={artist} concerts={concerts} />
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
