import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {
  context: CanvasRenderingContext2D;
  x = 0;
  @ViewChild('myCanvas') myCanvas: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.myCanvas.nativeElement;
    this.context = canvasEl.getContext('2d');
    canvasEl.width = 300;
    canvasEl.height = 300;
    this.context.lineWidth = 3;
    this.context.lineCap = 'round';
    this.context.strokeStyle = 'black';
    // this.captureEvents(canvasEl);
  }
  // captureEvents(canvasEl: HTMLCanvasElement) {
  //   Observable
  //     .fromEvent(canvasEl, 'mousedown')
  //     .switchMap((e) => {
  //       return Observable
  //         .fromEvent(canvasEl, 'mousemove')
  //         .takeUntil(Observable.fromEvent(canvasEl, 'mouseup'))
  //         .takeUntil(Observable.fromEvent(canvasEl, 'mouseleave'))
  //         .pairwise();
  //     })
  //     .subscribe(((res: [MouseEvent, MouseEvent]) => {
  //       const rect = canvasEl.getBoundingClientRect();
  //       const prevPos = {
  //         x: res[0].clientX - rect.left,
  //         y: res[0].clientY - rect.top
  //       };
  //
  //       const currentPos = {
  //         x: res[1].clientX - rect.left,
  //         y: res[1].clientY - rect.top
  //       };
  //       this.drawOnCanvas(prevPos, currentPos);
  //     }));
  //   }
  // drawOnCanvas(
  //   prevPos: {x: number, y: number},
  //   currentPos: {x: number, y: number},
  // ) {
  //   if (!this.context) {return; }
  //   this.context.beginPath();
  //   if (prevPos) {
  //     this.context.moveTo( prevPos.x, prevPos.y );
  //     this.context.lineTo( currentPos.x, currentPos.y );
  //     this.context.stroke();
  //   }
  // }

  drawOnCanvas() {
    this.context.fillRect(0, 0, 40, 20);
  }

   moveCanvas() {
     if (this.x <= (300 - 40)) {
       requestAnimationFrame(() => {
         this.moveCanvas();
       });
       this.context.clearRect(0, 0, 300, 300);
       this.context.fillRect(this.x, 0, 40, 20);
     }
     this.x++;
    }
  clearCanvas() {
    this.context.clearRect(0, 0, 300, 300);
    this.x = 0;
  }
}
