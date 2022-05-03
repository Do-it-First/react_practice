import React, {useState} from 'react';
import Webtoon from './Webtoon/Webtoon';
import SearchBar from './SearchBar';
import HomeLogo from './HomeLogo';
import './Component.css';



function Page3(){

    let [웹툰하나,웹툰하나변경] = useState('');
    let [작품소개,작품소개변경] = useState('');

    return(

        <div>
        
            <HomeLogo/>

            <SearchBar/>



            <Webtoon /> 


            <Goplatform/>


            <Introduction/>


    
        </div>
        
    
    )

}


function Introduction(){

    return(
        <div className='introduction'>
           <div> DB에서 작품소개 끌어오기. </div>
        </div>
    )
    
}

function Goplatform(){
    return(
        <div className='goplatform'>
           {/* <button   onClick={  ()=>{}     }> 
           작품보러가기
           </button> */}
            <div className='btn-go'> 작품보러가기 </div>      

        </div>
    )
}




export default Page3