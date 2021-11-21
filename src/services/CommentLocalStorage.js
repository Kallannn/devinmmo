function getLocalCommentSection(pageEnum, articleId){
    let localItemName = formatLocalItemName(pageEnum, articleId)
    let commentSection = localStorage.getItem(localItemName)
    commentSection = JSON.parse(commentSection)
    
    if(!commentSection){
        commentSection = []
    }

    return commentSection;
}

function createComment(pageEnum, articleId, autor, content){
    let localItemName = formatLocalItemName(pageEnum, articleId)
    let comment = commentConstructor(autor, content)
    let commentSection = localStorage.getItem(localItemName)
    commentSection = JSON.parse(commentSection)

    if(!commentSection){
        commentSection = []
    }

    commentSection.push(comment)
    commentSection = JSON.stringify(commentSection)

    localStorage.setItem(localItemName, commentSection)
}

function formatLocalItemName(pageEnum, articleId){
    return ('comments'+ '_' + pageEnum + '_' + articleId)
}


function commentConstructor(pAutor, pContent){
    return {
        autor: pAutor,
        content: pContent,
        votes: 0
    }
}

function editComment(pageEnum, articleId ,index, comment){
    let localItemName = formatLocalItemName(pageEnum, articleId)
    let commentSection = getLocalCommentSection(pageEnum, articleId)
   
    commentSection[index] = comment
    commentSection = JSON.stringify(commentSection)

    localStorage.setItem(localItemName, commentSection)
}


export {
    getLocalCommentSection as getLocalCommentSection,
    createComment as createComment,
    editComment as editComment
};