import { UserDTO } from "../models/user";
import { BASE_URL } from "../utils/system";
import axios from "axios";

export function findByUserName(userName: string): UserDTO | undefined {
  return axios.get(`${BASE_URL}/${userName}`);
}
