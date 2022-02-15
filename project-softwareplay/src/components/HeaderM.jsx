import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrap = styled.div`
  width : 100%;
  height: 100px;
  position : fixed;
  background-color : #fff;  
  box-sizing : border-box;  
  z-index : 1;
  transition:.3s;
  border:1px solid #ddd;
`;

const InHead = styled.div`
  width: 80%;
  height: 100px;
  position : absolute;
  left : 10%;
  display : flex;
  justify-content : space-between;
  align-items : center;
`;

const HeaderBtnBox = styled.ul`
  width : 250px;
  height : 100%;
  display : flex;
  justify-content : space-between;
  align-items : center;
`;

const LoginBtn = styled.li`
  width: 100px;
  height: 50%;
  border-radius: 40px;
  text-align: center;
  line-height: 3.25;
  background-color: #00eda9;
`;

const JoinBtn = styled(LoginBtn)`
  border: 2px solid #00eda9;
  background-color: transparent;
`;

function HeaderM() {

  return (
    <HeaderWrap>
      <InHead>
        <div>
          <Link to="/">
            <img src="/img/logo_black.svg" alt="Logo" />
          </Link>
        </div>

        <HeaderBtnBox>
          <LoginBtn><Link to ="/Login">로그인</Link></LoginBtn>
          <JoinBtn><Link to ="/Join">회원가입</Link></JoinBtn>
        </HeaderBtnBox>
      </InHead>
    </HeaderWrap>
  );

}

export default HeaderM;
