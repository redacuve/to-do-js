export function createElement(type, inner = "", classLst = ""){
    const elem = document.createElement(type);
    elem.innerHTML = inner;
    elem.classList.add(classLst);
    return elem;
}

export function getElement(id){
    const element = document.getElementById(id);
    return element;
}

export function setInner(elem, str){
    elem.innerHTML = str;
}

export function addToInner(elem, str){
    elem.innerHTML += str;
}

export function setClickListener(elem, funct){
    elem.addEventListener("click",funct);
}