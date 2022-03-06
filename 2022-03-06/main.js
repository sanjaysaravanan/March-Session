

const baseUrl = "https://62244eef3af069a0f9b2f307.mockapi.io";


// All Read / GET Operation 

const getUsersData = () => {
  fetch(baseUrl + "/users")
  .then(res => res.json())
  .then(data => console.log(data));
}
// getUsersData();


// Particular User Data Read / GET Operation
const getUserData = (id) => {
  fetch(baseUrl + "/users/" + id)
  .then(res => res.json())
  .then(data => console.log(data));
}
//getUserData(10);

// Create / POST a user  operation
// Fetch 1st param URL, 2nd param Options for fetch request 
const createUser = (userData) => {
  fetch(
    baseUrl + "/users",
    {
      body: JSON.stringify(userData),
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  )
  .then(res => res.json())
  .then(data => console.log(data));
}

const data = {
  name: "Sammy",
  email: "sam@gmail.com",
}

// createUser(data);


// Update / PUT a user  operation
// Fetch 1st param URL, 2nd param Options for fetch request 
const updateUser = (userData, id) => {
  fetch(
    baseUrl + "/users/" + id,
    {
      body: JSON.stringify(userData),
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  )
  .then(res => res.json())
  .then(data => console.log(data));
}

const updateData = {
  name: "John Doe",
  email: "John@gmail.com"
}

// updateUser(updateData, 12);


// Delete / DELETE a user  operation
// Fetch 1st param URL, 2nd param Options for fetch request 
const deleteUser = (id) => {
  fetch(
    baseUrl + "/users/" + id,
    {
      method: "DELETE",
    }
  )
  .then(res => res.json())
  .then(data => console.log(data));
}

deleteUser(11);

