document.addEventListener('DOMContentLoaded',()=>{
    fetch("https://hotels-com-free.p.rapidapi.com/srle/listing/v1/brands/hotels.com?lat=37.788719679657554&lon=-122.40057774847898&checkIn=2021-01-27&checkOut=2021-01-28&rooms=1&locale=en_US&currency=USD&pageNumber=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e136fafd08msh8b7023afea865c9p11c5ccjsndd6cb20fd0fe",
            "x-rapidapi-host": "hotels-com-free.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(result =>{
        console.log(result);
        let searchResult = result?.data?.body?.searchResults?.results;
        let lengths = searchResult.length
        let randomNumber =Math.floor(Math.random()*lengths);
        fetching(searchResult[randomNumber].id,searchResult[randomNumber]);
    }).catch(err => {
        console.error(err);
    });
})

