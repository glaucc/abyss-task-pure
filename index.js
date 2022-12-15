(() => {
    "use strict";

    let trigger = document.getElementsByClassName("btn");
    // let toDoLists = document.getElementById("toDoLists");
    trigger.forEach(element => {
      element.addEventListener('click', function() {
      alert('1')
    })
        // let elements = document.createElement("div");
        // elements.innerHTML = `
        //     <li> <a href="#"><span>Great Grand Child</span></a> </li>

        
        
        // `;
      
        // toDoLists.appendChild(elements);
      })
})();