document.addEventListener("DOMContentLoaded", function()
    const itemInput = document.getElementById("itemInput");
    const additemBtn = document.getElementById("additemButton");
    const clearlistBtn = document.getElementById("clearlistBtn");
    const itemList = document.getElementById("itemList");
    const shoppingList = [];

    // function to render items in shopping list
       function renderItems(){
        itemList.innerHTML = ``;


        //loop thru shopping list array and create list items

        shoppingList.forEach((item, index) =>{
            const li = document.createElement("li");
            li.textContent = item;
            li.classList.add("item");
            if(item.completed){
                li.classList.add("completed");
            }

            //add event listener to mark items as purchased
            li.addEventListener("click", function(){
                item.completed =!item.completed;
                renderItems();
            })
            itemList.appendChild(li);
        })

        //event listener for add button
        additemBtn.addEventListener("click", function(){
            const newItem = itemInput.value.trim();
            if(newItem !== ``){
                shoppingList.push({name: newItem, completed:false});
                itemInput.value = ``;
                //call function
                renderItems()
            }
        });

        // event listener for clear list button
        clearlistBtn.addEventListener("click", function(){
            shoppingList.length = 0;
            renderItems();
        });
    }
});

