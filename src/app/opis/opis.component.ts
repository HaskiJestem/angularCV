import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-opis',
  templateUrl: './opis.component.html',
  styleUrl: './opis.component.css'
})
export class OpisComponent {
  constructor(private translateService: TranslateService) { 
    
  }
  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
