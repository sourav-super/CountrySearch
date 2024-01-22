import user from "./da.json" assert { type: 'json' };;

// ********Input***************
let input = document.getElementById('searchbar')
let ul = document.getElementById("myUL");
let coun = []
function funSearch() {
    user.forEach((c) => {
        coun.push(c.name)
    })
}
funSearch()
user.forEach((item, index) => {
    let list = `
        <a href="">${item.name}</a>
        `
    let li = document.createElement("li")
    li.setAttribute("class", "animals")
    li.innerHTML = list
    ul.appendChild(li)
    Array.from(li)
    let val = li.firstElementChild.textContent
    input.value.includes(val)
})


function search_animal() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('animals');
    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            document.querySelectorAll("a").forEach((item) => {
                item.style.display = "block"

            })
            x[i].style.display = "list-item";
            x[i].addEventListener("click", (e) => {
                e.preventDefault();
                let Countryname = user[i].name
                localStorage.setItem("dataset", Countryname)
                window.location.href = "countryPage.html"
            })

            console.log(x[i].style.display = "list-item")
            if (input == "") {
                document.querySelectorAll("a").forEach((item) => {
                    item.style.display = "none"
                })

            }
        }
    }
}
input.addEventListener("keyup", search_animal)

//********main section*********

let main = document.querySelector(".main")
function mainfun() {
    user.forEach((item, index) => {
        let card = `
    <div style="border-radius:8px; margin:0px; width:200px; height:150px object-fit:contain ">
        <img src=${item.flags.svg}  style="border-radius:8px; margin:5px; width:200px; height:150px; objext-fit:contain">
    </div>
     <div class="card_details">
     <p>Population : ${item.name}</p>
        <p>Population : ${item.population}</p>
        <p>Region : ${item.region}</p>
        <p>Capital : ${item.capital}</p>
    </div>
    `
        let div = document.createElement("div")
        div.setAttribute("class", "card")
        div.innerHTML = card;
        main.appendChild(div)
        document.querySelectorAll(".main .card")[index].addEventListener("click", (e) => {
            let Countryname = user[index].name
            localStorage.setItem("dataset", Countryname)
            window.location.href = "countryPage.html"
        })
    })
}
mainfun()


// ******Region*****
let reg = document.getElementById("region")
reg.addEventListener('change', function regfun(e) {
    let regli = user.filter((i) => {
        return i.region == reg.value
    })
    
    regli.forEach((item, index) => {
        console.log(item.name)
        let card2 = `
         <img src=${item.flags.svg} width="180px" height="100px">
         <div class="card_details">
             <p>Population : ${item.name}</p>
            <p>Population : ${item.population}</p>
            <p>Region : ${item.region}</p>
            <p>Capital : ${item.capital}</p>
        </div>
        `
        console.log(main)
        if(main.length){
            console.log(main.length)
            main.parentNode.removeChild(div);
        }else{
            let div = document.createElement("div")
        div.setAttribute("class", "card2")
        div.innerHTML = card2;
        main.prepend(div)
        }
        document.querySelectorAll(".main .card2")[index].addEventListener("click", (e) => {
            let Countryname = user[index].name
            localStorage.setItem("dataset", Countryname)
            window.location.href = "countryPage.html"

        })
    })
    let lcard = document.querySelectorAll(".card")
    for (let i = 0; i <= lcard.length; i++) {
        lcard[i].style.display ="none"
    }


})
user.forEach((e,i) => {
    let option = document.createElement("option")
    // console.log(e.region)
    option.innerHTML = e.region
    reg.appendChild(option)

})








