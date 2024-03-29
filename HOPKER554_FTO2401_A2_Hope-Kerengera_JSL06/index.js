// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu");
    // Get the menu container element from the HTML DONE
    const dishes = Object.entries(menu); //turn into array
    const newDishes = dishes.map(([category, meal]) => { //create a copy of array and iterate through it
        return {category, meal}; //returns object
    })

    newDishes.forEach( dish => { //for each dish in newDishes object:
        const categoryName = document.createElement("h1");
        categoryName.className = "categoryName";
        categoryName.textContent = `${dish.category}`; //"category name" will equal either starter, main course or dessert
        menuContainer.appendChild(categoryName); //append to menu section
        const menuList = document.createElement("ul"); 


        dish.meal.forEach( listItem => { //listItem is the value of the array meal items 
            const list = document.createElement("li");
            list.textContent = `${listItem}`; //list = dish.meal = listItem. (this function is defined within newDishes function which has dish as a value)
            menuList.appendChild(list);
            menuContainer.appendChild(menuList);

            list.addEventListener("click", () => {// when list item clicked, addToOrder will run where item will be added to order and total price updated
                addToOrder(listItem); //callback function. "itemName" is parameter and in this case = listItem
            })
        })

    })


    // Loop through each category and its items in the menu object DONE

        // Create an element to represent the category DONE

        // Set the text content of the category element to the category name DONE

        // Append the category element to the menu container DONE

        // Create an element to represent a list of items DONE

        // Append a list of items element to the menu container DONE

        // Loop through the items in the category and create list items DONE

            // Create a list item element DONE

            // Set the text content of the list item element to the item name DONE

            // Attach a click event listener to the list item to add it to the order DONE

            // Append the list item to the list of items DONE

            
}

displayMenuItems(menu);

// Callback function for adding an item to the order

let totalPrice = 0; //"let" so that the amounts are updated each time

function addToOrder(itemName) { //item name will be list item user clicks

    const orderItems = document.getElementById("order-items"); //main list
    const orderTotal = document.getElementById("order-total"); //grabbing order total span

    const listOrder = document.createElement("ul"); //create ordered meal list within main list
    const listOrderItem = document.createElement("li"); //list items
    listOrderItem.textContent = itemName; // order item will be what user clicks
    listOrder.appendChild(listOrderItem);
    orderItems.appendChild(listOrder); // append ordered meal list to main list
    totalPrice += 60; // increment the total price by 60 each time
    orderTotal.textContent = `${totalPrice.toFixed(2)}`; //order total content = total price to two decimal places

    // Get the order items list and the order total element from the HTML DONE

    // Create a list item for the order DONE

    // Set the text content of the list item to the item name DONE

    // Append the list item to the order items list DONE

    // Calculate and update the total price DONE

    // Update the text content of the order total element with the new total DONE
    const clear = document.getElementById("buttonClear"); //clear order button
    clear.addEventListener("click", () => {
        orderItems.innerHTML = ""; // clear the order items list
        totalPrice = 0; // total price back to zero
        orderTotal.textContent = "0.00";
    })
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
