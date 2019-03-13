class SeniorFetch {
  constructor(input, init) {
    this.init = Object.assign({timeout: 10000}, init) ;
    this.input = input;
  }
  fetch() {
    var timeOutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('timeout');
      }, this.init.timeout);
    });
    var abortPromise = new Promise((resolve, reject) => {
      this._abort = () => {
        reject('abort');
      }
    });
    var fetchPromise = fetch(this.input, this.init);
    return Promise.race([timeOutPromise, abortPromise, fetchPromise]);
  }
  abort() {
    this._abort && this._abort()
  }
}
export default SeniorFetch;
