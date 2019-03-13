'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SeniorFetch = function () {
  function SeniorFetch(input, init) {
    _classCallCheck(this, SeniorFetch);

    this.init = Object.assign({ timeout: 10000 }, init);
    this.input = input;
  }

  _createClass(SeniorFetch, [{
    key: 'fetch',
    value: function (_fetch) {
      function fetch() {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function () {
      var _this = this;

      var timeOutPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          reject('timeout');
        }, _this.init.timeout);
      });
      var abortPromise = new Promise(function (resolve, reject) {
        _this._abort = function () {
          reject('abort');
        };
      });
      var fetchPromise = fetch(this.input, this.init);
      return Promise.race([timeOutPromise, abortPromise, fetchPromise]);
    })
  }, {
    key: 'abort',
    value: function abort() {
      this._abort && this._abort();
    }
  }]);

  return SeniorFetch;
}();

exports.default = SeniorFetch;
