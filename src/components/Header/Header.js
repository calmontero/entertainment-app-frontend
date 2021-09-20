import React from 'react'

function Header({ user }) {
  return (
    <header>
      {user ? (
        <div>
          <p>Current User: {user.username}!</p>
        </div>
      ) : (
        <p>Press click in Login</p>
      )}
    </header>
  );
}

export default Header;
