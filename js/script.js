function newItem() {
    //adding li to the ol
    let li = $('<li></li>')
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list = $('#list');
        list.append(li);
    };

    //function that crosses li items
    li.on("dblclick",function crossOut() {
        li.toggleClass("strike");
    });

    //here is the delete button X 
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete")
    };

    $('#list').sortable();
    
};