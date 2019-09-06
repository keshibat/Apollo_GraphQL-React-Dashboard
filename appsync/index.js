const fetch = require("isomorphic-fetch");
const API_URL = "https://dev.gofar.co/api/";

async function fetchJSON(url, options, authToken) {
  const rawResponse = await fetch(url, "GET", {
    headers: {
      Authorization: authToken
    },
    ...options
  });
  return await rawResponse.json();
}

async function getVehicleData(vehicleId, authToken) {
  return await fetchJSON(`${API_URL}vehicles/${vehicleId}`, {}, authToken);
}

async function getUserData(userId, authToken) {
  return await fetchJSON(`${API_URL}users/${userId}`, {}, authToken);
}

async function getRefillData(vehicleId, authToken) {
  const baseRefillURL = `${API_URL}vehicles/${vehicleId}/refills`;
  const refillUrl = new URL(baseRefillURL);
  refillUrl.searchParams.append(
    "filter",
    JSON.stringify({ order: "createdAt DESC", limit: 1 })
  );
  return await fetchJSON(refillUrl.toString(), {}, authToken);
}

async function getTripSummaryData(userId, authToken) {
  const baseTravelDistanceTotalURL = `${API_URL}users/${userId}/summary`;
  const travelDistanceTotalUrl = new URL(baseTravelDistanceTotalURL);
  return await fetchJSON(travelDistanceTotalUrl.toString(), {}, authToken);
}

async function getDetailsForVehicle(userId, vehicleId, authToken) {
  const [vehicleData, refillData, tripSummaryData] = await Promise.all([
    getVehicleData(vehicleId, authToken),
    getRefillData(vehicleId, authToken),
    getTripSummaryData(userId, authToken)
  ]);

  const finalResult = {
    id: vehicleId,
    vehicleName: vehicleData.displayName,
    lastFillUp: refillData.litres,
    lastFillUpTime: refillData.timestamp,
    lastLocation: refillData.location,
    fuelLeft: "TODO",
    travelSince: tripSummaryData.TODO,
    diagnosticIssue: ["TODO"],
    diagnosticDetail: ["TODO"],
    businessRatio: tripSummaryData.TODO,
    businessTotal: tripSummaryData.TODO,
    averageSpeed: tripSummaryData.averageSpeed,
    travelDistanceTotal: tripSummaryData.distance,
    travelDistanceThisYear: "TODO",
    timeInCar: tripSummaryData.durationInSeconds,
    emissions: tripSummaryData.co2,
    fuelEconomy: tripSummaryData.litresPerHundredKm,
    parking: {
      lat: "TODO",
      lon: "TODO"
    },
    timeTraveled: tripSummaryData.TODO,
    trips: [
      {
        startLocation: "TODO",
        endLocation: "TODO"
      }
    ]
  };
  return finalResult;
}

exports.handler = async (event, context) => {
  console.log("Received event {}", JSON.stringify(event, 3));

  switch (event.field) {
    case "car":
      const vehicleId = event.arguments.id;
      const headers = context.request.headers;
      console.log(headers);

      const vehicleData = await getDetailsForVehicle(
        headers.UserId,
        vehicleId,
        headers.Authorization
      );

      return vehicleData;
    case "owner":
      return "TODO";

    default:
      return "Unknown field, unable to resolve" + event.field;
  }
};
