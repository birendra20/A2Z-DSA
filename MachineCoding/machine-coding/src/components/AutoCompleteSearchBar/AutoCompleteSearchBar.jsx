import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./AutoCompleteSearchBar.css";
import { useCallback } from "react";

const AutoCompleteSearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResult, setShowResult] = useState(false);
  const [searchResultCache, setSearchResultCache] = useState({});


  const fetchData = useCallback(async () => {
    if (searchResultCache[inputValue]) {
      console.log("returning from cache data");
      setSearchResult(searchResultCache[inputValue]);
      return;
    }
    const data = await fetch(
      `https://dummyjson.com/recipes/search?q=${inputValue}`
    );
    const json = await data.json();

    setSearchResult(json?.recipes);
    setSearchResultCache((prev) => ({ ...prev, [inputValue]: json?.recipes }));

  }, [inputValue, searchResultCache]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [fetchData]);

  return (
    <div className='searchBarWrapper'>
      <div className='searchBarHeader'>Auto-Complete Search Bar</div>
      <div className='searchBarInputWrapper'>
        <input
          className='inputBox'
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='search...'
          onBlur={() => {
            setShowResult(false);
          }}
          onFocus={() => {
            setShowResult(true);
          }}
        />
      </div>

      {showSearchResult && (
        <div className='searchBarList'>
          {searchResult.map((res) => (
            <>
              <div key={res.id} className='searchBarListItem'>
                {res.name}
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteSearchBar;
