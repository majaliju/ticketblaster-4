import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from '../og-components/IndividualPost';
import Loading from './Loading';
import EachConcertCard from './EachConcertCard';
import ArtistsPage from './ThisArtist';

//* GOTTA ADJUST STYLING HERE TO FORM EVERYTHING IN THE CENTER CLEANLY

function EachArtistCard({ artist, concerts }) {
  let navigate = useNavigate();

  const artistsConcerts = concerts.filter(
    (concert) => parseInt(concert.artist_id) === parseInt(artist.id)
  );

  // fix the grid for this
  return (
    <div>
      <div class='card max-w-full bg-base-100 shadow-xl image-full'>
        <figure>
          <img src={artist.image} alt={artist.name} />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>{artist.name}</h2>
          <h3>{artist.genre}</h3>
          <div className='justify-end card-actions'>
            <Link
              to='/thisArtist'
              state={{ artist: artist, artistsConcerts: artistsConcerts }}
              replace={true}>
              <button className='btn btn-secondary btn-outline'>
                Show More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachArtistCard;
