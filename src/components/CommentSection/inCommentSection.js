import React, { useEffect } from 'react';
import {getLocalCommentSection, editComment} from '../../services/CommentLocalStorage.js'
import CommentForm from '../CommentForm/inCommentForm.js';
import CommentDisplay from '../CommentDisplay/inCommentDisplay.js';


function CommentSection(props){
    const [comments, setComments] = React.useState([])

    const loadComments = () => {
        setComments(getLocalCommentSection(props.pageEnum, props.articleId))
    }

    const edtiCommentAndLoad =(index, comment)=>{
        editComment(props.pageEnum, props.articleId, index ,comment)
        loadComments()
    }

    React.useEffect(()=>{
        loadComments()
    },[]) 

    return(
        <>
            <div className={'commentSection_AddComment'}>
                <CommentForm pageEnum={props.pageEnum} articleId={props.articleId} submitFunc={loadComments}/>
            </div>
            <div className={'commentCollection'}>
                { comments.length > 0 ? (
                    comments.map((item, index) => 
                    <CommentDisplay 
                    comment={item} 
                    index={index} 
                    editComm={edtiCommentAndLoad}
                    ></CommentDisplay>
                )) : (
                    <label>{'Wow, nothing'}</label>
                ) }
            </div>
        </>
    );
}



export default CommentSection;