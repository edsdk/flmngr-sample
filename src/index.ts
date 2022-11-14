import {Flmngr} from "flmngr";

Flmngr.load({
    apiKey: "FLMNFLMN",
    urlFileManager: 'https://fm.flmngr.com/fileManager',
    urlFiles: 'https://fm.flmngr.com/files',
}, {
    onFlmngrAndImgPenLoaded: () => {
        let elBtn = document.getElementById("btn");

        // Style button as ready to be pressed
        elBtn.style.opacity = "1";
        elBtn.style.cursor = "pointer";
        var elLoading = document.getElementById("loading");
        elLoading.parentElement.removeChild(elLoading);

        // Add a listener for selecting files
        elBtn.addEventListener("click", function() {
            selectFiles();
        });
    }
});

function selectFiles() {

    Flmngr.open({
        isMultiple: false,
        acceptExtensions: ["png", "jpg", "jpeg", "gif", "webp"],
        onFinish: (files) => {
            showSelectedImage(files);
        }
    });

}

function showSelectedImage(files) {
    let elImages = document.getElementById("images");
    elImages.innerHTML = "";

    var file = files[0];

    let el = document.createElement("div");
    el.className = "image";
    elImages.appendChild(el);

    let elImg = document.createElement("img");
    elImg.src = file.url;
    elImg.alt = "Image selected in Flmngr";
    el.appendChild(elImg);

    let elP = document.createElement("p");
    elP.textContent = file.url;
    el.appendChild(elP);
}