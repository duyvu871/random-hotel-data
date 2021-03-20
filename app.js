fetch("https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e136fafd08msh8b7023afea865c9p11c5ccjsndd6cb20fd0fe",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    }).then(response => response.json())
    .then(result => {
        document.querySelector('body').removeChild(document.querySelector('.loading-rest'))
        renderHandle(result);
        slideMoving(result);  
    }).catch(err => {
	    console.error(err);
    });
    function renderHandle(data) {
        const dotEl = document.querySelector('#changeSlide')
        const imgEl = document.querySelector('.slideshow-container')
        const dataImage = data?.roomImages[2]?.images
        const getUrlOfData = (dataUrl = data,i = 0,i2 = 0,i3 = 0)=>{
            return dataUrl?.roomImages[i]?.images[i2]?.baseUrl?.replace(
                '{size}',
                dataUrl?.roomImages[i]?.images[i3]?.sizes[0]?.suffix
                )
        }
        const dataLength = dataImage.length
        const imgTagHTML = dataImage.reduce((acc,curr,index)=> [...acc,`
                <div class="mySlides fade">
                <div class="numberText">${index + 1} / ${dataLength}</div>
                <img src="${curr.baseUrl.replace("{size}",curr.sizes[0].suffix)}" style="width:100%">
                <div class="text">Hello You</div>
                </div>
            `],
            []
        )
        const dotTagHTMl = dataImage.reduce((acc,curr,index)=> 
            [...acc,`<div class="dot" onclick="currentSlide(${index+1})"></div>`],
            []
        )
        dotEl.innerHTML = dotTagHTMl.join('') 
        imgEl.innerHTML = imgTagHTML.join('')  
        + `<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>`
    }
    let slideIndex = 1;
    function slideMoving(data) {
        showSlides(slideIndex);
    }
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) slideIndex = 1
        if (n < 1) slideIndex = slides.length
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      function currentSlide(n) {
        showSlides(slideIndex = n);
        console.log(1);
      }
