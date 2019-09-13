const { buildSchema } = require('graphql')
const typeDefs = buildSchema(`
  type Query {
    hello(name:String):String
    teams:[Team]
  }
  type Team {
    name: String
    id: ID
    points: Int
  }
`)

module.exports.typeDefs = typeDefs
