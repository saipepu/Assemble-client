import { api } from "@/app/api";

export const getUserById = async (id) => {
  console.log("GET USER BY ID...");
  const response = await fetch(`${api}/user/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));

  return response;
};
