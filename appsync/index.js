const fetch = require("isomorphic-fetch");
const API_URL = "https://dev.gofar.co/api/";

async function fetchJSON(url, options, authToken) {
  console.log(`Fetching ${url} with authToken ${authToken}`);
  const rawResponse = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: authToken
    },
    ...options
  });
  return await rawResponse.json();
}

async function postJSON(url, payload, options) {
  console.log(url, payload, options);
  const rawResponse = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return await rawResponse.json();
}

async function getVehicleData(vehicleId, authToken) {
  return await fetchJSON(`${API_URL}vehicles/${vehicleId}`, {}, authToken);
}

async function getUserData(userId, authToken) {
  return await fetchJSON(`${API_URL}users/${userId}`, {}, authToken);
}

async function getOwnedVehicles(userId, authToken) {
  return await fetchJSON(`${API_URL}users/${userId}/ownedVehicles`, {}, authToken);
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
    fuelLeft: 999,
    travelSince: tripSummaryData.TODO,
    diagnosticIssue: ["TODO"],
    diagnosticDetail: ["TODO"],
    businessRatio: tripSummaryData.TODO,
    businessTotal: tripSummaryData.TODO,
    averageSpeed: tripSummaryData.averageSpeed,
    travelDistanceTotal: tripSummaryData.distance,
    travelDistanceThisYear: 99999,
    timeInCar: tripSummaryData.durationInSeconds,
    emissions: tripSummaryData.co2,
    fuelEconomy: tripSummaryData.litresPerHundredKm,
    parking: {
      lat: 99,
      lon: 99
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

async function getLogin(email, password) {
  const loginURL = `${API_URL}users/login`;
  return await postJSON(loginURL.toString(), { email, password });
}

exports.handler = async (event, context) => {
  console.log("Received event", JSON.stringify(event, 3));

  const headers = event && event.headers;
  console.log("context", JSON.stringify(context));

  switch (event.field) {
    case "car": {
      const vehicleId = event.arguments.id;

      const vehicleData = await getDetailsForVehicle(
        headers.userid,
        vehicleId,
        headers.authorization
      );

      console.log("vehicleData", vehicleData);

      return vehicleData;
    }
    case "login": {
      const loginResponse = await getLogin(event.arguments.email, event.arguments.password);
      console.log("LoginResponse", loginResponse);
      return {
        userId: loginResponse.userId,
        authToken: loginResponse.id,
        successful: !!loginResponse.id
      };
    }
    case "userData": {
      const ownerData = await getUserData(headers.userid, headers.authorization);
      const ownedVehicles = await getOwnedVehicles(headers.userid, headers.authorization);
      console.log("ownedvehjicles", ownedVehicles);
      return {
        ...ownerData,
        cars: ownedVehicles
      };
    }
    default:
      return "Unknown field, unable to resolve" + event.field;
  }
};
