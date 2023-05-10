let userList = [
  {
    id: 1,
    quote: "When you have a dream, you've got to grab it and never let go.",
  },
  {
    id: 2,
    quote: "Nothing is impossible. The word itself says 'I'm possible!'",
  },
  {
    id: 3,
    quote:
      "Keep your face always toward the sunshine, and shadows will fall behind you.",
  },
];

let id = userList.length;
let userRating = [0];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortune = [
      "Do not let ambitions overshadow small success.",
      "Do not underestimate yourself. Human beings have unlimited potentials.",
      "Every wise man started out by asking many questions.",
      "Your talents will be recognized and suitably rewarded.",
      "If you continually give, you will continually have.",
      "It’s not the amount of time you devote, but what you devote to the time that counts.",
      "You will travel far and wide, both pleasure and business.",
    ];

    let random = Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[random];
    res.status(200).send(randomFortune);
  },

  getImage: (req, res) => {
    const images = [
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/Download-hd-nature-wallpaper.jpg",
      "https://wallpapercave.com/wp/9KxfB3a.jpg",
      "http://wallup.net/wp-content/uploads/2016/06/23/383074-New_Zealand-landscape.jpg",
      "https://th.bing.com/th/id/OIP._1bBi_9uXGwl--wRH_HSTQHaEq?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.ZaSf7GzYb3lmQzzGwXNG4gHaEK?w=320&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://cdn.wallpapersafari.com/80/51/CUD6lu.jpg",
    ];

    let random = Math.floor(Math.random() * images.length);
    let randomImage = images[random];

    res.status(200).send(randomImage);
  },

  getUserList: (req, res) => {
    let uList = userList;
    res.status(200).send(uList);
  },

  createQuote: (req, res) => {
    id++;
    let newListItem = { ...req.body, id: id };
    userList.push(newListItem);
    res.status(200).send(userList);
  },

  deleteQuote: (req, res) => {
    const { quote_id } = req.params;
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].id === +quote_id) {
        userList.splice(i, 1);
      }
    }
    res.status(200).send(userList);
  },

  updateRating: (req, res) => {
    const { type } = req.body;
    console.log(type);
    console.log(userRating);
    if (type === "plus" && userRating[0] < 10) {
      userRating[0]++
    } else if (type === "minus" && userRating[0] > 0) {
      userRating[0]--;
    }
    res.status(200).send(userRating);
  },
};
