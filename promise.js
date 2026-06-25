function getMessage() {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve("Greetings")
        }, 2000)
    })
}

getMessage()
    .then(result => {
          console.log(result)
    })
    .catch(error => {
            console.log(error)
    })

function getData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong")
        }, 2000)
    })
}

getData()
    .catch(error => {
        console.log(error)
    })


    //async/await 

    function getData(){
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve("hello")
            }, 2000)
        })
    }

    async function main(){
        try{
            console.log("fetching...")

            const result = await getData()
            console.log(result)

            console.log("finished")
        }
        catch(error){
            console.log("Error:", error)
        }
    }
    main()