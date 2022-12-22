import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(-1);
  });

  return (
    <div>
      <h1 class='uppercase font-bold'>Not Found! </h1>
    </div>
  );
}

export default NotFound;
