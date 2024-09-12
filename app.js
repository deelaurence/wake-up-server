const express = require('express');
const cron = require('node-cron');
const axios = require('axios');

const app = express();
const port = process.env.PORT||3000;

// Your API endpoint
const apiEndpoint = 'https://api.skyskillhub.com/wake';
const apiEndpoint2 = 'https://binary-bloggy.onrender.com/';
const apiEndpoint3 = 'https://wake-up-server-8pcm.onrender.com';
const apiEndpoint4 = 'https://appclickdnd-backend.onrender.com';


// const apiEndpoint = 'http://localhost:4000/wake';

// Define the cron schedule (every two minutes between 5am to 1am)
cron.schedule('*/8 * * * *', () => {
  makeApiRequest();
});

// Function to make the API request using Axios
async function makeApiRequest() {
  try {
    const response = await axios.get(apiEndpoint);
    const response2 = await axios.get(apiEndpoint2);
    const response3 = await axios.get(apiEndpoint3);
    const response4 = await axios.get(apiEndpoint4);
    
    // Process the API response data if needed
    console.log(response.data);
    console.log("Response to blog",response2.status);
    console.log("Response to render 2 wakeup",response3.data);
    console.log("Response to appclick task",response4.data);
  } catch (error) {
    console.error('Error during API request:', error.message);
  }
}

app.get('/',(req,res)=>{
    res.json({message:"Support service awake!!"})
})
// Your other Express routes and configurations go here...

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
