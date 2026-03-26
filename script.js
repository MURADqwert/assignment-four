
// Interview Section
const totalInterViewCount = document.getElementById("interview-count");
// Initial Interview count
let interviewCount = 0;

// Rejected Section
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
// Jobs Filter Section.

//const jobCards = document.querySelectorAll(".job-card");
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
        let seclectedJobCount = 0;


        document.querySelectorAll(".job-card").forEach(card => {
            const status = card.dataset.status;
            if(status === "interview"){
                interviewJobs++;
            }
            if(status === "rejected"){
                rejectedJobs++;
            }
            if(filter === "all" || filter === status){
                card.style.display = "flex";
                seclectedJobCount++; 
            }
            else{
                card.style.display = "none";
            }

           
           
        });
        
        const totalJobCount = document.querySelectorAll(".job-card").length;
        document.getElementById("job-count").innerText = `${seclectedJobCount} of ${totalJobCount} Jobs`;

        const interviewSection = document.getElementById("interview-section");
        const rejectedSection = document.getElementById("rejected-section");
        const cardsContainer = document.getElementById("cards-container");

        if(filter === "interview"){
            if(interviewJobs === 0){
                interviewSection.style.display = "block";
                rejectedSection.style.display = "none";
                cardsContainer.style.display = "none";
            }
            else{
               interviewSection.style.display = "none";
                rejectedSection.style.display = "none";
                cardsContainer.style.display = "block";
            }
        }
        if (filter === "rejected"){
            if(rejectedJobs === 0){
                interviewSection.style.display = "none";
                rejectedSection.style.display = "block";
                cardsContainer.style.display = "none";
            }
            else{
                interviewSection.style.display = "none";
                rejectedSection.style.display = "none";
                cardsContainer.style.display = "block";
            }
        }
        if(filter === "all"){
                interviewSection.style.display = "none";
                rejectedSection.style.display = "none";
                cardsContainer.style.display = "block";
        }
        
    })
}

const deleteIcon = document.querySelectorAll(".delete-icon");
deleteIcon.forEach(icon => {

    icon.addEventListener("click",function(){
        const jobCard = this.closest(".job-card");

        if(jobCard.dataset.status === "interview"){
            interviewCount--;
            totalInterViewCount.innerText = interviewCount;
        }
        if(jobCard.dataset.status === "rejected"){
            rejectedCount--;
            totalRejectedCount.innerText = rejectedCount;
        }
        jobCard.remove();

        document.querySelector(".tap-bttn.bg-green-500").click();
    })
    
});