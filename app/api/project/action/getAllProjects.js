import { api } from '@/app/api'

export const getAllProjects = async () => {
        
  console.log("GET ALL PROJECTS...")
  const response = await fetch(`${api}/project`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .catch(error => console.log(error))

  return response
    
}