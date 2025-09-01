import React from 'react';

function Header() {
  return (
    <header className="flex gap-3 p-2">
      <div>REST Client</div>
      <button className="btn btn-soft btn-primary">Sign In</button>
    </header>
  );
}

export default Header;
