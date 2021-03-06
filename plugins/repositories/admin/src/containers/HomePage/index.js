import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Header } from '@buffetjs/custom';
import { Table } from '@buffetjs/core';

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`

const headers = [
  { 
    name: "Name",
    value: "name"
  },
  { 
    name: "Description",
    value: "description"
  },
  { 
    name: "Url",
    value: "html_url"
  },
]

const HomePage = () => {
  const [rows, setRows] = useState([])

  useEffect(()=>{
    axios.get("https://api.github.com/users/React-Avancado/repos")
      .then(response => {
        setRows(response.data)
      })
      .catch(e => strapi.notification.error(e.message))
  },[])

  return (
    <Wrapper>
     <Header
      title={{ label: "React Avançado Repositories"}}
      content="A list of our repositories in React Avançado course."
     />
     <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
