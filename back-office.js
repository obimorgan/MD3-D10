const title = document.querySelector('.title')
const genre = document.querySelector('.genre')
const url = document.querySelector('.url')
const category = document.querySelector('.category')
const description = document.querySelector('.description')


let result = ''

const postForm = document.querySelector('.post-form')

postForm.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch("https://striveschool-api.herokuapp.com/api/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg"
        },
        body: JSON.stringify({
            name: title.value,
            category: category.value,
            imageUrl: url.value,
            description: description.value,
            genre: genre.value
        })
    })
    .then(response => response.json())
    .catch((err) => console.log(err))
})


const eventId = new URLSearchParams(window.location.search).get("eventId")
console.log(eventId)

window.onload = async () => {
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/Action/${eventId}`, {
            methods:"GET",
            headers: {
                     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg"
            }
        })
        const eventData = await response.json()


        const { name, description, price, time, _id, createdAt, updatedAt } = eventData
        console.log(eventData)
        const container = document.getElementById("event-details")
        console.log(container)
        console.log(name)
        container.innerHTML= 
        `
        <div class="font-weight-bolder">
            <br>
            <p>${name}</p>
            
            <p>Product Description:${description}</p>
            <p>Price:Kr ${price}</p>
            <p>Product Id: ${_id}</p>
            <p>Created At: ${new Date(createdAt).toLocaleDateString()}</p>
        </div>
        
        `
    } catch (err){
         console.log(err)
    }
}           
 const editInfo = () => {
    window.location.assign("/office-page/index.html?eventId=" + eventId)/// is undefined???
}

// const eventId = new URLSearchParams(window.location.search).get("eventId")

// const deleteFormBtn = document.querySelector('#delete-movie')
// deleteFormBtn.addEventListener('click', (e) => {
//     fetch("https://striveschool-api.herokuapp.com/api/movies" + eventId, {
//         method: "DElETE",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg"
//         },
//         body: JSON.stringify({
//             name: title.value,
//             category: category.value,
//             imageUrl: url.value,
//             description: description.value,
//             genre: genre.value
//         })
//     })
//     .then(response => response.json())
//     .catch((err) => console.log(err))
// })