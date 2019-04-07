const index = require('./public/mock/index.json')
const city = require('./public/mock/city.json')
module.exports = {
  devServer: {
    before: (app) => {
      app.get('/api/index.json', function (req, res) {
        res.json(index)
      })
      app.get('/api/city.json', function (req, res) {
        res.json(city)
      })
    }
  }
}