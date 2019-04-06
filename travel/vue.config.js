const goods = require('./public/mock/index.json')
module.exports = {
  devServer: {
    before: (app) => {
      app.get('/api/index.json', function (req, res) {
        res.json(goods)
      })
    }
  }
}