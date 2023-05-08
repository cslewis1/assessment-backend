const resultImg = document.querySelector("#resultImg");
const resultDiv = document.querySelector("#resultDiv");
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.querySelector("#fortuneBtn");
const container = document.querySelector(".container");
const quoteList = document.querySelector("#quoteList");
const form = document.querySelector("form");

const quoteCallback = ({ data: userList }) => displayQuotes(userList)

const getCompliment = () => {
  axios
    .get("http://localhost:4000/api/compliment/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })   
};

const getImage = () => {
  axios
    .get("http://localhost:4000/api/images/")
    .then((res) => {
      const imgData = res.data;
      resultImg.src = imgData;
    })   
};

const getFortune = () => {
  axios
    .get("http://localhost:4000/api/fortune/")
    .then((res) => {
      const data = res.data;
      resultDiv.textContent = data;
      getImage();
    })    
};

const getUserList = () => {
  axios
    .get("http://localhost:4000/api/userList/")
    .then(quoteCallback)
};

const createQuote = (body) => {
  axios
    .post("http://localhost:4000/api/userList/", body)
  .then(quoteCallback)
}

const deleteQuote = (id) => axios.delete(`http://localhost:4000/api/userList/${id}`)
.then(quoteCallback)

function submitHandler(e) {
  e.preventDefault()
  let quote = document.querySelector('#quote') 
  let bodyObj = {
      quote: quote.value
  }
  createQuote(bodyObj)
  quote.value = ''
}

const createQuoteList = (list) => {
  console.log(list)
  const quoteListItem = document.createElement('ul')  
  quoteListItem.innerHTML = 
  `<li>${list.quote}
  <button onclick="deleteQuote(${list.id})">X</button>
  </li> `
        
  quoteList.appendChild(quoteListItem)
  
};

const displayQuotes = (arr) => {
  quoteList.innerHTML = ``
  arr.forEach(element => {
    createQuoteList(element)    
  });
}

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
form.addEventListener("submit", submitHandler);

getUserList()
