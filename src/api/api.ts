import axios from "axios";
import { resolve } from "./resolve.ts";

export async function getCurrentToken() {
    return resolve(axios.get(``).then(res => res.data));
}