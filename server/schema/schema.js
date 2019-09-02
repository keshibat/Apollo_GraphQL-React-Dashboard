const graphql = require("graphql");
const Car = require("../models/car");
const Owner = require("../models/owner");
const _ = require("lodash");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const CarType = new GraphQLObjectType({
  name: "Car",
  fields: () => ({
    id: { type: GraphQLID },
    carName: { type: GraphQLString },
    lastFillUp: { type: GraphQLInt },
    lastFillUpTime: { type: GraphQLString },
    lastLocation: { type: GraphQLString },
    fuelLeft: { type: GraphQLInt },
    travelSince: { type: GraphQLInt },
    diagnosticIssue: { type: GraphQLString },
    diagnosticDetail: { type: GraphQLString },
    businessRatio: { type: GraphQLInt },
    businessTotal: { type: GraphQLInt },
    averageSpeed: { type: GraphQLInt },
    travelDistanceTotal: { type: GraphQLInt },
    travelDistanceThisYear: { type: GraphQLInt },
    timeInCar: { type: GraphQLInt },
    emissions: { type: GraphQLInt },
    fuelEconomy: { type: GraphQLInt },
    parking: { type: GraphQLString },
    timeTraveld: { type: GraphQLString },
    startLocation: { type: GraphQLString },
    endLocation: { type: GraphQLString },
    owner: {
      type: OwnerType,
      resolve(parent, args) {
        return Owner.findById(parent.ownerId);
      }
    }
  })
});

const OwnerType = new GraphQLObjectType({
  name: "Owner",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    cars: {
      type: new GraphQLList(CarType),
      resolve(parent, args) {
        return Car.find({ ownerId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    car: {
      type: CarType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Car.findById(args.id);
      }
    },
    owner: {
      type: OwnerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Owner.findById(args.id);
      }
    },
    cars: {
      type: new GraphQLList(CarType),
      resolve(parent, args) {
        return Car.find({});
      }
    },
    owners: {
      type: new GraphQLList(OwnerType),
      resolve(parent, args) {
        return Owner.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addOwner: {
      type: OwnerType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let owner = new Owner({
          firstName: args.firstName
        });
        return owner.save();
      }
    },
    addCar: {
      type: CarType,
      args: {
        carName: { type: new GraphQLNonNull(GraphQLString) },
        lastFillUp: { type: GraphQLInt },
        lastFillUpTime: { type: GraphQLString },
        lastLocation: { type: GraphQLString },
        fuelLeft: { type: GraphQLInt },
        travelSince: { type: GraphQLInt },
        diagnosticIssue: { type: GraphQLString },
        diagnosticDetail: { type: GraphQLString },
        businessRatio: { type: GraphQLInt },
        businessTotal: { type: GraphQLInt },
        averageSpeed: { type: GraphQLInt },
        travelDistanceTotal: { type: GraphQLInt },
        travelDistanceThisYear: { type: GraphQLInt },
        timeInCar: { type: GraphQLInt },
        emissions: { type: GraphQLInt },
        fuelEconomy: { type: GraphQLInt },
        parking: { type: GraphQLString },
        timeTraveld: { type: GraphQLString },
        startLocation: { type: GraphQLString },
        endLocation: { type: GraphQLString },
        ownerId: { type: GraphQLID }
      },
      resolve(parent, args) {
        let car = new Car({
          carName: args.carName,
          lastFillUp: args.lastFillUp,
          lastFillUpTime: args.lastFillUpTime,
          lastLocation: args.lastLocation,
          fuelLeft: args.fuelLeft,
          travelSince: args.travelSince,
          diagnosticIssue: args.diagnosticIssue,
          diagnosticDetail: args.diagnosticDetail,
          businessRatio: args.businessRatio,
          businessTotal: args.businessTotal,
          averageSpeed: args.averageSpeed,
          travelDistanceTotal: args.travelDistanceTotal,
          travelDistanceThisYear: args.travelDistanceThisYear,
          timeInCar: args.timeInCar,
          emissions: args.emissions,
          fuelEconomy: args.fuelEconomy,
          parking: args.parking,
          timeTraveld: args.timeTraveld,
          startLocation: args.startLocation,
          endLocation: args.endLocation,
          ownerId: args.ownerId
        });
        return car.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
