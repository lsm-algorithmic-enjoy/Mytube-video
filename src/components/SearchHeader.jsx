import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [searchtext, setSearchText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/videos/${searchtext}`);
  };
  useEffect(() => setSearchText(keyword || ""), [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-red-700" />
        <h1 className="font-bold ml-2 text-3xl">MyTube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-2/3 p-2 outline-none bg-black text-gray-100"
          type="text"
          placeholder="Search..."
          value={searchtext}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
