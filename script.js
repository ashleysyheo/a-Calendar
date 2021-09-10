let time = () => {
    let today = new Date();

    // hours
    let hours = today.getHours();
    let hoursDigit1 = Math.floor(hours / 10);
    let hoursDigit2 = hours % 10;

    let hoursDigit1Ele = document.querySelector(`#hours-digit1--${hoursDigit1}`);
    let hoursDigit2Ele = document.querySelector(`#hours-digit2--${hoursDigit2}`);

    hoursDigit1Ele.style.opacity = 1;
    hoursDigit2Ele.style.opacity = 1;

    // minutes
    let minutes = today.getMinutes();
    let minutesDigit1 = Math.floor(minutes / 10);
    let minutesDigit2 = minutes % 10;

    let minutesDigit1Ele = document.querySelector(`#minutes-digit1--${minutesDigit1}`);
    let minutesDigit2Ele = document.querySelector(`#minutes-digit2--${minutesDigit2}`);

    minutesDigit1Ele.style.opacity = 1;
    minutesDigit2Ele.style.opacity = 1;

    // seconds
    let seconds = today.getSeconds();
    let secondsDigit1 = Math.floor(seconds / 10);
    let secondsDigit2 = seconds % 10;

    let secondsDigit1Ele = document.querySelector(`#seconds-digit1--${secondsDigit1}`);
    let secondsDigit2Ele = document.querySelector(`#seconds-digit2--${secondsDigit2}`);

    secondsDigit1Ele.style.opacity = 1;
    secondsDigit2Ele.style.opacity = 1;

    // light/dark mode
    if ( hours > 6 && hours < 18) {
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'whitesmoke';
    }
    

    let year = today.getFullYear();
    let yearDigit1 = Math.floor(year % 100 / 10);
    let yearDigit2 = year % 10;

    
    hoursDigit1 == yearDigit1 ? hoursDigit1Ele.style.color = '#FB3566' : '';
    hoursDigit2 == yearDigit2 ? hoursDigit2Ele.style.color = '#FF6875' : '';

    let month = today.getMonth();
    let monthDigit1 = month < 10 ? 0 : 1;
    let monthDigit2 = month < 10 ? month : month % 10;

    minutesDigit1 == monthDigit1 ? minutesDigit1Ele.style.color = '#FE9D94' : '';
    minutesDigit2 == monthDigit2 ? minutesDigit2Ele.style.color = '#FAEEC6' : '';

    let date = today.getDate();
    let dateDigit1 = date < 10 ? 0 : Math.floor(date / 10);
    let dateDigit2 = date < 10 ? date : date % 10;

    secondsDigit1 == dateDigit1 ? secondsDigit1Ele.style.color = '#89E7E6' : '';
    secondsDigit2 == dateDigit2 ? secondsDigit2Ele.style.color = '#44B7F6' : '';

    let timeChange = setTimeout(time, 1000);

    let reset = setTimeout(() => {
        // reset seconds digit2
        secondsDigit2Ele.style.opacity = 0;

        // reset seconds digit1
        if (secondsDigit2Ele.innerHTML === '9') {
            secondsDigit1Ele.style.opacity = 0;
        } 

        // reset minutes digit2
        if (secondsDigit1Ele.innerHTML === '5' && secondsDigit2Ele.innerHTML === '9') {
            minutesDigit2Ele.style.opacity = 0;
        }

        if ((minutesDigit2Ele.innerHTML === '9') && (secondsDigit1Ele.innerHTML === '5' && secondsDigit2Ele.innerHTML === '9')) {
            minutesDigit1Ele.style.opacity = 0;
        }

        // reset minutes digit1 
        if ((minutesDigit1Ele.innerHTML === '5' && minutesDigit2Ele.innerHTML === '9') && (secondsDigit1Ele.innerHTML === '5' && secondsDigit2Ele.innerHTML === '9')) {
            minutesDigit1Ele.style.opacity = 0;
            hoursDigit2Ele.style.opacity = 0;

            if (hoursDigit1Ele.innerHTML === '0' || hoursDigit1Ele.innerHTML === '1') {
                hoursDigit1Ele.style.opacity = 0;
            } else if (hoursDigit1Ele.innerHTML === '2' && hoursDigit2Ele.innerHTML === '3') {
                hoursDigit1Ele.style.opacity = 0;
                console.log('yes')
            }
        } 
    }, 1000)
}


window.onload = () => {
    time();
};


