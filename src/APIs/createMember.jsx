import axios from "axios";

export async function createMember(formData) {
  try {
    let newMember = await axios.post(
      "https://eu.api.capillarytech.com/v1.1/transaction/add?format=json",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
   
    return newMember;
  } catch (e) {
    console.error(e);
  }
}
