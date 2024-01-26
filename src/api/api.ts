import axios from "axios";
import { resolve } from "./resolve.ts";
import { API_URL } from "../constants.ts";

export async function getCurrentToken() {
    return resolve(axios.get(`${API_URL}/token/getCurrent`).then(res => res.data));
}