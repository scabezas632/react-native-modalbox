// Type definitions for react-native-modalbox
// Project: https://github.com/maxs15/react-native-modalbox
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// TypeScript Version: 2.3.2

import React from "react";
import { ViewProperties } from "react-native";

interface ModalProps extends ViewProperties {
  /**
   * Checks if the modal is open
   *
   * Default is false
   *
   * @type {boolean}
   * @memberof ModalProps
   */
  isOpen?: boolean;

  /**
   * Checks if the modal is disabled
   *
   * Default is false
   *
   * @type {boolean}
   * @memberof ModalProps
   */
  isDisabled?: boolean;

  /**
   * If the modal can be closed by pressing on the backdrop
   *
   * Default is true
   *
   * @type {boolean}
   * @memberof ModalProps
   */
  backdropPressToClose?: boolean;

  /**
   * If the modal can be closed by swiping
   *
   * Default is true
   *
   * @type {boolean}
   * @memberof ModalProps
   */
  swipeToClose?: boolean;

  /**
   * The threshold to reach in pixels to close the modal
   *
   * Default is 50
   *
   * @type {number}
   * @memberof ModalProps
   */
  swipeThreshold?: number;

  /**
   * The height in pixels of the swipeable area
   *
   * Default is the Window Height
   *
   * @type {number}
   * @memberof ModalProps
   */
  swipeArea?: number;

  /**
   * The final position of the modal.
   * Accepts top, center or bottom
   *
   * Default is center
   *
   * @type {string}
   * @memberof ModalProps
   */
  position?: "top" | "center" | "bottom" | string;

  /**
   * The direction modal enters from
   *
   * Default is bottom
   *
   * @type {('top' | 'bottom' | string)}
   * @memberof ModalProps
   */
  entry?: "top" | "bottom" | string;

  /**
   * If a backdrop is displayed behind the modal
   *
   * Default is true
   *
   * @type {boolean}
   * @memberof ModalProps
   */
  backdrop?: boolean;

  /**
   * Opacity of the backdrop
   *
   * Default is 0.5
   *
   * @type {number}
   * @memberof ModalProps
   */
  backdropOpacity?: number;

  /**
   * Background color of the backdrop
   *
   * Default is black
   *
   * @type {string}
   * @memberof ModalProps
   */
  backdropColor?: string;

  /**
   * Add an element in the backdrop (a close button for example)
   *
   * Default is null
   *
   * @type {JSX.Element}
   * @memberof ModalProps
   */
  backdropContent?: JSX.Element;

  /**
   * Duration of the animation
   *
   * Default is 400ms
   *
   * @type {number}
   * @memberof ModalProps
   */
  animationDuration?: number;

  /**
   * (Android only) Close modal when receiving back button event
   *
   * Default is false
   *
   * @type {boolean}
   * @memberof ModalProps
   */
  backButtonClose?: boolean;

  /**
   * If the modal should appear open without animation upon first mount
   *
   * Default is false
   *
   * @type {boolean}
   * @memberof ModalProps
   */
  startOpen?: boolean;

  /**
   * This property prevent the modal to cover the ios status bar when the modal is scrolling up because the keyboard is opening
   *
   * Default is ios:22, android:0
   */
  keyboardTopOffset?: number;

  /**
   * Event fired when the modal is closed and the animation is complete
   *
   * @memberof ModalProps
   */
  onClosed?(): void;

  /**
   * Event fired when the modal is opened and the animation is complete
   *
   * @memberof ModalProps
   */
  onOpen?(): void;

  /**
   * When the state of the swipe to close feature has changed
   * (useful to change the content of the modal, display a message for example)
   *
   * @param {boolean} state
   *
   * @memberof ModalProps
   */
  onClosingState?(state: boolean): void;

  /**
   * Reemplace the close modal function for a custom function
   *
   * @memberof ModalProps
   */
  onRequestClose?(): void;
}

export default class Modal extends React.Component<ModalProps, null> {
  /**
   * Open the modal
   *
   * @static
   *
   * @memberof Modal
   */
  static open(): void;

  /**
   * Close the modal
   *
   * @static
   *
   * @memberof Modal
   */
  static close(): void;
}
