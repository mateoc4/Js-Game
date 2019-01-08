/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gra = new _game2.default();

gra.showFurry();
gra.showCoin();
gra.startGame();

document.addEventListener('keydown', function (event) {
  return gra.turnFurry(event);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _furry = __webpack_require__(2);

var _furry2 = _interopRequireDefault(_furry);

var _coin = __webpack_require__(3);

var _coin2 = _interopRequireDefault(_coin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game() {
    var _this = this;

    _classCallCheck(this, Game);

    this.board = document.querySelectorAll('#board div');
    this.furry = new _furry2.default();
    this.coin = new _coin2.default();
    this.score = 0;
    this.scoreStrong = document.querySelector("#score>div>strong");
    var self = this;

    this.index = function (x, y) {
        return x + y * 10;
    };

    this.showFurry = function () {
        _this.hideVisibleFurry();
        _this.board[_this.index(_this.furry.x, _this.furry.y)].classList.add('furry');
    };

    this.hideVisibleFurry = function () {
        for (var i = 0; i < _this.board.length; i++) {
            _this.board[i].classList.remove('furry');
        }
    };

    this.showCoin = function () {
        return _this.board[_this.index(_this.coin.x, _this.coin.y)].classList.add('coin');
    };

    this.moveFurry = function () {
        if (_this.furry.direction === "right") {
            _this.furry.x++;
        } else if (_this.furry.direction === "left") {
            _this.furry.x--;
        } else if (_this.furry.direction === "up") {
            _this.furry.y--;
        } else if (_this.furry.direction === "down") {
            _this.furry.y++;
        }
        _this.hideVisibleFurry();
        _this.showFurry();
        _this.checkCoinCollision();
        _this.gameOver();
    };

    this.turnFurry = function (event) {
        switch (event.which) {
            case 37:
                _this.furry.direction = 'left';
                break;
            case 38:
                _this.furry.direction = 'up';
                break;
            case 39:
                _this.furry.direction = 'right';
                break;
            case 40:
                _this.furry.direction = 'down';
                break;}
    };

    this.checkCoinCollision = function () {
        if (_this.furry.x === _this.coin.x && _this.furry.y === _this.coin.y) {
            document.querySelector('.coin').classList.remove('coin');
            _this.score++;
            _this.scoreStrong.innerText = _this.score;
            _this.coin = new _coin2.default();
            _this.showCoin();
        }
    };

    this.gameOver = function () {
        if (_this.furry.x > 9 || _this.furry.x < 0 || _this.furry.y < 0 || _this.furry.y > 9) {
            clearInterval(_this.idSetInterval);
            _this.hideVisibleFurry();
            var over = document.querySelector('#over');
            over.classList.remove('invisible');
            over.innerHTML = '\n                <h1>Good game</h1><h1>Twoj wynik to </h1><h1>' + _this.score + '</h1>\n                ';
        }
    };

    this.startGame = function () {
        _this.idSetInterval = setInterval(function () {
            self.moveFurry();
        }, 250);
    };
};

exports.default = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Furry = function Furry() {
    _classCallCheck(this, Furry);

    this.x = 0;
    this.y = 0;
    this.direction = "right";
};

exports.default = Furry;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coin = function Coin() {
    _classCallCheck(this, Coin);

    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
};

exports.default = Coin;

/***/ })
/******/ ]);