import axios from "axios";

export async function genrateToken(reqBody) {
  try {
    let responseObj = await axios.post(
      "https://apac.api.capillarytech.com/auth/v1/token/generate",
      reqBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = responseObj.data;
    if(response.status.code === 200){
        return response.user.sessionId;
    }else{
        console.log("request failed");
        return null;
    }
  } catch (e) {
    console.error(e);
  }
}
