module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = [{
  "id": "Y0-Ys5jGN9U",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 0,
    "day": 31
  },
  "title": "NDFAR December 31 - complete",
  "published": "2017-12-31T22:06:29.000Z",
  "thumb": "https://i.ytimg.com/vi/Y0-Ys5jGN9U/default.jpg",
  "medium": "https://i.ytimg.com/vi/Y0-Ys5jGN9U/mqdefault.jpg"
}, {
  "id": "7fTp5GelfVM",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 6,
    "day": 30
  },
  "title": "NDFAR December 30 - the cold never bothered me anyway",
  "published": "2017-12-31T21:43:45.000Z",
  "thumb": "https://i.ytimg.com/vi/7fTp5GelfVM/default.jpg",
  "medium": "https://i.ytimg.com/vi/7fTp5GelfVM/mqdefault.jpg"
}, {
  "id": "xqba2r5xbRk",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 5,
    "day": 29
  },
  "title": "NDFAR December 29 - year 8 day 1",
  "published": "2017-12-30T03:55:29.000Z",
  "thumb": "https://i.ytimg.com/vi/xqba2r5xbRk/default.jpg",
  "medium": "https://i.ytimg.com/vi/xqba2r5xbRk/mqdefault.jpg"
}, {
  "id": "Xt9Qmy_B1RQ",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 4,
    "day": 28
  },
  "title": "NDFAR December 28 - running streak year 7",
  "published": "2017-12-29T03:44:01.000Z",
  "thumb": "https://i.ytimg.com/vi/Xt9Qmy_B1RQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/Xt9Qmy_B1RQ/mqdefault.jpg"
}, {
  "id": "rxHjTV9H9T4",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 3,
    "day": 27
  },
  "title": "NDFAR December 27 - gym again, three miles",
  "published": "2017-12-28T21:15:36.000Z",
  "thumb": "https://i.ytimg.com/vi/rxHjTV9H9T4/default.jpg",
  "medium": "https://i.ytimg.com/vi/rxHjTV9H9T4/mqdefault.jpg"
}, {
  "id": "0kbbciUZXkc",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 2,
    "day": 26
  },
  "title": "NDFAR December 26 - gym with wife",
  "published": "2017-12-26T21:48:32.000Z",
  "thumb": "https://i.ytimg.com/vi/0kbbciUZXkc/default.jpg",
  "medium": "https://i.ytimg.com/vi/0kbbciUZXkc/mqdefault.jpg"
}, {
  "id": "RUznnybtSyk",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 1,
    "day": 25
  },
  "title": "NDFAR December 25 - Merry Christmas",
  "published": "2017-12-25T16:41:16.000Z",
  "thumb": "https://i.ytimg.com/vi/RUznnybtSyk/default.jpg",
  "medium": "https://i.ytimg.com/vi/RUznnybtSyk/mqdefault.jpg"
}, {
  "id": "W7zHO2GP0JE",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 0,
    "day": 24
  },
  "title": "NDFAR December 24 - Christmas Eve 5 miler",
  "published": "2017-12-25T03:26:39.000Z",
  "thumb": "https://i.ytimg.com/vi/W7zHO2GP0JE/default.jpg",
  "medium": "https://i.ytimg.com/vi/W7zHO2GP0JE/mqdefault.jpg"
}, {
  "id": "KnQ-rAh5Qtk",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 6,
    "day": 23
  },
  "title": "NDFAR December 23 - feeling kind of crummy",
  "published": "2017-12-25T03:25:04.000Z",
  "thumb": "https://i.ytimg.com/vi/KnQ-rAh5Qtk/default.jpg",
  "medium": "https://i.ytimg.com/vi/KnQ-rAh5Qtk/mqdefault.jpg"
}, {
  "id": "18oqUjR0jQU",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 5,
    "day": 22
  },
  "title": "NDFAR December 22 - last day of work for the year",
  "published": "2017-12-25T03:25:16.000Z",
  "thumb": "https://i.ytimg.com/vi/18oqUjR0jQU/default.jpg",
  "medium": "https://i.ytimg.com/vi/18oqUjR0jQU/mqdefault.jpg"
}, {
  "id": "3T3J_KQtjjQ",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 4,
    "day": 21
  },
  "title": "NDFAR December 21 - winter feels good",
  "published": "2017-12-22T13:49:06.000Z",
  "thumb": "https://i.ytimg.com/vi/3T3J_KQtjjQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/3T3J_KQtjjQ/mqdefault.jpg"
}, {
  "id": "KC8memfday4",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 3,
    "day": 20
  },
  "title": "NDFAR December 20 - ten minutes after 9pm",
  "published": "2017-12-22T13:47:04.000Z",
  "thumb": "https://i.ytimg.com/vi/KC8memfday4/default.jpg",
  "medium": "https://i.ytimg.com/vi/KC8memfday4/mqdefault.jpg"
}, {
  "id": "TcFQbfagke0",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 2,
    "day": 19
  },
  "title": "NDFAR December 19 - 365 consecutive nice days for a run.",
  "published": "2017-12-19T20:55:19.000Z",
  "thumb": "https://i.ytimg.com/vi/TcFQbfagke0/default.jpg",
  "medium": "https://i.ytimg.com/vi/TcFQbfagke0/mqdefault.jpg"
}, {
  "id": "jIRfzGTXKjk",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 6,
    "day": 18
  },
  "title": "NDFAR December 18 - dusk fake zero after a busy day",
  "published": "2017-12-19T18:16:18.000Z",
  "thumb": "https://i.ytimg.com/vi/jIRfzGTXKjk/default.jpg",
  "medium": "https://i.ytimg.com/vi/jIRfzGTXKjk/mqdefault.jpg"
}, {
  "id": "lYZ8Rl7zsN0",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 0,
    "day": 17
  },
  "title": "NDFAR December 17 - still walking on that unplowed snowy path",
  "published": "2017-12-19T17:57:29.000Z",
  "thumb": "https://i.ytimg.com/vi/lYZ8Rl7zsN0/default.jpg",
  "medium": "https://i.ytimg.com/vi/lYZ8Rl7zsN0/mqdefault.jpg"
}, {
  "id": "4X74zkmxy_E",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 6,
    "day": 16
  },
  "title": "NDFAR December 16 - that 3 mile loop in the snow",
  "published": "2017-12-19T17:56:47.000Z",
  "thumb": "https://i.ytimg.com/vi/4X74zkmxy_E/default.jpg",
  "medium": "https://i.ytimg.com/vi/4X74zkmxy_E/mqdefault.jpg"
}, {
  "id": "30hABrgKF5s",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 5,
    "day": 15
  },
  "title": "NDFAR December 15 - another night at the gym",
  "published": "2017-12-16T04:21:26.000Z",
  "thumb": "https://i.ytimg.com/vi/30hABrgKF5s/default.jpg",
  "medium": "https://i.ytimg.com/vi/30hABrgKF5s/mqdefault.jpg"
}, {
  "id": "m3lFdwqlgFg",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 4,
    "day": 14
  },
  "title": "NDFAR December 14 - run 1 walk 2",
  "published": "2017-12-14T21:53:38.000Z",
  "thumb": "https://i.ytimg.com/vi/m3lFdwqlgFg/default.jpg",
  "medium": "https://i.ytimg.com/vi/m3lFdwqlgFg/mqdefault.jpg"
}, {
  "id": "m-B5WHesSQs",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 3,
    "day": 13
  },
  "title": "NDFAR December 13 - Accidental photo slideshow!",
  "published": "2017-12-14T21:51:13.000Z",
  "thumb": "https://i.ytimg.com/vi/m-B5WHesSQs/default.jpg",
  "medium": "https://i.ytimg.com/vi/m-B5WHesSQs/mqdefault.jpg"
}, {
  "id": "QDyWLueCYbE",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 2,
    "day": 12
  },
  "title": "NDFAR December 12 - lunchtime at the gym with alex",
  "published": "2017-12-13T02:33:34.000Z",
  "thumb": "https://i.ytimg.com/vi/QDyWLueCYbE/default.jpg",
  "medium": "https://i.ytimg.com/vi/QDyWLueCYbE/mqdefault.jpg"
}, {
  "id": "XhEFWE-CS8E",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 1,
    "day": 11
  },
  "title": "NDFAR December 11 - morning of the port authority bombing (I took the train)",
  "published": "2017-12-13T02:32:46.000Z",
  "thumb": "https://i.ytimg.com/vi/XhEFWE-CS8E/default.jpg",
  "medium": "https://i.ytimg.com/vi/XhEFWE-CS8E/mqdefault.jpg"
}, {
  "id": "WrIzim_h8zQ",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 0,
    "day": 10
  },
  "title": "NDFAR December 10 - gym with my wife",
  "published": "2017-12-11T12:12:23.000Z",
  "thumb": "https://i.ytimg.com/vi/WrIzim_h8zQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/WrIzim_h8zQ/mqdefault.jpg"
}, {
  "id": "hR4U_ykDE7Y",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 6,
    "day": 9
  },
  "title": "NDFAR December 9 - kicked out of Darlington park because it's snowing",
  "published": "2017-12-11T00:08:53.000Z",
  "thumb": "https://i.ytimg.com/vi/hR4U_ykDE7Y/default.jpg",
  "medium": "https://i.ytimg.com/vi/hR4U_ykDE7Y/mqdefault.jpg"
}, {
  "id": "inye-gKfctc",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 5,
    "day": 8
  },
  "title": "NDFAR December 8 - 5.1 mile route, again",
  "published": "2017-12-10T23:58:04.000Z",
  "thumb": "https://i.ytimg.com/vi/inye-gKfctc/default.jpg",
  "medium": "https://i.ytimg.com/vi/inye-gKfctc/mqdefault.jpg"
}, {
  "id": "BitvzNvnyM0",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 4,
    "day": 7
  },
  "title": "NDFAR December 7 - treadmill tempos starting up again",
  "published": "2017-12-10T23:57:27.000Z",
  "thumb": "https://i.ytimg.com/vi/BitvzNvnyM0/default.jpg",
  "medium": "https://i.ytimg.com/vi/BitvzNvnyM0/mqdefault.jpg"
}, {
  "id": "G33HOSJWP10",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 3,
    "day": 6
  },
  "title": "NDFAR December 6 - yea",
  "published": "2017-12-10T23:56:55.000Z",
  "thumb": "https://i.ytimg.com/vi/G33HOSJWP10/default.jpg",
  "medium": "https://i.ytimg.com/vi/G33HOSJWP10/mqdefault.jpg"
}, {
  "id": "s1y3q3xNXrE",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 2,
    "day": 5
  },
  "title": "NDFAR December 5 - rest day",
  "published": "2017-12-05T20:23:40.000Z",
  "thumb": "https://i.ytimg.com/vi/s1y3q3xNXrE/default.jpg",
  "medium": "https://i.ytimg.com/vi/s1y3q3xNXrE/mqdefault.jpg"
}, {
  "id": "coAlVkywo5s",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 1,
    "day": 4
  },
  "title": "NDFAR December 4 - three days in a row of exactly the same run.",
  "published": "2017-12-04T21:25:13.000Z",
  "thumb": "https://i.ytimg.com/vi/coAlVkywo5s/default.jpg",
  "medium": "https://i.ytimg.com/vi/coAlVkywo5s/mqdefault.jpg"
}, {
  "id": "LerA7yT2j2s",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 0,
    "day": 3
  },
  "title": "NDFAR December 3 - same exact run as yesterday",
  "published": "2017-12-03T17:17:57.000Z",
  "thumb": "https://i.ytimg.com/vi/LerA7yT2j2s/default.jpg",
  "medium": "https://i.ytimg.com/vi/LerA7yT2j2s/mqdefault.jpg"
}, {
  "id": "SWv5ZuCxKxI",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 6,
    "day": 2
  },
  "title": "NDFAR December 2 - Saturday afternoon five",
  "published": "2017-12-03T17:17:19.000Z",
  "thumb": "https://i.ytimg.com/vi/SWv5ZuCxKxI/default.jpg",
  "medium": "https://i.ytimg.com/vi/SWv5ZuCxKxI/mqdefault.jpg"
}, {
  "id": "HrP3_sutoMA",
  "date": {
    "year": 2017,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 5,
    "day": 1
  },
  "title": "NDFAR December 1 - crap.",
  "published": "2017-12-03T17:16:28.000Z",
  "thumb": "https://i.ytimg.com/vi/HrP3_sutoMA/default.jpg",
  "medium": "https://i.ytimg.com/vi/HrP3_sutoMA/mqdefault.jpg"
}, {
  "id": "4QvVe_LWsFE",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 4,
    "day": 30
  },
  "title": "NDFAR November 30 - fake zero at the end of the month",
  "published": "2017-12-03T17:11:28.000Z",
  "thumb": "https://i.ytimg.com/vi/4QvVe_LWsFE/default.jpg",
  "medium": "https://i.ytimg.com/vi/4QvVe_LWsFE/mqdefault.jpg"
}, {
  "id": "u9u621F-MOo",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 3,
    "day": 29
  },
  "title": "NDFAR November 29 - push to 100 miles in November",
  "published": "2017-11-29T13:20:31.000Z",
  "thumb": "https://i.ytimg.com/vi/u9u621F-MOo/default.jpg",
  "medium": "https://i.ytimg.com/vi/u9u621F-MOo/mqdefault.jpg"
}, {
  "id": "bnoiP1K3y4k",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 0,
    "day": 26
  },
  "title": "NDFAR November 26 - kingsbridge. For the first time in years.",
  "published": "2017-11-28T04:03:42.000Z",
  "thumb": "https://i.ytimg.com/vi/bnoiP1K3y4k/default.jpg",
  "medium": "https://i.ytimg.com/vi/bnoiP1K3y4k/mqdefault.jpg"
}, {
  "id": "mL2TVkibCdA",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 1,
    "day": 27
  },
  "title": "NDFAR November 27 - lunchtime 3",
  "published": "2017-11-28T04:03:53.000Z",
  "thumb": "https://i.ytimg.com/vi/mL2TVkibCdA/default.jpg",
  "medium": "https://i.ytimg.com/vi/mL2TVkibCdA/mqdefault.jpg"
}, {
  "id": "fIXEMu9wf0w",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 6,
    "day": 25
  },
  "title": "NDFAR November 25 - still sore from that fast run",
  "published": "2017-11-26T03:20:00.000Z",
  "thumb": "https://i.ytimg.com/vi/fIXEMu9wf0w/default.jpg",
  "medium": "https://i.ytimg.com/vi/fIXEMu9wf0w/mqdefault.jpg"
}, {
  "id": "ArpL0t5bai4",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 5,
    "day": 24
  },
  "title": "NDFAR November 24 talking about alterg anti gravity treadmill experience",
  "published": "2017-11-24T21:02:11.000Z",
  "thumb": "https://i.ytimg.com/vi/ArpL0t5bai4/default.jpg",
  "medium": "https://i.ytimg.com/vi/ArpL0t5bai4/mqdefault.jpg"
}, {
  "id": "f1OHhSzffEI",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 4,
    "day": 23
  },
  "title": "NDFAR November 23 - Happy Thanksgiving",
  "published": "2017-11-23T19:45:17.000Z",
  "thumb": "https://i.ytimg.com/vi/f1OHhSzffEI/default.jpg",
  "medium": "https://i.ytimg.com/vi/f1OHhSzffEI/mqdefault.jpg"
}, {
  "id": "8DYJNTn5hl0",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 3,
    "day": 22
  },
  "title": "NDFAR November 22 - those turkeys better hide",
  "published": "2017-11-23T12:08:44.000Z",
  "thumb": "https://i.ytimg.com/vi/8DYJNTn5hl0/default.jpg",
  "medium": "https://i.ytimg.com/vi/8DYJNTn5hl0/mqdefault.jpg"
}, {
  "id": "ITz6Czi_gJs",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 1,
    "day": 20
  },
  "title": "NDFAR November 20 - back on the treadmill",
  "published": "2017-11-23T12:05:08.000Z",
  "thumb": "https://i.ytimg.com/vi/ITz6Czi_gJs/default.jpg",
  "medium": "https://i.ytimg.com/vi/ITz6Czi_gJs/mqdefault.jpg"
}, {
  "id": "o9miKOZcBVw",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 2,
    "day": 21
  },
  "title": "NDFAR November 21 - rest",
  "published": "2017-11-23T12:06:18.000Z",
  "thumb": "https://i.ytimg.com/vi/o9miKOZcBVw/default.jpg",
  "medium": "https://i.ytimg.com/vi/o9miKOZcBVw/mqdefault.jpg"
}, {
  "id": "BwDbWHZYdUA",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 0,
    "day": 19
  },
  "title": "NDFAR November 19 - 5 miles under ten minutes per",
  "published": "2017-11-20T13:17:40.000Z",
  "thumb": "https://i.ytimg.com/vi/BwDbWHZYdUA/default.jpg",
  "medium": "https://i.ytimg.com/vi/BwDbWHZYdUA/mqdefault.jpg"
}, {
  "id": "5D43zRk0aVQ",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 6,
    "day": 18
  },
  "title": "NDFAR November 18 - light rain",
  "published": "2017-11-20T13:17:02.000Z",
  "thumb": "https://i.ytimg.com/vi/5D43zRk0aVQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/5D43zRk0aVQ/mqdefault.jpg"
}, {
  "id": "p6Yzpi-j2fM",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 5,
    "day": 17
  },
  "title": "NDFAR November 17 - cool and breezy",
  "published": "2017-11-18T05:34:41.000Z",
  "thumb": "https://i.ytimg.com/vi/p6Yzpi-j2fM/default.jpg",
  "medium": "https://i.ytimg.com/vi/p6Yzpi-j2fM/mqdefault.jpg"
}, {
  "id": "tQTVa-nxtZU",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 4,
    "day": 16
  },
  "title": "NDFAR November 16 - procrastination station",
  "published": "2017-11-17T04:39:06.000Z",
  "thumb": "https://i.ytimg.com/vi/tQTVa-nxtZU/default.jpg",
  "medium": "https://i.ytimg.com/vi/tQTVa-nxtZU/mqdefault.jpg"
}, {
  "id": "ZIILGw4mt34",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 3,
    "day": 15
  },
  "title": "NDFAR November 15 - late lunch",
  "published": "2017-11-16T16:19:09.000Z",
  "thumb": "https://i.ytimg.com/vi/ZIILGw4mt34/default.jpg",
  "medium": "https://i.ytimg.com/vi/ZIILGw4mt34/mqdefault.jpg"
}, {
  "id": "ttSF2tjeQSU",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 2,
    "day": 14
  },
  "title": "NDFAR November 14 - after work",
  "published": "2017-11-16T13:28:00.000Z",
  "thumb": "https://i.ytimg.com/vi/ttSF2tjeQSU/default.jpg",
  "medium": "https://i.ytimg.com/vi/ttSF2tjeQSU/mqdefault.jpg"
}, {
  "id": "_ABGvSrG2ko",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 1,
    "day": 13
  },
  "title": "NDFAR November 13 - treadmill",
  "published": "2017-11-14T00:45:05.000Z",
  "thumb": "https://i.ytimg.com/vi/_ABGvSrG2ko/default.jpg",
  "medium": "https://i.ytimg.com/vi/_ABGvSrG2ko/mqdefault.jpg"
}, {
  "id": "i0BAWi588yM",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 6,
    "day": 11
  },
  "title": "NDFAR November 11 - dropping in on the campout",
  "published": "2017-11-12T20:34:53.000Z",
  "thumb": "https://i.ytimg.com/vi/i0BAWi588yM/default.jpg",
  "medium": "https://i.ytimg.com/vi/i0BAWi588yM/mqdefault.jpg"
}, {
  "id": "Um_XV85JRFA",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 0,
    "day": 12
  },
  "title": "NDFAR November 12 - 6 more..solid weekend.",
  "published": "2017-11-12T20:36:10.000Z",
  "thumb": "https://i.ytimg.com/vi/Um_XV85JRFA/default.jpg",
  "medium": "https://i.ytimg.com/vi/Um_XV85JRFA/mqdefault.jpg"
}, {
  "id": "UnpATcfmIAM",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 5,
    "day": 10
  },
  "title": "NDFAR November 10 - brrrr",
  "published": "2017-11-11T03:43:48.000Z",
  "thumb": "https://i.ytimg.com/vi/UnpATcfmIAM/default.jpg",
  "medium": "https://i.ytimg.com/vi/UnpATcfmIAM/mqdefault.jpg"
}, {
  "id": "GCwkgimaOdk",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 4,
    "day": 9
  },
  "title": "NDFAR November 9 - first day below freezing",
  "published": "2017-11-09T21:57:10.000Z",
  "thumb": "https://i.ytimg.com/vi/GCwkgimaOdk/default.jpg",
  "medium": "https://i.ytimg.com/vi/GCwkgimaOdk/mqdefault.jpg"
}, {
  "id": "5zZO8BEGeRE",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 3,
    "day": 8
  },
  "title": "NDFAR November 8 - check out my TJM bluff",
  "published": "2017-11-09T12:02:04.000Z",
  "thumb": "https://i.ytimg.com/vi/5zZO8BEGeRE/default.jpg",
  "medium": "https://i.ytimg.com/vi/5zZO8BEGeRE/mqdefault.jpg"
}, {
  "id": "IAoJcc6SVk4",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 2,
    "day": 7
  },
  "title": "NDFAR November 7 - 930pm, 37F, rain",
  "published": "2017-11-09T12:01:54.000Z",
  "thumb": "https://i.ytimg.com/vi/IAoJcc6SVk4/default.jpg",
  "medium": "https://i.ytimg.com/vi/IAoJcc6SVk4/mqdefault.jpg"
}, {
  "id": "vo-iKDXY9yo",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 1,
    "day": 6
  },
  "title": "NDFAR November 6 - sleeping in after end of dst?",
  "published": "2017-11-07T12:21:11.000Z",
  "thumb": "https://i.ytimg.com/vi/vo-iKDXY9yo/default.jpg",
  "medium": "https://i.ytimg.com/vi/vo-iKDXY9yo/mqdefault.jpg"
}, {
  "id": "-aV_tRvbWjU",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 0,
    "day": 5
  },
  "title": "NDFAR November 5 - super busy",
  "published": "2017-11-07T12:18:59.000Z",
  "thumb": "https://i.ytimg.com/vi/-aV_tRvbWjU/default.jpg",
  "medium": "https://i.ytimg.com/vi/-aV_tRvbWjU/mqdefault.jpg"
}, {
  "id": "CKs_Tkjw2yM",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 6,
    "day": 4
  },
  "title": "NDFAR November 4 - 88th time I've done this loop",
  "published": "2017-11-06T04:30:29.000Z",
  "thumb": "https://i.ytimg.com/vi/CKs_Tkjw2yM/default.jpg",
  "medium": "https://i.ytimg.com/vi/CKs_Tkjw2yM/mqdefault.jpg"
}, {
  "id": "t8NHQzuW9LE",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 5,
    "day": 3
  },
  "title": "NDFAR November 3 - five miles",
  "published": "2017-11-04T02:39:36.000Z",
  "thumb": "https://i.ytimg.com/vi/t8NHQzuW9LE/default.jpg",
  "medium": "https://i.ytimg.com/vi/t8NHQzuW9LE/mqdefault.jpg"
}, {
  "id": "CyjPFGt6Au4",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 4,
    "day": 2
  },
  "title": "NDFAR November 2 - slept in the AM, so I run at night",
  "published": "2017-11-03T12:07:39.000Z",
  "thumb": "https://i.ytimg.com/vi/CyjPFGt6Au4/default.jpg",
  "medium": "https://i.ytimg.com/vi/CyjPFGt6Au4/mqdefault.jpg"
}, {
  "id": "sU-hb_1LSWM",
  "date": {
    "year": 2017,
    "month": 11,
    "monthName": "November",
    "dayOfWeek": 3,
    "day": 1
  },
  "title": "NDFAR November 1 - running streak day 2500",
  "published": "2017-11-01T11:31:02.000Z",
  "thumb": "https://i.ytimg.com/vi/sU-hb_1LSWM/default.jpg",
  "medium": "https://i.ytimg.com/vi/sU-hb_1LSWM/mqdefault.jpg"
}, {
  "id": "vVrStYWb3-U",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 2,
    "day": 31
  },
  "title": "NDFAR October 31 - 2499",
  "published": "2017-10-31T11:58:30.000Z",
  "thumb": "https://i.ytimg.com/vi/vVrStYWb3-U/default.jpg",
  "medium": "https://i.ytimg.com/vi/vVrStYWb3-U/mqdefault.jpg"
}, {
  "id": "Gg06yf_A7Ew",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 1,
    "day": 30
  },
  "title": "NDFAR October 30 - 2498",
  "published": "2017-10-31T00:42:38.000Z",
  "thumb": "https://i.ytimg.com/vi/Gg06yf_A7Ew/default.jpg",
  "medium": "https://i.ytimg.com/vi/Gg06yf_A7Ew/mqdefault.jpg"
}, {
  "id": "_zKvgcmpUFo",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 0,
    "day": 29
  },
  "title": "NDFAR October 29 - before the rain really started",
  "published": "2017-10-30T18:05:52.000Z",
  "thumb": "https://i.ytimg.com/vi/_zKvgcmpUFo/default.jpg",
  "medium": "https://i.ytimg.com/vi/_zKvgcmpUFo/mqdefault.jpg"
}, {
  "id": "dHsUPthylIM",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 6,
    "day": 28
  },
  "title": "NDFAR October 28 - ran just a mile. Walked three more.",
  "published": "2017-10-29T12:54:48.000Z",
  "thumb": "https://i.ytimg.com/vi/dHsUPthylIM/default.jpg",
  "medium": "https://i.ytimg.com/vi/dHsUPthylIM/mqdefault.jpg"
}, {
  "id": "t63DvEiRHNo",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 5,
    "day": 27
  },
  "title": "NDFAR October 27 - three cheers for winter",
  "published": "2017-10-27T12:38:05.000Z",
  "thumb": "https://i.ytimg.com/vi/t63DvEiRHNo/default.jpg",
  "medium": "https://i.ytimg.com/vi/t63DvEiRHNo/mqdefault.jpg"
}, {
  "id": "6Kqogf7Y8u4",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 4,
    "day": 26
  },
  "title": "NDFAR October 26 - get it done early",
  "published": "2017-10-26T11:16:08.000Z",
  "thumb": "https://i.ytimg.com/vi/6Kqogf7Y8u4/default.jpg",
  "medium": "https://i.ytimg.com/vi/6Kqogf7Y8u4/mqdefault.jpg"
}, {
  "id": "kC3OTztjlFo",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 3,
    "day": 25
  },
  "title": "NDFAR October 25 - cool and pleasant",
  "published": "2017-10-25T11:45:39.000Z",
  "thumb": "https://i.ytimg.com/vi/kC3OTztjlFo/default.jpg",
  "medium": "https://i.ytimg.com/vi/kC3OTztjlFo/mqdefault.jpg"
}, {
  "id": "jORuzdoKFl4",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 1,
    "day": 23
  },
  "title": "NDFAR October 23 - crummy day, crummy night run",
  "published": "2017-10-24T21:28:20.000Z",
  "thumb": "https://i.ytimg.com/vi/jORuzdoKFl4/default.jpg",
  "medium": "https://i.ytimg.com/vi/jORuzdoKFl4/mqdefault.jpg"
}, {
  "id": "Mb1Ag2xu3nc",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 2,
    "day": 24
  },
  "title": "NDFAR October 24 - working from home",
  "published": "2017-10-24T21:29:17.000Z",
  "thumb": "https://i.ytimg.com/vi/Mb1Ag2xu3nc/default.jpg",
  "medium": "https://i.ytimg.com/vi/Mb1Ag2xu3nc/mqdefault.jpg"
}, {
  "id": "1hIyhss0kCo",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 0,
    "day": 22
  },
  "title": "NDFAR October 22 - warm in late October",
  "published": "2017-10-22T19:30:27.000Z",
  "thumb": "https://i.ytimg.com/vi/1hIyhss0kCo/default.jpg",
  "medium": "https://i.ytimg.com/vi/1hIyhss0kCo/mqdefault.jpg"
}, {
  "id": "NY3HacsjvfY",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 6,
    "day": 21
  },
  "title": "NDFAR October 21 - snuck away from boy scout camp",
  "published": "2017-10-22T17:28:31.000Z",
  "thumb": "https://i.ytimg.com/vi/NY3HacsjvfY/default.jpg",
  "medium": "https://i.ytimg.com/vi/NY3HacsjvfY/mqdefault.jpg"
}, {
  "id": "dkW3u0gyihg",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 5,
    "day": 20
  },
  "title": "NDFAR October 20 - six before sunrise",
  "published": "2017-10-20T11:35:56.000Z",
  "thumb": "https://i.ytimg.com/vi/dkW3u0gyihg/default.jpg",
  "medium": "https://i.ytimg.com/vi/dkW3u0gyihg/mqdefault.jpg"
}, {
  "id": "yZ8hI9m7IL0",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 4,
    "day": 19
  },
  "title": "NDFAR October 19 - delightful afternoon",
  "published": "2017-10-20T02:47:00.000Z",
  "thumb": "https://i.ytimg.com/vi/yZ8hI9m7IL0/default.jpg",
  "medium": "https://i.ytimg.com/vi/yZ8hI9m7IL0/mqdefault.jpg"
}, {
  "id": "OKSuKtw8QhA",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 3,
    "day": 18
  },
  "title": "NDFAR October 18 - 830pm",
  "published": "2017-10-19T01:34:55.000Z",
  "thumb": "https://i.ytimg.com/vi/OKSuKtw8QhA/default.jpg",
  "medium": "https://i.ytimg.com/vi/OKSuKtw8QhA/mqdefault.jpg"
}, {
  "id": "lLS29Yn-o6w",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 2,
    "day": 17
  },
  "title": "NDFAR October 17 - head cold, chilly morning",
  "published": "2017-10-17T15:40:08.000Z",
  "thumb": "https://i.ytimg.com/vi/lLS29Yn-o6w/default.jpg",
  "medium": "https://i.ytimg.com/vi/lLS29Yn-o6w/mqdefault.jpg"
}, {
  "id": "Rfa91zlijHw",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 1,
    "day": 16
  },
  "title": "NDFAR October 16 - single mile, no time Monday",
  "published": "2017-10-17T04:04:08.000Z",
  "thumb": "https://i.ytimg.com/vi/Rfa91zlijHw/default.jpg",
  "medium": "https://i.ytimg.com/vi/Rfa91zlijHw/mqdefault.jpg"
}, {
  "id": "C7nPOkIjY2U",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 0,
    "day": 15
  },
  "title": "NDFAR October 15 - evening after going to long island",
  "published": "2017-10-16T03:10:03.000Z",
  "thumb": "https://i.ytimg.com/vi/C7nPOkIjY2U/default.jpg",
  "medium": "https://i.ytimg.com/vi/C7nPOkIjY2U/mqdefault.jpg"
}, {
  "id": "e_JA8IDzYjY",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 6,
    "day": 14
  },
  "title": "NDFAR October 14 - head cold",
  "published": "2017-10-14T17:33:54.000Z",
  "thumb": "https://i.ytimg.com/vi/e_JA8IDzYjY/default.jpg",
  "medium": "https://i.ytimg.com/vi/e_JA8IDzYjY/mqdefault.jpg"
}, {
  "id": "3hvWomYrPCI",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 5,
    "day": 13
  },
  "title": "NDFAR October 13 - working from home",
  "published": "2017-10-14T12:42:56.000Z",
  "thumb": "https://i.ytimg.com/vi/3hvWomYrPCI/default.jpg",
  "medium": "https://i.ytimg.com/vi/3hvWomYrPCI/mqdefault.jpg"
}, {
  "id": "bNqHkdtdWPI",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 4,
    "day": 12
  },
  "title": "NDFAR October 12 - no time",
  "published": "2017-10-12T12:59:47.000Z",
  "thumb": "https://i.ytimg.com/vi/bNqHkdtdWPI/default.jpg",
  "medium": "https://i.ytimg.com/vi/bNqHkdtdWPI/mqdefault.jpg"
}, {
  "id": "bZuk2p8ADbc",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 3,
    "day": 11
  },
  "title": "NDFAR October 11 delightful work from home run",
  "published": "2017-10-12T10:47:09.000Z",
  "thumb": "https://i.ytimg.com/vi/bZuk2p8ADbc/default.jpg",
  "medium": "https://i.ytimg.com/vi/bZuk2p8ADbc/mqdefault.jpg"
}, {
  "id": "zS2PRTfnGKs",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 2,
    "day": 10
  },
  "title": "NDFAR October 10 - saw a shooting star 🌟",
  "published": "2017-10-11T01:15:54.000Z",
  "thumb": "https://i.ytimg.com/vi/zS2PRTfnGKs/default.jpg",
  "medium": "https://i.ytimg.com/vi/zS2PRTfnGKs/mqdefault.jpg"
}, {
  "id": "MUhlHFe-iyw",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 1,
    "day": 9
  },
  "title": "NDFAR October 9 - August in October",
  "published": "2017-10-10T00:13:50.000Z",
  "thumb": "https://i.ytimg.com/vi/MUhlHFe-iyw/default.jpg",
  "medium": "https://i.ytimg.com/vi/MUhlHFe-iyw/mqdefault.jpg"
}, {
  "id": "Rjr7pa29tf0",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 0,
    "day": 8
  },
  "title": "NDFAR October 8 - easy five in light rain",
  "published": "2017-10-08T17:36:36.000Z",
  "thumb": "https://i.ytimg.com/vi/Rjr7pa29tf0/default.jpg",
  "medium": "https://i.ytimg.com/vi/Rjr7pa29tf0/mqdefault.jpg"
}, {
  "id": "C8BfJB9zOts",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 6,
    "day": 7
  },
  "title": "NDFAR October 7 - 3 miles on a busy Saturday morning",
  "published": "2017-10-08T02:18:47.000Z",
  "thumb": "https://i.ytimg.com/vi/C8BfJB9zOts/default.jpg",
  "medium": "https://i.ytimg.com/vi/C8BfJB9zOts/mqdefault.jpg"
}, {
  "id": "Kltgf1k4Glc",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 5,
    "day": 6
  },
  "title": "NDFAR October 6 - late fake zero",
  "published": "2017-10-08T02:18:05.000Z",
  "thumb": "https://i.ytimg.com/vi/Kltgf1k4Glc/default.jpg",
  "medium": "https://i.ytimg.com/vi/Kltgf1k4Glc/mqdefault.jpg"
}, {
  "id": "OiEYjR8GuSU",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 4,
    "day": 5
  },
  "title": "NDFAR October 5 - pre comic Con NYC",
  "published": "2017-10-05T10:51:36.000Z",
  "thumb": "https://i.ytimg.com/vi/OiEYjR8GuSU/default.jpg",
  "medium": "https://i.ytimg.com/vi/OiEYjR8GuSU/mqdefault.jpg"
}, {
  "id": "TcihUCpcV-I",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 3,
    "day": 4
  },
  "title": "NDFAR October 4 - rare weekday 8 miler",
  "published": "2017-10-04T11:24:56.000Z",
  "thumb": "https://i.ytimg.com/vi/TcihUCpcV-I/default.jpg",
  "medium": "https://i.ytimg.com/vi/TcihUCpcV-I/mqdefault.jpg"
}, {
  "id": "SttVDzkhVy8",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 2,
    "day": 3
  },
  "title": "NDFAR October 3 - top ten day",
  "published": "2017-10-03T12:34:21.000Z",
  "thumb": "https://i.ytimg.com/vi/SttVDzkhVy8/default.jpg",
  "medium": "https://i.ytimg.com/vi/SttVDzkhVy8/mqdefault.jpg"
}, {
  "id": "_zNGFIbGBWE",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 1,
    "day": 2
  },
  "title": "NDFAR October 2 - a little later",
  "published": "2017-10-03T03:06:07.000Z",
  "thumb": "https://i.ytimg.com/vi/_zNGFIbGBWE/default.jpg",
  "medium": "https://i.ytimg.com/vi/_zNGFIbGBWE/mqdefault.jpg"
}, {
  "id": "erXQNK7ZSvg",
  "date": {
    "year": 2017,
    "month": 10,
    "monthName": "October",
    "dayOfWeek": 0,
    "day": 1
  },
  "title": "NDFAR October 1 - strong weekend, strong start to the month",
  "published": "2017-10-01T15:08:18.000Z",
  "thumb": "https://i.ytimg.com/vi/erXQNK7ZSvg/default.jpg",
  "medium": "https://i.ytimg.com/vi/erXQNK7ZSvg/mqdefault.jpg"
}, {
  "id": "7ZHf577NIJI",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 6,
    "day": 30
  },
  "title": "NDFAR September 30 - 2 hours 11 miles non stop",
  "published": "2017-09-30T14:32:09.000Z",
  "thumb": "https://i.ytimg.com/vi/7ZHf577NIJI/default.jpg",
  "medium": "https://i.ytimg.com/vi/7ZHf577NIJI/mqdefault.jpg"
}, {
  "id": "XqFTsgl64ZQ",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 5,
    "day": 29
  },
  "title": "NDFAR September 29 - sub 50F!",
  "published": "2017-09-29T18:23:34.000Z",
  "thumb": "https://i.ytimg.com/vi/XqFTsgl64ZQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/XqFTsgl64ZQ/mqdefault.jpg"
}, {
  "id": "53ux-uReO4o",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 4,
    "day": 28
  },
  "title": "NDFAR September 28 - feels like Autumn",
  "published": "2017-09-29T01:56:05.000Z",
  "thumb": "https://i.ytimg.com/vi/53ux-uReO4o/default.jpg",
  "medium": "https://i.ytimg.com/vi/53ux-uReO4o/mqdefault.jpg"
}, {
  "id": "Dyudz_tJCbc",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 3,
    "day": 27
  },
  "title": "NDFAR September 27 - saw a skunk right after recording",
  "published": "2017-09-28T01:28:57.000Z",
  "thumb": "https://i.ytimg.com/vi/Dyudz_tJCbc/default.jpg",
  "medium": "https://i.ytimg.com/vi/Dyudz_tJCbc/mqdefault.jpg"
}, {
  "id": "xEdZe0oxckQ",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 2,
    "day": 26
  },
  "title": "NDFAR September 26 - sporting my new trucker hat",
  "published": "2017-09-26T15:18:03.000Z",
  "thumb": "https://i.ytimg.com/vi/xEdZe0oxckQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/xEdZe0oxckQ/mqdefault.jpg"
}, {
  "id": "Nth-E-8pS5w",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 1,
    "day": 25
  },
  "title": "NDFAR September 25 - nighttime after work",
  "published": "2017-09-26T11:09:28.000Z",
  "thumb": "https://i.ytimg.com/vi/Nth-E-8pS5w/default.jpg",
  "medium": "https://i.ytimg.com/vi/Nth-E-8pS5w/mqdefault.jpg"
}, {
  "id": "pGNKJ0cM2B4",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 0,
    "day": 24
  },
  "title": "NDFAR September 24 - two before going to Queens",
  "published": "2017-09-24T13:30:55.000Z",
  "thumb": "https://i.ytimg.com/vi/pGNKJ0cM2B4/default.jpg",
  "medium": "https://i.ytimg.com/vi/pGNKJ0cM2B4/mqdefault.jpg"
}, {
  "id": "FmozJE3ObzY",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 6,
    "day": 23
  },
  "title": "NDFAR September 23 - Mahwah Day quickie",
  "published": "2017-09-23T14:14:08.000Z",
  "thumb": "https://i.ytimg.com/vi/FmozJE3ObzY/default.jpg",
  "medium": "https://i.ytimg.com/vi/FmozJE3ObzY/mqdefault.jpg"
}, {
  "id": "t_vvd0IExjA",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 5,
    "day": 22
  },
  "title": "NDFAR September 22 - warm at noon",
  "published": "2017-09-22T19:24:54.000Z",
  "thumb": "https://i.ytimg.com/vi/t_vvd0IExjA/default.jpg",
  "medium": "https://i.ytimg.com/vi/t_vvd0IExjA/mqdefault.jpg"
}, {
  "id": "zeutE9VdELE",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 4,
    "day": 21
  },
  "title": "NDFAR September 21 - slept well",
  "published": "2017-09-21T12:25:12.000Z",
  "thumb": "https://i.ytimg.com/vi/zeutE9VdELE/default.jpg",
  "medium": "https://i.ytimg.com/vi/zeutE9VdELE/mqdefault.jpg"
}, {
  "id": "Grd1LnX1Q6M",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 3,
    "day": 20
  },
  "title": "NDFAR September 20 - out before dawn (can't sleep)",
  "published": "2017-09-20T11:41:48.000Z",
  "thumb": "https://i.ytimg.com/vi/Grd1LnX1Q6M/default.jpg",
  "medium": "https://i.ytimg.com/vi/Grd1LnX1Q6M/mqdefault.jpg"
}, {
  "id": "sbqKF5SMvxo",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 2,
    "day": 19
  },
  "title": "NDFAR September 19 - the outskirts of Jose is a pleasant breeze",
  "published": "2017-09-19T11:37:33.000Z",
  "thumb": "https://i.ytimg.com/vi/sbqKF5SMvxo/default.jpg",
  "medium": "https://i.ytimg.com/vi/sbqKF5SMvxo/mqdefault.jpg"
}, {
  "id": "-gUvpf8Xhes",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 1,
    "day": 18
  },
  "title": "NDFAR September 18 - before sunrise",
  "published": "2017-09-18T10:51:45.000Z",
  "thumb": "https://i.ytimg.com/vi/-gUvpf8Xhes/default.jpg",
  "medium": "https://i.ytimg.com/vi/-gUvpf8Xhes/mqdefault.jpg"
}, {
  "id": "qwQbWqZ2bJo",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 0,
    "day": 17
  },
  "title": "NDFAR September 17 - more insomnia",
  "published": "2017-09-17T15:53:13.000Z",
  "thumb": "https://i.ytimg.com/vi/qwQbWqZ2bJo/default.jpg",
  "medium": "https://i.ytimg.com/vi/qwQbWqZ2bJo/mqdefault.jpg"
}, {
  "id": "HRZuMuMF7Js",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 6,
    "day": 16
  },
  "title": "NDFAR September 16 - 6 miles without walking",
  "published": "2017-09-16T18:22:40.000Z",
  "thumb": "https://i.ytimg.com/vi/HRZuMuMF7Js/default.jpg",
  "medium": "https://i.ytimg.com/vi/HRZuMuMF7Js/mqdefault.jpg"
}, {
  "id": "LobfRpIrnq0",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 5,
    "day": 15
  },
  "title": "NDFAR September 15 - 5 miles without walking",
  "published": "2017-09-16T16:17:08.000Z",
  "thumb": "https://i.ytimg.com/vi/LobfRpIrnq0/default.jpg",
  "medium": "https://i.ytimg.com/vi/LobfRpIrnq0/mqdefault.jpg"
}, {
  "id": "0NfuSbiGj0I",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 4,
    "day": 14
  },
  "title": "NDFAR September 14 - yet more insomnia",
  "published": "2017-09-15T16:19:20.000Z",
  "thumb": "https://i.ytimg.com/vi/0NfuSbiGj0I/default.jpg",
  "medium": "https://i.ytimg.com/vi/0NfuSbiGj0I/mqdefault.jpg"
}, {
  "id": "4Pwpncpas6Q",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 3,
    "day": 13
  },
  "title": "NDFAR September 13 - Freak humidity",
  "published": "2017-09-14T11:22:45.000Z",
  "thumb": "https://i.ytimg.com/vi/4Pwpncpas6Q/default.jpg",
  "medium": "https://i.ytimg.com/vi/4Pwpncpas6Q/mqdefault.jpg"
}, {
  "id": "HNfcXeiu7vQ",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 2,
    "day": 12
  },
  "title": "NDFAR September 12 - 2 miles run plus 1 walked",
  "published": "2017-09-13T03:13:38.000Z",
  "thumb": "https://i.ytimg.com/vi/HNfcXeiu7vQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/HNfcXeiu7vQ/mqdefault.jpg"
}, {
  "id": "QW8qDfHV8Jw",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 1,
    "day": 11
  },
  "title": "NDFAR September 11 - still outta shape",
  "published": "2017-09-11T20:30:06.000Z",
  "thumb": "https://i.ytimg.com/vi/QW8qDfHV8Jw/default.jpg",
  "medium": "https://i.ytimg.com/vi/QW8qDfHV8Jw/mqdefault.jpg"
}, {
  "id": "C1JsECj-CGI",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 0,
    "day": 10
  },
  "title": "NDFAR September 10 -  nice day crummy run",
  "published": "2017-09-10T19:52:56.000Z",
  "thumb": "https://i.ytimg.com/vi/C1JsECj-CGI/default.jpg",
  "medium": "https://i.ytimg.com/vi/C1JsECj-CGI/mqdefault.jpg"
}, {
  "id": "lCOXZ8cAl4M",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 6,
    "day": 9
  },
  "title": "NDFAR September 9 - registered for umstead today",
  "published": "2017-09-09T22:10:51.000Z",
  "thumb": "https://i.ytimg.com/vi/lCOXZ8cAl4M/default.jpg",
  "medium": "https://i.ytimg.com/vi/lCOXZ8cAl4M/mqdefault.jpg"
}, {
  "id": "fjQrGVGSMhI",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 5,
    "day": 8
  },
  "title": "NDFAR September 8 - still can't sleep",
  "published": "2017-09-09T22:09:47.000Z",
  "thumb": "https://i.ytimg.com/vi/fjQrGVGSMhI/default.jpg",
  "medium": "https://i.ytimg.com/vi/fjQrGVGSMhI/mqdefault.jpg"
}, {
  "id": "8w0lvj-ECD4",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 4,
    "day": 7
  },
  "title": "NDFAR September 7 - insomnia",
  "published": "2017-09-08T01:30:49.000Z",
  "thumb": "https://i.ytimg.com/vi/8w0lvj-ECD4/default.jpg",
  "medium": "https://i.ytimg.com/vi/8w0lvj-ECD4/mqdefault.jpg"
}, {
  "id": "f4ibm1yyB-E",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 3,
    "day": 6
  },
  "title": "NDFAR September 6 - rain",
  "published": "2017-09-06T20:27:07.000Z",
  "thumb": "https://i.ytimg.com/vi/f4ibm1yyB-E/default.jpg",
  "medium": "https://i.ytimg.com/vi/f4ibm1yyB-E/mqdefault.jpg"
}, {
  "id": "1GjGh9ZsSWw",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 2,
    "day": 5
  },
  "title": "NDFAR September 5 - back to routine",
  "published": "2017-09-05T16:26:10.000Z",
  "thumb": "https://i.ytimg.com/vi/1GjGh9ZsSWw/default.jpg",
  "medium": "https://i.ytimg.com/vi/1GjGh9ZsSWw/mqdefault.jpg"
}, {
  "id": "hKBQ3ZN4dWY",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 1,
    "day": 4
  },
  "title": "NDFAR September 4 - Labor Day",
  "published": "2017-09-05T11:06:43.000Z",
  "thumb": "https://i.ytimg.com/vi/hKBQ3ZN4dWY/default.jpg",
  "medium": "https://i.ytimg.com/vi/hKBQ3ZN4dWY/mqdefault.jpg"
}, {
  "id": "IQ4QOyljBu4",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 0,
    "day": 3
  },
  "title": "NDFAR September 3 - evening",
  "published": "2017-09-04T03:17:56.000Z",
  "thumb": "https://i.ytimg.com/vi/IQ4QOyljBu4/default.jpg",
  "medium": "https://i.ytimg.com/vi/IQ4QOyljBu4/mqdefault.jpg"
}, {
  "id": "TWY8IQ51_ys",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 6,
    "day": 2
  },
  "title": "NDFAR September 2 - 9.5 miles",
  "published": "2017-09-04T03:15:59.000Z",
  "thumb": "https://i.ytimg.com/vi/TWY8IQ51_ys/default.jpg",
  "medium": "https://i.ytimg.com/vi/TWY8IQ51_ys/mqdefault.jpg"
}, {
  "id": "WTqYzPXQNdE",
  "date": {
    "year": 2017,
    "month": 9,
    "monthName": "September",
    "dayOfWeek": 5,
    "day": 1
  },
  "title": "NDFAR September 1",
  "published": "2017-09-02T03:27:41.000Z",
  "thumb": "https://i.ytimg.com/vi/WTqYzPXQNdE/default.jpg",
  "medium": "https://i.ytimg.com/vi/WTqYzPXQNdE/mqdefault.jpg"
}, {
  "id": "hAvC0TFlgXw",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 4,
    "day": 31
  },
  "title": "NDFAR August 31",
  "published": "2017-09-02T03:26:04.000Z",
  "thumb": "https://i.ytimg.com/vi/hAvC0TFlgXw/default.jpg",
  "medium": "https://i.ytimg.com/vi/hAvC0TFlgXw/mqdefault.jpg"
}, {
  "id": "1VZVbKO7qKo",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 3,
    "day": 30
  },
  "title": "NDFAR August 30",
  "published": "2017-08-31T02:11:54.000Z",
  "thumb": "https://i.ytimg.com/vi/1VZVbKO7qKo/default.jpg",
  "medium": "https://i.ytimg.com/vi/1VZVbKO7qKo/mqdefault.jpg"
}, {
  "id": "D16QIOE0e6o",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 2,
    "day": 29
  },
  "title": "NDFAR August 29",
  "published": "2017-08-30T00:56:57.000Z",
  "thumb": "https://i.ytimg.com/vi/D16QIOE0e6o/default.jpg",
  "medium": "https://i.ytimg.com/vi/D16QIOE0e6o/mqdefault.jpg"
}, {
  "id": "TDElQ3DB98I",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 1,
    "day": 28
  },
  "title": "NDFAR August 28 - sick",
  "published": "2017-08-30T00:56:06.000Z",
  "thumb": "https://i.ytimg.com/vi/TDElQ3DB98I/default.jpg",
  "medium": "https://i.ytimg.com/vi/TDElQ3DB98I/mqdefault.jpg"
}, {
  "id": "igDfJWuw-VQ",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 0,
    "day": 27
  },
  "title": "NDFAR August 27",
  "published": "2017-08-28T03:21:14.000Z",
  "thumb": "https://i.ytimg.com/vi/igDfJWuw-VQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/igDfJWuw-VQ/mqdefault.jpg"
}, {
  "id": "O-cnI6Qc8SA",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 6,
    "day": 26
  },
  "title": "NDFAR August 26 - Glen Cove",
  "published": "2017-08-26T19:28:21.000Z",
  "thumb": "https://i.ytimg.com/vi/O-cnI6Qc8SA/default.jpg",
  "medium": "https://i.ytimg.com/vi/O-cnI6Qc8SA/mqdefault.jpg"
}, {
  "id": "VMQu7c_0X1Q",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 4,
    "day": 24
  },
  "title": "NDFAR August 24",
  "published": "2017-08-26T02:35:29.000Z",
  "thumb": "https://i.ytimg.com/vi/VMQu7c_0X1Q/default.jpg",
  "medium": "https://i.ytimg.com/vi/VMQu7c_0X1Q/mqdefault.jpg"
}, {
  "id": "r5jiNau4htU",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 4,
    "day": 24
  },
  "title": "NDFAR August 24 - home",
  "published": "2017-08-26T00:23:19.000Z",
  "thumb": "https://i.ytimg.com/vi/r5jiNau4htU/default.jpg",
  "medium": "https://i.ytimg.com/vi/r5jiNau4htU/mqdefault.jpg"
}, {
  "id": "Iwh95zI9mvE",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 3,
    "day": 23
  },
  "title": "NDFAR August 23 - West Chester, PA",
  "published": "2017-08-24T03:44:21.000Z",
  "thumb": "https://i.ytimg.com/vi/Iwh95zI9mvE/default.jpg",
  "medium": "https://i.ytimg.com/vi/Iwh95zI9mvE/mqdefault.jpg"
}, {
  "id": "WPnKaq9Fu1E",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 2,
    "day": 22
  },
  "title": "NDFAR August 22 - Taum Sauk Mountain, Missouri",
  "published": "2017-08-24T03:42:55.000Z",
  "thumb": "https://i.ytimg.com/vi/WPnKaq9Fu1E/default.jpg",
  "medium": "https://i.ytimg.com/vi/WPnKaq9Fu1E/mqdefault.jpg"
}, {
  "id": "33_VlS40XVk",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 1,
    "day": 21
  },
  "title": "NDFAR August 21 - eclipse day in Eastern Wyoming",
  "published": "2017-08-24T03:37:02.000Z",
  "thumb": "https://i.ytimg.com/vi/33_VlS40XVk/default.jpg",
  "medium": "https://i.ytimg.com/vi/33_VlS40XVk/mqdefault.jpg"
}, {
  "id": "ZEIpUhY_0SY",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 0,
    "day": 20
  },
  "title": "NDFAR August 20 - Driggs, ID",
  "published": "2017-08-24T03:31:45.000Z",
  "thumb": "https://i.ytimg.com/vi/ZEIpUhY_0SY/default.jpg",
  "medium": "https://i.ytimg.com/vi/ZEIpUhY_0SY/mqdefault.jpg"
}, {
  "id": "iLG6NRwouFI",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 6,
    "day": 19
  },
  "title": "NDFAR August 19 - Ely, NV",
  "published": "2017-08-20T14:41:01.000Z",
  "thumb": "https://i.ytimg.com/vi/iLG6NRwouFI/default.jpg",
  "medium": "https://i.ytimg.com/vi/iLG6NRwouFI/mqdefault.jpg"
}, {
  "id": "1RQSG4u2JKU",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 5,
    "day": 18
  },
  "title": "NDFAR August 18 - Tioga Pass",
  "published": "2017-08-20T09:07:17.000Z",
  "thumb": "https://i.ytimg.com/vi/1RQSG4u2JKU/default.jpg",
  "medium": "https://i.ytimg.com/vi/1RQSG4u2JKU/mqdefault.jpg"
}, {
  "id": "vXk13XxQqzA",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 4,
    "day": 17
  },
  "title": "NDFAR August 17 - the day I was passed by the DHHS girls' XC team",
  "published": "2017-08-17T16:03:08.000Z",
  "thumb": "https://i.ytimg.com/vi/vXk13XxQqzA/default.jpg",
  "medium": "https://i.ytimg.com/vi/vXk13XxQqzA/mqdefault.jpg"
}, {
  "id": "nlDPd6SkH8Q",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 3,
    "day": 16
  },
  "title": "NDFAR August 16 - Capo Beach to San Clemente and back",
  "published": "2017-08-17T14:19:42.000Z",
  "thumb": "https://i.ytimg.com/vi/nlDPd6SkH8Q/default.jpg",
  "medium": "https://i.ytimg.com/vi/nlDPd6SkH8Q/mqdefault.jpg"
}, {
  "id": "uHKbA-gD8dM",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 2,
    "day": 15
  },
  "title": "NDFAR August 15 - Capistrano Beach CA",
  "published": "2017-08-15T17:03:51.000Z",
  "thumb": "https://i.ytimg.com/vi/uHKbA-gD8dM/default.jpg",
  "medium": "https://i.ytimg.com/vi/uHKbA-gD8dM/mqdefault.jpg"
}, {
  "id": "PQYfKKDAG3g",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 1,
    "day": 14
  },
  "title": "NDFAR August 14 - Dana Point, CA",
  "published": "2017-08-14T22:31:35.000Z",
  "thumb": "https://i.ytimg.com/vi/PQYfKKDAG3g/default.jpg",
  "medium": "https://i.ytimg.com/vi/PQYfKKDAG3g/mqdefault.jpg"
}, {
  "id": "p2sv6abCMJw",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 0,
    "day": 13
  },
  "title": "NDFAR August 13 - Capistrano Beach CA",
  "published": "2017-08-14T16:03:27.000Z",
  "thumb": "https://i.ytimg.com/vi/p2sv6abCMJw/default.jpg",
  "medium": "https://i.ytimg.com/vi/p2sv6abCMJw/mqdefault.jpg"
}, {
  "id": "N4_78Mibwmo",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 6,
    "day": 12
  },
  "title": "NDFAR August 12 - Williams CA",
  "published": "2017-08-14T14:29:42.000Z",
  "thumb": "https://i.ytimg.com/vi/N4_78Mibwmo/default.jpg",
  "medium": "https://i.ytimg.com/vi/N4_78Mibwmo/mqdefault.jpg"
}, {
  "id": "5jjJn4lNAcY",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 5,
    "day": 11
  },
  "title": "NDFAR August 11 - Seattle",
  "published": "2017-08-14T13:41:23.000Z",
  "thumb": "https://i.ytimg.com/vi/5jjJn4lNAcY/default.jpg",
  "medium": "https://i.ytimg.com/vi/5jjJn4lNAcY/mqdefault.jpg"
}, {
  "id": "EU-qRC2TQGo",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 4,
    "day": 10
  },
  "title": "NDFAR August 10 - Logan Pass, Glacier National Park",
  "published": "2017-08-14T02:33:08.000Z",
  "thumb": "https://i.ytimg.com/vi/EU-qRC2TQGo/default.jpg",
  "medium": "https://i.ytimg.com/vi/EU-qRC2TQGo/mqdefault.jpg"
}, {
  "id": "7CXyg6YTvXU",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 3,
    "day": 9
  },
  "title": "NDFAR August 9 - White Butte, ND",
  "published": "2017-08-10T11:31:11.000Z",
  "thumb": "https://i.ytimg.com/vi/7CXyg6YTvXU/default.jpg",
  "medium": "https://i.ytimg.com/vi/7CXyg6YTvXU/mqdefault.jpg"
}, {
  "id": "WOPfcDvk9Us",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 2,
    "day": 8
  },
  "title": "NDFAR August 8",
  "published": "2017-08-09T06:19:57.000Z",
  "thumb": "https://i.ytimg.com/vi/WOPfcDvk9Us/default.jpg",
  "medium": "https://i.ytimg.com/vi/WOPfcDvk9Us/mqdefault.jpg"
}, {
  "id": "u1mB75ndBlg",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 1,
    "day": 7
  },
  "title": "NDFAR August 7 feat. Scotty and Dovi",
  "published": "2017-08-08T00:53:49.000Z",
  "thumb": "https://i.ytimg.com/vi/u1mB75ndBlg/default.jpg",
  "medium": "https://i.ytimg.com/vi/u1mB75ndBlg/mqdefault.jpg"
}, {
  "id": "sMFsrbQkFWY",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 0,
    "day": 6
  },
  "title": "NDFAR August 6",
  "published": "2017-08-07T17:24:07.000Z",
  "thumb": "https://i.ytimg.com/vi/sMFsrbQkFWY/default.jpg",
  "medium": "https://i.ytimg.com/vi/sMFsrbQkFWY/mqdefault.jpg"
}, {
  "id": "pLjM7_XprBk",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 6,
    "day": 5
  },
  "title": "NDFAR August 5",
  "published": "2017-08-05T23:44:37.000Z",
  "thumb": "https://i.ytimg.com/vi/pLjM7_XprBk/default.jpg",
  "medium": "https://i.ytimg.com/vi/pLjM7_XprBk/mqdefault.jpg"
}, {
  "id": "452GARDVl7Q",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 5,
    "day": 4
  },
  "title": "NDFAR August 4",
  "published": "2017-08-04T16:46:36.000Z",
  "thumb": "https://i.ytimg.com/vi/452GARDVl7Q/default.jpg",
  "medium": "https://i.ytimg.com/vi/452GARDVl7Q/mqdefault.jpg"
}, {
  "id": "fPdtRiYS5Q8",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 4,
    "day": 3
  },
  "title": "NDFAR August 3",
  "published": "2017-08-04T15:19:38.000Z",
  "thumb": "https://i.ytimg.com/vi/fPdtRiYS5Q8/default.jpg",
  "medium": "https://i.ytimg.com/vi/fPdtRiYS5Q8/mqdefault.jpg"
}, {
  "id": "Lh5f0P33_qo",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 3,
    "day": 2
  },
  "title": "NDFAR August 2",
  "published": "2017-08-03T13:27:32.000Z",
  "thumb": "https://i.ytimg.com/vi/Lh5f0P33_qo/default.jpg",
  "medium": "https://i.ytimg.com/vi/Lh5f0P33_qo/mqdefault.jpg"
}, {
  "id": "0jZILCerNWk",
  "date": {
    "year": 2017,
    "month": 8,
    "monthName": "August",
    "dayOfWeek": 2,
    "day": 1
  },
  "title": "NDFAR August 1",
  "published": "2017-08-01T13:24:56.000Z",
  "thumb": "https://i.ytimg.com/vi/0jZILCerNWk/default.jpg",
  "medium": "https://i.ytimg.com/vi/0jZILCerNWk/mqdefault.jpg"
}, {
  "id": "ILEFQPgxsK4",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 1,
    "day": 31
  },
  "title": "NDFAR July 31",
  "published": "2017-07-31T20:09:36.000Z",
  "thumb": "https://i.ytimg.com/vi/ILEFQPgxsK4/default.jpg",
  "medium": "https://i.ytimg.com/vi/ILEFQPgxsK4/mqdefault.jpg"
}, {
  "id": "I7DxSZzxgF0",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 0,
    "day": 30
  },
  "title": "NDFAR July 30",
  "published": "2017-07-31T00:50:37.000Z",
  "thumb": "https://i.ytimg.com/vi/I7DxSZzxgF0/default.jpg",
  "medium": "https://i.ytimg.com/vi/I7DxSZzxgF0/mqdefault.jpg"
}, {
  "id": "3oHHZ9juyQY",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 6,
    "day": 29
  },
  "title": "NDFAR July 29",
  "published": "2017-07-29T15:30:22.000Z",
  "thumb": "https://i.ytimg.com/vi/3oHHZ9juyQY/default.jpg",
  "medium": "https://i.ytimg.com/vi/3oHHZ9juyQY/mqdefault.jpg"
}, {
  "id": "zyRIJ5ve6YQ",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 5,
    "day": 28
  },
  "title": "NDFAR July 28",
  "published": "2017-07-29T00:55:33.000Z",
  "thumb": "https://i.ytimg.com/vi/zyRIJ5ve6YQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/zyRIJ5ve6YQ/mqdefault.jpg"
}, {
  "id": "LRKwgbvlCVU",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 4,
    "day": 27
  },
  "title": "NDFAR July 27",
  "published": "2017-07-28T04:17:15.000Z",
  "thumb": "https://i.ytimg.com/vi/LRKwgbvlCVU/default.jpg",
  "medium": "https://i.ytimg.com/vi/LRKwgbvlCVU/mqdefault.jpg"
}, {
  "id": "oF7WJOrDu94",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 3,
    "day": 26
  },
  "title": "NDFAR July 26",
  "published": "2017-07-28T03:45:43.000Z",
  "thumb": "https://i.ytimg.com/vi/oF7WJOrDu94/default.jpg",
  "medium": "https://i.ytimg.com/vi/oF7WJOrDu94/mqdefault.jpg"
}, {
  "id": "8V7D8LmLWfk",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 2,
    "day": 25
  },
  "title": "NDFAR July 25",
  "published": "2017-07-25T13:31:41.000Z",
  "thumb": "https://i.ytimg.com/vi/8V7D8LmLWfk/default.jpg",
  "medium": "https://i.ytimg.com/vi/8V7D8LmLWfk/mqdefault.jpg"
}, {
  "id": "OlE_XHnBqEY",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 0,
    "day": 23
  },
  "title": "NDFAR July 23",
  "published": "2017-07-25T00:44:21.000Z",
  "thumb": "https://i.ytimg.com/vi/OlE_XHnBqEY/default.jpg",
  "medium": "https://i.ytimg.com/vi/OlE_XHnBqEY/mqdefault.jpg"
}, {
  "id": "2W3_-y2q8Yw",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 1,
    "day": 24
  },
  "title": "NDFAR July 24",
  "published": "2017-07-25T00:40:58.000Z",
  "thumb": "https://i.ytimg.com/vi/2W3_-y2q8Yw/default.jpg",
  "medium": "https://i.ytimg.com/vi/2W3_-y2q8Yw/mqdefault.jpg"
}, {
  "id": "zF0r_nTgTlg",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 4,
    "day": 20
  },
  "title": "NDFAR July 20",
  "published": "2017-07-22T16:22:58.000Z",
  "thumb": "https://i.ytimg.com/vi/zF0r_nTgTlg/default.jpg",
  "medium": "https://i.ytimg.com/vi/zF0r_nTgTlg/mqdefault.jpg"
}, {
  "id": "EavI4leonWE",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 6,
    "day": 22
  },
  "title": "NDFAR July 22",
  "published": "2017-07-22T16:23:13.000Z",
  "thumb": "https://i.ytimg.com/vi/EavI4leonWE/default.jpg",
  "medium": "https://i.ytimg.com/vi/EavI4leonWE/mqdefault.jpg"
}, {
  "id": "iLmRKAAQ7Jo",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 5,
    "day": 21
  },
  "title": "NDFAR July 21",
  "published": "2017-07-22T02:25:50.000Z",
  "thumb": "https://i.ytimg.com/vi/iLmRKAAQ7Jo/default.jpg",
  "medium": "https://i.ytimg.com/vi/iLmRKAAQ7Jo/mqdefault.jpg"
}, {
  "id": "iEhzMyhkKns",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 3,
    "day": 19
  },
  "title": "NDFAR July 19",
  "published": "2017-07-20T03:15:16.000Z",
  "thumb": "https://i.ytimg.com/vi/iEhzMyhkKns/default.jpg",
  "medium": "https://i.ytimg.com/vi/iEhzMyhkKns/mqdefault.jpg"
}, {
  "id": "UQ9H8UUKF_o",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 2,
    "day": 18
  },
  "title": "NDFAR July 18",
  "published": "2017-07-18T23:44:26.000Z",
  "thumb": "https://i.ytimg.com/vi/UQ9H8UUKF_o/default.jpg",
  "medium": "https://i.ytimg.com/vi/UQ9H8UUKF_o/mqdefault.jpg"
}, {
  "id": "izNCHkYC4iM",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 1,
    "day": 17
  },
  "title": "NDFAR July 17 feat. Melissa",
  "published": "2017-07-17T04:27:40.000Z",
  "thumb": "https://i.ytimg.com/vi/izNCHkYC4iM/default.jpg",
  "medium": "https://i.ytimg.com/vi/izNCHkYC4iM/mqdefault.jpg"
}, {
  "id": "PNHuRn0EU0o",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 0,
    "day": 16
  },
  "title": "NDFAR July 16 feat. Melissa",
  "published": "2017-07-17T02:48:49.000Z",
  "thumb": "https://i.ytimg.com/vi/PNHuRn0EU0o/default.jpg",
  "medium": "https://i.ytimg.com/vi/PNHuRn0EU0o/mqdefault.jpg"
}, {
  "id": "iY15EWMHz18",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 6,
    "day": 15
  },
  "title": "NDFAR July 15",
  "published": "2017-07-15T17:58:48.000Z",
  "thumb": "https://i.ytimg.com/vi/iY15EWMHz18/default.jpg",
  "medium": "https://i.ytimg.com/vi/iY15EWMHz18/mqdefault.jpg"
}, {
  "id": "GCWrHLrKNQ4",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 5,
    "day": 14
  },
  "title": "NDFAR July 14",
  "published": "2017-07-15T02:56:49.000Z",
  "thumb": "https://i.ytimg.com/vi/GCWrHLrKNQ4/default.jpg",
  "medium": "https://i.ytimg.com/vi/GCWrHLrKNQ4/mqdefault.jpg"
}, {
  "id": "H5D8UrrJEeE",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 3,
    "day": 12
  },
  "title": "NDFAR July 12",
  "published": "2017-07-13T16:44:10.000Z",
  "thumb": "https://i.ytimg.com/vi/H5D8UrrJEeE/default.jpg",
  "medium": "https://i.ytimg.com/vi/H5D8UrrJEeE/mqdefault.jpg"
}, {
  "id": "EoJKRRlGXeM",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 4,
    "day": 13
  },
  "title": "NDFAR July 13",
  "published": "2017-07-13T16:44:40.000Z",
  "thumb": "https://i.ytimg.com/vi/EoJKRRlGXeM/default.jpg",
  "medium": "https://i.ytimg.com/vi/EoJKRRlGXeM/mqdefault.jpg"
}, {
  "id": "qaHhHQIxRBE",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 2,
    "day": 11
  },
  "title": "NDFAR July 11",
  "published": "2017-07-11T17:26:02.000Z",
  "thumb": "https://i.ytimg.com/vi/qaHhHQIxRBE/default.jpg",
  "medium": "https://i.ytimg.com/vi/qaHhHQIxRBE/mqdefault.jpg"
}, {
  "id": "vNfpPiTC04o",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 1,
    "day": 10
  },
  "title": "NDFAR July 10",
  "published": "2017-07-10T12:32:54.000Z",
  "thumb": "https://i.ytimg.com/vi/vNfpPiTC04o/default.jpg",
  "medium": "https://i.ytimg.com/vi/vNfpPiTC04o/mqdefault.jpg"
}, {
  "id": "C_NvHmJ7mVo",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 0,
    "day": 9
  },
  "title": "NDFAR July 9",
  "published": "2017-07-09T16:38:11.000Z",
  "thumb": "https://i.ytimg.com/vi/C_NvHmJ7mVo/default.jpg",
  "medium": "https://i.ytimg.com/vi/C_NvHmJ7mVo/mqdefault.jpg"
}, {
  "id": "uE8ZFAxV8mg",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 6,
    "day": 8
  },
  "title": "NDFAR July 8",
  "published": "2017-07-08T12:17:38.000Z",
  "thumb": "https://i.ytimg.com/vi/uE8ZFAxV8mg/default.jpg",
  "medium": "https://i.ytimg.com/vi/uE8ZFAxV8mg/mqdefault.jpg"
}, {
  "id": "lONo_A9ZdTk",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 5,
    "day": 7
  },
  "title": "NDFAR July 7",
  "published": "2017-07-08T01:01:53.000Z",
  "thumb": "https://i.ytimg.com/vi/lONo_A9ZdTk/default.jpg",
  "medium": "https://i.ytimg.com/vi/lONo_A9ZdTk/mqdefault.jpg"
}, {
  "id": "RkgIrxvvv7w",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 4,
    "day": 6
  },
  "title": "NDFAR July 6",
  "published": "2017-07-06T15:19:06.000Z",
  "thumb": "https://i.ytimg.com/vi/RkgIrxvvv7w/default.jpg",
  "medium": "https://i.ytimg.com/vi/RkgIrxvvv7w/mqdefault.jpg"
}, {
  "id": "rVjU_i8opCg",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 3,
    "day": 5
  },
  "title": "NDFAR July 5",
  "published": "2017-07-05T13:05:27.000Z",
  "thumb": "https://i.ytimg.com/vi/rVjU_i8opCg/default.jpg",
  "medium": "https://i.ytimg.com/vi/rVjU_i8opCg/mqdefault.jpg"
}, {
  "id": "x0SqgdetIDM",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 2,
    "day": 4
  },
  "title": "NDFAR July 4",
  "published": "2017-07-04T21:18:04.000Z",
  "thumb": "https://i.ytimg.com/vi/x0SqgdetIDM/default.jpg",
  "medium": "https://i.ytimg.com/vi/x0SqgdetIDM/mqdefault.jpg"
}, {
  "id": "7v8NWcJ6tRU",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 1,
    "day": 3
  },
  "title": "NDFAR July 3",
  "published": "2017-07-04T16:08:29.000Z",
  "thumb": "https://i.ytimg.com/vi/7v8NWcJ6tRU/default.jpg",
  "medium": "https://i.ytimg.com/vi/7v8NWcJ6tRU/mqdefault.jpg"
}, {
  "id": "otDHnFBDXSU",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 0,
    "day": 2
  },
  "title": "NDFAR July 2",
  "published": "2017-07-03T03:41:14.000Z",
  "thumb": "https://i.ytimg.com/vi/otDHnFBDXSU/default.jpg",
  "medium": "https://i.ytimg.com/vi/otDHnFBDXSU/mqdefault.jpg"
}, {
  "id": "daYjcfx6GBA",
  "date": {
    "year": 2017,
    "month": 7,
    "monthName": "July",
    "dayOfWeek": 6,
    "day": 1
  },
  "title": "NDFAR July 1",
  "published": "2017-07-02T02:01:54.000Z",
  "thumb": "https://i.ytimg.com/vi/daYjcfx6GBA/default.jpg",
  "medium": "https://i.ytimg.com/vi/daYjcfx6GBA/mqdefault.jpg"
}, {
  "id": "Q9_pZncVF64",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 5,
    "day": 30
  },
  "title": "NDFAR June 30",
  "published": "2017-06-30T12:26:20.000Z",
  "thumb": "https://i.ytimg.com/vi/Q9_pZncVF64/default.jpg",
  "medium": "https://i.ytimg.com/vi/Q9_pZncVF64/mqdefault.jpg"
}, {
  "id": "bbBc9rMU3os",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 4,
    "day": 29
  },
  "title": "NDFAR June 29",
  "published": "2017-06-29T11:33:15.000Z",
  "thumb": "https://i.ytimg.com/vi/bbBc9rMU3os/default.jpg",
  "medium": "https://i.ytimg.com/vi/bbBc9rMU3os/mqdefault.jpg"
}, {
  "id": "rF4diAK9vHc",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 3,
    "day": 28
  },
  "title": "NDFAR June 28",
  "published": "2017-06-28T14:06:24.000Z",
  "thumb": "https://i.ytimg.com/vi/rF4diAK9vHc/default.jpg",
  "medium": "https://i.ytimg.com/vi/rF4diAK9vHc/mqdefault.jpg"
}, {
  "id": "vYgtRSSO2G4",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 2,
    "day": 27
  },
  "title": "NDFAR June 27",
  "published": "2017-06-27T12:02:17.000Z",
  "thumb": "https://i.ytimg.com/vi/vYgtRSSO2G4/default.jpg",
  "medium": "https://i.ytimg.com/vi/vYgtRSSO2G4/mqdefault.jpg"
}, {
  "id": "b5IruoIH-V8",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 1,
    "day": 26
  },
  "title": "NDFAR June 26",
  "published": "2017-06-26T17:42:12.000Z",
  "thumb": "https://i.ytimg.com/vi/b5IruoIH-V8/default.jpg",
  "medium": "https://i.ytimg.com/vi/b5IruoIH-V8/mqdefault.jpg"
}, {
  "id": "vJ03QEaJ7Lc",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 0,
    "day": 25
  },
  "title": "NDFAR June 25",
  "published": "2017-06-25T22:33:28.000Z",
  "thumb": "https://i.ytimg.com/vi/vJ03QEaJ7Lc/default.jpg",
  "medium": "https://i.ytimg.com/vi/vJ03QEaJ7Lc/mqdefault.jpg"
}, {
  "id": "RAi_Ylz2F4Q",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 6,
    "day": 24
  },
  "title": "NDFAR June 24",
  "published": "2017-06-24T17:00:29.000Z",
  "thumb": "https://i.ytimg.com/vi/RAi_Ylz2F4Q/default.jpg",
  "medium": "https://i.ytimg.com/vi/RAi_Ylz2F4Q/mqdefault.jpg"
}, {
  "id": "hE1jNR9MH84",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 5,
    "day": 23
  },
  "title": "NDFAR June 23",
  "published": "2017-06-23T20:29:43.000Z",
  "thumb": "https://i.ytimg.com/vi/hE1jNR9MH84/default.jpg",
  "medium": "https://i.ytimg.com/vi/hE1jNR9MH84/mqdefault.jpg"
}, {
  "id": "WVKqgl7Jj3M",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 4,
    "day": 22
  },
  "title": "NDFAR June 22",
  "published": "2017-06-23T03:10:27.000Z",
  "thumb": "https://i.ytimg.com/vi/WVKqgl7Jj3M/default.jpg",
  "medium": "https://i.ytimg.com/vi/WVKqgl7Jj3M/mqdefault.jpg"
}, {
  "id": "e4lWMGGCu6o",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 3,
    "day": 21
  },
  "title": "NDFAR June 21",
  "published": "2017-06-22T13:20:36.000Z",
  "thumb": "https://i.ytimg.com/vi/e4lWMGGCu6o/default.jpg",
  "medium": "https://i.ytimg.com/vi/e4lWMGGCu6o/mqdefault.jpg"
}, {
  "id": "IbJ6nuJipsk",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 2,
    "day": 20
  },
  "title": "NDFAR June 20 - Dallas TX",
  "published": "2017-06-20T12:34:02.000Z",
  "thumb": "https://i.ytimg.com/vi/IbJ6nuJipsk/default.jpg",
  "medium": "https://i.ytimg.com/vi/IbJ6nuJipsk/mqdefault.jpg"
}, {
  "id": "D63I_GWr888",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 1,
    "day": 19
  },
  "title": "NDFAR June 19",
  "published": "2017-06-19T07:13:27.000Z",
  "thumb": "https://i.ytimg.com/vi/D63I_GWr888/default.jpg",
  "medium": "https://i.ytimg.com/vi/D63I_GWr888/mqdefault.jpg"
}, {
  "id": "qFbQDK6y-9w",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 0,
    "day": 18
  },
  "title": "NDFAR June 18",
  "published": "2017-06-18T10:26:05.000Z",
  "thumb": "https://i.ytimg.com/vi/qFbQDK6y-9w/default.jpg",
  "medium": "https://i.ytimg.com/vi/qFbQDK6y-9w/mqdefault.jpg"
}, {
  "id": "1X-h-baZ0wU",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 6,
    "day": 17
  },
  "title": "NDFAR June 17",
  "published": "2017-06-17T22:55:13.000Z",
  "thumb": "https://i.ytimg.com/vi/1X-h-baZ0wU/default.jpg",
  "medium": "https://i.ytimg.com/vi/1X-h-baZ0wU/mqdefault.jpg"
}, {
  "id": "GXFlCo3ba40",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 5,
    "day": 16
  },
  "title": "NDFAR June 16",
  "published": "2017-06-16T12:28:12.000Z",
  "thumb": "https://i.ytimg.com/vi/GXFlCo3ba40/default.jpg",
  "medium": "https://i.ytimg.com/vi/GXFlCo3ba40/mqdefault.jpg"
}, {
  "id": "GtNytqHJoz8",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 4,
    "day": 15
  },
  "title": "NDFAR June 15",
  "published": "2017-06-16T02:15:42.000Z",
  "thumb": "https://i.ytimg.com/vi/GtNytqHJoz8/default.jpg",
  "medium": "https://i.ytimg.com/vi/GtNytqHJoz8/mqdefault.jpg"
}, {
  "id": "wkKG2a2v4sQ",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 3,
    "day": 14
  },
  "title": "NDFAR June 14",
  "published": "2017-06-15T00:38:04.000Z",
  "thumb": "https://i.ytimg.com/vi/wkKG2a2v4sQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/wkKG2a2v4sQ/mqdefault.jpg"
}, {
  "id": "WcSz9q4E1SQ",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 2,
    "day": 13
  },
  "title": "NDFAR June 13",
  "published": "2017-06-13T11:53:53.000Z",
  "thumb": "https://i.ytimg.com/vi/WcSz9q4E1SQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/WcSz9q4E1SQ/mqdefault.jpg"
}, {
  "id": "LzNitpJn1mo",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 1,
    "day": 12
  },
  "title": "NDFAR June 12",
  "published": "2017-06-13T03:16:40.000Z",
  "thumb": "https://i.ytimg.com/vi/LzNitpJn1mo/default.jpg",
  "medium": "https://i.ytimg.com/vi/LzNitpJn1mo/mqdefault.jpg"
}, {
  "id": "CD8YB873hDs",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 0,
    "day": 11
  },
  "title": "NDFAR June 11",
  "published": "2017-06-11T14:13:30.000Z",
  "thumb": "https://i.ytimg.com/vi/CD8YB873hDs/default.jpg",
  "medium": "https://i.ytimg.com/vi/CD8YB873hDs/mqdefault.jpg"
}, {
  "id": "9TlbYYzobG8",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 6,
    "day": 10
  },
  "title": "NDFAR June 10",
  "published": "2017-06-10T14:46:29.000Z",
  "thumb": "https://i.ytimg.com/vi/9TlbYYzobG8/default.jpg",
  "medium": "https://i.ytimg.com/vi/9TlbYYzobG8/mqdefault.jpg"
}, {
  "id": "9BVHrS9g4IU",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 5,
    "day": 9
  },
  "title": "NDFAR June 9",
  "published": "2017-06-09T15:38:28.000Z",
  "thumb": "https://i.ytimg.com/vi/9BVHrS9g4IU/default.jpg",
  "medium": "https://i.ytimg.com/vi/9BVHrS9g4IU/mqdefault.jpg"
}, {
  "id": "XJf8Wjsp6tk",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 4,
    "day": 8
  },
  "title": "NDFAR June 8",
  "published": "2017-06-08T11:38:18.000Z",
  "thumb": "https://i.ytimg.com/vi/XJf8Wjsp6tk/default.jpg",
  "medium": "https://i.ytimg.com/vi/XJf8Wjsp6tk/mqdefault.jpg"
}, {
  "id": "Iq1Yprj5bp4",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 3,
    "day": 7
  },
  "title": "NDFAR June 7",
  "published": "2017-06-07T12:11:44.000Z",
  "thumb": "https://i.ytimg.com/vi/Iq1Yprj5bp4/default.jpg",
  "medium": "https://i.ytimg.com/vi/Iq1Yprj5bp4/mqdefault.jpg"
}, {
  "id": "XlOE3Jhm-Dg",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 2,
    "day": 6
  },
  "title": "NDFAR June 6",
  "published": "2017-06-06T12:09:35.000Z",
  "thumb": "https://i.ytimg.com/vi/XlOE3Jhm-Dg/default.jpg",
  "medium": "https://i.ytimg.com/vi/XlOE3Jhm-Dg/mqdefault.jpg"
}, {
  "id": "2U_hFz11AvE",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 1,
    "day": 5
  },
  "title": "NDFAR June 5",
  "published": "2017-06-05T12:08:05.000Z",
  "thumb": "https://i.ytimg.com/vi/2U_hFz11AvE/default.jpg",
  "medium": "https://i.ytimg.com/vi/2U_hFz11AvE/mqdefault.jpg"
}, {
  "id": "MIyfWvKq6-4",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 0,
    "day": 4
  },
  "title": "NDFAR June 4",
  "published": "2017-06-04T21:47:35.000Z",
  "thumb": "https://i.ytimg.com/vi/MIyfWvKq6-4/default.jpg",
  "medium": "https://i.ytimg.com/vi/MIyfWvKq6-4/mqdefault.jpg"
}, {
  "id": "TT0tNsauf1s",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 6,
    "day": 3
  },
  "title": "NDFAR June 3",
  "published": "2017-06-03T17:54:53.000Z",
  "thumb": "https://i.ytimg.com/vi/TT0tNsauf1s/default.jpg",
  "medium": "https://i.ytimg.com/vi/TT0tNsauf1s/mqdefault.jpg"
}, {
  "id": "X7f-UaGdPoM",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 5,
    "day": 2
  },
  "title": "NDFAR June 2",
  "published": "2017-06-02T14:00:55.000Z",
  "thumb": "https://i.ytimg.com/vi/X7f-UaGdPoM/default.jpg",
  "medium": "https://i.ytimg.com/vi/X7f-UaGdPoM/mqdefault.jpg"
}, {
  "id": "vj2c14XuvV8",
  "date": {
    "year": 2017,
    "month": 6,
    "monthName": "June",
    "dayOfWeek": 4,
    "day": 1
  },
  "title": "NDFAR June 1",
  "published": "2017-06-01T11:49:27.000Z",
  "thumb": "https://i.ytimg.com/vi/vj2c14XuvV8/default.jpg",
  "medium": "https://i.ytimg.com/vi/vj2c14XuvV8/mqdefault.jpg"
}, {
  "id": "AjoAMM1gYzs",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 3,
    "day": 31
  },
  "title": "NDFAR May 31",
  "published": "2017-05-31T12:23:22.000Z",
  "thumb": "https://i.ytimg.com/vi/AjoAMM1gYzs/default.jpg",
  "medium": "https://i.ytimg.com/vi/AjoAMM1gYzs/mqdefault.jpg"
}, {
  "id": "gkEJq25vK6Q",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 2,
    "day": 30
  },
  "title": "NDFAR May 30",
  "published": "2017-05-30T12:10:54.000Z",
  "thumb": "https://i.ytimg.com/vi/gkEJq25vK6Q/default.jpg",
  "medium": "https://i.ytimg.com/vi/gkEJq25vK6Q/mqdefault.jpg"
}, {
  "id": "2aBUq5wMYJk",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 1,
    "day": 29
  },
  "title": "NDFAR May 29",
  "published": "2017-05-30T02:04:18.000Z",
  "thumb": "https://i.ytimg.com/vi/2aBUq5wMYJk/default.jpg",
  "medium": "https://i.ytimg.com/vi/2aBUq5wMYJk/mqdefault.jpg"
}, {
  "id": "PVrrHM0zS18",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 0,
    "day": 28
  },
  "title": "NDFAR May 28",
  "published": "2017-05-28T14:35:21.000Z",
  "thumb": "https://i.ytimg.com/vi/PVrrHM0zS18/default.jpg",
  "medium": "https://i.ytimg.com/vi/PVrrHM0zS18/mqdefault.jpg"
}, {
  "id": "h9z1EyIgEDg",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 6,
    "day": 27
  },
  "title": "NDFAR May 27",
  "published": "2017-05-28T02:11:02.000Z",
  "thumb": "https://i.ytimg.com/vi/h9z1EyIgEDg/default.jpg",
  "medium": "https://i.ytimg.com/vi/h9z1EyIgEDg/mqdefault.jpg"
}, {
  "id": "oMMWEOmuEA8",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 5,
    "day": 26
  },
  "title": "NDFAR May 26",
  "published": "2017-05-26T15:40:19.000Z",
  "thumb": "https://i.ytimg.com/vi/oMMWEOmuEA8/default.jpg",
  "medium": "https://i.ytimg.com/vi/oMMWEOmuEA8/mqdefault.jpg"
}, {
  "id": "_vi2ysE3BO8",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 4,
    "day": 25
  },
  "title": "NDFAR May 25",
  "published": "2017-05-25T19:14:57.000Z",
  "thumb": "https://i.ytimg.com/vi/_vi2ysE3BO8/default.jpg",
  "medium": "https://i.ytimg.com/vi/_vi2ysE3BO8/mqdefault.jpg"
}, {
  "id": "piie3RTHX6A",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 3,
    "day": 24
  },
  "title": "NDFAR May 24",
  "published": "2017-05-24T12:33:06.000Z",
  "thumb": "https://i.ytimg.com/vi/piie3RTHX6A/default.jpg",
  "medium": "https://i.ytimg.com/vi/piie3RTHX6A/mqdefault.jpg"
}, {
  "id": "OSyCO-VBUw8",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 2,
    "day": 23
  },
  "title": "NDFAR May 23",
  "published": "2017-05-24T01:44:09.000Z",
  "thumb": "https://i.ytimg.com/vi/OSyCO-VBUw8/default.jpg",
  "medium": "https://i.ytimg.com/vi/OSyCO-VBUw8/mqdefault.jpg"
}, {
  "id": "e4SpxBwOXX0",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 1,
    "day": 22
  },
  "title": "NDFAR May 22",
  "published": "2017-05-22T19:51:40.000Z",
  "thumb": "https://i.ytimg.com/vi/e4SpxBwOXX0/default.jpg",
  "medium": "https://i.ytimg.com/vi/e4SpxBwOXX0/mqdefault.jpg"
}, {
  "id": "GY69nVfu1e4",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 0,
    "day": 21
  },
  "title": "NDFAR May 21",
  "published": "2017-05-21T21:49:19.000Z",
  "thumb": "https://i.ytimg.com/vi/GY69nVfu1e4/default.jpg",
  "medium": "https://i.ytimg.com/vi/GY69nVfu1e4/mqdefault.jpg"
}, {
  "id": "jktYmXKY_wk",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 6,
    "day": 20
  },
  "title": "NDFAR May 20",
  "published": "2017-05-20T15:38:29.000Z",
  "thumb": "https://i.ytimg.com/vi/jktYmXKY_wk/default.jpg",
  "medium": "https://i.ytimg.com/vi/jktYmXKY_wk/mqdefault.jpg"
}, {
  "id": "6HAeTCwJYRo",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 5,
    "day": 19
  },
  "title": "NDFAR May 19",
  "published": "2017-05-19T14:32:00.000Z",
  "thumb": "https://i.ytimg.com/vi/6HAeTCwJYRo/default.jpg",
  "medium": "https://i.ytimg.com/vi/6HAeTCwJYRo/mqdefault.jpg"
}, {
  "id": "QksM0rabsN8",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 4,
    "day": 18
  },
  "title": "NDFAR May 18",
  "published": "2017-05-18T14:08:51.000Z",
  "thumb": "https://i.ytimg.com/vi/QksM0rabsN8/default.jpg",
  "medium": "https://i.ytimg.com/vi/QksM0rabsN8/mqdefault.jpg"
}, {
  "id": "P2q_HBGvy74",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 3,
    "day": 17
  },
  "title": "NDFAR May 17",
  "published": "2017-05-17T13:59:48.000Z",
  "thumb": "https://i.ytimg.com/vi/P2q_HBGvy74/default.jpg",
  "medium": "https://i.ytimg.com/vi/P2q_HBGvy74/mqdefault.jpg"
}, {
  "id": "hhYqxynkM8o",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 2,
    "day": 16
  },
  "title": "NDFAR May 16 feat. Fred and​ Bill",
  "published": "2017-05-16T11:50:04.000Z",
  "thumb": "https://i.ytimg.com/vi/hhYqxynkM8o/default.jpg",
  "medium": "https://i.ytimg.com/vi/hhYqxynkM8o/mqdefault.jpg"
}, {
  "id": "oLMLHsgz84w",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 1,
    "day": 15
  },
  "title": "NDFAR May 15 feat. Melissa",
  "published": "2017-05-15T12:16:23.000Z",
  "thumb": "https://i.ytimg.com/vi/oLMLHsgz84w/default.jpg",
  "medium": "https://i.ytimg.com/vi/oLMLHsgz84w/mqdefault.jpg"
}, {
  "id": "UvxNXknC0Z0",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 0,
    "day": 14
  },
  "title": "NDFAR May 14 feat Joey",
  "published": "2017-05-15T01:24:35.000Z",
  "thumb": "https://i.ytimg.com/vi/UvxNXknC0Z0/default.jpg",
  "medium": "https://i.ytimg.com/vi/UvxNXknC0Z0/mqdefault.jpg"
}, {
  "id": "PwdYIXqcxas",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 6,
    "day": 13
  },
  "title": "NDFAR May 13",
  "published": "2017-05-14T18:17:55.000Z",
  "thumb": "https://i.ytimg.com/vi/PwdYIXqcxas/default.jpg",
  "medium": "https://i.ytimg.com/vi/PwdYIXqcxas/mqdefault.jpg"
}, {
  "id": "fJjQ5nHMvdQ",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 5,
    "day": 12
  },
  "title": "NDFAR May 12",
  "published": "2017-05-13T02:08:17.000Z",
  "thumb": "https://i.ytimg.com/vi/fJjQ5nHMvdQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/fJjQ5nHMvdQ/mqdefault.jpg"
}, {
  "id": "dUWBAQI2O0s",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 4,
    "day": 11
  },
  "title": "NDFAR May 11",
  "published": "2017-05-12T00:36:06.000Z",
  "thumb": "https://i.ytimg.com/vi/dUWBAQI2O0s/default.jpg",
  "medium": "https://i.ytimg.com/vi/dUWBAQI2O0s/mqdefault.jpg"
}, {
  "id": "pLNuSq4n9Ho",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 3,
    "day": 10
  },
  "title": "NDFAR May 10",
  "published": "2017-05-10T12:52:12.000Z",
  "thumb": "https://i.ytimg.com/vi/pLNuSq4n9Ho/default.jpg",
  "medium": "https://i.ytimg.com/vi/pLNuSq4n9Ho/mqdefault.jpg"
}, {
  "id": "qSDFSEZUh-I",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 2,
    "day": 9
  },
  "title": "NDFAR May 9",
  "published": "2017-05-10T02:57:27.000Z",
  "thumb": "https://i.ytimg.com/vi/qSDFSEZUh-I/default.jpg",
  "medium": "https://i.ytimg.com/vi/qSDFSEZUh-I/mqdefault.jpg"
}, {
  "id": "Xa5R4kTNmMU",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 1,
    "day": 8
  },
  "title": "NDFAR May 8",
  "published": "2017-05-09T02:25:49.000Z",
  "thumb": "https://i.ytimg.com/vi/Xa5R4kTNmMU/default.jpg",
  "medium": "https://i.ytimg.com/vi/Xa5R4kTNmMU/mqdefault.jpg"
}, {
  "id": "j2SUtHX4O_U",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 0,
    "day": 7
  },
  "title": "NDFAR May 7",
  "published": "2017-05-08T00:53:52.000Z",
  "thumb": "https://i.ytimg.com/vi/j2SUtHX4O_U/default.jpg",
  "medium": "https://i.ytimg.com/vi/j2SUtHX4O_U/mqdefault.jpg"
}, {
  "id": "ilsjeKh1ZCw",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 6,
    "day": 6
  },
  "title": "NDFAR May 6",
  "published": "2017-05-07T01:12:38.000Z",
  "thumb": "https://i.ytimg.com/vi/ilsjeKh1ZCw/default.jpg",
  "medium": "https://i.ytimg.com/vi/ilsjeKh1ZCw/mqdefault.jpg"
}, {
  "id": "AesaboK6AhA",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 5,
    "day": 5
  },
  "title": "NDFAR May 5",
  "published": "2017-05-05T12:05:16.000Z",
  "thumb": "https://i.ytimg.com/vi/AesaboK6AhA/default.jpg",
  "medium": "https://i.ytimg.com/vi/AesaboK6AhA/mqdefault.jpg"
}, {
  "id": "TQZLiQDIPt4",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 4,
    "day": 4
  },
  "title": "NDFAR May 4",
  "published": "2017-05-04T12:54:50.000Z",
  "thumb": "https://i.ytimg.com/vi/TQZLiQDIPt4/default.jpg",
  "medium": "https://i.ytimg.com/vi/TQZLiQDIPt4/mqdefault.jpg"
}, {
  "id": "86MjqoecOW8",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 3,
    "day": 3
  },
  "title": "NDFAR May 3",
  "published": "2017-05-04T01:50:07.000Z",
  "thumb": "https://i.ytimg.com/vi/86MjqoecOW8/default.jpg",
  "medium": "https://i.ytimg.com/vi/86MjqoecOW8/mqdefault.jpg"
}, {
  "id": "IeDmmRTrfd8",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 2,
    "day": 2
  },
  "title": "NDFAR May 2",
  "published": "2017-05-02T14:51:52.000Z",
  "thumb": "https://i.ytimg.com/vi/IeDmmRTrfd8/default.jpg",
  "medium": "https://i.ytimg.com/vi/IeDmmRTrfd8/mqdefault.jpg"
}, {
  "id": "khgbAsFYDls",
  "date": {
    "year": 2017,
    "month": 5,
    "monthName": "May",
    "dayOfWeek": 1,
    "day": 1
  },
  "title": "NDFAR May 1",
  "published": "2017-05-01T10:57:00.000Z",
  "thumb": "https://i.ytimg.com/vi/khgbAsFYDls/default.jpg",
  "medium": "https://i.ytimg.com/vi/khgbAsFYDls/mqdefault.jpg"
}, {
  "id": "b7HBWBCei6Y",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 0,
    "day": 30
  },
  "title": "NDFAR April 30, feat. Fred! Lake Waramaug 50k",
  "published": "2017-04-30T20:40:18.000Z",
  "thumb": "https://i.ytimg.com/vi/b7HBWBCei6Y/default.jpg",
  "medium": "https://i.ytimg.com/vi/b7HBWBCei6Y/mqdefault.jpg"
}, {
  "id": "hDtEhuVrHnE",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 6,
    "day": 29
  },
  "title": "NDFAR April 29",
  "published": "2017-04-29T19:23:48.000Z",
  "thumb": "https://i.ytimg.com/vi/hDtEhuVrHnE/default.jpg",
  "medium": "https://i.ytimg.com/vi/hDtEhuVrHnE/mqdefault.jpg"
}, {
  "id": "vKiDXMPZhrI",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 5,
    "day": 28
  },
  "title": "NDFAR April 28",
  "published": "2017-04-29T19:22:25.000Z",
  "thumb": "https://i.ytimg.com/vi/vKiDXMPZhrI/default.jpg",
  "medium": "https://i.ytimg.com/vi/vKiDXMPZhrI/mqdefault.jpg"
}, {
  "id": "5r3k8BINYHE",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 4,
    "day": 27
  },
  "title": "NDFAR April 27",
  "published": "2017-04-27T11:24:29.000Z",
  "thumb": "https://i.ytimg.com/vi/5r3k8BINYHE/default.jpg",
  "medium": "https://i.ytimg.com/vi/5r3k8BINYHE/mqdefault.jpg"
}, {
  "id": "UL1g6sP2ceI",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 3,
    "day": 26
  },
  "title": "NDFAR April 26",
  "published": "2017-04-26T12:57:21.000Z",
  "thumb": "https://i.ytimg.com/vi/UL1g6sP2ceI/default.jpg",
  "medium": "https://i.ytimg.com/vi/UL1g6sP2ceI/mqdefault.jpg"
}, {
  "id": "fMGZ4OFJAmI",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 2,
    "day": 25
  },
  "title": "NDFAR April 25",
  "published": "2017-04-26T01:35:04.000Z",
  "thumb": "https://i.ytimg.com/vi/fMGZ4OFJAmI/default.jpg",
  "medium": "https://i.ytimg.com/vi/fMGZ4OFJAmI/mqdefault.jpg"
}, {
  "id": "yj4HryDjB1M",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 1,
    "day": 24
  },
  "title": "NDFAR April 24",
  "published": "2017-04-24T13:46:11.000Z",
  "thumb": "https://i.ytimg.com/vi/yj4HryDjB1M/default.jpg",
  "medium": "https://i.ytimg.com/vi/yj4HryDjB1M/mqdefault.jpg"
}, {
  "id": "qDHro2tLI_c",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 0,
    "day": 23
  },
  "title": "NDFAR April 23",
  "published": "2017-04-23T23:58:16.000Z",
  "thumb": "https://i.ytimg.com/vi/qDHro2tLI_c/default.jpg",
  "medium": "https://i.ytimg.com/vi/qDHro2tLI_c/mqdefault.jpg"
}, {
  "id": "cNflHsdsyL0",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 6,
    "day": 22
  },
  "title": "NDFAR April 22",
  "published": "2017-04-22T19:05:49.000Z",
  "thumb": "https://i.ytimg.com/vi/cNflHsdsyL0/default.jpg",
  "medium": "https://i.ytimg.com/vi/cNflHsdsyL0/mqdefault.jpg"
}, {
  "id": "Z6QknZfBE4k",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 5,
    "day": 21
  },
  "title": "NDFAR April 21",
  "published": "2017-04-21T21:49:04.000Z",
  "thumb": "https://i.ytimg.com/vi/Z6QknZfBE4k/default.jpg",
  "medium": "https://i.ytimg.com/vi/Z6QknZfBE4k/mqdefault.jpg"
}, {
  "id": "hwPKurdhbn8",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 4,
    "day": 20
  },
  "title": "NDFAR April 20",
  "published": "2017-04-21T12:14:55.000Z",
  "thumb": "https://i.ytimg.com/vi/hwPKurdhbn8/default.jpg",
  "medium": "https://i.ytimg.com/vi/hwPKurdhbn8/mqdefault.jpg"
}, {
  "id": "kNqRXYZRlsY",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 3,
    "day": 19
  },
  "title": "NDFAR April 19",
  "published": "2017-04-19T13:03:59.000Z",
  "thumb": "https://i.ytimg.com/vi/kNqRXYZRlsY/default.jpg",
  "medium": "https://i.ytimg.com/vi/kNqRXYZRlsY/mqdefault.jpg"
}, {
  "id": "pYGJOaWKtiw",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 2,
    "day": 18
  },
  "title": "NDFAR April 18",
  "published": "2017-04-18T11:32:52.000Z",
  "thumb": "https://i.ytimg.com/vi/pYGJOaWKtiw/default.jpg",
  "medium": "https://i.ytimg.com/vi/pYGJOaWKtiw/mqdefault.jpg"
}, {
  "id": "8ra86IZLncs",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 1,
    "day": 17
  },
  "title": "NDFAR April 17",
  "published": "2017-04-17T11:48:43.000Z",
  "thumb": "https://i.ytimg.com/vi/8ra86IZLncs/default.jpg",
  "medium": "https://i.ytimg.com/vi/8ra86IZLncs/mqdefault.jpg"
}, {
  "id": "UWT8ntFSkjA",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 0,
    "day": 16
  },
  "title": "NDFAR April 16",
  "published": "2017-04-16T14:17:30.000Z",
  "thumb": "https://i.ytimg.com/vi/UWT8ntFSkjA/default.jpg",
  "medium": "https://i.ytimg.com/vi/UWT8ntFSkjA/mqdefault.jpg"
}, {
  "id": "73vFQb6jxx0",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 6,
    "day": 15
  },
  "title": "NDFAR April 15",
  "published": "2017-04-15T23:44:20.000Z",
  "thumb": "https://i.ytimg.com/vi/73vFQb6jxx0/default.jpg",
  "medium": "https://i.ytimg.com/vi/73vFQb6jxx0/mqdefault.jpg"
}, {
  "id": "dYUxXu6KDO0",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 5,
    "day": 14
  },
  "title": "NDFAR April 14",
  "published": "2017-04-15T18:59:26.000Z",
  "thumb": "https://i.ytimg.com/vi/dYUxXu6KDO0/default.jpg",
  "medium": "https://i.ytimg.com/vi/dYUxXu6KDO0/mqdefault.jpg"
}, {
  "id": "9aaKEe324rs",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 4,
    "day": 13
  },
  "title": "NDFAR April 13",
  "published": "2017-04-13T13:52:53.000Z",
  "thumb": "https://i.ytimg.com/vi/9aaKEe324rs/default.jpg",
  "medium": "https://i.ytimg.com/vi/9aaKEe324rs/mqdefault.jpg"
}, {
  "id": "XaxsHVu5u8Q",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 3,
    "day": 12
  },
  "title": "NDFAR April 12",
  "published": "2017-04-12T12:03:39.000Z",
  "thumb": "https://i.ytimg.com/vi/XaxsHVu5u8Q/default.jpg",
  "medium": "https://i.ytimg.com/vi/XaxsHVu5u8Q/mqdefault.jpg"
}, {
  "id": "XteITgowEZY",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 2,
    "day": 11
  },
  "title": "NDFAR April 11",
  "published": "2017-04-11T12:09:50.000Z",
  "thumb": "https://i.ytimg.com/vi/XteITgowEZY/default.jpg",
  "medium": "https://i.ytimg.com/vi/XteITgowEZY/mqdefault.jpg"
}, {
  "id": "8jSzE5MutbU",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 1,
    "day": 10
  },
  "title": "NDFAR April 10",
  "published": "2017-04-10T14:12:56.000Z",
  "thumb": "https://i.ytimg.com/vi/8jSzE5MutbU/default.jpg",
  "medium": "https://i.ytimg.com/vi/8jSzE5MutbU/mqdefault.jpg"
}, {
  "id": "5Ei6rCyqHi0",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 0,
    "day": 9
  },
  "title": "NDFAR April 9",
  "published": "2017-04-09T14:33:59.000Z",
  "thumb": "https://i.ytimg.com/vi/5Ei6rCyqHi0/default.jpg",
  "medium": "https://i.ytimg.com/vi/5Ei6rCyqHi0/mqdefault.jpg"
}, {
  "id": "g4euOYFNwR8",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 6,
    "day": 8
  },
  "title": "NDFAR April 8",
  "published": "2017-04-08T15:27:25.000Z",
  "thumb": "https://i.ytimg.com/vi/g4euOYFNwR8/default.jpg",
  "medium": "https://i.ytimg.com/vi/g4euOYFNwR8/mqdefault.jpg"
}, {
  "id": "6ZyGgiyypAg",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 5,
    "day": 7
  },
  "title": "NDFAR April 7",
  "published": "2017-04-07T13:23:02.000Z",
  "thumb": "https://i.ytimg.com/vi/6ZyGgiyypAg/default.jpg",
  "medium": "https://i.ytimg.com/vi/6ZyGgiyypAg/mqdefault.jpg"
}, {
  "id": "pMSELwvK2D4",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 4,
    "day": 6
  },
  "title": "NDFAR April 6",
  "published": "2017-04-07T11:14:44.000Z",
  "thumb": "https://i.ytimg.com/vi/pMSELwvK2D4/default.jpg",
  "medium": "https://i.ytimg.com/vi/pMSELwvK2D4/mqdefault.jpg"
}, {
  "id": "CVWYe4zq9Tc",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 3,
    "day": 5
  },
  "title": "NDFAR April 5",
  "published": "2017-04-06T01:43:02.000Z",
  "thumb": "https://i.ytimg.com/vi/CVWYe4zq9Tc/default.jpg",
  "medium": "https://i.ytimg.com/vi/CVWYe4zq9Tc/mqdefault.jpg"
}, {
  "id": "Vp_WSg__lZU",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 2,
    "day": 4
  },
  "title": "NDFAR April 4",
  "published": "2017-04-04T10:36:40.000Z",
  "thumb": "https://i.ytimg.com/vi/Vp_WSg__lZU/default.jpg",
  "medium": "https://i.ytimg.com/vi/Vp_WSg__lZU/mqdefault.jpg"
}, {
  "id": "QAggy9wAKiI",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 1,
    "day": 3
  },
  "title": "NDFAR April 3 - post-umstead carnage",
  "published": "2017-04-03T23:59:46.000Z",
  "thumb": "https://i.ytimg.com/vi/QAggy9wAKiI/default.jpg",
  "medium": "https://i.ytimg.com/vi/QAggy9wAKiI/mqdefault.jpg"
}, {
  "id": "wDqYVXCkT9k",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 0,
    "day": 2
  },
  "title": "NDFAR April 2. Umstead mile 95",
  "published": "2017-04-02T11:01:54.000Z",
  "thumb": "https://i.ytimg.com/vi/wDqYVXCkT9k/default.jpg",
  "medium": "https://i.ytimg.com/vi/wDqYVXCkT9k/mqdefault.jpg"
}, {
  "id": "2f2F3Khsv7k",
  "date": {
    "year": 2017,
    "month": 4,
    "monthName": "April",
    "dayOfWeek": 6,
    "day": 1
  },
  "title": "NDFAR April 1 on the way to umstead",
  "published": "2017-04-01T08:56:14.000Z",
  "thumb": "https://i.ytimg.com/vi/2f2F3Khsv7k/default.jpg",
  "medium": "https://i.ytimg.com/vi/2f2F3Khsv7k/mqdefault.jpg"
}, {
  "id": "9qF5R-ALNLo",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 5,
    "day": 31
  },
  "title": "NDFAR March 31",
  "published": "2017-03-31T23:11:43.000Z",
  "thumb": "https://i.ytimg.com/vi/9qF5R-ALNLo/default.jpg",
  "medium": "https://i.ytimg.com/vi/9qF5R-ALNLo/mqdefault.jpg"
}, {
  "id": "qD4LcixlJD0",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 4,
    "day": 30
  },
  "title": "NDFAR March 30",
  "published": "2017-03-31T23:01:08.000Z",
  "thumb": "https://i.ytimg.com/vi/qD4LcixlJD0/default.jpg",
  "medium": "https://i.ytimg.com/vi/qD4LcixlJD0/mqdefault.jpg"
}, {
  "id": "k_zHhMnH7HU",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 3,
    "day": 29
  },
  "title": "NDFAR March 29 (100th consecutive Nice day for a run)",
  "published": "2017-03-29T13:15:39.000Z",
  "thumb": "https://i.ytimg.com/vi/k_zHhMnH7HU/default.jpg",
  "medium": "https://i.ytimg.com/vi/k_zHhMnH7HU/mqdefault.jpg"
}, {
  "id": "QxmlZ0fUdV8",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 2,
    "day": 28
  },
  "title": "NDFAR March 28 - Missed this one back in March",
  "published": "2017-11-14T17:59:30.000Z",
  "thumb": "https://i.ytimg.com/vi/QxmlZ0fUdV8/default.jpg",
  "medium": "https://i.ytimg.com/vi/QxmlZ0fUdV8/mqdefault.jpg"
}, {
  "id": "Gfu2QfwZFfo",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 1,
    "day": 27
  },
  "title": "NDFAR March 27",
  "published": "2017-03-27T23:13:22.000Z",
  "thumb": "https://i.ytimg.com/vi/Gfu2QfwZFfo/default.jpg",
  "medium": "https://i.ytimg.com/vi/Gfu2QfwZFfo/mqdefault.jpg"
}, {
  "id": "9HySdDh-ORw",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 0,
    "day": 26
  },
  "title": "NDFAR March 26",
  "published": "2017-03-26T13:47:00.000Z",
  "thumb": "https://i.ytimg.com/vi/9HySdDh-ORw/default.jpg",
  "medium": "https://i.ytimg.com/vi/9HySdDh-ORw/mqdefault.jpg"
}, {
  "id": "c962WqTDl9M",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 6,
    "day": 25
  },
  "title": "NDFAR March 25",
  "published": "2017-03-25T19:45:50.000Z",
  "thumb": "https://i.ytimg.com/vi/c962WqTDl9M/default.jpg",
  "medium": "https://i.ytimg.com/vi/c962WqTDl9M/mqdefault.jpg"
}, {
  "id": "tjTPUmcSWmc",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 5,
    "day": 24
  },
  "title": "NDFAR March 24",
  "published": "2017-03-24T12:05:32.000Z",
  "thumb": "https://i.ytimg.com/vi/tjTPUmcSWmc/default.jpg",
  "medium": "https://i.ytimg.com/vi/tjTPUmcSWmc/mqdefault.jpg"
}, {
  "id": "Yo_wuXf-kos",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 4,
    "day": 23
  },
  "title": "NDFAR March 23",
  "published": "2017-03-23T12:36:56.000Z",
  "thumb": "https://i.ytimg.com/vi/Yo_wuXf-kos/default.jpg",
  "medium": "https://i.ytimg.com/vi/Yo_wuXf-kos/mqdefault.jpg"
}, {
  "id": "3y2KmSBLt2Y",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 2,
    "day": 21
  },
  "title": "NDFAR March 21",
  "published": "2017-03-22T22:26:18.000Z",
  "thumb": "https://i.ytimg.com/vi/3y2KmSBLt2Y/default.jpg",
  "medium": "https://i.ytimg.com/vi/3y2KmSBLt2Y/mqdefault.jpg"
}, {
  "id": "fOKJXN0asEw",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 3,
    "day": 22
  },
  "title": "NDFAR March 22",
  "published": "2017-03-22T12:45:34.000Z",
  "thumb": "https://i.ytimg.com/vi/fOKJXN0asEw/default.jpg",
  "medium": "https://i.ytimg.com/vi/fOKJXN0asEw/mqdefault.jpg"
}, {
  "id": "gxD-DYMXoVI",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 1,
    "day": 20
  },
  "title": "NDFAR March 20",
  "published": "2017-03-20T12:53:15.000Z",
  "thumb": "https://i.ytimg.com/vi/gxD-DYMXoVI/default.jpg",
  "medium": "https://i.ytimg.com/vi/gxD-DYMXoVI/mqdefault.jpg"
}, {
  "id": "qQJXMeHpYjE",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 0,
    "day": 19
  },
  "title": "NDFAR March 19",
  "published": "2017-03-19T19:42:06.000Z",
  "thumb": "https://i.ytimg.com/vi/qQJXMeHpYjE/default.jpg",
  "medium": "https://i.ytimg.com/vi/qQJXMeHpYjE/mqdefault.jpg"
}, {
  "id": "zpK22T9XhcQ",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 6,
    "day": 18
  },
  "title": "NDFAR March 18",
  "published": "2017-03-18T16:25:26.000Z",
  "thumb": "https://i.ytimg.com/vi/zpK22T9XhcQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/zpK22T9XhcQ/mqdefault.jpg"
}, {
  "id": "7wqToR270KQ",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 5,
    "day": 17
  },
  "title": "NDFAR March 17",
  "published": "2017-03-18T10:48:23.000Z",
  "thumb": "https://i.ytimg.com/vi/7wqToR270KQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/7wqToR270KQ/mqdefault.jpg"
}, {
  "id": "aoka26BJ4sw",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 4,
    "day": 16
  },
  "title": "NDFAR March 16",
  "published": "2017-03-16T17:50:03.000Z",
  "thumb": "https://i.ytimg.com/vi/aoka26BJ4sw/default.jpg",
  "medium": "https://i.ytimg.com/vi/aoka26BJ4sw/mqdefault.jpg"
}, {
  "id": "sumvPBQovLk",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 3,
    "day": 15
  },
  "title": "NDFAR March 15",
  "published": "2017-03-15T13:34:24.000Z",
  "thumb": "https://i.ytimg.com/vi/sumvPBQovLk/default.jpg",
  "medium": "https://i.ytimg.com/vi/sumvPBQovLk/mqdefault.jpg"
}, {
  "id": "Z5F7YyG3uAg",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 2,
    "day": 14
  },
  "title": "NDFAR March 14 - after midnight, before blizzard",
  "published": "2017-03-14T04:47:11.000Z",
  "thumb": "https://i.ytimg.com/vi/Z5F7YyG3uAg/default.jpg",
  "medium": "https://i.ytimg.com/vi/Z5F7YyG3uAg/mqdefault.jpg"
}, {
  "id": "3RV_OpJO6Ks",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 1,
    "day": 13
  },
  "title": "NDFAR March 13",
  "published": "2017-03-13T13:34:45.000Z",
  "thumb": "https://i.ytimg.com/vi/3RV_OpJO6Ks/default.jpg",
  "medium": "https://i.ytimg.com/vi/3RV_OpJO6Ks/mqdefault.jpg"
}, {
  "id": "2KRxmSXMedk",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 0,
    "day": 12
  },
  "title": "NDFAR March 12",
  "published": "2017-03-13T01:27:15.000Z",
  "thumb": "https://i.ytimg.com/vi/2KRxmSXMedk/default.jpg",
  "medium": "https://i.ytimg.com/vi/2KRxmSXMedk/mqdefault.jpg"
}, {
  "id": "WQjdIEUCUN8",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 6,
    "day": 11
  },
  "title": "NDFAR March 11",
  "published": "2017-03-11T19:57:46.000Z",
  "thumb": "https://i.ytimg.com/vi/WQjdIEUCUN8/default.jpg",
  "medium": "https://i.ytimg.com/vi/WQjdIEUCUN8/mqdefault.jpg"
}, {
  "id": "X0nd6hBu8Uo",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 5,
    "day": 10
  },
  "title": "NDFAR March 10",
  "published": "2017-03-11T02:15:32.000Z",
  "thumb": "https://i.ytimg.com/vi/X0nd6hBu8Uo/default.jpg",
  "medium": "https://i.ytimg.com/vi/X0nd6hBu8Uo/mqdefault.jpg"
}, {
  "id": "KzQ5OHE2fIk",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 4,
    "day": 9
  },
  "title": "NDFAR March 9",
  "published": "2017-03-09T17:13:55.000Z",
  "thumb": "https://i.ytimg.com/vi/KzQ5OHE2fIk/default.jpg",
  "medium": "https://i.ytimg.com/vi/KzQ5OHE2fIk/mqdefault.jpg"
}, {
  "id": "HGPThhnJqNE",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 3,
    "day": 8
  },
  "title": "NDFAR March 8",
  "published": "2017-03-08T12:47:33.000Z",
  "thumb": "https://i.ytimg.com/vi/HGPThhnJqNE/default.jpg",
  "medium": "https://i.ytimg.com/vi/HGPThhnJqNE/mqdefault.jpg"
}, {
  "id": "2kfToxdpdVY",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 2,
    "day": 7
  },
  "title": "NDFAR March 7",
  "published": "2017-03-07T13:34:15.000Z",
  "thumb": "https://i.ytimg.com/vi/2kfToxdpdVY/default.jpg",
  "medium": "https://i.ytimg.com/vi/2kfToxdpdVY/mqdefault.jpg"
}, {
  "id": "wmJVUk1os9s",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 1,
    "day": 6
  },
  "title": "NDFAR March 6",
  "published": "2017-03-06T17:39:56.000Z",
  "thumb": "https://i.ytimg.com/vi/wmJVUk1os9s/default.jpg",
  "medium": "https://i.ytimg.com/vi/wmJVUk1os9s/mqdefault.jpg"
}, {
  "id": "YIbu8D4KvGA",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 0,
    "day": 5
  },
  "title": "NDFAR March 5",
  "published": "2017-03-06T02:30:06.000Z",
  "thumb": "https://i.ytimg.com/vi/YIbu8D4KvGA/default.jpg",
  "medium": "https://i.ytimg.com/vi/YIbu8D4KvGA/mqdefault.jpg"
}, {
  "id": "HKbnYAtoaB4",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 6,
    "day": 4
  },
  "title": "NDFAR March 4 feat. Joey",
  "published": "2017-03-04T22:50:55.000Z",
  "thumb": "https://i.ytimg.com/vi/HKbnYAtoaB4/default.jpg",
  "medium": "https://i.ytimg.com/vi/HKbnYAtoaB4/mqdefault.jpg"
}, {
  "id": "rO8vnUTDo08",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 5,
    "day": 3
  },
  "title": "NDFAR March 3",
  "published": "2017-03-03T13:33:39.000Z",
  "thumb": "https://i.ytimg.com/vi/rO8vnUTDo08/default.jpg",
  "medium": "https://i.ytimg.com/vi/rO8vnUTDo08/mqdefault.jpg"
}, {
  "id": "_fGr7p0TQQY",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 4,
    "day": 2
  },
  "title": "NDFAR March 2",
  "published": "2017-03-02T15:11:20.000Z",
  "thumb": "https://i.ytimg.com/vi/_fGr7p0TQQY/default.jpg",
  "medium": "https://i.ytimg.com/vi/_fGr7p0TQQY/mqdefault.jpg"
}, {
  "id": "K-AXcxOETSI",
  "date": {
    "year": 2017,
    "month": 3,
    "monthName": "March",
    "dayOfWeek": 3,
    "day": 1
  },
  "title": "NDFAR March 1",
  "published": "2017-03-01T15:14:50.000Z",
  "thumb": "https://i.ytimg.com/vi/K-AXcxOETSI/default.jpg",
  "medium": "https://i.ytimg.com/vi/K-AXcxOETSI/mqdefault.jpg"
}, {
  "id": "ayPm0k68okE",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 2,
    "day": 28
  },
  "title": "NDFAR February 28",
  "published": "2017-02-28T17:52:47.000Z",
  "thumb": "https://i.ytimg.com/vi/ayPm0k68okE/default.jpg",
  "medium": "https://i.ytimg.com/vi/ayPm0k68okE/mqdefault.jpg"
}, {
  "id": "DsQslElARsk",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 1,
    "day": 27
  },
  "title": "NDFAR February 27",
  "published": "2017-02-27T17:27:30.000Z",
  "thumb": "https://i.ytimg.com/vi/DsQslElARsk/default.jpg",
  "medium": "https://i.ytimg.com/vi/DsQslElARsk/mqdefault.jpg"
}, {
  "id": "o7e0PtLsVPQ",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 0,
    "day": 26
  },
  "title": "NDFAR February 26",
  "published": "2017-02-27T02:03:46.000Z",
  "thumb": "https://i.ytimg.com/vi/o7e0PtLsVPQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/o7e0PtLsVPQ/mqdefault.jpg"
}, {
  "id": "KvJP6mbE37Y",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 6,
    "day": 25
  },
  "title": "NDFAR February 25 feat. Melissa",
  "published": "2017-02-25T15:06:59.000Z",
  "thumb": "https://i.ytimg.com/vi/KvJP6mbE37Y/default.jpg",
  "medium": "https://i.ytimg.com/vi/KvJP6mbE37Y/mqdefault.jpg"
}, {
  "id": "YOqFgyuye1k",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 5,
    "day": 24
  },
  "title": "NDFAR February 24",
  "published": "2017-02-24T13:14:25.000Z",
  "thumb": "https://i.ytimg.com/vi/YOqFgyuye1k/default.jpg",
  "medium": "https://i.ytimg.com/vi/YOqFgyuye1k/mqdefault.jpg"
}, {
  "id": "Ia7VEK8jOTY",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 4,
    "day": 23
  },
  "title": "NDFAR February 23",
  "published": "2017-02-23T13:23:33.000Z",
  "thumb": "https://i.ytimg.com/vi/Ia7VEK8jOTY/default.jpg",
  "medium": "https://i.ytimg.com/vi/Ia7VEK8jOTY/mqdefault.jpg"
}, {
  "id": "P86nuUnimgc",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 3,
    "day": 22
  },
  "title": "NDFAR February 22",
  "published": "2017-02-22T13:48:52.000Z",
  "thumb": "https://i.ytimg.com/vi/P86nuUnimgc/default.jpg",
  "medium": "https://i.ytimg.com/vi/P86nuUnimgc/mqdefault.jpg"
}, {
  "id": "Nl43IQb91-g",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 2,
    "day": 21
  },
  "title": "NDFAR February 21",
  "published": "2017-02-21T14:24:14.000Z",
  "thumb": "https://i.ytimg.com/vi/Nl43IQb91-g/default.jpg",
  "medium": "https://i.ytimg.com/vi/Nl43IQb91-g/mqdefault.jpg"
}, {
  "id": "Xn7GIbcNCZs",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 1,
    "day": 20
  },
  "title": "NDFAR February 20",
  "published": "2017-02-20T15:25:25.000Z",
  "thumb": "https://i.ytimg.com/vi/Xn7GIbcNCZs/default.jpg",
  "medium": "https://i.ytimg.com/vi/Xn7GIbcNCZs/mqdefault.jpg"
}, {
  "id": "pphXfilty3w",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 0,
    "day": 19
  },
  "title": "NDFAR February 19",
  "published": "2017-02-19T20:32:02.000Z",
  "thumb": "https://i.ytimg.com/vi/pphXfilty3w/default.jpg",
  "medium": "https://i.ytimg.com/vi/pphXfilty3w/mqdefault.jpg"
}, {
  "id": "3a3DpVFgd3c",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 6,
    "day": 18
  },
  "title": "NDFAR February 18",
  "published": "2017-02-19T02:12:39.000Z",
  "thumb": "https://i.ytimg.com/vi/3a3DpVFgd3c/default.jpg",
  "medium": "https://i.ytimg.com/vi/3a3DpVFgd3c/mqdefault.jpg"
}, {
  "id": "HvNrXUxAAYg",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 5,
    "day": 17
  },
  "title": "NDFAR February 17",
  "published": "2017-02-17T18:08:52.000Z",
  "thumb": "https://i.ytimg.com/vi/HvNrXUxAAYg/default.jpg",
  "medium": "https://i.ytimg.com/vi/HvNrXUxAAYg/mqdefault.jpg"
}, {
  "id": "TxPzhsU3GtU",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 4,
    "day": 16
  },
  "title": "NDFAR February 16",
  "published": "2017-02-17T02:04:31.000Z",
  "thumb": "https://i.ytimg.com/vi/TxPzhsU3GtU/default.jpg",
  "medium": "https://i.ytimg.com/vi/TxPzhsU3GtU/mqdefault.jpg"
}, {
  "id": "FtOF_RqXhOc",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 3,
    "day": 15
  },
  "title": "NDFAR February 15",
  "published": "2017-02-15T12:54:20.000Z",
  "thumb": "https://i.ytimg.com/vi/FtOF_RqXhOc/default.jpg",
  "medium": "https://i.ytimg.com/vi/FtOF_RqXhOc/mqdefault.jpg"
}, {
  "id": "bFlnblsTXjs",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 2,
    "day": 14
  },
  "title": "NDFAR February 14",
  "published": "2017-02-14T12:48:39.000Z",
  "thumb": "https://i.ytimg.com/vi/bFlnblsTXjs/default.jpg",
  "medium": "https://i.ytimg.com/vi/bFlnblsTXjs/mqdefault.jpg"
}, {
  "id": "_qc6GBEBVPg",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 1,
    "day": 13
  },
  "title": "NDFAR February 13: 3 mile treadmill PR",
  "published": "2017-02-13T21:20:27.000Z",
  "thumb": "https://i.ytimg.com/vi/_qc6GBEBVPg/default.jpg",
  "medium": "https://i.ytimg.com/vi/_qc6GBEBVPg/mqdefault.jpg"
}, {
  "id": "ZoIlYVRbOkc",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 0,
    "day": 12
  },
  "title": "NDFAR February 12",
  "published": "2017-02-12T15:39:46.000Z",
  "thumb": "https://i.ytimg.com/vi/ZoIlYVRbOkc/default.jpg",
  "medium": "https://i.ytimg.com/vi/ZoIlYVRbOkc/mqdefault.jpg"
}, {
  "id": "AqKE1rJIiJ8",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 6,
    "day": 11
  },
  "title": "NDFAR February 11 - going skiing",
  "published": "2017-02-11T11:56:58.000Z",
  "thumb": "https://i.ytimg.com/vi/AqKE1rJIiJ8/default.jpg",
  "medium": "https://i.ytimg.com/vi/AqKE1rJIiJ8/mqdefault.jpg"
}, {
  "id": "sjTIUVQ6WVc",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 5,
    "day": 10
  },
  "title": "NDFAR February 10",
  "published": "2017-02-10T15:28:56.000Z",
  "thumb": "https://i.ytimg.com/vi/sjTIUVQ6WVc/default.jpg",
  "medium": "https://i.ytimg.com/vi/sjTIUVQ6WVc/mqdefault.jpg"
}, {
  "id": "y1yfE__376k",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 4,
    "day": 9
  },
  "title": "NDFAR February 9 - Blizzard day",
  "published": "2017-02-09T22:58:04.000Z",
  "thumb": "https://i.ytimg.com/vi/y1yfE__376k/default.jpg",
  "medium": "https://i.ytimg.com/vi/y1yfE__376k/mqdefault.jpg"
}, {
  "id": "zZgd9GWR2JM",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 3,
    "day": 8
  },
  "title": "NDFAR February 8",
  "published": "2017-02-08T15:43:53.000Z",
  "thumb": "https://i.ytimg.com/vi/zZgd9GWR2JM/default.jpg",
  "medium": "https://i.ytimg.com/vi/zZgd9GWR2JM/mqdefault.jpg"
}, {
  "id": "omJe27KRP8s",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 2,
    "day": 7
  },
  "title": "NDFAR February 7",
  "published": "2017-02-07T13:49:08.000Z",
  "thumb": "https://i.ytimg.com/vi/omJe27KRP8s/default.jpg",
  "medium": "https://i.ytimg.com/vi/omJe27KRP8s/mqdefault.jpg"
}, {
  "id": "8AYrJdg98Ek",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 1,
    "day": 6
  },
  "title": "NDFAR February 6. Happy birthday Joey...",
  "published": "2017-02-06T12:16:46.000Z",
  "thumb": "https://i.ytimg.com/vi/8AYrJdg98Ek/default.jpg",
  "medium": "https://i.ytimg.com/vi/8AYrJdg98Ek/mqdefault.jpg"
}, {
  "id": "b1jd9cP7ohg",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 3,
    "day": 1
  },
  "title": "NDFAR February 5: super bowl",
  "published": "2017-02-05T20:38:09.000Z",
  "thumb": "https://i.ytimg.com/vi/b1jd9cP7ohg/default.jpg",
  "medium": "https://i.ytimg.com/vi/b1jd9cP7ohg/mqdefault.jpg"
}, {
  "id": "jDv6shsa-W0",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 6,
    "day": 4
  },
  "title": "NDFAR February 4",
  "published": "2017-02-04T15:42:00.000Z",
  "thumb": "https://i.ytimg.com/vi/jDv6shsa-W0/default.jpg",
  "medium": "https://i.ytimg.com/vi/jDv6shsa-W0/mqdefault.jpg"
}, {
  "id": "Cg47oAge7Sg",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 5,
    "day": 3
  },
  "title": "NDFAR February 3",
  "published": "2017-02-03T13:09:21.000Z",
  "thumb": "https://i.ytimg.com/vi/Cg47oAge7Sg/default.jpg",
  "medium": "https://i.ytimg.com/vi/Cg47oAge7Sg/mqdefault.jpg"
}, {
  "id": "4oWvBfCwlE0",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 4,
    "day": 2
  },
  "title": "NDFAR February 2, 2017 - Charlotte NC",
  "published": "2017-02-02T12:25:50.000Z",
  "thumb": "https://i.ytimg.com/vi/4oWvBfCwlE0/default.jpg",
  "medium": "https://i.ytimg.com/vi/4oWvBfCwlE0/mqdefault.jpg"
}, {
  "id": "irFz21Bz8sQ",
  "date": {
    "year": 2017,
    "month": 2,
    "monthName": "February",
    "dayOfWeek": 3,
    "day": 1
  },
  "title": "NDFAR February 1",
  "published": "2017-02-01T08:31:27.000Z",
  "thumb": "https://i.ytimg.com/vi/irFz21Bz8sQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/irFz21Bz8sQ/mqdefault.jpg"
}, {
  "id": "GT9FJ-lvU1Y",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 2,
    "day": 31
  },
  "title": "NDFAR January 31",
  "published": "2017-01-31T19:27:56.000Z",
  "thumb": "https://i.ytimg.com/vi/GT9FJ-lvU1Y/default.jpg",
  "medium": "https://i.ytimg.com/vi/GT9FJ-lvU1Y/mqdefault.jpg"
}, {
  "id": "UbPNvQkuMRs",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 1,
    "day": 30
  },
  "title": "NDFAR January 30",
  "published": "2017-01-30T13:42:33.000Z",
  "thumb": "https://i.ytimg.com/vi/UbPNvQkuMRs/default.jpg",
  "medium": "https://i.ytimg.com/vi/UbPNvQkuMRs/mqdefault.jpg"
}, {
  "id": "voyr82c1Y8c",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 0,
    "day": 29
  },
  "title": "NDFAR January 29",
  "published": "2017-01-29T15:21:27.000Z",
  "thumb": "https://i.ytimg.com/vi/voyr82c1Y8c/default.jpg",
  "medium": "https://i.ytimg.com/vi/voyr82c1Y8c/mqdefault.jpg"
}, {
  "id": "oP_29UbrtKM",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 6,
    "day": 28
  },
  "title": "NDFAR January 28",
  "published": "2017-01-28T19:16:08.000Z",
  "thumb": "https://i.ytimg.com/vi/oP_29UbrtKM/default.jpg",
  "medium": "https://i.ytimg.com/vi/oP_29UbrtKM/mqdefault.jpg"
}, {
  "id": "8LWrKXMM-yM",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 5,
    "day": 27
  },
  "title": "NDFAR January 27",
  "published": "2017-01-27T13:02:04.000Z",
  "thumb": "https://i.ytimg.com/vi/8LWrKXMM-yM/default.jpg",
  "medium": "https://i.ytimg.com/vi/8LWrKXMM-yM/mqdefault.jpg"
}, {
  "id": "ey0KVlV0xRw",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 4,
    "day": 26
  },
  "title": "NDFAR January 26",
  "published": "2017-01-26T14:31:53.000Z",
  "thumb": "https://i.ytimg.com/vi/ey0KVlV0xRw/default.jpg",
  "medium": "https://i.ytimg.com/vi/ey0KVlV0xRw/mqdefault.jpg"
}, {
  "id": "Q9mvlHk7oIU",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 3,
    "day": 25
  },
  "title": "NDFAR January 25",
  "published": "2017-01-25T11:59:49.000Z",
  "thumb": "https://i.ytimg.com/vi/Q9mvlHk7oIU/default.jpg",
  "medium": "https://i.ytimg.com/vi/Q9mvlHk7oIU/mqdefault.jpg"
}, {
  "id": "WP5MX6EC87Q",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 2,
    "day": 24
  },
  "title": "NDFAR January 24",
  "published": "2017-01-24T12:52:25.000Z",
  "thumb": "https://i.ytimg.com/vi/WP5MX6EC87Q/default.jpg",
  "medium": "https://i.ytimg.com/vi/WP5MX6EC87Q/mqdefault.jpg"
}, {
  "id": "j1JM6kOo6B8",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 1,
    "day": 23
  },
  "title": "NDFAR January 23",
  "published": "2017-01-23T14:25:42.000Z",
  "thumb": "https://i.ytimg.com/vi/j1JM6kOo6B8/default.jpg",
  "medium": "https://i.ytimg.com/vi/j1JM6kOo6B8/mqdefault.jpg"
}, {
  "id": "xRoSP-z06Do",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 0,
    "day": 22
  },
  "title": "NDFAR January 22",
  "published": "2017-01-22T20:59:36.000Z",
  "thumb": "https://i.ytimg.com/vi/xRoSP-z06Do/default.jpg",
  "medium": "https://i.ytimg.com/vi/xRoSP-z06Do/mqdefault.jpg"
}, {
  "id": "fwNBDDXtFHo",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 6,
    "day": 21
  },
  "title": "NDFAR January 21",
  "published": "2017-01-21T15:25:07.000Z",
  "thumb": "https://i.ytimg.com/vi/fwNBDDXtFHo/default.jpg",
  "medium": "https://i.ytimg.com/vi/fwNBDDXtFHo/mqdefault.jpg"
}, {
  "id": "Pj6Y0-A6N5c",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 5,
    "day": 20
  },
  "title": "NDFAR January 20",
  "published": "2017-01-20T11:03:32.000Z",
  "thumb": "https://i.ytimg.com/vi/Pj6Y0-A6N5c/default.jpg",
  "medium": "https://i.ytimg.com/vi/Pj6Y0-A6N5c/mqdefault.jpg"
}, {
  "id": "kHt-95XZ0yQ",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 4,
    "day": 19
  },
  "title": "NDFAR January 19",
  "published": "2017-01-19T12:56:05.000Z",
  "thumb": "https://i.ytimg.com/vi/kHt-95XZ0yQ/default.jpg",
  "medium": "https://i.ytimg.com/vi/kHt-95XZ0yQ/mqdefault.jpg"
}, {
  "id": "ekUqaPbOzmw",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 3,
    "day": 18
  },
  "title": "NDFAR January 18",
  "published": "2017-01-18T23:53:49.000Z",
  "thumb": "https://i.ytimg.com/vi/ekUqaPbOzmw/default.jpg",
  "medium": "https://i.ytimg.com/vi/ekUqaPbOzmw/mqdefault.jpg"
}, {
  "id": "5Prnw0l77II",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 2,
    "day": 17
  },
  "title": "NDFAR January 17",
  "published": "2017-01-17T13:46:48.000Z",
  "thumb": "https://i.ytimg.com/vi/5Prnw0l77II/default.jpg",
  "medium": "https://i.ytimg.com/vi/5Prnw0l77II/mqdefault.jpg"
}, {
  "id": "HPdyb08cbA4",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 1,
    "day": 16
  },
  "title": "NDFAR January 16",
  "published": "2017-01-16T17:36:04.000Z",
  "thumb": "https://i.ytimg.com/vi/HPdyb08cbA4/default.jpg",
  "medium": "https://i.ytimg.com/vi/HPdyb08cbA4/mqdefault.jpg"
}, {
  "id": "vg6F5sZMNBM",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 0,
    "day": 15
  },
  "title": "NDFAR January 15",
  "published": "2017-01-15T21:40:47.000Z",
  "thumb": "https://i.ytimg.com/vi/vg6F5sZMNBM/default.jpg",
  "medium": "https://i.ytimg.com/vi/vg6F5sZMNBM/mqdefault.jpg"
}, {
  "id": "Hnz70uYywnY",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 6,
    "day": 14
  },
  "title": "NDFAR January 14 - Glen Cove, NY.",
  "published": "2017-01-14T17:15:53.000Z",
  "thumb": "https://i.ytimg.com/vi/Hnz70uYywnY/default.jpg",
  "medium": "https://i.ytimg.com/vi/Hnz70uYywnY/mqdefault.jpg"
}, {
  "id": "BW9euH_-CpM",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 5,
    "day": 13
  },
  "title": "NDFAR Friday January 13",
  "published": "2017-01-13T11:36:37.000Z",
  "thumb": "https://i.ytimg.com/vi/BW9euH_-CpM/default.jpg",
  "medium": "https://i.ytimg.com/vi/BW9euH_-CpM/mqdefault.jpg"
}, {
  "id": "CusPIVHXPKA",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 4,
    "day": 12
  },
  "title": "NDFAR January 12",
  "published": "2017-01-12T14:36:32.000Z",
  "thumb": "https://i.ytimg.com/vi/CusPIVHXPKA/default.jpg",
  "medium": "https://i.ytimg.com/vi/CusPIVHXPKA/mqdefault.jpg"
}, {
  "id": "HQKROqee0Fo",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 3,
    "day": 11
  },
  "title": "NDFAR January 11",
  "published": "2017-01-11T11:05:41.000Z",
  "thumb": "https://i.ytimg.com/vi/HQKROqee0Fo/default.jpg",
  "medium": "https://i.ytimg.com/vi/HQKROqee0Fo/mqdefault.jpg"
}, {
  "id": "fjGnLnqRYWc",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 2,
    "day": 10
  },
  "title": "NDFAR January 10",
  "published": "2017-01-10T13:49:51.000Z",
  "thumb": "https://i.ytimg.com/vi/fjGnLnqRYWc/default.jpg",
  "medium": "https://i.ytimg.com/vi/fjGnLnqRYWc/mqdefault.jpg"
}, {
  "id": "rw9EIo_ZLHk",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 1,
    "day": 9
  },
  "title": "NDFAR January 9",
  "published": "2017-01-09T10:53:22.000Z",
  "thumb": "https://i.ytimg.com/vi/rw9EIo_ZLHk/default.jpg",
  "medium": "https://i.ytimg.com/vi/rw9EIo_ZLHk/mqdefault.jpg"
}, {
  "id": "GM668_HlgAU",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 0,
    "day": 8
  },
  "title": "NDFAR January 8",
  "published": "2017-01-08T17:25:37.000Z",
  "thumb": "https://i.ytimg.com/vi/GM668_HlgAU/default.jpg",
  "medium": "https://i.ytimg.com/vi/GM668_HlgAU/mqdefault.jpg"
}, {
  "id": "Latt59wRu0M",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 6,
    "day": 7
  },
  "title": "NDFAR January 7",
  "published": "2017-01-07T15:27:59.000Z",
  "thumb": "https://i.ytimg.com/vi/Latt59wRu0M/default.jpg",
  "medium": "https://i.ytimg.com/vi/Latt59wRu0M/mqdefault.jpg"
}, {
  "id": "l8w_NNB-xsE",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 5,
    "day": 6
  },
  "title": "NDFAR January 6",
  "published": "2017-01-06T13:09:49.000Z",
  "thumb": "https://i.ytimg.com/vi/l8w_NNB-xsE/default.jpg",
  "medium": "https://i.ytimg.com/vi/l8w_NNB-xsE/mqdefault.jpg"
}, {
  "id": "CYTTAS74bW8",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 4,
    "day": 5
  },
  "title": "NDFAR January 5",
  "published": "2017-01-05T13:02:14.000Z",
  "thumb": "https://i.ytimg.com/vi/CYTTAS74bW8/default.jpg",
  "medium": "https://i.ytimg.com/vi/CYTTAS74bW8/mqdefault.jpg"
}, {
  "id": "hZbYmiNr90I",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 3,
    "day": 4
  },
  "title": "NDFAR January 4",
  "published": "2017-01-04T12:57:44.000Z",
  "thumb": "https://i.ytimg.com/vi/hZbYmiNr90I/default.jpg",
  "medium": "https://i.ytimg.com/vi/hZbYmiNr90I/mqdefault.jpg"
}, {
  "id": "W0yHnXQE1D0",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 2,
    "day": 3
  },
  "title": "NDFAR January 3 Back to work.",
  "published": "2017-01-03T13:04:23.000Z",
  "thumb": "https://i.ytimg.com/vi/W0yHnXQE1D0/default.jpg",
  "medium": "https://i.ytimg.com/vi/W0yHnXQE1D0/mqdefault.jpg"
}, {
  "id": "wMZSkKUPbP8",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 1,
    "day": 2
  },
  "title": "NDFAR January 2",
  "published": "2017-01-02T21:54:16.000Z",
  "thumb": "https://i.ytimg.com/vi/wMZSkKUPbP8/default.jpg",
  "medium": "https://i.ytimg.com/vi/wMZSkKUPbP8/mqdefault.jpg"
}, {
  "id": "hp_fDlszN0c",
  "date": {
    "year": 2017,
    "month": 1,
    "monthName": "January",
    "dayOfWeek": 0,
    "day": 1
  },
  "title": "NDFAR January 1, 2017",
  "published": "2017-01-02T14:12:49.000Z",
  "thumb": "https://i.ytimg.com/vi/hp_fDlszN0c/default.jpg",
  "medium": "https://i.ytimg.com/vi/hp_fDlszN0c/mqdefault.jpg"
}, {
  "id": "Lnt9iwPQbD8",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 6,
    "day": 31
  },
  "title": "NDFAR December 31, goal achieved.",
  "published": "2016-12-31T22:36:39.000Z",
  "thumb": "https://i.ytimg.com/vi/Lnt9iwPQbD8/default.jpg",
  "medium": "https://i.ytimg.com/vi/Lnt9iwPQbD8/mqdefault.jpg"
}, {
  "id": "5HYHvah82gk",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 5,
    "day": 30
  },
  "title": "NDFAR December 30 - Delaware Water Gap",
  "published": "2016-12-31T02:16:01.000Z",
  "thumb": "https://i.ytimg.com/vi/5HYHvah82gk/default.jpg",
  "medium": "https://i.ytimg.com/vi/5HYHvah82gk/mqdefault.jpg"
}, {
  "id": "FUVZK0bpais",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 4,
    "day": 29
  },
  "title": "NDFAR December 29",
  "published": "2016-12-30T10:50:25.000Z",
  "thumb": "https://i.ytimg.com/vi/FUVZK0bpais/default.jpg",
  "medium": "https://i.ytimg.com/vi/FUVZK0bpais/mqdefault.jpg"
}, {
  "id": "kdese4C526I",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 3,
    "day": 28
  },
  "title": "NDFAR Dec 28 - Six years of running every day",
  "published": "2016-12-28T16:07:11.000Z",
  "thumb": "https://i.ytimg.com/vi/kdese4C526I/default.jpg",
  "medium": "https://i.ytimg.com/vi/kdese4C526I/mqdefault.jpg"
}, {
  "id": "uMy-LodpGIg",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 2,
    "day": 27
  },
  "title": "NDFAR December 27",
  "published": "2016-12-27T19:10:28.000Z",
  "thumb": "https://i.ytimg.com/vi/uMy-LodpGIg/default.jpg",
  "medium": "https://i.ytimg.com/vi/uMy-LodpGIg/mqdefault.jpg"
}, {
  "id": "jyN0DudoDXA",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 1,
    "day": 26
  },
  "title": "NDFAR December 26",
  "published": "2016-12-26T22:37:19.000Z",
  "thumb": "https://i.ytimg.com/vi/jyN0DudoDXA/default.jpg",
  "medium": "https://i.ytimg.com/vi/jyN0DudoDXA/mqdefault.jpg"
}, {
  "id": "feTQCI5zrp0",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 0,
    "day": 25
  },
  "title": "NDFAR Christmas Dec 25",
  "published": "2016-12-25T17:35:07.000Z",
  "thumb": "https://i.ytimg.com/vi/feTQCI5zrp0/default.jpg",
  "medium": "https://i.ytimg.com/vi/feTQCI5zrp0/mqdefault.jpg"
}, {
  "id": "_ZqVCd-Izn0",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 6,
    "day": 24
  },
  "title": "NDFAR December 24",
  "published": "2016-12-24T21:54:32.000Z",
  "thumb": "https://i.ytimg.com/vi/_ZqVCd-Izn0/default.jpg",
  "medium": "https://i.ytimg.com/vi/_ZqVCd-Izn0/mqdefault.jpg"
}, {
  "id": "Nipcx0FRO3w",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 5,
    "day": 23
  },
  "title": "NDFAR December 23",
  "published": "2016-12-23T21:09:40.000Z",
  "thumb": "https://i.ytimg.com/vi/Nipcx0FRO3w/default.jpg",
  "medium": "https://i.ytimg.com/vi/Nipcx0FRO3w/mqdefault.jpg"
}, {
  "id": "1E4dPIMZAbM",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 4,
    "day": 22
  },
  "title": "NDFAR December 22",
  "published": "2016-12-22T17:44:41.000Z",
  "thumb": "https://i.ytimg.com/vi/1E4dPIMZAbM/default.jpg",
  "medium": "https://i.ytimg.com/vi/1E4dPIMZAbM/mqdefault.jpg"
}, {
  "id": "kYIVCIlcByo",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 3,
    "day": 21
  },
  "title": "NDFAR: Wednesday December 21",
  "published": "2016-12-21T13:14:14.000Z",
  "thumb": "https://i.ytimg.com/vi/kYIVCIlcByo/default.jpg",
  "medium": "https://i.ytimg.com/vi/kYIVCIlcByo/mqdefault.jpg"
}, {
  "id": "FvAL_TJRaHE",
  "date": {
    "year": 2016,
    "month": 12,
    "monthName": "December",
    "dayOfWeek": 2,
    "day": 20
  },
  "title": "NDFAR: Five miles on December 20",
  "published": "2016-12-20T21:52:21.000Z",
  "thumb": "https://i.ytimg.com/vi/FvAL_TJRaHE/default.jpg",
  "medium": "https://i.ytimg.com/vi/FvAL_TJRaHE/mqdefault.jpg"
}];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/videos-scrubbed.js
var videos_scrubbed = __webpack_require__(3);
var videos_scrubbed_default = /*#__PURE__*/__webpack_require__.n(videos_scrubbed);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(4);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/App.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var PageRoot = external_styled_components_default.a.div.withConfig({
  displayName: "App__PageRoot",
  componentId: "sc-16rw0ko-0"
})(["display:'flex';flex-wrap:'wrap';justify-content:'space-around';"]);
var StyledGridList = external_styled_components_default()(core_["GridList"]).withConfig({
  displayName: "App__StyledGridList",
  componentId: "sc-16rw0ko-1"
})(["overflow-y:'auto';"]);
var StyledGridListTileBar = external_styled_components_default()(core_["GridListTileBar"]).withConfig({
  displayName: "App__StyledGridListTileBar",
  componentId: "sc-16rw0ko-2"
})(["text-align:'left';padding:'1px';margin:'1px';height:'20px';"]);
var LightBox = external_styled_components_default.a.div.withConfig({
  displayName: "App__LightBox",
  componentId: "sc-16rw0ko-3"
})(["display:", ";position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.6);"], function (props) {
  return props.on ? 'block' : 'none';
});
var LightBoxContent = external_styled_components_default.a.div.withConfig({
  displayName: "App__LightBoxContent",
  componentId: "sc-16rw0ko-4"
})(["position:relative;background-color:#fefefe;margin:auto;padding:0;width:600px;max-width:1200px;"]);
var CloseButton = external_styled_components_default.a.span.withConfig({
  displayName: "App__CloseButton",
  componentId: "sc-16rw0ko-5"
})(["color:white;position:absolute;top:10px;right:25px;font-size:35px;font-weight:bold;:hover,:focus{color:#999;text-decoration:none;cursor:pointer;}"]);

var App_VideoIframe = function VideoIframe(props) {
  var autoplay = props.autoplay || true;

  function url(id) {
    return "https://www.youtube.com/embed/".concat(id).concat(autoplay ? '?autoplay=1' : '', "?rel=0");
  }

  return external_react_default.a.createElement("iframe", {
    title: props.id,
    width: "560",
    height: "315",
    src: url(props.id)
  });
};

var StyledVideoIframe = external_styled_components_default()(App_VideoIframe).withConfig({
  displayName: "App__StyledVideoIframe",
  componentId: "sc-16rw0ko-6"
})(["display:", ";max-width:'100%';position:'absolute';left:0;right:0;margin:'auto';top:'50%';transform:'translateY(-50%)';"], function (props) {
  return props.id ? 'block' : 'none';
});

var App_Modal = function Modal(props) {
  return external_react_default.a.createElement(LightBox, {
    on: props && props.video,
    onClick: function onClick() {
      return props.openBox();
    }
  }, external_react_default.a.createElement(CloseButton, {
    onClick: function onClick() {
      return props.openBox();
    }
  }, "\xD7"), external_react_default.a.createElement(LightBoxContent, null, external_react_default.a.createElement(StyledVideoIframe, {
    id: props.video && props.video.id,
    autoplay: false
  })));
};

var App_App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openBox", function (x) {
      _this.setState(_objectSpread({}, _this.state, {
        video: x ? x : null
      }));
    });

    _this.state = {
      loading: true
    };
    _this.openBox = _this.openBox.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      this.setState({
        currentKey: e.keyCode
      });

      if (e.keyCode === 27) {
        this.openBox();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
      this.setState(_objectSpread({}, this.state, {
        loading: false
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var byMonth = videos_scrubbed_default.a.reduce(function (acc, cur, idx) {
        var name = "".concat(cur.date.monthName, " ").concat(cur.date.year);

        if (!acc[name]) {
          acc[name] = [];
        }

        acc[name].unshift(_objectSpread({}, cur, {
          idx: idx
        }));
        return acc;
      }, {});
      var content = external_react_default.a.createElement(PageRoot, null, Object.keys(byMonth).map(function (a) {
        return external_react_default.a.createElement(StyledGridList, {
          key: "calendar " + a,
          cellHeight: 90,
          cols: 7
        }, external_react_default.a.createElement(core_["GridListTile"], {
          key: "subheader " + a,
          cols: 7,
          style: {
            height: 'auto'
          }
        }, external_react_default.a.createElement(List_default.a, {
          component: "div"
        }, external_react_default.a.createElement("h2", null, a))), ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(function (dayOfWeek) {
          return external_react_default.a.createElement(core_["GridListTile"], {
            key: a + dayOfWeek,
            style: {
              height: 'auto'
            }
          }, external_react_default.a.createElement("h5", null, dayOfWeek));
        }), Array.apply('', {
          length: byMonth[a][0].date.dayOfWeek
        }).map(function (x, i) {
          return external_react_default.a.createElement(core_["GridListTile"], {
            key: "empty" + i + a
          }, x);
        }), byMonth[a].map(function (x) {
          return external_react_default.a.createElement(core_["GridListTile"], {
            key: x.id,
            onClick: function onClick() {
              return _this2.openBox(x);
            }
          }, external_react_default.a.createElement("img", {
            src: x.thumb,
            alt: "thumbnail"
          }), external_react_default.a.createElement(StyledGridListTileBar, {
            title: x.date.day
          }));
        }));
      }), external_react_default.a.createElement(App_Modal, {
        openBox: this.openBox,
        video: this.state.video
      }));
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h1", null, "Nice Day for a Run"), external_react_default.a.createElement("h3", null, "I recorded a short video about my run every day in 2017."), this.state.loading ? "loading...." : content);
    }
  }]);

  return App;
}(external_react_["Component"]);

/* harmony default export */ var src_App = (App_App);
// CONCATENATED MODULE: ./pages/index.js


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html, body {\n    @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700');\n    font-family: 'Noto Sans', sans-serif;\n    text-align: center;\n    color: #404040;\n    background: #EDEEED;\n  }\n    h1 {\n        font-size: 4em;\n        font-weight: 700;\n    }\n\n    h2 {\n        font-size: 3em;\n        font-weight: 700;\n    }\n\n    h3 {\n        font-size: 1em;\n        font-weight: 700;\n    }\n\n    h5 {\n        font-size: 0.4em;\n        font-weight: 400;\n        margin: 1px;\n    }\n\n    .App {\n        text-align: center;\n    }\n\n    .video {\n        cursor: pointer;\n        border: 1px solid #B0B0B0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var GlobalStyles = Object(external_styled_components_["createGlobalStyle"])(_templateObject());
/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(GlobalStyles, null), external_react_default.a.createElement(src_App, null));
});

/***/ })
/******/ ]);