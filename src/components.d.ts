/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface NeuButton {
    }
}
declare global {
    interface HTMLNeuButtonElement extends Components.NeuButton, HTMLStencilElement {
    }
    var HTMLNeuButtonElement: {
        prototype: HTMLNeuButtonElement;
        new (): HTMLNeuButtonElement;
    };
    interface HTMLElementTagNameMap {
        "neu-button": HTMLNeuButtonElement;
    }
}
declare namespace LocalJSX {
    interface NeuButton {
    }
    interface IntrinsicElements {
        "neu-button": NeuButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "neu-button": LocalJSX.NeuButton & JSXBase.HTMLAttributes<HTMLNeuButtonElement>;
        }
    }
}
