import React, {useState}from 'react';
import './Webtoon.css'; //나중에 여기 주소 잘 맞나 실행해보고 확인하기.



function Webtoon({thumbnail,title,writer,genre,platform}){    
  
   
    return (
        <div className='one-webtoon'>
            <img src={thumbnail} alt="썸네일"/>
            <div> 제목:{title}</div>
            <div> 작가:{writer}</div>
            <div> 연재처:{platform}</div>
            <div> 키워드:{genre}</div>


        </div>
    )
}






// function Webtoon(){

  
    
//     return(
//         <div>
//             <WebtoonImg />

//             <WebtoonTitle />

//             <WebtoonWriter />

//             <WebtoonPlatform/>

//             <WebtoonKeyword />


//         </div>



//     )

// } 


// // function Webtoon(){

// //     let [데이터,데이터변경] = useState('Data');
// //     // 나중에 데이터=> 다른 뱐수명으로 바꾸기

// //     return(
// //         <div className='Webtoon'>




// //         </div>

// //     )
// // }

// function WebtoonImg(props){
//     <div className = "webimg">
        
//         웹툰이미지가있을자리

//     </div>

// }


// function WebtoonTitle(props){
//     <div className='webtitle'> 
//         웹툰 이름

//     </div>

// }


// function WebtoonWriter(props){
//     <div className='webwriter'> 
//         웹툰작가
//     </div>
// }


// function WebtoonPlatform(props){
//     <div className='webplatform'> 
//         플랫폼
//     </div>
// }


// function WebtoonKeyword(props){
//     <div className='webkeyword'> 
//         장르와키워드등등
//     </div>
// }



export default Webtoon;