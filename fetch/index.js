const button= document.getElementById("btn")

button.addEventListener("click", async () => {

    try{
        console.log("Loading...")
        const response = await fetch(https://jsonplaceholder.typicode.com/users/1)
        const result = await response.json()
        

    }

})