import React from "react";
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Home, Login, Join } from './pages';
import InFooter from "./components/InFooter";

const Footer = styled.div`
  width : 100%;
  background-color: #f7f7f7;
  padding-bottom : 30px;
  padding-top : 10px;
`;

function App() {
  return (
    <> 
      <Route path='/' exact={true} component={Home} />
      <Route path='/Login' component={Login} />
      <Route path='/Join' component={Join} />
      <Footer>
            <InFooter />
      </Footer>
    </>
  );
}

export default App;
