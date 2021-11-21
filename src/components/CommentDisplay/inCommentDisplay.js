import React from 'react';
import styled from "styled-components";
import upvoteIcon from '../../sprites/upvote.png'
import downvoteIcon from '../../sprites/downvote.png'
import {editComment} from '../../services/CommentLocalStorage.js'

function CommentDisplay(props){
    console.log(props.comment)
    console.log(props.comment)

    const clickUpvoteHandle = (index)=>{
        props.comment.votes+=1
        props.editComm(props.index, props.comment)
    }

    const clickDownvoteHandle = (index)=>{
        props.comment.votes-=1
        props.editComm(props.index, props.comment)
    }

    const VotesDiv= styled.div`
        width: 20%;
        display: inline-flex;
        align-items:centes;
        margin-left: 10px;
        `;

    return(
            <article className={'commentSection_CommentDisplay'}>
                <label className={'commentFont'}> {('"'+props.comment.content+'"')} </label><br/>
                <label className={'commentAuthorName'}> {('by '+ props.comment.autor)} </label>
                <VotesDiv>
                    <input className={'icon'}onClick={e=>clickUpvoteHandle()} type={"image"} src={upvoteIcon} />
                    <label className={'commentVoteCounter'}>{(props.comment.votes)}</label>
                    <input className={'icon'}onClick={e=>clickDownvoteHandle()} type={"image"} src={downvoteIcon} />
                </VotesDiv>
            </article>
    );
}

export default CommentDisplay;