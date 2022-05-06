import React,{useState} from 'react';
import './Component.css';
import HomeLogo from './HomeLogo';
import SearchBar from './SearchBar';
import {useParams} from 'react-router-dom';


function Page1(props){

    // let 찾은웹툰 = props.키워드.find(function(웹툰){
    //     return 웹툰.키워드 == 키워드
    // });

    return(
        <div>
            

            <HomeLogo/>
            <SearchBar 키워드={props.키워드}/>



            

        </div>
 
    )
}

export default Page1;