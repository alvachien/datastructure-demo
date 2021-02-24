import { Component, ElementRef } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'acds-root-home',
  templateUrl: './app.home.html',
})
export class HomeComponent { }

@Component({
  selector: 'acds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // changeDetectionStrategy: string = '';
  // selectedLanguage: string;
  // navItems = [
  //   { name: 'KMP Demo', route: 'kmp-demo' },
  //   { name: 'Sorting Algorithm Demo', route: 'sortalg-demo' },
  //   { name: 'List Demo', route: 'list-demo' },
  //   { name: 'Tree Demo', route: 'tree-demo' },
  //   { name: 'Graph Demo', route: 'graph-demo' },
  // ];
  // navUIItems = [
  //   { name: 'Subject Demo', route: 'subject-demo' },
  // ];
  // availableLanguages: any[] = [
  //   { DisplayName: 'Languages.en', Value: 'en' },
  //   { DisplayName: 'Languages.zh', Value: 'zh' },
  // ];

  // constructor(private _element: ElementRef,
  //   private _translate: TranslocoService) {
  //   // Setup the translate
  //   this.selectedLanguage = 'en';
  // }

  // toggleFullscreen(): void {
  //   const elem: any = this._element.nativeElement.querySelector('.demo-content');
  //   if (elem.requestFullscreen) {
  //     elem.requestFullscreen();
  //   } else if (elem.webkitRequestFullScreen) {
  //     elem.webkitRequestFullScreen();
  //   } else if (elem.mozRequestFullScreen) {
  //     elem.mozRequestFullScreen();
  //   } else if (elem.msRequestFullScreen) {
  //     elem.msRequestFullScreen();
  //   }
  // }

  // onLanguageChange(): void {
  //   // if (this._translate. !== this.selectedLanguage) {
  //   //    this._translate.use(this.selectedLanguage);
  //   //  }
  // }
}
