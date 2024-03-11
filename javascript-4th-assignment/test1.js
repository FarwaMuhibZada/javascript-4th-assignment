//button to change background


let btn = document.querySelector("#btn");


btn.addEventListener("click" , function(){
    btn.style.backgroundColor ="red";
});

// toggle the visiablity of paragraph

let p = document.querySelector("#p1");
let btnSubmit = document.getElementById("sumitbtn");


btnSubmit.addEventListener("click",function(){
   p.classList.toggle("show");
    //  p.style.opacity ="0";
});



// create dynamic list using java script
let elements = document.querySelector(".elements");
let ul = document.createElement("ul");


for(let i=0; i<=5;i++){
    let li =document.createElement("li");
    let text = document.createTextNode("iteam");
      li.appendChild(text);
      ul.appendChild(li);
      elements.appendChild(ul);
    //  elements.appendChild(list);

}


// add inputfield dynamically

let form = document.querySelector("#form1");
let addBtn = document.querySelector("#submit");

addBtn.addEventListener("click",function(){
    let input = "<input type ='text' class='form-control' placeholder ='new field'>";
    form.insertAdjacentHTML("afterbegin",input);
})










