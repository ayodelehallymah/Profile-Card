const body = document.body
const myDiv = document.getElementById('myDiv')
const imageSrc = document.getElementById('imageSrc')
const fullName = document.getElementById('fullName')
const address = document.getElementById('address')
const phonenumber = document.getElementById('phoneNumber')
const email = document.getElementById('email')
const title = document.getElementById('title')
const url =  "https://randomuser.me/api/"
const btn = document.getElementsByClassName('btn')
title.textContent = 'RANDOM CARD GENERATOR'


 fetch(url).then(response => response.json())
 .then(data => {
    
    const cardImg = data.results[0].picture.large
     imageSrc.src = cardImg

    const cardFullName = data.results[0].name.title + (' ') + data.results[0].name.first + (' ') + data.results[0].name.last
   fullName.textContent = cardFullName

    const phoneNum = 'Phone Number' + (' - ') + data.results[0].phone
    phonenumber.textContent = phoneNum

    const emailAdd = 'Email-Address -' + (' ') +  data.results[0].email
    email.textContent = emailAdd

    const cardAddress =  'Address -' + (' ') + data.results[0].location.street.number + (', ') + data.results[0].location.street.name
    address.textContent = cardAddress
 })
