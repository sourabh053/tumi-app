import axios from "axios";

export async function getCustomer(token,phone) {
  try {
    let responseObj = await axios.get(
      `https://apac-apigateway.capillarytech.com/mobile/v2/api/customer/get/any?phno=91${phone}`,
      {
        headers: {
          "Content-Type": "application/json",
          "cap_authorization": token,
          "cap_brand": "SUPARADEMO",
          "cap_device_id": "Suparademo123",
          "cap_identifier_type": "MOBILE",
          "cap_identifier_value": `91${phone}`
        },
      }
    );
    const response = responseObj.data;
    if(response.status.code === 200){
        return response.customers.customer;
    }else{
        return null;
    }
  } catch (e) {
    console.error(e);
  }
}
