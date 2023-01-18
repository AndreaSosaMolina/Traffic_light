import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent {

  colors: string[] = []
  colorSelected: string = ''

  allColors( event: string[]): void{
    this.colors = event;
  }

  selectColor( color: string): void{
    this.colorSelected = color
  }

}
