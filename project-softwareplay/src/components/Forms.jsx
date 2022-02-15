import React,{useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { lighten , darken} from "polished";

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

const types = {
    Login: '로그인',
    Join: '회원가입'
}
function Forms({type, history}){
    const text = types[type];
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userpwCheck, setUserPwCheck] = useState('');
    const [userTel, setUserTel] = useState('');

    const onChangeName= e =>setUserName(e.target.value);
    const onChangeId= e =>setUserId(e.target.value);
    const onChangePw= e =>setUserPw(e.target.value);
    const onChangePwCheck= e =>setUserPwCheck(e.target.value);
    const onChangeTel= e =>setUserTel(e.target.value);


    const onSubmit = e=> {
      e.preventDefault();
      if(userId==='admin' && userPw==='1234') history.push('/');
    };

    return(
    <FormBlock>
        <FormHeader>
            <h2>{text}</h2>
            <p>{text} 페이지 입니다.</p>
        </FormHeader>      
        <FormWrap onSubmit={onSubmit}>
            { type ==='Join' && (
                <Form type="text" placeholder="이름을 입력해주세요" name="username" value={userName} onChange={onChangeName} />
            )}
            <Form type="text" placeholder="아이디를 입력해주세요" name="userid" value={userId} onChange={onChangeId} />
            <Form type="password" placeholder="비밀번호를 입력해주세요" name="userpw" value={userPw} onChange={onChangePw} />
            { type ==='Join' && (
                <Form type="text" placeholder="비밀번호를 다시 입력해주세요" name="userpwCheck" value={userpwCheck} onChange={onChangePwCheck} />
            )}
            { type ==='Join' && (
                <Form type="text" placeholder="전화번호를 입력해주세요" name="usertel" value={userTel} onChange={onChangeTel} />
            )}
            <BtnLayout type="submit">{text}</BtnLayout>            
        </FormWrap>
        { type === 'Login' ? (
            <JoinBtn><Link to="/Join">회원가입</Link></JoinBtn>
          ):<JoinBtn>로그인</JoinBtn>
        }
    </FormBlock>
    );
}

export default Forms;