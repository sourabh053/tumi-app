import axios from "axios";

export async function genrateOTP(reqBody) {
  try {
    let responseObj = await axios.post(
      "https://apac.api.capillarytech.com/auth/v1/otp/generate",
      reqBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = responseObj.data;
    if(response.status.code === 200){
        return response.status.success;
    }else{
        console.log("request failed");
        return null;
    }
  } catch (e) {
    console.error(e);
  }
}
