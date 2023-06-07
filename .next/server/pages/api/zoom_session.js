"use strict";
(() => {
var exports = {};
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 5893:
/***/ ((module) => {

module.exports = require("request-promise");

/***/ }),

/***/ 8285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomHandler)
/* harmony export */ });
const requestPromise = __webpack_require__(5893);
const jwt = __webpack_require__(9344);
const payload = {
    iss: process.env.ZOOM_API_KEY,
    exp: new Date().getTime() + 5000
};
const token = jwt.sign(payload, process.env.ZOOM_SECRET_KEY); //your API SECRET HERE
function ZoomHandler(req, res) {
    if (req.method === "POST") {
        try {
            let email = "hassanmuhammadsaddique@gmail.com"; // your zoom developer email account
            var options = {
                method: "POST",
                uri: "https://api.zoom.us/v2/users/me/meetings",
                body: {
                    agenda: req.body.email,
                    topic: req.body.topic,
                    type: 2,
                    start_time: req.body.start_time,
                    duration: 30,
                    settings: {
                        host_video: "true",
                        participant_video: "true"
                    }
                },
                auth: {
                    bearer: token
                },
                headers: {
                    "User-Agent": "Zoom-api-Jwt-Request",
                    "content-type": "application/json"
                },
                json: true
            };
            requestPromise(options).then(function(response) {
                res.send(response);
            }).catch(function(err) {
                // API call failed...
                console.log("API call failed, reason ", err);
            });
        } catch (err) {
            console.log("API call failed, reason ", err);
        }
    }
    if (req.method === "GET") {
        try {
            let email = "hassanmuhammadsaddique@gmail.com"; // your zoom developer email account
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
                    bearer: token
                },
                headers: {
                    "User-Agent": "Zoom-api-Jwt-Request",
                    "content-type": "application/json"
                },
                json: true
            };
            requestPromise(options).then(function(response) {
                console.log("response is: ", response);
                res.send(response);
            }).catch(function(err) {
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8285));
module.exports = __webpack_exports__;

})();