import axios from "axios";
import { Platform } from "react-native";

export const baseURL = Platform.select({
  ios: "http://localhost:3000",
  android: "http://192.168.100.31:3000",
});

export const deliveryApi = axios.create({
  baseURL,
});
