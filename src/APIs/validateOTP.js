import axios from "axios";

export async function validateOTP(reqBody) {
  try {
    let responseObj = await axios.post(
      "https://apac.api.capillarytech.com/auth/v1/otp/validate",
      reqBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = responseObj.data;
    if(response.status.code === 200){
        return response.auth.token;
    }else{
        console.log("wrong OTP, request failed");
        return null;
    }
  } catch (e) {
    console.error(e);
  }
}
