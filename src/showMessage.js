import React from 'react';

function showMessage() {

    document.getElementById('display').innerHTML =
        document.getElementById('0').value;
    
    if (document.getElementById('1').checked) {
        document.getElementById('display1').innerHTML =
        document.getElementById('1').value;
    }else if (document.getElementById('2').checked) {
        document.getElementById('display1').innerHTML =
        document.getElementById('2').value;
    }else{
        document.getElementById('display1').innerHTML =
        document.getElementById('3').value;
    }


}



export default showMessage;