import user from "./da.json" assert { type: 'json' };;
console.log(user.name)

const name = localStorage.getItem("dataset")
console.log(name)
const dil =  user.filter((el)=>{
    return el.name === name
})
console.log(dil)
console.log(dil[0].languages.length)

console.log(typeof dil)
let lang =[]
for(let i=0; i<=dil[0].languages.length;i++){
    lang.push(dil[0].languages[0].name)
}
console.log(lang)
    let card2 = `
    <div id="img" >
        <img  src=${dil[0].flags.svg} id="country-img" src="" alt="photo" ">
    </div>
    <div style="margin:5rem 0 0 0">
        <h3 id="heading" style="font-size:2.5rem; line-height:2rem;padding:0 10px 20px 0" class="font-sans ">${dil[0].name}</h3>
        <div id="desc" class="flex justify-around ">
            <ul id="items1" class="text-lg" style="margin:0 rem 0 0" >
                <li><span class="font-serif">Native Name: </span>${dil[0].nativeName} </li>
                <li><span class="font-serif">Population: </span>${dil[0].population } </li>
                <li><span class="font-serif">Region: </span>${dil[0].region}</li>
                <li><span class="font-serif">Sub Region: </span>${dil[0].subregion} </li>
                <li><span class="font-serif">Capital: </span>${dil[0].capital} </li>

            </ul>
            <ul id="items2" >
                <li><span class="font-serif ">Top Level Domain:  </span>${dil[0].topLevelDomain} </li>
                <li><span class="font-serif ">Currencies: </span>${dil[0].currencies[0].code} </li>
                <li><span class="font-serif ">Languages: </span>${lang} </li>
            </ul>

        </div>
        <div>
            <span ><p id="border" class="font-serif">Border Countries: ${dil[0].borders} </p></span>
        </div>

  
    
    `
    let page = document.getElementById("cou")
    
    page.innerHTML=card2

    document.querySelector(".btn").addEventListener("click",()=>{
        window.location.href="index.html"
    })
    

