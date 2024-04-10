import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { KontaktService } from '../kontakt.service';
import { KolorService } from '../kolor.service';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.css'
})
export class KontaktComponent implements OnInit, AfterViewInit {
  name = '';
  message = '';
  currentColor: string ='#e0bad7';

  @ViewChild('submitButton') submitButton?: MatButton;

  constructor(private kontaktService: KontaktService,
    private kolorService: KolorService,
    private cdr: ChangeDetectorRef) {this.kolorService.currentColor.subscribe(color => {
      this.currentColor = color;
    }); }

  onSubmit() {
    this.kontaktService.sendMessage({ name: this.name, message: this.message }).subscribe();
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.kolorService.currentColor.subscribe(color => {
      this.currentColor = color;
    });
  }
}
