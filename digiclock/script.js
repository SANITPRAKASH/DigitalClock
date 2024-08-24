function get_time() {
    const now = new Date()
    let hour = now.getHours();
    const meridiem=hour>=12 ? "PM":"AM";
    hour=hour %12 || 12;
    hour=hour.toString().padStart(2,0);
    const min = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const time = `${hour}:${min}:${sec} ${meridiem}`;
    
    // Assuming there's only one element with class "clock"
    document.getElementsByClassName("clock")[0].textContent = time;
}

get_time();
setInterval(get_time,1000);
