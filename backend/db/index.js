const mongoose = require('mongoose')

  mongoose.connect('mongodb+srv://Jyotsnajoshy:jojo@cluster0.lds0paj.mongodb.net/')
  .then(() => {
      console.log("DB connected")
  })
  .catch(err => {
      console.log('Error :' + err)
  })