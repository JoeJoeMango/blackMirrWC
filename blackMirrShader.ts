import { ImageEffectRenderer } from '/';
const wolfenstein = require('../shader/blackMirrShader.glsl');

export default class ImageEffectExample {
  private wrapper: HTMLElement;
  private renderer: ImageEffectRenderer;

  constructor(wrapper: HTMLElement) {
    this.wrapper = wrapper;
    //
    this.renderer = ImageEffectRenderer.createTemporary(this.wrapper, blackMirrShader, true);
    this.renderer.play();
  }
}
