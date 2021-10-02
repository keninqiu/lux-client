import { Component, Input, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  @Input() change: any;
  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const id = "#herocallout-7016";


    const heroCalloutTL = gsap.timeline({
        scrollTrigger: {
            trigger: id,
            pin: false, // pin the trigger element while active
            start: "top 60%", // when the top of the trigger hits the top of the viewport
            end: "bottom 40%", // end after scrolling 500px beyond the start
            scrub: .1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            pinSpacing: true,
            toggleActions: "play none none reverse"


        }
    });

    heroCalloutTL
        .addLabel("start", .2)
        .addLabel("middle1", .35)
        .addLabel("middle", .5)
        .addLabel("middle2", .65)
        .addLabel("end", .9)
        .addLabel("endend", 1)
        .fromTo(`${id} svg`, {
            scale: .6,
            opacity: .2,
            transformOrigin: 'center',
        }, {
            scale: .95,
            opacity: 1,
            duration: .5,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, 0)
        .to(`${id} svg`, {
            scale: 1.05,
            opacity: 1,
            duration: .2,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .5)
        .to("#c6", {
            scale: 1.02,
            duration: .7,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .1)
        .to("#c5", {
            scale: 1.06,
            fill: '#8DE2EA',
            duration: .65,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .15)
        .to("#c4", {
            scale: 1.09,
            fill: '#D50E51',
            duration: .6,
            transformOrigin: 'center',
            ease: "ease-in-out",
        }, .2)
        .to("#c3", {
            scale: 1.12,
            fill: '#97BCF6',
            duration: .5,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .25)
        .to("#c2", {
            scale: 1.15,
            fill: '#619EF2',
            duration: .4,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .3)
        .to("#c1", {
            scale: 1.2,
            fill: '#408BF0',
            duration: .35,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .35)
        .to("#c0", {
            scale: 1.25,
            duration: .3,
            opacity: .2,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .4)
        .to(id, {
            background: '#3409A0',
            ease: "ease-in-out",
            duration: .14,
        }, .4)
        .to(".callout_content .colorchange", {
            color: '#D50E51',
            duration: .1,
            ease: "ease-in-out", 
            transformOrigin: 'center',
        }, .5)

        .to(id, {
            background: '#F7F7F7',
            duration: .1,
            ease: "ease-in-out",
        }, .7)
        .to(".callout_content .colorchange", {
            color: '#294258',
            duration: .2,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .8)
        .to(`${id} svg`, {
            scale: .55,
            duration: .1,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .9)

        .to("#c5", {
            fill: '#619EF2',
            duration: .1,
            ease: "ease-in-out",
        }, .9)
        .to("#c4", {
            fill: '#408BF0',
            duration: .1,
            transformOrigin: 'center',
        }, .9)
        .to("#c3", {
            fill: '#EDEFF1',
            duration: .1,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .9)
        .to("#c2", {
            fill: '#D3DADE',
            duration: .1,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .9)
        .to("#c1", {
            duration: .1,
            fill: '#E5E9EC',
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .9)
        .to("#c0", {
            duration: .1,
            ease: "ease-in-out",
            transformOrigin: 'center',
        }, .9)    
  }
  
}
