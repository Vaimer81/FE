// 1 Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
const divNumbers = document.querySelector(".numbers")
for(i=100; i>=50; i-=10){
    const parag = document.createElement("p")
    parag.innerText = i
    
    divNumbers.append(parag)
}


// 2 Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом stringscontainer. Строки взять произвольные.
const divStrCont = document.querySelector(".stringscontainer")
const arr = ["весна", "лето", "осень", "зима"]
for(i=0; i<arr.length; i++){
    const paragraph = document.createElement("p")

    paragraph.innerText = arr[i]
    
    const myDiv = document.createElement("p")
    paragraph.style.borderRadius = "19px"
    paragraph.style.height = "20px"
    paragraph.style.width = "40px"
    
    paragraph.style.backgroundColor ="yellow"
    
    myDiv.append(paragraph)
    divStrCont.append(paragraph)
}

// 3 Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом userscontainer.

const divUserCont = document.querySelector(".userscontainer")
const objarr = [
    {
        firstname: "Иван",
        lastname: "Иванов",
        age: 35
    },
    {
        firstname: "Петр",
        lastname: "петров",
        age: 31
    },
    {
        firstname: "Сидор",
        lastname: "Сидоров",
        age: 18
    },
]
for(i = 0; i<objarr.length; i++){
    if(objarr[i].age >= 18){
        const paragraphName = document.createElement("p")
        paragraphName.innerText = objarr[i].firstname
        const paragraphLastName = document.createElement("p")
        paragraphLastName.innerText = objarr[i].lastname
        const paragraphAge = document.createElement("p")
        paragraphAge.innerText = objarr[i].age
        
        const myDiv = document.createElement("div")
        myDiv.style.height = "100px"
        myDiv.style.width = "70px"
        myDiv.style.borderRadius = "10px"
        myDiv.style.backgroundColor ="green"

        myDiv.append(paragraphName, paragraphLastName, paragraphAge)
        divUserCont.append(myDiv)
    }
}