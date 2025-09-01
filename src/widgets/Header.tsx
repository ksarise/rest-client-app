import React from 'react';

function Header() {
  return (
    <header className="bg-base-700 text-neutral-content flex items-center justify-between gap-3 p-3">
      <div className="w-50 text-xl">REST Client</div>
      <div className="buttons-block flex gap-2">
        <details className="dropdown">
          <summary className="btn rounded-sm">Language</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a>EN</a>
            </li>
            <li>
              <a>RU</a>
            </li>
          </ul>
        </details>
        <button className="btn btn-soft btn-primary rounded-sm">Sign In</button>
        <button className="btn btn-primary rounded-sm">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
