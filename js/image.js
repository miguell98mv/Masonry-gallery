
let image = $("#image")[0];
let nameImage = $("#nameImage")[0];


image.src = `../gallery/${localStorage.getItem('gallery')}/${localStorage.getItem('image')}.jpg`;
nameImage.innerText = localStorage.getItem('gallery')+localStorage.getItem('image');