let select = window.location.href.includes('#') ? window.location.href.substr((window.location.href.indexOf('#'))+1) : '';
let isClick = true;
let urlChange = window.location.href.substr(0, window.location.href.indexOf('#'));
const URL = ['Bricks', 'Trowel', 'Helmets', 'Shovel']; 
const btn_image = $("#btn_image")[0];
const add_image = $("#add_image")[0];


$('span').parent().each(function(){
    this.addEventListener('mouseover', function(){
       this.firstChild.classList.remove('d-none');   
       this.firstChild.classList.add('d-flex');    
    });

    this.addEventListener('mouseleave', function(){
        this.firstChild.classList.add('d-none');   
        this.firstChild.classList.remove('d-flex');    
     });
});

$('span').each(function(){
    this.onclick = ()=>{
        this.parentNode.remove();
    }
});


btn_image.onclick = function(){
    if(add_image.classList.contains('d-none')){
        add_image.classList.remove('d-none');
        add_image.classList.add('d-block');
        btn_image.style.backgroundColor = '#0d6efd';
        btn_image.style.color = 'white';
    }else{
        add_image.classList.add('d-none');
        add_image.classList.remove('d-block');
        btn_image.style.backgroundColor = '';
        btn_image.style.color = 'black';
    }
}

if(select){
    $(".buttonGalery").each(function(){
        
        if(this.dataset.click === select){
            this.style.backgroundColor = '#ffc107';
            this.style.color = 'black';
            $("img").each(function(x){
            this.alt = x+1;
            this.src = `./gallery/${select}/${x+1}.jpg`;
            });
        }
    });
}else{
    
    $("img").each(function(x){
        let numGallery = Math.round(Math.random()*3);
        let numImage = Math.round(Math.random()*8)
        this.src = `./gallery/${URL[numGallery]}/${numImage+1}.jpg`;
        this.alt = numImage+1;
        this.setAttribute('data-gallery', URL[numGallery]);
    });
}


$(".buttonGalery").each(function(){
    this.addEventListener('click', function(){
        
        if(isClick){
            isClick = false;
            asignarColor(this)
            
        }
    });
});


$("a").each(function(){
    this.onclick = function(){return false};

    this.addEventListener('click', ()=>{
        select ? localStorage.setItem('gallery', `${select}`) : localStorage.setItem('gallery', `${this.firstChild.dataset.gallery}`);
        localStorage.setItem('image', `${this.firstChild.alt}`);
        window.open('./image/index.html', '_blank');
    });
});


function asignarColor(x){

    $(".buttonGalery").each(function(){
        this.style.backgroundColor = '';
        this.style.color = '#ffc107';
    });

    select = x.dataset.click;
    window.location.href = `${urlChange}#${x.dataset.click}`;
    x.style.backgroundColor = '#ffc107';
    x.style.color = 'black';
    addUrl();
}



function addUrl(){


    $("img").each(function(x){
        
        this.animate([
            // keyframes
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(90deg)' }
          ], {
            // timing options
            duration: 251,
          });
          
        
        setTimeout( ()=>{

            this.animate([
                // keyframes
                { transform: 'rotateY(270deg)' },
                { transform: 'rotateY(360deg)' }
              ], {
                // timing options
                duration: 500,
              });

        }, 250);

        setTimeout(()=>{
            this.src = '';
            this.src = `./gallery/${select}/${x+1}.jpg`;
            this.alt = x+1;
        }, 250);
        
        setTimeout(function(){isClick = true}, 500);
    });
}