import React from 'react';

function showMessage() {
    document.getElementById('display').innerHTML =
        document.getElementById("user_input").value;
}

export default showMessage;