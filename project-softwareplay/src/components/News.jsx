import React from "react";
import styled from 'styled-components';
import NewsList from './NewsList';

const NewsSection = styled.div`
    width:100%;
`;

const NewsTitleBox = styled.div`
    width: 80%;
    margin-left: 10%;
    text-align: center;
    margin-top: 100px;
    h1{
        margin-bottom : 20px;
        font-size : 40px;
    }
    p{
        line-height: 1.5;
        font-size : 16px;
        font-weight: 500;
    }
`;

function News(){
    return(
        <NewsSection>
            <NewsTitleBox>
                <h1>뉴스 스토리</h1>
                <p>
                    네이버와 커넥트재단은 아이들이 자유롭게 더 큰 꿈을 꿀 수 있도록<br />
                    다양한 소프트웨어 교육을 진행합니다.
                </p>
            </NewsTitleBox>
            <NewsList />
        </NewsSection>
    );
}

export default News;