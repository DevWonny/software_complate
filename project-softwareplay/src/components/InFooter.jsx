import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  width : 80%;
  margin-left : 10%;
  height: 100%;
  margin-top : 30px;
`;

const FooterMenu = styled.div`
  width : 400px;
  height : 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a{
    font-size:1rem;
    letter-spacing:-0.8px;
    color:#333;
  }
  a:nth-child(2){
    font-weight:600;
  }
`;

const FooterInfo = styled.div`
  width : 800px;
  overflow: hidden;
  line-height: 1.5;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const FooterInfoDiv = styled.div`
  display: block;
  p{
    margin-left : 30px;
  }
`;

const FooterSnsList = styled.div`
  width : 100%;
  height : 50px;
  display: flex;
  justify-content: flex-end;
  position : relative;
  right: 0;
  a{
    margin-right: 5px;
  }
`;

function InFooter(){
    return (
      <FooterWrap>
        <FooterMenu>
          <a href="https://www.playsw.or.kr/policy/terms">이용약관</a>
          <a href="https://www.playsw.or.kr/policy/privacy">개인정보 처리방침</a>
          <a href="https://www.playsw.or.kr/support/faq">자주 묻는 질문</a>
        </FooterMenu>
        <FooterInfo>
          <FooterInfoDiv>
            <h3>Information</h3>
          </FooterInfoDiv>
          <FooterInfoDiv>
            <p>사업자 등록번호 : 129-82-12249 | 주소 : 경기도 성남시 분당구 불정로 6(정자동, 그린팩토리)</p>
            <p>대표자 : 조규찬 | 법인명 : (재)네이버커넥트 | 연락처 : 1522-9182</p>
            <p>Contact : play_sw@connect.or.kr</p>
            <p>&copy; NAVER Connect Foundation</p>
          </FooterInfoDiv>
        </FooterInfo>
        <FooterSnsList>
          <a href="https://m.post.naver.com/nvplaysw" target="_blank" rel="noreferrer"><img src="/img/sns_naverpost.svg" alt="sns_naverPost" /></a>      
          <a href="https://tv.naver.com/playsw" target="_blank" rel="noreferrer"><img src="/img/sns_navertv.svg" alt="sns_naverTv" /></a>      
          <a href="https://www.facebook.com/playsw" target="_blank" rel="noreferrer"><img src="/img/sns_facebook.svg" alt="sns_facebook" /></a>
          <a href="https://www.youtube.com/channel/UCrzLAvPVai5V_MCb2tqZfDw?view_as=subscriber" target="_blank" rel="noreferrer"><img src="/img/sns_youtube.svg" alt="sns_youtube" /></a>
        </FooterSnsList>
      </FooterWrap>
    );
}

export default InFooter;