import React from 'react';
import styled from "styled-components";
import searchicon from '../../sprites/search.png'

function SearchBarAndPaging(props){
    let searchKey = ''

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log('enviando searchKey: ' + searchKey)
        props.submitSearch(searchKey) 
    }
    
    const changeHandler = (value)=>{
        console.log(value)
        searchKey = value;
    }

    const NextBackButtonAligner = styled.div`
        margin-top: 5px;
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        justify-items: center;
    `
    const Padding5px = styled.div`
        padding: 5px;
    `

    return(
        <>
            <div className={'searchBarAndPaging'}>
                <Padding5px>
                    <form onSubmit={e =>{submitHandler(e)}}>
                        <div className={'inlineDiv'}>
                            <div className={'searchbarHeightLimiterDiv'}>
                                <input type={'search'} onChange={e=>changeHandler(e.target.value)}></input>
                            </div>
                            <div className={'containerButton'}>
                                <input className={'containerButtonImage'} type={"image"} name={"submit"} src={searchicon} />
                            </div>
                        </div>
                    </form>

                    <NextBackButtonAligner>
                        <div className={'containerButtonNextBack'} onClick={()=>{
                            if(props.pageIndex > 1){
                                props.setPageIndex(props.pageIndex-1);
                            }
                            }}>
                            <label className={'strongLabel'}>Back</label>
                        </div>

                        <label className={'pageCounter'}>{props.pageIndex + ' / ' + Math.ceil(props.itemsList / props.itemsPerPage)}</label>

                        <div className={'containerButtonNextBack'} onClick={()=>{
                            if(props.pageIndex < Math.ceil(props.itemsList / props.itemsPerPage)){
                                props.setPageIndex(props.pageIndex+1);
                            }
                            }}>
                            <label className={'strongLabel'}>Next</label>
                        </div>
                    </NextBackButtonAligner>
                </Padding5px>
            <div className={'lineBelowDiv'}/>    
        </div>
    </>
    );
}
export default SearchBarAndPaging;