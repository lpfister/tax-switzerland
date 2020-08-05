"use strict";
var express = require('express');
const cors = require('cors')
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');



var schema = buildSchema(`
  type Query {
    communesByCanton(id: String!): [Commune]
    communeByName(id: String!): Commune
  },
  type Commune {
    id: String!,
    yearAdopted: String!,
    validity:	String!,
    incomeTax: String!,	
    estateTax: String!,	
    transferSalesTax: String,	
    directAscendingTax: String,	
    directDescendingTax: String,
    collateralLineTax: String,
    nonRelativeTax: String,
    taxCompanyRealEstate: String,
    dogTax: String,
    entertainmentTax: String
  }
`);



const dataVD = require('./data/vd/data_vd_2020')

var getCommuneByName = function(args) {
  var communeName = args.id;
  return dataVD.filter(commune => commune.id == communeName)[0];
}

var getCommunesByCanton = function(args) {
  var canton = args.id;
  if (canton == "VD") {
    return dataVD
  }
  else {
    return []
  }
}

var root = {
  communeByName: getCommuneByName,
  communesByCanton: getCommunesByCanton
}




var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));