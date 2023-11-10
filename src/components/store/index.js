import { configureStore } from "@reduxjs/toolkit";


import authReducer from "./auth";
import chatReducer from "./chat";

const store = configureStore({
    reducer: { auth: authReducer, chat: chatReducer },
});

export default store;