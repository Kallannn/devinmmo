import React from 'react';
const loadingSpinner = '../../sprites/loadingSpinner.gif'

function GameCard(props){
    const clickHandle = ()=>{
        console.log("clickHandle: passando " + props.game.id + " como parâmetro")
        props.changeParam(props.game.id)
        props.changePage(props.redirectIndex)
    }
    

    return(
            <article className={'gameCard'}>
                <img className={'gameCardimg'} src={props.game.thumbnail} onClick={clickHandle}></img>
            </article>
    );
}



export default GameCard;