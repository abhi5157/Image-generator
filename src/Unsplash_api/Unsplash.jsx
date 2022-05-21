import React,{ useState} from 'react'
import "./Unsplash.css"
import axios from 'axios';
import Avtar from "./avtar.webp"

function Unsplash() {
    const [photo, setphoto] = useState("random");
    const [result, setresult] = useState([]);
    const [display, setdisplay] = useState(false);
    const UnsplashHandler = () =>{
  
 
    const url = `https://api.unsplash.com/search/photos?page=1&page=2&query=${photo}&client_id=7EiwIU17DnrkZYuu5v4fXSeOVoGzEmsy_YrYxYUZNz4`;
    axios.get(url).then(
     (res)=>{
         setresult(res.data.results);
         console.log(res.data.results);
        setdisplay(true);

     }
        ).catch("Error came");
  
      
   
 

    } 

  return (
    <>
    <div className="container">
    <div className="search-wrapper">
        <input type="checkbox" name="" className="checkbox" />
        <div className="search-content">
            <input type="text" name="text_bar" id="" className="search-input" placeholder="Search ANything " value={photo} onChange = {(e) =>{
                setphoto(e.target.value);
            }} />
            <button className="srch_btn" type='submit' onClick={UnsplashHandler}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        </div>
    </div>

    {/* image container */}
    { !display ? (<>
  <div className="avtr-cont">
  <img src={Avtar} alt="" className='avtr' />
     {/* <p>search anything</p> */}
<h1>Image Generatgor app</h1>
  </div>
     </>):
    (<>
     <div className="image-container">
        
        {result.map((val, index)=>{
            return(
                <div className="wrapper" >
                   <a href= {val.links.html}> <img src={val.urls.small_s3} alt= {index}   />   </a>  
                    
                </div>
            )
        })}


    
</div></>)

    }

   

    </div>
    
    </>
  )
}

export default Unsplash


// import React, { useState } from 'react'
// import axios from 'axios'
// function Unsplash() {
//     const [photo, setPhoto] = useState("")
//     const [result, setResult] = useState([])

//     const changePhoto = () => {
//         axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
//             .then((response) => {
//                 // console.log(response.data);
//                 setResult(response.data.results);
//             })
//     }
//     return (
//         <>
//             <div className='container text-center my-5'>
//                 <input type="text" className='form-control' value={photo} onChange={(e) => {
//                     setPhoto(e.target.value)
//                 }} />
//                 <button type='submit' onClick={changePhoto} className='btn btn-primary my-2'>Get Photo</button>
//             </div>

//             <div className="container">
//                 <div class="row text-center text-lg-start">
//                     {result.map((value) => {
//                         return (
//                             <div class="col-lg-3 col-md-4 col-6">
//                                     <img class="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
//                             </div>
//                         )
//                     })}
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Unsplash
