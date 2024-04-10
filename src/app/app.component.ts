import { Component, AfterViewInit, OnInit, ChangeDetectorRef} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { KolorService } from './kolor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angularCV';
  currentColor: string ='#e0bad7';

  constructor(private translateService: TranslateService,
    private kolorService: KolorService,
    private cdr: ChangeDetectorRef
  ) { 
    this.kolorService.currentColor.subscribe(color => {
      this.currentColor = color;
    });
  }
  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.kolorService.currentColor.subscribe(color => {
      this.currentColor = color;
    });
  }
}
