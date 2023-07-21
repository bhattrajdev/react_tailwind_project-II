import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-700 to-blue-700 mx-auto py-16 px-[40px] grid md:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-white">Movies</h1>
        <p className="py-4">
          Explore the galaxy of movies with us! Discover the latest and greatest
          movies from various genres.
        </p>
        <div className="flex justify-between w-[150px] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="md:col-span-2 flex justify-between px-[40px]  mt-6">
        <div>
          <h6 className="font-medium text-gray-200">Genres</h6>
          <ul>
            <li className="py-2 text-sm">Action</li>
            <li className="py-2 text-sm">Adventure</li>
            <li className="py-2 text-sm">Sci-Fi</li>
            <li className="py-2 text-sm">Fantasy</li>
            <li className="py-2 text-sm">Romance</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-200">About</h6>
          <ul>
            <li className="py-2 text-sm">Contact Us</li>
            <li className="py-2 text-sm">FAQ</li>
            <li className="py-2 text-sm">Privacy Policy</li>
            <li className="py-2 text-sm">Terms of Service</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-200">Explore</h6>
          <ul>
            <li className="py-2 text-sm">Featured Movies</li>
            <li className="py-2 text-sm">Popular Movies</li>
            <li className="py-2 text-sm">Top Rated Movies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
