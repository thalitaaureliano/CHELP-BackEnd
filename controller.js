const {connect} = require("./repository")
const voluntariasModel = require('./schema')

connect()

const getAll = () => {
    return voluntariasModel.find((error, voluntarias) => {
    return voluntarias
    })
  }

const add = (voluntaria) => {
  const novaVoluntaria = new voluntariasModel(voluntaria)
  return novaVoluntaria.save()
}

module.exports = {
    getAll,
    add
  }