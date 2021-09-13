import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {Power1, Bounce} from 'gsap/all';
import TweenMax from 'gsap';

@Component({
  selector: 'app-gsap',
  templateUrl: './gsap.component.html',
  styleUrls: ['./gsap.component.scss']
})
export class GsapComponent implements OnInit{
  @ViewChild('mushroom',{static: true}) mushroom: ElementRef;
  title = 'lux2';
  ngOnInit(): void {
    this.doIt();
    }
   
    doIt(): void {
    TweenMax.fromTo(this.mushroom.nativeElement, 2, {x: 20}, {x: 440, ease: Power1.easeOut});
    TweenMax.fromTo(this.mushroom.nativeElement, 2, {y: 20}, {y: 440, ease: Bounce.easeOut});
    }
}
