
// iterview section,,

//collecting all interview button
const interviewBttn = document.querySelectorAll(".interview-bttn");

// interview count
const interviewCount = document.getElementById("ineterview-count");
//initial iinterview count
let ineterview = 0;

// Rejected section,,

//collecting all rejection button
const rejectionBttn = document.querySelectorAll(".rejected-bttn");

// interview count
const rejectionCount = document.getElementById("rejected-count");
//initial iinterview count
let rejected = 0;

// Click on Interview 

for(const bttn of interviewBttn){
    bttn.addEventListener('click',function(){
        const card = bttn.closest(".job-card");

        //toogle
        if(card.dataset.status==="interview"){
            ineterview--;
        }
        if(card.dataset.status==="rejected"){
            rejected--;
        }
        card.dataset.status="interview";
        ineterview++;

        interviewCount.innerText = ineterview;
        rejectionCount.innerText = rejected;
    })
}

// Click on Rejected 

for(const bttn of rejectionBttn){
    bttn.addEventListener('click',function(){
        const card = bttn.closest(".job-card");

        //toogle
        if(card.dataset.status==="rejected"){
            rejected--;
        }
        if(card.dataset.status==="interview"){
            ineterview--;
        }
        card.dataset.status="rejected";
        rejected++;

        interviewCount.innerText = ineterview;
        rejectionCount.innerText = rejected;
    })
}

// top button

const tapBttn = document.querySelectorAll('.tap-bttn');
const jobCards = document.querySelectorAll('.job-card');

 tapBttn.forEach(bttn => {

    bttn.addEventListener('click',function(){
        const filter = bttn.dataset.filter;

        jobCards.forEach(card => {
            const status = card.dataset.status;
            if(filter==='all'|| filter===status){
                card.style.display = 'block';
            }
            else{
                card.style.display = 'none';
            }
            
        });
    })
    
});