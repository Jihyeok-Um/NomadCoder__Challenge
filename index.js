const select = document.querySelector("select");
const korea = document.querySelector(".Korea");
const greece = document.querySelector(".Greece");
const turkey = document.querySelector(".Turkey");
const finland = document.querySelector(".Finland");
const countrys = [korea,greece,turkey,finland];

const COUNTRY_LS = "country";
let country;

function setSelectValue() {
    country = select.selectedOptions;
    localStorage.setItem(COUNTRY_LS, country[0].label);
}

function getSelectValue() {
    const loadedSelectValue = localStorage.getItem(COUNTRY_LS);

    if(loadedSelectValue === null) { return; }

    for(let i=0; i <= countrys.length-1; i++) 
    {
        if(countrys[i].value === loadedSelectValue)
        {
            countrys[i].setAttribute("selected", "");
        }
    }
}

function init() {
    getSelectValue();
    select.addEventListener("change",setSelectValue);
}
init();