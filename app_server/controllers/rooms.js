var fs = require('fs');
var roomListings = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const rooms = (req, res) => {
  res.render('rooms', { title: 'Travlr Getaways', roomListings, currentPage: { rooms: true }});
};

// TODO: The following will be implemented later when the database functionality is added

/*

const roomsEndpoint = 'http://localhost:3000/api/rooms';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json'
  }
};
*/

/* GET rooms view */
/*
const rooms = async function (req, res, next) {
  await fetch(tripsEndpoint, options)
    .then((res) => res.json())
    .then((json) => {
      let message = null;
      if (!(json instanceof Array)) {
        message = 'API lookup error';
        json = [];
      } else {
        if (!json.length) {
          message = 'No trips exist in our database!';
        }
      }
      res.render('rooms', { title: 'Travlr Getaways', trips: json, message });
    })
    .catch((err) => res.status(500).send(err.message));
};
*/

module.exports = {
  rooms
};