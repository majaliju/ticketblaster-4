import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from './IndividualPost';
import Loading from './Loading';
import EachConcertCard from './EachConcertCard';

//* GOTTA ADJUST STYLING HERE TO FORM EVERYTHING IN THE CENTER CLEANLY

// change thisArtist to artist via direct pass also

function EachArtistCard({ concerts, artists, setArtists, user, handleDelete }) {
  let { id } = useParams();

  const concert = concerts.find(
    (thisConcert) => parseInt(id) === parseInt(thisConcert.artist_id)
  );

  console.log('artist.artist.name: ', concert.artist.name);

  //^ ESSENTIAL: handle the id, and thisArtist
  //^

  return (
    <div>
      <div class='card w-96 bg-base-100 shadow-xl image-full'>
        <figure>
          <img src={concert.artist.image} al={concert.artist.name} />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>{concert.artist.name}</h2>
          <p>{concert.artist.genre}</p>
          {/* <div class='card-actions justify-end'>
            <button class='btn btn-primary'>Buy Now</button>
          </div> */}
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
