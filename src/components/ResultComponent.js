import React from 'react';

function Random(){
    var choice=1+Math.floor(Math.random() *100);  
    return choice;

}
function Judge(a,b){
    if(a==b){
        
        return(
            
            <div id='correct'>
                <div >
                    <h4>Correct!!!</h4> 
                </div>

            </div>
            
        );
    }
    else if(a-b <4){
        return(<div id='hot'>
            HOT!!
            </div>)
    }    
    else if(a-b>=5 && a-b<=15){
        return(
        <div id='warm'>
            WARM!
        </div>
        );
    }
    else{
        return(
        <div id='cold'>
            COLD!!
        </div>)
    }

}
function Result(props){
    let random_num=Random()
    const answer=props.answer
    const OUTPUT=Judge(random_num,answer)
    return(
        <div className='container'>
            <div className='row justify-content-center'>
             <h3>The number was {random_num}</h3>

            </div>
            <div className='row justify-content-center'>
                {OUTPUT}

            </div>
            
        </div>)
}
export default Result