const requestPromise = require("request-promise");
const jwt = require("jsonwebtoken");

const payload = {
    iss: process.env.ZOOM_API_KEY, //your API KEY
    exp: new Date().getTime() + 5000,
  };

  const token = jwt.sign(payload, process.env.ZOOM_SECRET_KEY); //your API SECRET HERE

export default function ZoomHandler (req, res) {
    if (req.method === 'POST') { 
        try {
          let  email = "hassanmuhammadsaddique@gmail.com"; // your zoom developer email account
              var options = {
              method: "POST",
              uri: "https://api.zoom.us/v2/users/me/meetings",
              body: {
                  agenda :req.body.email,
                topic: req.body.topic, //meeting title
                type: 2,
                start_time: req.body.start_time,
                duration:30,             
                settings: {
                  host_video: "true",
                  participant_video: "true",
                },
              },
              auth: {
                bearer: token,
              },
              headers: {
                "User-Agent": "Zoom-api-Jwt-Request",
                "content-type": "application/json",
              },
              json: true, //Parse the JSON string in the response
            };

        requestPromise(options)
          .then(function (response) {
              res.send(response);
          })
          .catch(function (err) {
              // API call failed...
              console.log("API call failed, reason ", err);
          });
                  
              } catch (err) {
                  console.log("API call failed, reason ", err);
              }
    }

    if (req.method === 'GET') { 
      try {
        let  email = "hassanmuhammadsaddique@gmail.com"; // your zoom developer email account
            var options = {
            method: "GET",
            uri: "https://api.zoom.us/v2/users/me/meetings",
            // body: {
            //   topic: "Zoom Meeting Using Node JS", //meeting title
            //   type: 1,
            //   settings: {
            //     host_video: "true",
            //     participant_video: "true",
            //   },
            // },
            auth: {
              bearer: token,
            },
            headers: {
              "User-Agent": "Zoom-api-Jwt-Request",
              "content-type": "application/json",
            },
            json: true, //Parse the JSON string in the response
          };

            requestPromise(options)
              .then(function (response) {
                console.log("response is: ", response);
                res.send(response);
              })
              .catch(function (err) {
                // API call failed...
                console.log("API call failed, reason ", err);
              });
                      
                  } catch (err) {
                      console.log("API call failed, reason ", err);
                  }
  }


    
    
    // else {
    //     res.setHeader('Allow', 'GET');
    //     res.status(405).end('Method Not Allowed');
    //   }
}