function updateTime(){
    new Date().toLocaleString('default', {   
     hour:'numeric'  , 
     minute:'numeric',
     second:'numeric'     
     }); 
   }
   updateTime()
   setInterval(updateTime, 1000)
   const now = updateTime()
          
    const result= document.getElementById("result")

window.addEventListener("load", () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(taskObj => {
        if(now < taskObj.stopTime && taskObj.startTime < now){
            result.innerHTML += `
        <div class="task-container" id="task-container">
         <div class="tasks">
            <div class="task">
                <button class="doneBtn"><i class="fa-solid fa-square-check"></i></button>
            </div>
            <div class="task">
                <h2>${taskObj.title}</h2>
                <p>Engineering Mechanics 1</p>
            </div>
            <div class="task">
                <p>Status:${taskObj.state}</p>
                <p>${taskObj.startTime} - ${taskObj.stopTime}</p>
            </div>
            <div class="task">
                <button class="editBtn"><i class="fa-solid fa-pen"></i></button>
                <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
            </div>
         </div>
        </div>
        `;
        const taskContainer=document.querySelectorAll(".task-container")
        taskContainer.forEach((choose) =>{
            const deleteBtn = choose.querySelector(".deleteBtn")
            if(deleteBtn){
                deleteBtn.addEventListener("click", ()=>{
                    choose.remove();
                    localStorage.clear();
                })
            }
            const doneBtn = choose.querySelector(".doneBtn")
            if(doneBtn){
                doneBtn.addEventListener("click", ()=>{
                    if(choose.classList.contains("completed") && choose.click){
                        choose.classList.remove("completed"); 
                    }else{
                        choose.classList.add("completed");
                    }
                })
            }
        })
        }
    });
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
