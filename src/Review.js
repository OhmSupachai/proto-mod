import React from 'react';
import showMessage from './showMessage';

function Review() {
    return (

        <div>
            
            <form >
                <input id="user_input" type="text" name="name"></input><br></br>
                

            </form>
            <input type="submit" onClick={showMessage} ></input>
                <p>You input: <span id="display"></span></p>

        </div>
    )
}

export default Review;

