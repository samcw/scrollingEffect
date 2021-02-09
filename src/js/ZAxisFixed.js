export default class FixElement {
  constructor(target, range) {
    this.target = target;
    this.range = range;
    this.styleMap = new Map();
  }
  //change the element z axis value
  changeZ(value) {
    let scroll = this.range[1];
    let translate3dZ = value <= this.range[0] ? 0 : value - this.range[0];

    this.styleMap.set(
      'transform',
      `transform: perspective(${
        this.range[1] - this.range[0]
      }px) translate3d(0px, 0px, ${translate3dZ}px)`
    );
  }
  //change the element opacity value
  changeOpacity(value) {
    let opacityValue = 1;
    if (value > this.range[1]) {
      opacityValue = 0;
    } else if (value < this.range[0]) {
      opacityValue = 1;
    } else {
      let x = (this.range[1] - value) / (this.range[1] - this.range[0])
      opacityValue = Math.log2(x + 1);
    }

    this.styleMap.set('opacity', `opacity: ${opacityValue}`);
  }
  update() {
    let styleValue = Array.from(this.styleMap.values()).reduce(
      (pre, curr) => pre + ';' + curr
    );
    this.target.setAttribute('style', styleValue);
  }
}
