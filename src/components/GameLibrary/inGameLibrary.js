import React from 'react';
import {getGameListPage, getGameListSearch} from '../../services/ApiMMO.js';
import GameCard from '../GameCard/inGameCard.js';
import pageEnum from '../../services/PageEnumerator.js'
import SearchBarAndPaging from '../SearchBarAndPaging/inSearchBarAndPaging.js';
import '../../App.css';
import styled from "styled-components";

function GameLibrary(props){
    const [gameList, setGameList] = React.useState([]);
    const [gamesPerPage, setGamesPerPage] = React.useState(6);
    const [pageIndex, setPageIndex] = React.useState(1);

    const loadGameList = async (searchKey='') =>{
        if(searchKey === ''){
            console.log('procurando por nada');
            getGameListPage( gamesPerPage, pageIndex).then(gameData =>{
                setGameList(gameData)
            })
        }
        else if(searchKey !== ''){
            getGameListSearch( gamesPerPage, pageIndex, searchKey).then(gameData =>{
                console.log('procurando por ' + searchKey)
                setGameList(gameData)
            })
        }
    }

    const getGamePage = ()=>{
        let gamePage = []
        if(gameList.length > 0){
            let from = (pageIndex - 1) * gamesPerPage;
            let to = pageIndex * gamesPerPage;
            gamePage = gameList.slice(from, to)
        }
        return gamePage
    }

    const submitSearch = (key)=>{
        console.log('recebendo valor: '+key)
        loadGameList(key) 
    }

    React.useEffect(() => {
        loadGameList();
      }, [pageIndex]
    )

    const GameLibraryContainer= styled.div`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `;
    const GameCardsDeck= styled.div`
    width:fit-content;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `;

    return(
        <>
            <GameLibraryContainer>
                    <SearchBarAndPaging
                    submitSearch={submitSearch}
                    setPageIndex={setPageIndex}
                    pageIndex={pageIndex}
                    itemsList={gameList.length}
                    itemsPerPage={gamesPerPage}
                    />
                    <div className={'gameLib'}>
                        { gameList.length > 0 ? (
                            getGamePage().map(item => 
                            <GameCard game={item} changePage={props.changePage} changeParam={props.changeParam} redirectIndex={pageEnum.GameInspector}/>
                        )) : (
                            <GameCard game={'no prop'} changePage={props.changePage} changeParam={props.changeParam}/>
                        ) }
                    </div>
            </GameLibraryContainer>
        </>
    );
}

export default GameLibrary;