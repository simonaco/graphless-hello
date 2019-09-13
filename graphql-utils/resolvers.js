const axios = require('axios')
const resolvers = {
  hello: async obj => {
    return `Hello ${obj.name}`
  },
teams: async () => {
const res = await axios.get('https://graphqlvoting.azurewebsites.net/api/score')
return res.data
}
}

module.exports.resolvers = resolvers
