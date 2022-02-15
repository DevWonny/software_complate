import React, {useState, useEffect} from "react";
import styled,{css} from "styled-components";
import { Link } from "react-router-dom";
import LogoutBtn from './LogoutBtn';
// import axios from 'axios';

const HeaderWrap = styled.div`
  width : 100%;
  height: 100px;
  position : fixed;
  background-color : transparent;  
  box-sizing : border-box;  
  z-index : 1;
  transition:.3s;

  ${props=>
    props.hideBak &&
    css`
      border-bottom : 1px solid #000;
      background-color : #fff;
    `
  }
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
  color:#fff
  
  ${props=>
    props.joinBtnColor &&
    css`
      color: #000;
    `
  }
`;

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [hideBak, setHideBak] = useState(false); // header 배경화면 초기화
  const [logoimg, setLogoimg] = useState("/img/logo.svg"); // 로고 이미지 초기화
  const [joinBtnColor, setjoinBtnColor] = useState(false); // joinBtnColor 초기화
  
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(scrollY >= 100) {
      // 100 이상이면 배경: 흰색, 로고/joinBtnColor: 검은색
      setHideBak(true);
      setLogoimg("/img/logo_black.svg");
      setjoinBtnColor(true);
    } else {
      // 100 이하면 배경: 투명, 로고/joinBtnColor: 흰색
      setHideBak(false);
      setLogoimg("/img/logo.svg");
      setjoinBtnColor(false);
    }
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    }
  })

  // useEffect(() => {
  //   axios.post('login').then((response) => {
  //     const props = response.data.loginSuccess;
  //     console.log(props);
  //   });
  //   return props;
  // }, []);


  let getId = localStorage.getItem("userId");
  
  return (
    <HeaderWrap hideBak={hideBak}>
      <InHead>
        <div>
          <img src={logoimg} alt="Logo" />
        </div>

        <HeaderBtnBox>
          <LoginBtn>
            {getId ? "마이페이지" : <Link to="/Login">로그인</Link>}
            {/* <Link to="/Login">{LoginSucss ? '마이페이지' : '로그인'}</Link> */}
          </LoginBtn>
          <JoinBtn joinBtnColor={joinBtnColor}>
            {getId ? <LogoutBtn /> : <Link to="/Join">회원가입</Link>}
            {/* <Link to="/Join">{LoginSucss ? '로그아웃' : '회원가입'}</Link> */}
          </JoinBtn>
        </HeaderBtnBox>
      </InHead>
    </HeaderWrap>
  );

}

export default Header;
