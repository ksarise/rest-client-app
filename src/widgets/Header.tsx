import React from 'react';

function Header() {
  return (
    <header className="text-neutral-content sticky top-0 z-2 flex items-center justify-between gap-3 bg-sky-950 p-3">
      <div className="w-50 text-xl">REST Client</div>
      <div className="buttons-block flex gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn rounded-sm">
            Language
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>EN</a>
            </li>
            <li>
              <a>RU</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-soft btn-primary rounded-sm">Sign In</button>
        <button className="btn btn-primary rounded-sm">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
