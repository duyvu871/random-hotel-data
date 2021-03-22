document.addEventListener('DOMContentLoaded',()=>{
    fetch("https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&checkIn=2020-01-08&checkOut=2020-01-15&pageSize=25&adults1=1&currency=USD&locale=en_US&sortOrder=PRICE", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9d2cfc39c7msh3f991e24c5ae59cp1d1a91jsn16e4ec494996",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
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

