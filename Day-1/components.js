
// components

function p(text){
    let p = document.createElement("p");
    p.textContent = text;
    document.body.appendChild(p);
    return p;
}

function button(text, event, callback){

    let btn = document.createElement("button");
    btn.textContent = text;
    btn.addEventListener(event, callback);
    document.body.appendChild(btn);
    return btn;
}

function Link(link){
    let a = document.createElement("a");
    a.setAttribute("href", link)
    return document.createElement("a");
}

function h1(text){
    let header= document.createElement("h1");
    header.textContent = text;
    document.body.appendChild(header);
    return header;

}

