function toggleWindow(id) {
    windowBody = document.getElementById(id).getElementsByClassName("window-body")[0]
    console.log(windowBody.display)
    if (windowBody.style.display === "none") {
        windowBody.style.display = "block"
    }else{
        windowBody.style.display = "none"
    }
}