
// Interview Count
const totalInterViewCount = document.getElementById("interview-count");
// Initial Interview count
let interviewCount = 0;
// Rejected Count
const totalRejectedCount = document.getElementById("rejected-count");
// Initial Count
let rejectedCount = 0;


// Collecting all interview click from the job sections
const interviewBttns = document.querySelectorAll(".interview-bttn");
for(const bttn of interviewBttns){
    bttn.addEventListener("click", function(){
        const jobCard = this.closest(".job-card");
        const statusText = jobCard.querySelector(".job-status");
        if(jobCard.dataset.status !=="interview"){
            if(jobCard.dataset.status === "rejected"){
                rejectedCount--;
                totalRejectedCount.innerText = rejectedCount;
            }
            jobCard.dataset.status = "interview";

            statusText.innerText = 'interview';
            statusText.style.color = 'green';
            interviewCount++;

            totalInterViewCount.innerText = interviewCount;
            document.querySelector(".tap-bttn.bg-green-500").click();
        }
    })
}



// Collecting all rejected Clicked 
const rejectedBttns = document.querySelectorAll(".rejected-bttn");

for(const bttn of rejectedBttns){
    bttn.addEventListener("click",function(){
        const jobCard = this.closest(".job-card");
        const statusText = jobCard.querySelector(".job-status");

        if(jobCard.dataset.status !== "rejected"){
            if(jobCard.dataset.status == "interview"){
                interviewCount--;
                totalInterViewCount.innerText = interviewCount;
            }
            jobCard.dataset.status = "rejected";
            rejectedCount++;
            totalRejectedCount.innerText = rejectedCount;
            document.querySelector(".tap-bttn.bg-green-500").click();
            

            statusText.innerText = "Rejected";
            statusText.style.color = "red";
        }
    })
}

const jobCards = document.querySelectorAll(".job-card");
const tapBttn = document.querySelectorAll(".tap-bttn");

const noneInterview = document.getElementById("no-interview");
const noneRejected = document.getElementById("no-rejected");

for(const bttn of tapBttn){
    bttn.addEventListener("click",function(){
        tapBttn.forEach(bttn => {
            bttn.classList.remove('bg-green-500','text-white');
        });
        this.classList.add("bg-green-500","text-white");

        const filter = this.dataset.filter;

        let interviewJobs = 0;
        let rejectedJobs = 0;

        jobCards.forEach(card => {
            const status = card.dataset.status;
            if(filter === "all" || filter === status){
                card.style.display = "flex";
            }
            else{
                 card.style.display = "none";
            }

            if(status === "interview"){
                interviewJobs++;
            }
            if(status === "rejected"){
                rejectedJobs ++
            }
           
        });

        if(interviewJobs === 0){
            noneInterview.style.display ="flex";
        }
        else{
            noneInterview.style.display = "none";
        }

        if(rejectedJobs === 0){
            noneRejected.style.display = "flex";
        }
        else{
            noneRejected.style.display = "none";
        }
    })
}