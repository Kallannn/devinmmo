import React from 'react';
import {getGameDetails} from '../../services/ApiMMO.js';
import pageEnum from '../../services/PageEnumerator.js';
import CommentSection from '../CommentSection/inCommentSection.js';
import styled from "styled-components";
const loadingSpinner = '../../sprites/loadingSpinner.gif'

function GameInspector(props){
    const [gameData, setGameData] = React.useState({})
    const [currentScreenshot, setCurrScreenshot] = React.useState(0)

    React.useEffect(() => {
        const loadGameData = async () =>{
            getGameDetails( props.param).then(data =>{
                setGameData(data)
                console.log(data)
            })
        }
        loadGameData();
      }, [])

    const loadScreenshot = ()=>{
          if(gameData.screenshots){
              return gameData.screenshots[currentScreenshot].image
          }else{
              return loadingSpinner
          }
      }

    const changeScreenshot = (plusOrMinus)=>{
        if(gameData.screenshots !== 'undefined' ){
            if(currentScreenshot == gameData.screenshots.length -1  && plusOrMinus>0){
                setCurrScreenshot(0)
            }else if(currentScreenshot == 0 && plusOrMinus < 0){
                setCurrScreenshot(gameData.screenshots.length - 1)
            }else{
                setCurrScreenshot(currentScreenshot + (plusOrMinus))
            }
        }
      }
    const GameInspContainer= styled.div`
        width: 80%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        `;
    const RowInspContainer= styled.div`
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        `;
    const ScheenshotsContainer= styled.div`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 10px;
        `;
    const TitleContainer= styled.div`
        display: inline-flex;
        align-items: left;
        flex-direction: column;
        margin: 10px;
        `;
    const ContentContainer= styled.div`
    width:80%
    display: inline-flex;
    align-items: left;
    flex-direction: row;
    margin: 10px 50px 10px 50px;
    `;
    return(
        <>
            <RowInspContainer>
                <ContentContainer>
                    <label>Title:</label>
                    <p className={'gameTitle'}>{gameData.title}</p><br/>
                    <label>Developer:</label>
                    <p className={'paragraphLittleMargin'}>{gameData.developer}</p>
                    <label>Publisher:</label>
                    <p className={'paragraphLittleMargin'}>{gameData.publisher}</p>
                    <label>Thumbnail:</label>
                    <br/>
                    <img src={gameData.thumbnail}></img>
                    <br/><br/>
                    <div className={'screenshotFrame'}>
                        <img className={'noDownMargin'} src={loadScreenshot()}></img>
                        <div className={'inlineDiv'}>
                            <button className={'screenshotButton'} onClick={()=>{changeScreenshot(-1)}}>Back</button>
                            <button className={'screenshotButton'} onClick={()=>{changeScreenshot(1)}}>Next</button>
                        </div>
                    </div>
                    
                    <label>Genre:</label>
                    <p className={'paragraphLittleMargin'}>{gameData.genre}</p>
                    <label>Release date:</label>
                    <p className={'paragraphLittleMargin'}>{gameData.release_date}</p>
                    <label>Description:</label>
                    <p className={'paragraphLittleMargin'}>{
                        (()=>{
                            if(gameData.short_description){
                                return gameData.short_description.replace(/<\/?[^>]+(>|$)/g, "")
                            }
                            else{return 'no description'}
                        })()
                    }</p>
                    {(()=>{if(gameData.minimum_system_requirements != undefined){
                       return(
                        <div className={'minSysReq'}>
                            <label className={'minSysReqTitle'}>Minimum system requirements:</label>
                            <br/>
                            <label>Graphics:</label>
                            <p className={'paragraphLittleMargin'}>{gameData.minimum_system_requirements.graphics}</p>
                            <label>Memory:</label>
                            <p className={'paragraphLittleMargin'}>{gameData.minimum_system_requirements.memory}</p>
                            <label>OS:</label>
                            <p className={'paragraphLittleMargin'}>{gameData.minimum_system_requirements.os}</p>
                            <label>Processor:</label>
                            <p className={'paragraphLittleMargin'}>{gameData.minimum_system_requirements.processor}</p>
                            <label>Storage:</label>
                            <p className={'paragraphLittleMargin'}>{gameData.minimum_system_requirements.storage}</p>
                        </div>
                       )
                    }})()}
                    {/* <div className={'minSysReq'}>
                        <label className={'minSysReqTitle'}>Minimum system requirements:</label>
                        <br/>
                        <label>Graphics:</label>
                        <p className={'paragraphLittleMargin'}>{gameData.minimum_system_requirements.graphics}</p>
                        <label>Memory:</label>
                        <p className={'paragraphLittleMargin'}>{gameData.minimum_system_requirements.memory}</p>
                        <label>OS:</label>
                        <p className={'paragraphLittleMargin'}>{gameData.minimum_system_requirements.os}</p>
                        <label>Processor:</label>
                        <p className={'paragraphLittleMargin'}>{gameData.minimum_system_requirements.processor}</p>
                        <label>Storage:</label>
                        <p className={'paragraphLittleMargin'}>{gameData.minimum_system_requirements.storage}</p>
                    </div> */}
                    

                </ContentContainer>
            </RowInspContainer>
            <CommentSection pageEnum={pageEnum.GameInspector} articleId={props.param}/>
        </>
    );
}

export default GameInspector;