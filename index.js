
function handleForm(event){
  event.preventDefault();
  const u_expense= event.target.expense.value;
  const u_description= event.target.description.value;
  const u_category= event.target.category.value;

  const user = {
    expense: u_expense,
    description : u_description,
    category : u_category,
  };
 
    localStorage.setItem(user.expense,JSON.stringify(user));

    const userList=document.getElementById('userList');
    const newLi= document.createElement('li');
    newLi.textContent= `Expense: ${user.expense}, Description: ${user.description }, Category: ${user.category}`;
    userList.appendChild(newLi);

    const deleteBtn= document.createElement('input');
    deleteBtn.type="button";
    deleteBtn.value="Delete Expense";
    newLi.appendChild(deleteBtn);
    deleteBtn.onclick= () => {
        newLi.remove();
        localStorage.removeItem(user.expense);
    }

    const editBtn= document.createElement('input');
    editBtn.type="button";
    editBtn.value="Edit Expense";
    newLi.appendChild(editBtn);

    editBtn.onclick= () => {
        localStorage.removeItem(user.expense);
        newLi.remove();
        document.getElementById('expense').value= user.expense;
        document.getElementById('description').value= user.description;
        document.getElementById('category').value= user.category;   
    }
 
}

