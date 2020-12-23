import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useDebounce from "hooks/useDebounce";
import Logo from "components/Logo";
import SearchBar from "components/SearchBar";
import { getWoeid, getWeatherByWoeid } from "apis/metaweather";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestList, setSuggestList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [curWoeid, setCurWoeid] = useState({});
  const [curPlace, setCurPlace] = useState({});
  const debouncedSearchValue = useDebounce(searchValue, 300);

  useEffect(() => {
    if (debouncedSearchValue && !isSubmit) {
      setIsSearching(true);
      getWoeid(debouncedSearchValue).then((data) => setSuggestList(data.data));
    } else {
      setIsSearching(false);
      setSuggestList([]);
    }
  }, [debouncedSearchValue, isSubmit]);

  useEffect(() => {
    curWoeid && getWeatherByWoeid(curWoeid).then((data) => setCurPlace(data));
  }, [curWoeid]);

  const handleSearching = (e) => {
    setSearchValue(e.target.value);
    setIsSubmit(false);
  };

  const handleOnKeyDown = (e) => {
    if (searchValue) {
      if (e.keyCode === 13) {
        // Enter
        setSearchValue(suggestList[activeIndex].title);
        setActiveIndex(0);
        setIsSearching(false);
        setSuggestList([]);
        setIsSubmit(true);
      } else if (e.keyCode === 38) {
        // key Up
        if (activeIndex === 0) {
          return;
        }
        setActiveIndex(activeIndex - 1);
      } else if (e.keyCode === 40) {
        // key Down
        if (activeIndex === suggestList.length - 1) {
          return;
        }
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  const handleSelectedItem = (item) => {
    setSearchValue(item.title);
    setActiveIndex(0);
    setIsSearching(false);
    setSuggestList([]);
    setIsSubmit(true);
    setCurWoeid(item.id);
  };

  return (
    <Wrapper>
      <Logo />
      <SearchBar
        onSearching={handleSearching}
        onKeyDown={handleOnKeyDown}
        selectedItem={handleSelectedItem}
        isSearching={isSearching}
        suggestList={suggestList}
        activeIndex={activeIndex}
        searchValue={searchValue}
      />
    </Wrapper>
  );
};

export default Main;
