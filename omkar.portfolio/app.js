(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");
    const handleLoveClick = () => {
    // bump active index 
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    
            //active  group becomes after
    currentGroup.dataset.status = "after";
      //next group becomes active
    nextGroup.dataset.status="becoming-active-from-before";

    setTimeout(()=>{
        nextGroup.dataset.status = "active";
        activeIndex=nextIndex
    });

}

    const handleHateClick = () => {
        const nextIndex=activeIndex -1 >= 0 ? activeIndex -1 :groups.length -1;

        const currentGroup= document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        currentGroup.dataset.status = "before";
           //next group becomes active
    nextGroup.dataset.status="becoming-active-from-after";

    setTimeout(()=>{
        nextGroup.dataset.status = "active";
        activeIndex=nextIndex
    });
}

    

