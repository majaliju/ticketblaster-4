import React from 'react';
import {
  Navigate,
  useNavigate,
  useParams,
  Link,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from './IndividualPost';
import Loading from './Loading';
import EachConcertCard from './EachConcertCard';
import ArtistsPage from './ArtistsPage';

//* GOTTA ADJUST STYLING HERE TO FORM EVERYTHING IN THE CENTER CLEANLY

// change thisArtist to artist via direct pass also

function EachArtistCard({ artist, concerts }) {
  let navigate = useNavigate();
  // let { id } = useParams();
  // const location = useLocation();
  // let artist = location.state.artist;
  // console.log('artist via useLocation & Link :', artist);

  // // fix this method a bit
  // const concert = concerts.find(
  //   (thisConcert) => parseInt(id) === parseInt(thisConcert.artist_id)
  // );

  // const artistsConcerts = concerts.filter(
  //   (thisConcert) => parseInt(thisConcert.artist_id) === parseInt(id)
  // );

  // console.log('artist.artist.name: ', concert.artist.name);
  // console.log('the artistsConcerts: ', artistsConcerts);

  const artistsConcerts = concerts.filter(
    (concert) => parseInt(concert.artist_id) === parseInt(artist.id)
  );

  // fix the grid for this
  return (
    <div>
      <div class='card w-96 bg-base-100 shadow-xl image-full'>
        {/* //*resize these images in the right way */}
        <figure>
          <img src={artist.image} al={artist.name} />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>{artist.name}</h2>
          <h3>{artist.genre}</h3>
          <div className='card-actions justify-end'>
            <Link to='/thisArtist' state={{ artist: artist }} replace={true}>
              <button className='btn btn-secondary btn-outline'>
                Show More
              </button>
            </Link>
          </div>
          <div class='carousel carousel-center max-w-md p-4 space-x-4 bg-neutral'>
            {artistsConcerts.map((eachConcert) => {
              <div class='carousel-item'>
                <img src={artistsConcerts.image} class='rounded-box' />
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachArtistCard;

//* cool card component to implement for eachArtistCard
//* darkened background with content on hover

// <a class="relative block bg-black group" href="">
//   <img
//     class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity  group-hover:opacity-50"
//     src="https://www.hyperui.dev/photos/man-6.jpeg"
//     alt=""
//   />
//   <div class="relative p-8">
//     <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
//       Developer
//     </p>

//     <p class="text-2xl font-bold text-white">Barry Scott</p>

//     <div class="mt-64">
//       <div
//         class="opacity-0 transition-all transform translate-y-8  group-hover:opacity-100 group-hover:translate-y-0"
//       >
//         <p class="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </a>
