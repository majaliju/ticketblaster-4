import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate();
  const [body, setBody] = useState('');
  const [ticketAmount, setTicketAmount] = useState('');
  const [error, setError] = useState('');

  const location = useLocation();
  let isSelling = location.state.isSelling;

  console.log('isSelling: ', isSelling);

  function checkError(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      console.log('response: ', response);
      console.log('response.status: ', response.status);
      console.log('response.statusText: ', response.statusText);
      throw response;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/new_post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        body,
        for_sale: isSelling,
        how_many_tickets: ticketAmount,
        concert_id: null,
        user_id: null,
      }),
    })
      .then(checkError)
      .then((item) => {
        console.log(item);
      })
      .catch((err) => setError(err));
    navigate(-1);
  };

  return (
    <div>
      <div class='px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
        <div class='max-w-lg mx-auto'>
          <h1 class='text-2xl font-bold text-center text-indigo-600 sm:text-3xl'>
            TICKET POST
          </h1>

          <form class='p-8 mt-2 mb-0 rounded-lg shadow-2xl space-y-4'>
            <div>
              <input
                type='number'
                id='ticketAmount'
                value={ticketAmount}
                onChange={(e) => setTicketAmount(e.target.value)}
                placeholder='how many tickets?'
                class='input input-ghost w-full '
              />
            </div>

            <div>
              <input
                type='text'
                id='body'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder='write your message here! price, offers, etc'
                class='input input-ghost w-full '
              />
            </div>

            <button
              onClick={handleSubmit}
              type='submit'
              class='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
