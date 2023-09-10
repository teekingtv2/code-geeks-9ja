import { linkData } from '@/data/mockData';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Navbar = () => {
  const session = useSession();

  return (
    <nav className="navbar navbar-expand-lg pt-2 mx-auto bx-container">
      <div className="container-fluid bg-blue-600 mt-2">
        <Link href="/" className="navbar-brand" passHref>
          <img
            src="/assets/logo.png"
            alt="Code Geeks 9ja"
            className="img-fluid my-2 ms-md-4"
            style={{ width: '6rem', height: '3rem' }}
          />
        </Link>
        <button
          className="navbar-toggler text-white fs-medium p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <BiMenu />
        </button>
      </div>

      <div className="collapse navbar-collapse mt-4" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto fs-normal ms-4 ms-md-0 fw-medium">
          {linkData.map((link, index) => (
            <li className="nav-item me-4" key={index}>
              <Link
                href={link.url}
                className="text-uppercase nav-link text-white active font-weight-600"
                passHref
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className="btnn btnn1 mt-md-0 mt-2" type="submit">
          <Link href="/register" passHref>
            Get Started
          </Link>
        </button>
        {session.status === 'authenticated' && (
          <button className="btnn ms-md-3 px-3 mt-md-0 mt-2" onClick={signOut}>
            Logout
          </button>
        )}

        <div className="header-social">
          <a href="https://instagram.com/codegeeks9ja" target="_blank" className="mx-3">
            <BsInstagram size={20} />
          </a>
          <a href="https://x.com/codegeeks9ja" target="_blank">
            <BsTwitter size={20} />
          </a>
          <a href="https://facebook.com/codegeeks9ja" target="_blank" className="mx-3">
            <BsFacebook size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
