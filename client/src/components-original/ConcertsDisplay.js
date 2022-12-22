import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import EachConcertCard from './EachConcertCard';

//TODO
//^ need to configure the date properly for the shows

function ConcertsDisplay({
  concerts,
  user,
  artists,
  venues,
  posts,
  searchTerm,
  setSearchTerm,
}) {
  let navigate = useNavigate();

  useEffect(() => {
    setSearchTerm('');
  }, [concerts]);

  return (
    <div class='bg-base-900 py-6 sm:py-8 lg:py-12'>
      <div class='form-control'>
        <label class='flex input-group input-group-lg'>
          <span>SEARCH</span>
          <input
            type='text'
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for any concerts here by typing either the artist's name or the venue's name..."
            class='input input-bordered w-full input-lg text-center'
          />
        </label>
      </div>
      <div>
        <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div class='mb-10 md:mb-16'>
            <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
              CONCERTS
            </h1>
            <p class='mx-auto uppercase text-center max-w-screen-md text-secondary text-gray-500 md:text-lg'></p>
          </div>
          <div class='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
            {concerts
              .filter((concert) => {
                if (searchTerm === '') {
                  return concert;
                } else if (
                  concert.artist.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  concert.venue.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return concert;
                }
              })
              .map((concert) => (
                <div>
                  <div
                    key={concert.id}
                    class='card w-96 max-w-xs bg-neutral text-neutral-content shadow-xl'>
                    <div class='card-body p-4 m-2 mx-0 items-center text-center'>
                      <div class='avatar'>
                        <div class='w-30 rounded'>
                          <img
                            src={concert.artist.image}
                            alt='a small avatar of the concert'
                          />
                        </div>
                      </div>
                      <div class='avatar'>
                        <div class='w-30 rounded'>
                          <img
                            src={concert.venue.image}
                            alt='a small avatar of the concert'
                          />
                        </div>
                      </div>
                      <h1 class='card-title'>{concert.artist.name}</h1>
                      <h2>{concert.venue.name}</h2>
                      <h3>{concert.date}</h3>
                      <div class='card-actions justify-end'>
                        <Link
                          to='/createNewPost'
                          state={{ isSelling: true }}
                          class='btn btn-secondary w-full'>
                          I have tickets to sell
                        </Link>
                        <Link
                          to='/createNewPost'
                          state={{ isSelling: false }}
                          class='btn btn-secondary w-full'>
                          I'm Looking For Tickets
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConcertsDisplay;
