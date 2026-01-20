let seconds = document.getElementsByClassName("seconds")[0];
let minutes = document.getElementsByClassName("minutes")[0];
let hours = document.getElementsByClassName("hours")[0];
let start_btn = document.getElementsByClassName("start")[0];
let reset_btn = document.getElementsByClassName("reset")[0];
console.log(seconds,minutes,hours);

let countdown;
let s_count = 0, m_count = 0, h_count = 0;
let isWorking = false;

function start() {
    if (!isWorking) {
        isWorking = true;
        countdown = setInterval(() => {
            s_count++;

            if (s_count === 60) {
                s_count = 0;
                m_count++;
            }

            if (m_count === 60) {
                m_count = 0;
                h_count++;
            }

            seconds.innerHTML = s_count 
            minutes.innerHTML = m_count 
            hours.innerHTML = h_count 

        }, 100);
    } else {
        clearInterval(countdown);
        isWorking = false;
    }
}

function reset() {
    clearInterval(countdown);
    isWorking = false;

    s_count = 0;
    m_count = 0;
    h_count = 0;

    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
}