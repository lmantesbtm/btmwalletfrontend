import { Directive, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Gesture } from 'ionic-angular/gestures/gesture';
import { GraphsPage } from '../../pages/charts/graphs/graphs';
import { ContactPage } from '../../pages/contact/contact';

declare var Hammer;

@Directive({
  selector: '[doubleclick]' // Attribute selector
})

export class DoubleclickDirective implements OnInit, OnDestroy {
  el: HTMLElement;
  pressGesture: Gesture;

  @Output() dblTap: EventEmitter<any> = new EventEmitter();

  constructor(el: ElementRef, public navCtrl: NavController) {
    console.log('Hello DoubleclickDirective Directive');
    this.el = el.nativeElement;
  }

  ngOnInit() {
    this.pressGesture = new Gesture(this.el, {
      recognizers: [
        [Hammer.Tap, {taps: 2}]
      ]
    });
    this.pressGesture.listen();
    this.pressGesture.on('tap', e => {
      this.navCtrl.push(ContactPage);
    })
  }

  ngOnDestroy() {
    this.pressGesture.destroy();
  }
}
