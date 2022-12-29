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

  //^ display an EachConcertCard for the map function, to keep the consistency

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
                  concert.location
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return concert;
                }
              })
              .map((concert) => (
                <EachConcertCard concert={concert} />
              ))}
          </div>
          <div class='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
            {/* {artists.map((artist) => {
              artist.concerts.map((concert) => {
                console.log('concert :', concert);
                console.log('artist within the artist.concerts.map: ', artist);
              });
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConcertsDisplay;
