import React from 'react';
import styled from 'styled-components';

const MainSection = styled.div`
  width: 100%;
  height : 100vh;
  background-color: #181f41;
`;

const MainLeft = styled.div`
  color: #fff;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left : 10%;
  float : left;
  h1 {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 50px;
  }
  p {
    font-size: 18px;
    line-height: 2;
    position: relative;
  }
`;

const MainRight = styled.div`
  width : 40%;
  height : 100%;
  position : relative;
  margin-right : 10%;
  float : right;
`;

const MainInfo = styled.div`
  width : 90%;
  height : 80%;
  position : absolute;
  bottom : 6%;
  right :0;
`;

const MainInfoCol = styled.ul`
  width: 100%;
  height: 47%;
  position: absolute;
  &:last-child {
    bottom: 0;
  }
  display: flex;
  justify-content: space-between;

  li {
    width: 47%;
    height: 100%;
    background-color: #fff;
    position: relative;

    &::before{
      content: "";
      width: 100%;
      height: 100%;
      border: 4px solid #00EDA9;
      position: absolute;
      top: 0px;
      left: 0px;
      box-sizing: border-box;
      opacity: 0;
      transition:.3s;
    }

    img {
      width: 50%;
      margin-left: 25%;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    p {
      margin-left: 10%;
    }
    .infoTitle {
      margin-bottom: 30px;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.5px;
    }
    .infoText {
      font-size: 13px;
      line-height: 1.5;
      color: #555;
      letter-spacing : -.6px;
    }
    &:hover{
      transition: .5s;
      transform: translateY(-10px);
      box-shadow: 1px 1px 6px 3px rgba(49, 49, 49, 0.3);
      
      &::before{
        opacity:1;
      }
    }
  }
`;

function Main() {
  return (
    <MainSection>
      <MainLeft>
        <h1>Hello AI World</h1>
        <p>
          인공지능과 데이터의 기본 개념을 쉽고
          <br />
          재미있는 영상으로 만나보세요.
        </p>
      </MainLeft>

      <MainRight>
        <MainInfo>
          <MainInfoCol>
            <li>
              <img src="/img/dataImg.png" alt="dataImg" />
              <p className="infoTitle">인공지능&amp;데이터</p>
              <p className="infoText">AI와 DATA의 세계<br/>다양한 교육 콘텐츠로 경험하세요.</p>
            </li>
            <li>
              <img src="/img/softwareImg.png" alt="softwartImg" />
              <p className="infoTitle">소프트웨어</p>
              <p className="infoText">소프트웨어의 기초부터 응용까지,<br/>누구나 시작할 수 있습니다.</p>
            </li>
          </MainInfoCol>

          <MainInfoCol>
            <li>
              <img src="/img/programeImg.png" alt="programeImg" />
              <p className="infoTitle">프로그램</p>
              <p className="infoText">다양한 온/오프라인 프로그램을 통해<br/>네이버의 지식과 경험을 공유합니다.</p>
            </li>
            <li>
              <img src="/img/archive.png" alt="archive" />
              <p className="infoTitle">아카이브</p>
              <p className="infoText">아이들이 더 큰 꿈을 꿀 수 있도록<br/>다양한 교육을 진행합니다.</p>
            </li>
          </MainInfoCol>
        </MainInfo>
      </MainRight>
    </MainSection>
  );
}

export default Main;