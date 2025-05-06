function addTodo(){
    const inputELe = document.querySelector("input");
    const value = inputEle.value;
    const newdiv = document.createElement("div");
    newdiv.innerHTML = value;
    document.querySelector("body").appendChild(newdiv);

}