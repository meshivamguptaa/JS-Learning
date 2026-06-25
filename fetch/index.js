const button= document.getElementById("btn")
const text= document.getElementById("output")
button.addEventListener("click", async () => {

    try{
        text.textContent= "Loading..."
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")

        //when server respons with 404 not found
        if(!response.ok){
            throw new Error("failed to fetch data")
        }

        const user = await response.json()
        console.log(user)

        
        text.textContent = `
            Name: ${user.name}
            Email: ${user.email}
            City: ${user.address.city}
`
    }
    catch(error){
        text.textContent= "Something went wrong"

    }

})