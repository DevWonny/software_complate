import React,{useState, useRef} from "react";
import styled, {css} from "styled-components";

const NewsContentWrap = styled.div`
    width : 80%;
    overflow: hidden;
    margin-left: 10%;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const NewsContentList = styled.div`
    width : 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    img{
        width:100%;
    }
    h4{
        margin-top: 20px;
        margin-bottom : 10px;
        font-size : 18px;
        font-weight: 600;
    }
    p{
        font-size : 16px;
        margin-bottom: 10px;
        line-height: 1.4;
    }
    span{
        font-size : 16px;
        margin-bottom: 10px;
        line-height: 1.4;
    }
`;

const ListBox = styled.div`
    width : 24%;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 1.5rem;
`;

const NewsMore = styled.button`
    display:block;
    width : 200px;
    height : 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 75px;
    margin : 70px auto;
    border : 2px solid #00EDA9;
    color:#333;
    background-color:#fff;
    cursor:pointer;
    &:hover{
        background: #00EDA9;
        color: #fff;
    }
    ${props => 
        props.btnHide &&
        css`
            display: none;
        `
    }
`;

function Lists({ list }) {
    return (
        <ListBox>
            <img src={list.src} alt={list.alt} />
            <h4>{list.title}</h4>
            <p>{list.content}</p>
            <span>{list.date}</span>
        </ListBox>
    );
}

function NewsList(){
    const [contentLists, setContentLists] = useState([
        {
            id: 1,
            src: "/img/newsImg01.png",
            alt: "2021_소프트웨어야 놀자 대학생 멘토 발대식",
            title: "스토리",
            content: "2021 소프트웨어야 놀자 대학생 멘토 발대식",
            date: "2021.07.23"
        },
        {
            id: 2,
            src: "/img/newsImg02.png",
            alt: "네이버 커넥트재단, '소프트웨어야 놀자 인공지능 윤리 교재' 발간",
            title: "뉴스",
            content: "네이버 커넥트재단, '소프트웨어야 놀자 인공지능 윤리 교재' 발간",
            date: "2021.06.30"
        },
        {
            id: 3,
            src: "/img/newsImg03.png",
            alt: "소프트웨어야 놀자, '엔트리를 이용한 인공지능 교육 활동 with KERIS' 연수 추진",
            title: "뉴스",
            content: "소프트웨어야 놀자, '엔트리를 이용한 인공지능 교육 활동 with KERIS' 연수 추진",
            date: "2021.06.16"
        },
        {
            id: 4,
            src: "/img/newsImg04.png",
            alt: "네이버 커넥트재단 '엔트리', 학생 창작물 1000만 개 돌파",
            title: "뉴스",
            content: "네이버 커넥트재단 '엔트리', 학생 창작물 1000만 개 돌파",
            date: "2021.04.21"
        }
    ]);

    const nextId = useRef(5);
    const onCreate = ()=>{
        const contentList = [
            {
                id: nextId.current,
                src: "/img/newsImg04.png",
                alt: "네이버 커넥트재단 '엔트리', 학생 창작물 1000만 개 돌파",
                title: "뉴스",
                content: "네이버 커넥트재단 '엔트리', 학생 창작물 1000만 개 돌파",
                date: "2021.04.21"
            },
            {
                id: nextId.current+1,
                src: "/img/newsImg04.png",
                alt: "네이버 커넥트재단 '엔트리', 학생 창작물 1000만 개 돌파",
                title: "뉴스",
                content: "네이버 커넥트재단 '엔트리', 학생 창작물 1000만 개 돌파",
                date: "2021.04.21"
            },
            {
                id: nextId.current+2,
                src: "/img/newsImg04.png",
                alt: "네이버 커넥트재단 '엔트리', 학생 창작물 1000만 개 돌파",
                title: "뉴스",
                content: "네이버 커넥트재단 '엔트리', 학생 창작물 1000만 개 돌파",
                date: "2021.04.21"
            },
            {
                id: nextId.current+3,
                src: "/img/newsImg04.png",
                alt: "네이버 커넥트재단 '엔트리', 학생 창작물 1000만 개 돌파",
                title: "뉴스",
                content: "네이버 커넥트재단 '엔트리', 학생 창작물 1000만 개 돌파",
                date: "2021.04.21"
            }
        ]
        // return setContentLists(contentLists.concat(contentList));
        setContentLists([...contentLists, ...contentList]); // 같은 타입일 때, 스프레드 연산자(객체 타입) 사용 가능!
        
        nextId.current+=4;

        if(nextId.current>=13){
            setButHide(true);
        }
    }

    const [btnHide, setButHide] = useState(false);

    return (
        <NewsContentWrap>           
            <NewsContentList>
                {contentLists.map(list => (
                    <Lists list={list} key={list.id} />
                ))}
            </NewsContentList>
            <NewsMore onClick={onCreate} btnHide={btnHide}>MORE</NewsMore>
        </NewsContentWrap>
    );
}

export default NewsList;