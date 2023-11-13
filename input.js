const save = document.getElementById("save");
const title = document.getElementById("title");
const startTime = document.getElementById("startTime");
const stopTime = document.getElementById("stopTime");
const date = document.getElementById("date");

save.addEventListener("click", () => {
    if (title.value && startTime.value && stopTime.value ) {
        const titleValue = title.value;
        const startValue = startTime.value;
        const stopValue = stopTime.value;
        const state = updateState(startValue, stopValue)
        function updateState() {
            const now = updateTime()
            const start = startValue
            const stop = stopValue
             if (now < start) { 
                 return "Upcoming"; 
             } else if (start < now && now < stop) { 
                 return "Active";
             } else if(stop < now) { 
                 return "Closed";   
             }else{
                return "invalid";
             }
          
         }
         function updateTime(){
          new Date().toLocaleString('default', {   
           hour:'numeric'  , 
           minute:'numeric',
           second:'numeric'     
           }); 
         }
         updateTime()
         setInterval(updateTime, 1000)

        const taskObj = {
            title: titleValue,
            startTime: startValue,
            stopTime: stopValue,
            state:state,
        };
        let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.push(taskObj);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        window.location=`index.html`
        title.value = "";
        startTime.value = "";
        stopTime.value = "";
    }
});


function updateTime(){
    let d = new Date()
    const now= d.toLocaleString('default', {   
       hour:'numeric'  , 
       minute:'numeric',
       second:'numeric'     
   });
   
    const now2= d.toLocaleString('default', {   
        day:'numeric',  
        year:'numeric', 
        month:'numeric'    
   });
    
   
    const day=document.getElementById("day")
    const time=document.getElementById("time")
    time.innerHTML=now
    day.innerHTML=now2

}

updateTime()
setInterval(updateTime, 1000)
