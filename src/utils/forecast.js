const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=28593500d3ac7f28d2f41af606b11aaf&query=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find the location", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          body.current.temperature +
          " degress out. There is a " +
          body.current.precip +
          "% chance of rain. The loacl time is " +
          body.location.localtime
      );
    }
  });
};
module.exports = forecast;
