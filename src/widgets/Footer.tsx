import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-base-300 flex items-end p-7 pt-0">
      <nav className="text-center">
        <a
          href="https://github.com/ksarise/rest-client-app"
          target="_blank"
          className="GitHub-link"
        >
          <span className="tooltip pb-2">Project on GitHub</span>
          <Image
            priority={true}
            src="/github-icon.png"
            alt="GitHub-logo"
            width={50}
            height={50}
            className="github-logo m-auto"
          ></Image>
        </a>
      </nav>
      <nav className="text-center">
        <a
          href="https://rs.school/courses/reactjs"
          target="_blank"
          className="course-link"
        >
          <span className="tooltip pb-2">React course</span>
          <Image
            style={{ width: '50px', height: '50px' }}
            src="/react.svg"
            width={50}
            height={50}
            alt="react-logo"
            className="react-logo m-auto"
          />
        </a>
      </nav>
      <p className="w-full text-end">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
    </footer>
  );
}

export default Footer;
