const path = require("path")
const express = require("express")
const app = express()
const cors = require("cors")

// parse incoming traditional HTML form submits
app.use(express.urlencoded({ extended: false }))

// parse incoming JSON payloads
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.get("/api/animals/meowsalot", cors(), (req, res) => {
  // tell browser that if it loaded this url in the last 10 seconds to use that if quickly switching between pages
  res.header("Cache-Control", "max-age=10")
  res.json({ name: "Careers", species: "roles", "photo": "https://github.com/ThePrin/online-news/blob/master/img/carr.jpg?raw=true", bio: "There are roles in Web development, Mobile App development, Game dev, Artificial Intelligence, Machine Learning, Robotics, CyberSecurity, Entrepreneurship and more." })
})

app.get("/api/animals/barksalot", cors(), (req, res) => {
  res.header("Cache-Control", "max-age=10")
  res.json({ name: "Languages", species: "program", "photo": "https://github.com/ThePrin/online-news/blob/master/img/lang.jpg?raw=true", bio: "HTML, CSS and command line are essential. For Android App dev, look at options in Java and Kotlin. For iOS Apps, consider swift. React Native is cross platform-used for making both android and iOS. C# and java are renowned for Game development, python is heavily used in data science." })
})

app.get("/api/animals/purrsloud", cors(), (req, res) => {
  res.header("Cache-Control", "max-age=10")
  res.json({ name: "Projects", species: "work", "photo": "https://github.com/ThePrin/online-news/blob/master/img/proj.jpg?raw=true", bio: "Please post links to your projects here, ta-da ..." })
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.post("/secret", (req, res) => {
  if (req.body.username === "CAG" && req.body.password == "code") {
    res.json({ message: "Truth does not mind been questioned.", status: "success" })
  } else {
    res.json({ message: "You are not authorized to access this data.", status: "failure" })
  }
})

app.listen(process.env.PORT || 3000)
