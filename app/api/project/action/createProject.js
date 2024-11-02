import { api } from "@/app/api";

export const createProject = async ({ dto, token }) => {
  console.log("CREATE PROJECT...");
  const response = await fetch(`${api}/project`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dto),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));

  return response;
};
