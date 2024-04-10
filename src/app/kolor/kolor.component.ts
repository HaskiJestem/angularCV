import { Component } from '@angular/core';
import { KolorService } from '../kolor.service';

@Component({
  selector: 'app-kolor',
  templateUrl: './kolor.component.html',
  styleUrl: './kolor.component.css'
})
export class KolorComponent {
  kolor: string = '#e0bad7'; 

  constructor(private kolorService: KolorService) { }

  changeColor() {
    this.kolorService.changeColor(this.kolor);
  }
}
