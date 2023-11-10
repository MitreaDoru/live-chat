import socketio from "socket.io-client";
import React from "react";

export const socket = socketio('https://live-chat-scql.onrender.com');
export const SocketContext = React.createContext();