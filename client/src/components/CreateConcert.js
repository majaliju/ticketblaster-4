import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function CreateConcert({ artists, setConcerts, concerts }) {
  const [artistID, setArtistID] = useState(1);
  const [dateSelect, setDateSelect] = useState('2023-02-01');
  const [imageLink, setImageLink] = useState('');
  const [locationName, setLocationName] = useState('');
  const [errorArray, setErrorArray] = useState([]);
  const [errorsExist, setErrorsExist] = useState(false);
  const [success, setSuccess] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/new_concert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        date: dateSelect,
        location: locationName,
        image: imageLink,
        artist_id: artistID,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((createdConcert) => {
          console.log('createdConcert: ', createdConcert);
          setConcerts([...concerts, createdConcert]);
          setErrorArray([]);
          setErrorsExist(false);
          setSuccess('Your post has been created!');
          setSubmitted(true);
        });
      } else {
        response.json().then((e) => {
          console.log('e. errors within bad response: ', e.errors);
          // set the errorString to e.errors.join(*join with a comma*)
          setErrorsExist(true);
          setErrorArray(e.errors);
          console.log('errorArray state within bad response: ', errorArray);
        });
      }
    });
  };

  return (
    <div>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto'>
          {success !== '' ? (
            <div className='shadow-lg alert alert-success'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-0 w-6 h-6 stroke-current'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>{success}</span>
              </div>
            </div>
          ) : null}

          {errorsExist !== false ? (
            <div className='shadow-lg alert alert-warning'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-0 w-6 h-6 stroke-current'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
                {errorArray.map((eachError) => (
                  <span>{eachError}</span>
                ))}
              </div>
            </div>
          ) : null}

          <h1 className='text-2xl font-bold text-center text-white sm:text-3xl'>
            CREATE A CONCERT!
          </h1>

          <form className='p-8 mt-2 mb-0 space-y-4 rounded-lg shadow-2xl'>
            {/* <div>
              <select
                onChange={(e) => handleArtistSelect(e.target.value)}
                className='w-full select select-info'>
                {singers.map((name, key) => (
                  <option key={key}>{name}</option>
                ))}
              </select>
            </div> */}
            <div>
              <select
                onChange={(e) => setArtistID(e.target.value)}
                className='w-full select select-info'>
                {artists.map((artist) => (
                  <option value={artist.id} key={artist.id}>
                    {artist.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                type='date'
                id='dateSelect'
                value={dateSelect}
                min='2023-02-01'
                max='2025-12-31'
                onChange={(e) => setDateSelect(e.target.value)}
                className='w-full max-w-xl input input-bordered input-primary'
              />
            </div>

            <div>
              <input
                type='text'
                id='imageLink'
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                placeholder='enter an image link here, a picture of the venue'
                className='w-full max-w-xl input input-bordered input-secondary'
              />
            </div>
            <div>
              <input
                type='text'
                id='locationName'
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                placeholder='type in the name of the venue -- example: MSG'
                className='w-full max-w-xl input input-bordered input-accent'
              />
            </div>
            {submitted === false ? (
              <button
                onClick={handleSubmit}
                type='submit'
                className='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg'>
                SUBMIT
              </button>
            ) : (
              <button
                disabled
                type='submit'
                className='block w-full px-5 py-3 text-sm font-medium text-white bg-black rounded-lg'>
                SUBMITTED!
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateConcert;
