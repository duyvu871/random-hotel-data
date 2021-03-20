document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.wave').innerHTML = `
    <div class="container"> 
        <svg viewBox="0 0 500 500" 
            preserveAspectRatio="xMinYMin meet"
            style="z-index: -2;"> 
              
            <path d="M0, 100 C150, 200 350, 
                0 500, 100 L500, 00 L0, 0 Z" 
                style="stroke: none;  
                fill:rgba(30, 144, 225, 0.5);"> 
            </path> 
        </svg> 
    </div> 
      
    <div class="container"> 
        <svg viewBox="0 0 500 500" 
            preserveAspectRatio="xMinYMin meet"
            style="z-index:-1;"> 
              
            <path d="M0, 80 C300, 0 400,  
                300 500, 50 L500, 00 L0, 0 Z" 
                style="stroke: none;  
                fill:rgba(153, 50, 204, 0.5);"> 
            </path> 
        </svg> 
    </div> 
`
    lazyLoad();
})
function lazyLoad() {
    document.querySelector('.loading-rest').innerHTML=`
    <ul class="loader">
    <li>
    <div class="circle"></div>
    <div class="ball"></div>
    </li>
    <li>
    <div class="circle"></div>
    <div class="ball"></div>
    </li>
    <li>
    <div class="circle"></div>
    <div class="ball"></div>
    </li>
    <li>
    <div class="circle"></div>
    <div class="ball"></div>
    </li>
    <li>
    <div class="circle"></div>
    <div class="ball"></div>
    </li>
    </ul>
    `
}
