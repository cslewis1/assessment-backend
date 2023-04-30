const resultImg = document.querySelector("#resultImg");
const resultDiv = document.querySelector("#resultDiv");
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.querySelector("#fortuneBtn");
const container = document.querySelector(".container")

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getImage = () => {
    axios.get("http://localhost:4000/api/images/").then((res) => {
      const imgData = res.data;
        resultImg.src = imgData;
        container.style.background-Image.url("imgData")
    });
  };

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
      resultDiv.textContent = data;
      getImage();
  });
};


complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
