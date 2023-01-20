let DownloadBtn = document.querySelector(".btn");
let icon = document.querySelector(".container .btn .icon i");
let text = document.querySelector(".container .btn .text span");

DownloadBtn.addEventListener("click", ()=>{
    DownloadBtn.classList.add("download");
    setInterval(() => {
        DownloadBtn.classList.remove("download");
        icon.className = "bx bxs-message-square-check"
        text.innerHTML = "Completed!"
    }, 5500);
});


