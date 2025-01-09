import { IDonate } from "../models/IDonate";

export class ApiService {
  static async donate (
    donateData: IDonate
  ) {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: donateData ? JSON.stringify(donateData) : undefined,
    };
    console.log(donateData);
    console.log(import.meta.env.VITE_SERVER_URL);
    const resp = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/donate`,
      options
    );
  
    const jsonData = await resp.json();
  
    if (resp.ok) return jsonData;
    throw new Error(`Error: ${resp.status} - ${resp.statusText}`);
  }
}