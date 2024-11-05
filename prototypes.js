function Vehicle(speed) {
  this.spped = speed;
  this.moveFoward = function () {
    return `Moving forward at ${this.speed}`;
  };
}
