export default class FixElement {
  target: Element;
  range: Array<number>;
  styleMap: Map<string, string>;
  constructor(target: Element, range: Array<number>) {
    this.target = target;
    this.range = range;
    this.styleMap = new Map();
  }
  //change the element z axis value
  changeZ(value: number) {
    let translate3dZ = value <= this.range[0] ? 0 : value - this.range[0];

    this.styleMap.set(
      'transform',
      `transform: perspective(${
        this.range[1] - this.range[0]
      }px) translate3d(0px, 0px, ${translate3dZ}px)`
    );
  }
  //change the element opacity value
  changeOpacity(value: number) {
    let opacityValue = 1;

    //at the begin, opacity will be 1 to keep the content remain.
    if (value > this.range[1]) {
      opacityValue = 0;
    } else if (value < this.range[0] + 0.5 * (this.range[1] - this.range[0])) {
      opacityValue = 1;
    } else {
      let x = (this.range[1] - value) / (0.5 * (this.range[1] - this.range[0]))
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
