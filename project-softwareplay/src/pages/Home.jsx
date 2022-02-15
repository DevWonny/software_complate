import React from "react";
import styled from 'styled-components';
import Main from '../components/Main';
import News from "../components/News";
import Header from '../components/Header';


const Wrap = styled.div`
  width:100%;
`;

const Section = styled.div`
  width:100%;
`;

function Home() {

  
  return (
    <>
      <Header/>
      <Wrap>
        <Section>
          <Main />
          <News />
        </Section>
      </Wrap>
    </>
  );
}

export default Home;
