// For All
// const backend_base_url = "http://3.34.3.15:8000"
const backend_base_url = "http://127.0.0.1:8000"
const backend_base_ip_port = "127.0.0.1:8000"

const frontend_base_url = "http://127.0.0.1:5500"

const ROOM_STATUS_START = 'start'
const ROOM_STATUS_PENDING = 'pending'
const ROOM_STATUS_STOP = 'stop'

// String => Datetime or Date 형으로
function StringToDatetime(string_time, type){
    time = new Date(string_time);
    function pad(n) { return n<10 ? "0"+n : n }
    if(type == 1){ // 2022-07-25 01:42:29
        return time.getFullYear() + "-" + pad(time.getMonth()+1) + "-" + pad(time.getDate())+" "+
           pad(time.getHours()) + ":" + pad(time.getMinutes()) + ":" + pad(time.getSeconds())
    }else if(type == 2){ // 2022-07-15
        return time.getFullYear() + "-" + pad(time.getMonth()+1) + "-" + pad(time.getDate())
    }
}

// function StringToDatetime(string_time, type){
//     var chat_time, dt;
//     if(type == 1){
//         chat_time = new Date(string_time);
//         dt = chat_time.getFullYear()+'-'+(chat_time.getMonth()+1)+'-'+chat_time.getDate() + ' ' +
//              chat_time.getHours() + ":" + chat_time.getMinutes() + ":" + chat_time.getSeconds();
//     }else if(type == 2){ // 2022-07-15
//         chat_time = new Date(string_time);
//         dt = chat_time.getFullYear()+'-'+(chat_time.getMonth()+1)+'-'+chat_time.getDate()
//     }
//     return timestamp(dt)
// }


// Get UUID v4
// function uuidv4() {
//     return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
//       (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//     );
// }  
