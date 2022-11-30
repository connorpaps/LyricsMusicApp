import { useState } from'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // On form submission, prevents the page from automatically reloading and navigates to the searched terms proper page.
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`)
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only">
        Search all songs..
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-6 h-6 ml-4"/>
        <input
        name="search-field"
        autoComplete="off"
        id="search-field"
        placeholder="Search"
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"/>
      </div>
    </form>
  )
};

export default Searchbar;
