import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function EachUser() {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div>
      <h1> for each user, display their posts here</h1>
    </div>
  );
}

export default EachUser;
