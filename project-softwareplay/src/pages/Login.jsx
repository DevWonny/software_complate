import React,{useState, useCallback} from 'react';
import HeaderM from '../components/HeaderM';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { lighten, darken } from "polished";
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/user_action';
import { withRouter } from 'react-router';

const FormBlock = styled.div`
  width : 100%;
  padding-top : 200px;
  margin-bottom: 150px
`;

const FormHeader = styled.div`
  width : 100%;
  overflow : hidden;
  text-align : center;
  margin-bottom: 50px;
  h2{
    font-size : 35px;
    font-weight : 600;
  }
  p{
    font-size : 16px;
    font-weight : 500;
    color : #555;
    margin-top : 20px;
  }
`;

const FormWrap = styled.form`
  width : 50%;
  overflow : hidden;
  margin : auto;
`;

const Form = styled.input`
    width : 98%;
    height : 50px;
    margin-left : 1%;
    border : 1px solid #ddd;
    padding-left : 10px;
    color : #555;
    font-size : 16px;
    box-sizing : border-box;
    margin-bottom : 15px;
`;

const BtnLayout = styled.button`
  width: 98%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -.8px;
  margin-left: 1%;
  border: none;
  background-color: #181F41;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 35px;
  cursor: pointer;
  &:hover{
    background: ${lighten(0.05, '#181F41')};
  }
  &:active{
    background: ${darken(0.05, '#181F41')};
  }
`;

const JoinBtn = styled.div`
  width : 49%;
  background: #00EDA9;
  margin :auto;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -.8px;
  border: none;
  border-radius: 10px;
  margin-bottom: 15px;
  display: block;
  text-align: center;
  cursor: pointer;
  &:hover{
    background: ${lighten(0.1, '#00EDA9')};
  }
  &:active{
    background: ${darken(0.05, '#00EDA9')};
    color:#fff
  }
`;


function Login({history}) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const dispatch = useDispatch();
  const onChangeId= useCallback( e =>setUserId(e.target.value), []);
  const onChangePw= useCallback( e =>setUserPw(e.target.value), []);

  const onSubmit = e=> {
    e.preventDefault();
    let body = {
      id: userId,
      password: userPw
    };

    if (!userId || !userPw) {
      alert('아이디 및 비밀번호를 입력해주세요!');
    } else {
      dispatch(loginUser(body)).then((response) => {
        if (response.payload.loginSuccess) {
          localStorage.setItem("userId", response.payload.userId);
          console.log("userId: " + localStorage.getItem("userId"));
          history.push('/');
        } else {
          alert(response.payload.error);
        }
      })
    }
  };

  return(
      <>
        <HeaderM />
        <FormBlock>
            <FormHeader>
                <h2>로그인</h2>
                <p>로그인 페이지 입니다.</p>
            </FormHeader>      
            <FormWrap onSubmit={onSubmit}>
                <Form type="text" placeholder="아이디를 입력해주세요" name="userid" value={userId} onChange={onChangeId} />
                <Form type="password" placeholder="비밀번호를 입력해주세요" name="userpw" value={userPw} onChange={onChangePw} />
                <BtnLayout type="submit">로그인</BtnLayout>            
            </FormWrap>
            <JoinBtn><Link to="/Join">회원가입</Link></JoinBtn>
        </FormBlock>
      </>
  );
}

export default withRouter(Login);