import fetch from 'node-fetch'
import jmespath from 'jmespath'

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


let projectCode;

const API_KEY = process.env.QASE_API_KEY;
const QASE_BASE_URL = 'https://api.qase.io/v1/';

const options = {
    method: 'GET',
    headers: {accept: 'application/json', Token: API_KEY}
  };

//Projects
async function getProjects(URL){
    URL = `${URL}project?limit=10&offset=0`
      
      let response = await fetch(URL, options);
      response = await response.json();

      projectCode = jmespath.search(response, "result.entities[1].code");
}

//Get Project By code
async function getProjectByCode(){
    URL = `https://api.qase.io/v1/project/${projectCode}`
    let projectResponse = await fetch(URL, options);
    projectResponse = await projectResponse.json(); 
}

//Get All Test Runs
async function getAllRuns(){
    URL = `https://api.qase.io/v1/run/${projectCode}`
    let allRunsResponse = await fetch(URL, options);
    allRunsResponse = await allRunsResponse.json();
    let runsOnQase = jmespath.search(allRunsResponse, "result.entities");
    console.log(runsOnQase);
}

//Create a new Test Run
async function createNewRun(){

}

//Get a specific test run
async function getSpecificTestRun(){

}

//Complete a specific test run
async function completeTestRun(){

}



await getProjects(QASE_BASE_URL);

await getProjectByCode();

await getAllRuns()