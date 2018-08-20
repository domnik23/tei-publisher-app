/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   animations/slide-up-animation.html
 */

/// <reference path="../../polymer/types/polymer.d.ts" />
/// <reference path="../neon-animation-behavior.d.ts" />

/**
 * `<slide-up-animation>` animates the transform of an element from `translateY(0)` to
 * `translateY(-100%)`. The `transformOrigin` defaults to `50% 0`.
 *
 * Configuration:
 * ```
 * {
 *   name: 'slide-up-animation',
 *   node: <node>,
 *   transformOrigin: <transform-origin>,
 *   timing: <animation-timing>
 * }
 * ```
 */
interface SlideUpAnimationElement extends Polymer.Element, Polymer.NeonAnimationBehavior {
  configure(config: any): any;
}

interface HTMLElementTagNameMap {
  "slide-up-animation": SlideUpAnimationElement;
}