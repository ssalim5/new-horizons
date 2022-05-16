const { db } = require('./db')
const PORT = process.env.PORT || 8080
const app = require('./app')
const seed = require('../script/seed');
const calculatedRatings = require('../script/rec.js')
const axios = require('axios')

const  uploadRatingsToAWS = async () =>{
  await calculatedRatings()
  await axios.post('http://localhost:8080/api/s3')
}

const init = async () => {
  try {
    if(process.env.SEED === 'true'){
      await seed();
    }
    else {
      await db.sync()
      console.log("synced")
    }
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
    await uploadRatingsToAWS()
    setInterval(uploadRatingsToAWS,60*60*1000)

  } catch (ex) {
    console.log(ex)
  }
}

init()
