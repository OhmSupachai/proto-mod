import React from 'react';
import showMessage from './showMessage';

function Review() {
    return (

        <div>

            <form >
                <input id="1" type="radio" name="grade" value="A" ></input>A
                <input id="2" type="radio" name="grade" value="B" ></input>B
                <input id="3" type="radio" name="grade" value="C" ></input>C <br></br>
                <input id="0" type="text" name="name"></input><br></br>



            </form>
            <input id="submit" type="submit" onClick={showMessage} ></input>
            <p>You input: <span id="display"></span>
                <span id="display1"></span>
                <span id="display2"></span>
                <span id="display3"></span></p>

        </div>
    )
}

export default Review;

