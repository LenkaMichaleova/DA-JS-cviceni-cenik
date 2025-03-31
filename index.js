function selectPlan (planNumber) {
    document.querySelector("#plan" + planNumber).classList.add("plan--selected")
    if (planNumber === 1) {
        document.querySelector("#plan2").classList.remove("plan--selected")
        document.querySelector("#plan3").classList.remove("plan--selected")
    } else if (planNumber === 2){
        document.querySelector("#plan1").classList.remove("plan--selected")
        document.querySelector("#plan3").classList.remove("plan--selected")
    } else {
        document.querySelector("#plan1").classList.remove("plan--selected")
        document.querySelector("#plan2").classList.remove("plan--selected")
    }
}

selectPlan(2)
selectPlan(1)
selectPlan(3)