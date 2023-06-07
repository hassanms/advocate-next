"use strict";
(() => {
var exports = {};
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 6124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RetriveSession)
/* harmony export */ });
const stripe = __webpack_require__(8174)(process.env.STRIPE_SECRET_KEY);
async function RetriveSession(req, res) {
    try {
        const session = await stripe.checkout.sessions.retrieve(req.body.session_id);
        res.send(session);
    } catch (error) {}
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6124));
module.exports = __webpack_exports__;

})();