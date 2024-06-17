import React, { useState } from 'react'
import { mockSearchResults} from '../constants/mock'
import {XIcon, SearchIcon} from "@heroicons/react/solid"
import SearchResults from './SearchResults';


const Search = () => {
    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState("mockSearchResults.result");

    const clear = () =>{
        setInput("");
        setBestMatches([]);
    };

    const updateBestMatches = () =>{
        setBestMatches(mockSearchResults.result);
    };
  return (
    <div className='flex items-center my-4 borer-2 rounded-full relative z-50 w-96 bg-neutral-50 bg-opacity-10 border-neutral-200'>
      <input 
      type="text" 
      value={input} 
      className='w-full px-4 py-2 focus:outline-none bg-neutral-50 bg-opacity-5 rounded-full text-neutral-50' 
      placeholder="Search Stocks"
      onChange={(event) => {
        setInput(event.target.value);
      }}
      onKeyPress={(event) =>{
        if(event.key== "Enter"){
          updateBestMatches();
        }
      }}
      />
      {input && (
      <button onClick={clear}>
      <XIcon className="h-4 w-4 fill-neutral-50 m-1"/>
      </button>)}


      <button onClick={updateBestMatches} className='h-8 w-8  rounded-md flex items-center justify-center m-1 p-2'>
        <SearchIcon className='h-4 w-4 fill-neutral-50 '/>
      </button>


      {input && bestMatches.length>0 ? <SearchResults results={bestMatches}/> : null }
    </div>
  )
}

export default Search
