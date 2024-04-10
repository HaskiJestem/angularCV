import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zainteresowania',
  templateUrl: './zainteresowania.component.html',
  styleUrl: './zainteresowania.component.css'
})
export class ZainteresowaniaComponent implements OnInit {
  interestsData = [
    {
      name: 'Astronomy',
      description: 'The study of celestial objects, space, and the physical universe as a whole. It involves observing the night sky and learning about the stars, planets, and galaxies.'
    },
    {
      name: 'Coding',
      description: 'The process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task.'
    },
    {
      name: 'Photography',
      description: 'The art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
