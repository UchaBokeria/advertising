import {AfterViewInit, Component,ElementRef,ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  startx:any;
  pressed = false;
  renderer:any;
  eventX:any;
  constructor() { }

  @ViewChild('slider') slider !: ElementRef;
  @ViewChild('sliderInner') sliderInner !: ElementRef;

  ngOnInit(): void {
  }
  
  down($event:any){
    this.pressed = true;
    this.startx = $event.offsetX - this.sliderInner.nativeElement.offsetLeft;
  }

  move($event:any) :void{
    if(!this.pressed){  
    }
    else{
      this.sliderInner.nativeElement.style.left = `-${this.startx - $event.offsetX}px`;

      var fullSize  = -(this.slider.nativeElement.offsetLeft - this.slider.nativeElement.offsetWidth) + this.slider.nativeElement.offsetLeft;

      if(-this.sliderInner.nativeElement.offsetLeft > fullSize ){ 
        this.sliderInner.nativeElement.style.left = `-${fullSize}px`;;
      }
    }
  }

  disable(){
    this.pressed = false;
  }
}




