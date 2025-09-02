'use client';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="text-neutral-content sticky top-0 z-2 flex flex-wrap items-center justify-center gap-3 bg-sky-950 p-3 md:flex-nowrap md:justify-between">
      <div className="w-50 text-center text-xl">
        <Link
          href="/"
          className="btn btn-ghost rounded-sm text-xl normal-case hover:bg-sky-900"
        >
          REST Client
        </Link>
      </div>
      <div className="buttons-block flex w-full flex-wrap justify-center gap-5 md:flex-nowrap md:justify-end">
        <label className="swap">
          <input
            type="checkbox"
            onChange={(event) => console.log(event.target.value)}
          />
          <div className="swap-on">EN</div>
          <div className="swap-off">RU</div>
        </label>
        <button className="btn btn-soft btn-primary rounded-sm">Sign In</button>
        <button className="btn btn-primary rounded-sm">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
