let hours_dis = $("#hourse-diaplay");
let m_display = $("#minutes-diaplay");
let s_display = $("#seconds-diaplay");

let start_btn = $("#start")
let end_btn = $("#end")
let stop_btn = $("#stop")

let s = 0;
let m = 0;
let h = 0;
let last_time;

let fun;//for clear or stop of function

// function that have a timer logic
function updatTimer() {
    s++
    s_display.text((s < 10) ? `0${s}` : `${s}`)
    if (s == 60) {
        s = 0;
        m++;
        m_display.text((m < 10) ? `0${m}` : `${m}`);

        if (m == 60) {
            m = 0;
            h++;
            hours_dis.text((h < 10) ? `0${h}` : `${h}`);

            if (h == 24) {
                h = 0;
                hours_dis.text("0" + h);
            }
        }
    }

}

// on start button
start_btn.on("click", () => {
    fun = setInterval(updatTimer, 0.1);
})

// for stop button
stop_btn.on("click", () => {
    clearInterval(fun);
})

//for end timer
end_btn.click(() => {
    last_time = `${h} : ${m} : ${s}`;

    clearInterval(fun);
    s = 0;
    m = 0;
    h = 0;

    hours_dis.text("00")
    m_display.text("00")
    s_display.text("00")
})