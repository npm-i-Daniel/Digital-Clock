   function updatetime() {
        let time = document.getElementById('time')
        let hrs = new Date().getHours()
        let mins = new Date().getMinutes()
        let sec = new Date().getSeconds()

        hrs = hrs % 12
        hrs = hrs === 0 ? 12 : hrs
        hrs = hrs < 10 ? "0" + hrs : hrs
        mins = mins < 10 ? "0" + mins : mins
        sec = sec < 10 ? "0" + sec : sec

        let Ampm = hrs >= 12 ? "AM" : "PM"

        time.innerText = `${hrs} : ${mins} : ${sec} ${Ampm}`
    }
    setInterval(updatetime, 1000);
    updatetime()

