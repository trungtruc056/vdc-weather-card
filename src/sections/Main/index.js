import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import useDebounce from "hooks/useDebounce";
import Logo from "components/Logo";
import SearchBar from "components/SearchBar";
import Weather from "components/Weather";
import { getCurrentPlace, getCurrentWoeid, getSuggestList, initialState, resetSuggestList, updateSearching, weatherReducer } from "./reducer";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const SearchWrapper = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;
`

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const debouncedSearchValue = useDebounce(searchValue, 200);
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  useEffect(() => {
    if (debouncedSearchValue && !isSubmit) {
      updateSearching(dispatch, true);
      getSuggestList(dispatch, debouncedSearchValue);
    } else {
      updateSearching(dispatch, false);
      resetSuggestList(dispatch);
    }
  }, [debouncedSearchValue, isSubmit]);

  useEffect(() => {
    state.curWoeid &&
      getCurrentPlace(dispatch, state.curWoeid);
  }, [state.curWoeid]);

  const handleSearching = (e) => {
    setSearchValue(e.target.value);
    setIsSubmit(false);
  };

  const handleOnKeyDown = (e) => {
    if (searchValue) {
      if (e.keyCode === 13) {
        // Enter
        setSearchValue(state.suggestList[activeIndex].title);
        setActiveIndex(0);
        updateSearching(dispatch, false);
        resetSuggestList(dispatch);
        setIsSubmit(true);
      } else if (e.keyCode === 38) {
        // key Up
        if (activeIndex === 0) {
          return;
        }
        setActiveIndex(activeIndex - 1);
      } else if (e.keyCode === 40) {
        // key Down
        if (activeIndex === state.suggestList.length - 1) {
          return;
        }
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  const handleSelectedItem = (item) => {
    setSearchValue(item.title);
    setActiveIndex(0);
    updateSearching(dispatch, false);
    resetSuggestList(dispatch);
    setIsSubmit(true);
    getCurrentWoeid(dispatch, item.woeid);
  };

  return (
    <Wrapper>
      <Logo />
      <SearchWrapper>
        <SearchBar
          onSearching={handleSearching}
          onKeyDown={handleOnKeyDown}
          selectedItem={handleSelectedItem}
          isSearching={state.isSearching}
          suggestList={state.suggestList}
          activeIndex={activeIndex}
          searchValue={searchValue}
          isLoading={state.isLoading}
        />
      </SearchWrapper>
      <Weather data={state.curPlace} isLoading={state.isLoadWeather} />
    </Wrapper>
  );
};

export default Main;
