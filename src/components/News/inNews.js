import React from 'react';
import {getNews, getNewsSearch} from '../../services/ApiMMO.js';
import NewsCard from '../NewsCard/inNewsCard.js';
import pageEnum from '../../services/PageEnumerator.js'
import '../../App.css';
import SearchBarAndPaging from '../SearchBarAndPaging/inSearchBarAndPaging.js';
import styled from "styled-components";

function News(props){
    const [newsList, setNewsList] = React.useState([]);
    const [newsPerPage, setNewsPerPage] = React.useState(6);
    const [pageIndex, setPageIndex] = React.useState(1);

    // setNewsList(ApiMMO.getGamesFromTo( newsPerPage, pageIndex))

    const loadNewsList = async (searchKey = '') =>{
        if(searchKey === ''){
            getNews( newsPerPage, pageIndex).then(gameData =>{
                console.log(gameData)
                setNewsList(gameData)
            })
        }
        else if(searchKey !== ''){
            getNewsSearch( newsPerPage, pageIndex, searchKey).then(gameData =>{
                console.log(gameData)
                setNewsList(gameData)
            })
        }
    }

    const getNewsPage = ()=>{
        let newsPage = []

        if(newsList.length > 0){
            let from = (pageIndex - 1) * newsPerPage;
            let to = pageIndex * newsPerPage;
            newsPage = newsList.slice(from, to)
        }

        return newsPage
    }

    const submitSearch = (key)=>{
        console.log('recebendo valor: '+key)
        loadNewsList(key) 
    }

    React.useEffect(() => {

        loadNewsList();

      }, [pageIndex]
    )

    const NewsLibraryContainer= styled.div`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `;

    return(
        <>
            <NewsLibraryContainer>
                <SearchBarAndPaging
                        submitSearch={submitSearch}
                        setPageIndex={setPageIndex}
                        pageIndex={pageIndex}
                        itemsList={newsList.length}
                        itemsPerPage={newsPerPage}
                        />
                <div className={'gameLib'}>
                    { newsList.length > 0 ? (
                        getNewsPage().map(item => 
                        <NewsCard news={item}/>
                    )) : (
                        <label>Wow, such empty</label>
                    ) }
                </div>
            </NewsLibraryContainer>
        </>
    );
}

export default News;