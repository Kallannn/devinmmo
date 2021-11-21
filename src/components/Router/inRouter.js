import React, { useEffect } from 'react';
import GameLibrary from '../GameLibrary/inGameLibrary.js';
import GameInspector from '../GameInspector/inGameInspector.js';
import Home from '../Home/inHome.js';
import pageEnum from '../../services/PageEnumerator.js'
import News from '../News/inNews.js';
import styled from "styled-components";


function Router(props){
    const [currentPage, setCurrentPage] = React.useState(pageEnum.Home)
    const [currentPageParam, setPageParam] = React.useState({})

    const RouterNavButtonContainer= styled.div`
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        justify-items: center;
        width:100%;
        `;
    
    useEffect(()=>{console.log('page: '+currentPage)},[currentPage])
    useEffect(()=>{console.log('param: ');console.log(currentPageParam)},[currentPageParam])

    return(
        <>
            <nav className={'routerNavigator'}>
                <RouterNavButtonContainer>
                    <label className={'DevInMMO'} onClick={()=>{setCurrentPage(pageEnum.Home)}} >DevInMMO</label>
                </RouterNavButtonContainer>
                <RouterNavButtonContainer>
                    
                    <div className={'routerNavButton'} onClick={()=>{setCurrentPage(pageEnum.Home)}}>
                        <label >HOME</label>
                    </div>
                    <div className={'routerNavButton'} onClick={()=>{setCurrentPage(pageEnum.GameLib)}}>
                        <label >GAME LIBRARY</label>
                    </div>
                    <div className={'routerNavButton'} onClick={()=>{setCurrentPage(pageEnum.News)}}>
                        <label >News</label>
                    </div>
                </RouterNavButtonContainer>
                <div className={'lineBelowDiv'}/>
            </nav>
            <section className={'sectionMinHeight'}>
                {
                    pageConditionalRender(currentPage, currentPageParam, (page)=>{
                        setCurrentPage(page);
                        
                    }, (param)=>{
                        setPageParam(param);
                    })
                }
            </section>
        </>
    ); 
}

//Retorna o componente que compõe a página atual
function pageConditionalRender(currPage, currParam, navChangePage, navChangeParam){
    switch(currPage){
        case pageEnum.Home:
            return(
            <>
            <Home changePage={navChangePage} changeParam={navChangeParam} param={currParam}/>
            </>
            );
            break;
        case pageEnum.GameLib:
            return(
            <>
            <GameLibrary changePage={navChangePage} changeParam={navChangeParam} param={currParam}/>
            </>);
            break;
        case pageEnum.News:
            return(
            <>
            <News changePage={navChangePage} changeParam={navChangeParam} param={currParam}/>
            </>);
            break;
        case pageEnum.GameInspector:
            return(
            <>
            <GameInspector changePage={navChangePage} changeParam={navChangeParam} param={currParam}/>
            </>);
            break;
        default:
            return(
            <>
            <Home changePage={navChangePage} changeParam={navChangeParam} param={currParam}/>
            </>);
            break;
    }
}

export default Router;
