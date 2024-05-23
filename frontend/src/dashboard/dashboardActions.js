import axios from "axios";
const BASE_URL = "http://localhost:27017/api"

function getSummary() {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`)
  return{
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request
  } 
}

export { getSummary }