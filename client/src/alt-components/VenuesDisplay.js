import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function VenuesDisplay({ venues, user, searchTerm, setSearchTerm }) {
  let navigate = useNavigate();

  useEffect(() => {
    setSearchTerm('');
  }, [venues]);

  return (
    <div class='bg-base-900 py-6 sm:py-8 lg:py-12'>
      <div class='form-control'>
        <label class='flex input-group input-group-lg'>
          <span>SEARCH</span>
          <input
            type='text'
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search for any venue here by typing the venue name or the city...'
            class='input input-bordered w-full input-lg text-center'
          />
        </label>
      </div>
      <div>
        <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div class='mb-10 md:mb-16'>
            <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
              VENUES
            </h1>
            <p class='mx-auto uppercase text-center max-w-screen-md text-secondary text-gray-500 md:text-lg'></p>
          </div>
          <div class='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
            {venues
              .filter((venue) => {
                if (searchTerm === '') {
                  return venue;
                } else if (
                  venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  venue.location
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return venue;
                }
              })
              .map((venue) => (
                <div>
                  <div
                    key={venue.id}
                    class='card w-96 max-w-xs bg-neutral text-neutral-content shadow-xl'>
                    <div class='card-body p-4 m-2 mx-0 items-center text-center'>
                      <div class='avatar'>
                        <div class='w-30 rounded'>
                          <img
                            src={venue.image}
                            alt='a small avatar of the venue'
                          />
                        </div>
                      </div>
                      <h1 class='card-title'>{venue.name}</h1>
                      <p>{venue.location}</p>
                      <div>
                        <div class='badge badge-primary uppercase'>
                          Z selling
                        </div>
                        <div class='badge badge-primary uppercase'>
                          Z looking
                        </div>
                      </div>
                      <div class='card-actions justify-end'>
                        <button
                          class='btn btn-primary'
                          onClick={() => navigate(`/venues/${venue.id}`)}>
                          view ticket activity
                        </button>
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

export default VenuesDisplay;
