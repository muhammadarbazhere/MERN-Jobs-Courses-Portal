// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';
import authReducer from "./AuthSlice";
import CourseSlice from "../Components/CourseSlice";
import JobsSlice from '../Components/JobsInternshipSlice';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['auth', 'app', 'jobsInternshipsStore'], // List the slices you want to persist
};

const rootReducer = combineReducers({
  auth: authReducer,
  app: CourseSlice,
  jobsInternshipsStore: JobsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
