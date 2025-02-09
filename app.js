const express = require('express');
const cron = require('node-cron');
const axios = require('axios');

const app = express();
const port = process.env.PORT||3000;

// Your API endpoint
const apiEndpoints = ['https://thhsn.onrender.com'];



// const apiEndpoint = 'http://localhost:4000/wake';

// Define the cron schedule (every two minutes between 5am to 1am)
cron.schedule('*/8 * * * *', () => {
  makeApiRequest();
});

// Function to make the API request using Axios
async function makeApiRequest() {
  try {
    apiEndpoints.forEach(async (endpoint)=>{
      const response = await axios.get(endpoint);
      console.log(response.data);

    })
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
