// Custom Modules
const join_room_handler = require("./join_room_handler.socket.js");
const leave_room_handler = require("./leave_room_handler.socket.js");
const piece_moved_handler = require("./piece_moved_handler.socket.js");

const socket = (socket) => {
  console.log("Connected succesfully to the socket ...");

  // Handle Socket Events
  socket.on("join_room", join_room_handler(socket));

  socket.on("leave_room", leave_room_handler(socket));

  socket.on("piece_moved", piece_moved_handler(socket));
};

module.exports = socket;
