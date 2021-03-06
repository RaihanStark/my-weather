import React, { useState } from "react";
import { faSearch, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
`;

const Input = styled.input`
  border: none;
  height: 2em;
  flex-grow: 1;
  color: black;
  font-weight: 500;

  ::placeholder {
    color: black;
  }

  :focus {
    outline: none;
  }
`;

const LocateMe = styled.div`
  background-color: #f6f6f7;
  padding: 0.4em;
  text-align: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;

  cursor: pointer;
`;

function SearchEngine(props) {
  const [search, setsearch] = useState({
    name: "",
    typing: false,
    typingTimeout: 0,
  });

  const changeSearch = (e) => {
    let key = e.target.value;
    if (search.typingTimeout) {
      clearTimeout(search.typingTimeout);
    }

    setsearch({
      name: key,
      typing: false,
      typingTimeout: setTimeout(() => {
        props.handler(key);
      }, 1000),
    });
  };
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} className="mr-3" size="md" />
      <Input
        onChange={(e) => {
          changeSearch(e);
        }}
        type="text"
        placeholder="Search for places . . ."
      />
      <LocateMe
        onClick={() => {
          props.locateHandler();
        }}
      >
        <FontAwesomeIcon icon={faLocationArrow} />
      </LocateMe>
    </Container>
  );
}

export default SearchEngine;
