let Name;
let Adres;
function generateImg() {
    Name = form.querySelector('.name').value;
    Adres = form.querySelector('.adres').value;
    const obj = {
        "files": [ 
            "https://raw.githubusercontent.com/Labssss/psd/main/release 2.psd"
        ],
        "environment": {
    
        },
        "script" : `var a = app.activeDocument.layers.getByName('Name'); a.textItem.contents = '${Name}'; a = app.activeDocument.layers.getByName('Adres'); a.textItem.contents = '${Adres}';app.activeDocument.saveToOE("png");`
    }
    const url = encodeURI(`https://www.photopea.com#${JSON.stringify(obj)}`)
    console.log(url)
    let iframe = document.querySelector('.iframe');
    iframe.src = url
}

window.addEventListener("message", function(e) { 
    if (e.data != 'done') {
        var arrayBufferView = new Uint8Array(e.data);
        var blob = new Blob([arrayBufferView], {type: "image/jpeg"});
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(blob);
        var img = document.querySelector("#photo");
        img.src = imageUrl;
        btn.style.display = "inline-block"
        link.download = `${Name}_${Adres}`
        link.href = imageUrl;
        console.log(imageUrl)
    }
    console.log(e) 
});

let btn = document.querySelector("#download-btn");
let link = document.querySelector("#link");

btn.addEventListener("click", function (e) {
    link.click();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (document.querySelector('.iframe')) {
        document.querySelector('.iframe').remove()
    }
    const iframe = document.createElement('iframe')
    iframe.className = "iframe"
    iframe.style.display = "none"
    const place = document.querySelector(".iframe-place")
    place.append(iframe)
    generateImg()
});