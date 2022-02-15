import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../actions/user_action';
import styled from 'styled-components';

const LogoutStyle= styled.p`
  cursor : pointer;
`;

function LogoutBtn(props) {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.logoutSuccess) {
        localStorage.removeItem("userId");
        props.history.push('/');
        console.log(localStorage.getItem("userId"));
        alert("로그아웃이 되었습니다");
      } else {
        alert("로그아웃 실패");
      }
    });
  };

  return (
    <>
    <LogoutStyle onClick={logout}>로그아웃</LogoutStyle> 
    </>
  )
}

export default withRouter(LogoutBtn);