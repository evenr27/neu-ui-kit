import { newSpecPage } from '@stencil/core/testing';
import { NeuButton } from '../neu-button';

describe('neu-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NeuButton],
      html: `<neu-button></neu-button>`,
    });
    expect(page.root).toEqualHtml(`
      <neu-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </neu-button>
    `);
  });
});
