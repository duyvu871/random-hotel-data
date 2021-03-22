function fetching(id,data) {
    let bodyNode = document.querySelector('body')
    fetch(`https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=${id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9d2cfc39c7msh3f991e24c5ae59cp1d1a91jsn16e4ec494996",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    }).then(response => response.json())
    .then(result => {
        bodyNode.removeChild(bodyNode.childNodes[0])
        renderHandle(result);
        slideMoving();
        renderList(data);
        document.querySelector('#showConvert').classList.add('information-hotel')  
    }).catch(err => {
	    console.error(err);
    });
}
    function renderHandle(data) {
        const dotEl = document.querySelector('#changeSlide')
        const imgEl = document.querySelector('.slideshow-container')
        const dataImage = data.hotelImages
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
      }

function renderList(data) {
    const key = Object.keys(data)
    let id = 0
    const htmls = `
            <li>
                <label class="menu" for="hi${++id}">
                    <h2>Address</h2>
                </label>
                <input type="checkbox" id="hi${id}">
                <ul>
                    <li><span>Local country:</span>${data.address.countryName}</li>
                    <li><span>Local city:</span>${data.address.locality}</li>
                    <li><span>Local street:</span>${data.address.streetAddress}</li>
                </ul>
            </li>
            <li>
                <label class="menu" for="hi${++id}">
                    <h2>Rating</h2>
                </label>
                <input type="checkbox" id="hi${id}">
                <ul>
                    <li><span>BadgeText:</span>${data.guestReviews.badgeText}</li>
                    <li><span>Rating:</span><p style="margin: 0; font-weight:bolder;color:purple">${data.guestReviews.rating}</p></li>
                    <li><span>Total:</span>${data.guestReviews.total} people</li>
                </ul>
            </li>
            <li>
                <label class="menu" for="hi${++id}">
                    <h2>Cost</h2>
                </label>
                <input type="checkbox" id="hi${id}">
                <ul>
                    <li><span>Normal:</span> ${data.ratePlan.price.current}/night</li>
                </ul>
            </li>
            <li>
                <label class="menu" for="hi${++id}">
                    <h2>LandMarks</h2>
                </label>
                <input type="checkbox" id="hi${id}">
                <ul>
                    <li><span>Distance:</span>${data.landmarks[0].distance} for ${data.landmarks[0].label}</li>
                    <li><span>Distance:</span>${data.landmarks[1].distance} for ${data.landmarks[1].label}</li>
                </ul>
            </li>
        `
    document.querySelector('#d0fgr').innerHTML = htmls
}