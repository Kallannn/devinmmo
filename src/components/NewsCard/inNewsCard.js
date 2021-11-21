import React from 'react';
import styled from "styled-components";

const GameLibraryContainer= styled.div`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `;

    const NewsImgDiv= styled.div`
    width: 100%;
    margin: 10px;
    `;

function NewsCard(props){
    return(
            <article className={'newsCardPlaceHolder'}>
                <NewsImgDiv>
                    <img  src={props.news.thumbnail} ></img>
                </NewsImgDiv>
                <div>
                    <label className={'newsTitle'}> {props.news.title} </label>
                    <p className={'newsContent'}>{props.news.article_content.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                </div>
            </article>
    );
}



export default NewsCard;