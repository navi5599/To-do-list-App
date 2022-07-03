function newItem() {
  const li = $('<li></li>');
  const inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    const list = $('#list');
    list.append(li);
  };

  // function that crosses li items
  li.on('dblclick', () => {
    li.toggleClass('strike');
  });

  // here is the delete button X
  const crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  function deleteListItem() {
    li.addClass('delete');
  }

  crossOutButton.on('click', deleteListItem);

  $('#list').sortable();
}

// Removes input value after add button is clicked
const btn = document.getElementById('button');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const inputValue = document.getElementById('input');
  inputValue.value = '';
});
