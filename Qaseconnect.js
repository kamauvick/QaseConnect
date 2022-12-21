import fetch from 'node-fetch'
import jmespath from 'jmespath'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const API_KEY = process.env.QASE_API_KEY;
console.log(API_KEY);
const QASE_URL = "https://api.qase.io/v1/project?limit=10&offset=0";

async function ConnectToQase(API_KEY, URL){

    const options = {
        method: 'GET',
        headers: {accept: 'application/json', Token: API_KEY}
      };
      
      let response = await fetch(URL, options)
      response = await response.json();

      const filtered_response = jmespath.search(response, "result.entities");
      console.log(filtered_response)
}

ConnectToQase(API_KEY, QASE_URL);