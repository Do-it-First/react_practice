import React, {useState} from 'react';
import Webtoon from './Webtoon/Webtoon';
import SearchBar from './SearchBar';
import HomeLogo from './HomeLogo';
import './Component.css';



function Page2(props){




    return(


        <div>


            <HomeLogo/>
        
            <SearchBar 키워드 = {props.키워드}/>
{/* 
            <Container>
                <Row>
                    <Col> <Webtoon/> </Col>
                    <Col> <Webtoon/> </Col>
                </Row>
            </Container> */}

            {/* <div class="container"> */}
                <div class="row">
                    
                     <Webtoon/>
                     <Webtoon/>
                     <Webtoon/>
                     <Webtoon/>
                    
                </div>    
            {/* </div>         */}

            {/* <Webtoon/>   */}


         </div>
        
    )



}


// function ManyWebtoon(){

//     검색된웹툰.map((a,i)=>{
//         return <Webtoon 검색된웹툰 ={검색된웹툰[i]}/>
//     })





// }

export default Page2;