

const baseUrl = "https://62243be13af069a0f9b16ee8.mockapi.io";

const getData = () => {
  fetch(baseUrl + "/users")
    .then(res => res.json())
    .then(data => console.log(data));
}

// getData();


const postData = () => {
  const data = {
    name: "Sanjay Saravanan",
    email: "sanjay@gmail.com",
  }
  fetch(
    baseUrl + "/users",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      }
    }
  )
    .then(res => res.json())
    .then(data => console.log(data));
}

// postData();


const putData = () => {
  const data = {
    name: "John Doe",
    email: "john@gmail.com",
  }
  fetch(
    baseUrl + "/users/9",
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      }
    }
  )
    .then(res => res.json())
    .then(data => console.log(data));
}

// putData();


const deleteData = () => {
  fetch(
    baseUrl + "/users/9",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      }
    }
  )
    .then(res => res.json())
    .then(data => console.log(data));
}


deleteData();