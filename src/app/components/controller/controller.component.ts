import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  colorsArr: string[] = ['rojo', 'amarillo', 'verde']
  state: boolean = false;
  
  selectedColor: string = ''

  @Output() colors:     EventEmitter<string[]> = new EventEmitter<string[]> ()
  @Output() oneColor:  EventEmitter<string> = new EventEmitter<string>()

  emitColor(): void{
    if(this.state === false){
        return
    } else {
      this.oneColor.emit(this.selectedColor)
    }
  }

  turnOnOff(): void{
    if(this.state === false){
        this.state = true;
        this.selectedColor = 'rojo'

    } else {
      this.state = false
      this.selectedColor = 'niguno'
    }

    this.oneColor.emit(this.selectedColor)
    
    
  }
}
