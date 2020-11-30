import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'neu-button',
  styleUrl: 'neu-button.css',
  shadow: true,
})
export class NeuButton {
  render() {
    return (
      <Host>
        <div class="neu-button">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
