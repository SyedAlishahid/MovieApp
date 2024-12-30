import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import logo from './assets/logo.png';

export default function Footer() {
  const location = useLocation(); // Get the current location

  return (
    <>
      <div className="mt-1 bg-[#121212] text-white">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          <div className="ml-5">
            <img src={logo}
              className="mt-10 h-16 w-36 cursor-pointer"
              onClick={() => (window.location.href = "/")}
            />
            <p className="mt-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum, dolor sit  amet consectetur adipisicing.</p>

            <div className="mt-4 cursor-pointer">
              <FacebookIcon sx={{
                color: "blue",
                marginLeft: "10px",
                fontSize: "2rem",
              }} />
              <InstagramIcon sx={{
                color: "#E75480",
                marginLeft: "10px",
                fontSize: "2rem",
              }} />
              <YouTubeIcon sx={{
                color: "red",
                marginLeft: "10px",
                fontSize: "2rem",
              }} />
              <XIcon sx={{
                color: "black",
                marginLeft: "10px",
                fontSize: "2rem",
              }} />
            </div>
          </div>

          <div className="mt-10 grid">
            <h1 className="font-semibold text-2xl mb-10 text-white ml-6">ON OUR SITE</h1>
            <ul className='text-white font-semibold ml-6'>
              <li>
                <Link
                  to="/"
                  className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/' ? 'text-yellow-500' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/popular"
                  className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/popular' ? 'text-yellow-500' : ''}`}
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  to="/top-rated"
                  className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/top-rated' ? 'text-yellow-500' : ''}`}
                >
                  Top Rated
                </Link>
              </li>
              <li>
                <Link
                  to="/upcoming"
                  className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/upcoming' ? 'text-yellow-500' : ''}`}
                >
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-10 ml-6">
            <h1 className="font-semibold text-2xl mb-10 text-white">RESOURCE</h1>
            <p className="mt-2 cursor-pointer text-lg font-lg text-white">Career</p>
            <p className="mt-2 cursor-pointer text-lg font-lg text-white">Blog</p>
            <p className="mt-2 cursor-pointer text-lg font-lg text-white">Legal</p>
          </div>
          <div className="mt-10 ml-6">
            <h1 className="font-semibold text-2xl mb-10 text-white">CONTACT</h1>
            <p className="mt-2 cursor-pointer text-lg font-lg text-white">@gmail.com</p>
            <p className="mt-2 cursor-pointer text-lg font-lg text-white">0327-****91</p>
            <p className="mt-2 cursor-pointer text-lg font-lg text-white">Karachi, Pakistan</p>
          </div>
          <p className="mt-8 text-sm font-semibold text-center relative bottom-0 lg:left-[30rem] text-white">&copy; Alishahid.outlook ALL Right Reserved.</p>
        </div>
      </div>
    </>
  )
}
