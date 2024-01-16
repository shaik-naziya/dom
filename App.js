import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.html'


// function App(){
//     let headings = ['heading1','heading2','heading3']
//     return(
//     <div>
//         <h1>{headings[0]}</h1>
//         <h2>{headings[1]}</h2>
//         <h3>{headings[2]}</h3>
//     </div>
//     )}
    // export default App

function cardDetails(){
    let cardDetails = [
        {
            heading : heading1,
            para : para1
        },
        {
            heading : heading2,
            para : para2
        },
        {
            heading : heading3,
            para : para3
        }]
        console.log(cardDetails)

       
       
return (
    <>
    {card()}
    <card2/>
    </>
)
}

function card(props){ 
    console.log(props)
    
    return(
    <div>
        <h1>{cardDetails[0].heading}</h1>
        <p>{cardDetails[0].para}</p>
    </div>
    
)}
function card2(props){        
return (

    <div>
        <h1>{cardDetails[1].heading}</h1>
        <p>{cardDetails[1].para}</p>
    </div>

)}
export default cardDetails