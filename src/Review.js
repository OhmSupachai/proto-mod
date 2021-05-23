import React from 'react';
import showMessage from './showMessage';
import Result from './Result';

function Review() {
    return (

        <div>

            <form action="./test" >
                <input id="1" type="radio" name="grade" value="A" ></input>A
                <input id="2" type="radio" name="grade" value="B" ></input>B
                <input id="3" type="radio" name="grade" value="C" ></input>C <br></br>
                <input id="0" type="text" name="name"></input><br></br>
                


            </form>
            <input id="submit" type="submit" onClick={showMessage}  ></input>
            <p>You input: <span id="display"></span>
               
            <a href="./Result"><span id="display1"></span></a>
               
               </p>
               

        </div>
    )
}

export default Review;

