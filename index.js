const body = document.body
const div = document.getElementById("container")
const pic = document.getElementsByClassName('pic')
const fullName = document.getElementsByClassName('fullName')
const phone = document.getElementsByClassName('phone')
const email = document.getElementsByClassName('email')
const address = document.getElementsByClassName('address')
const btn = document.getElementsByClassName('btn')

btn.addEventListener('click', () =>{
    const url = "https://randomuser.me/api/"
    const cardInfo = () => {
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const cardImage = data.results[0].picture.medium
            image.src = cardImage 
    
            const cardTitle = data.results[0].name.title + data.results[0].name.first + data.results[0].name.last
            cardTitle.textContent = cardTitle
    
            const cardMail = data.results[0].email
            cardMail.textContent = cardMail
    
            const cardAdd = data.results.location.street.number.name
            address.textContent = address

            console.log(cardAdd);
        })
    }
    
}
)

cardInfo()



