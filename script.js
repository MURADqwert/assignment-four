
// Interview Count
const totalInterViewCount = document.getElementById("interview-count");
// Initial Interview count
let interviewCount = 0;


// Collecting all interview click from the job sections
const interviewBttns = document.querySelectorAll(".interview-bttn");
for(const bttn of interviewBttns){
    bttn.addEventListener("click", function(){
        const jobCard = bttn.closest(".job-card");
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
        }
    })
}

// Rejected Count
const totalRejectedCount = document.getElementById("rejected-count");
// Initial Count
let rejectedCount = 0;

// Collecting all rejected Clicked 
const rejectedBttns = document.querySelectorAll(".rejected-bttn");

for(const bttn of rejectedBttns){
    bttn.addEventListener("click",function(){
        const jobCard = bttn.closest(".job-card");
        const statusText = jobCard.querySelector(".job-status");

        if(jobCard.dataset.status !== "rejected"){
            if(jobCard.dataset.status == "interview"){
                interviewCount--;
                totalInterViewCount.innerText = interviewCount;
            }
            jobCard.dataset.status = "rejected";
            rejectedCount++;
            totalRejectedCount.innerText = rejectedCount;

            statusText.innerText = "Rejected";
            statusText.style.color = "red";
        }
    })
}