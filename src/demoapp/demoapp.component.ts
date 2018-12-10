import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'home',
  templateUrl: './demoapp.home.html',
})
export class Home { }

@Component({
  moduleId: module.id,
  selector: 'demo-app-on-push',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
})
export class DemoAppOnPush { }

@Component({
  selector: 'acds-root',
  templateUrl: './demoapp.component.html',
  styleUrls: ['./demoapp.component.scss'],
  host: {
    '[class.unicorn-dark-theme]': 'dark',
  },
  encapsulation: ViewEncapsulation.None,
})
export class DemoAppComponent {
  changeDetectionStrategy: string;
  selectedLanguage: string;
  navItems = [
    { name: 'KMP Demo', route: 'kmp-demo' },
    { name: 'Sorting Algorithm Demo', route: 'sortalg-demo' },
    { name: 'List Demo', route: 'list-demo' },
    { name: 'Tree Demo', route: 'tree-demo' },
    { name: 'Graph Demo', route: 'graph-demo' },
  ];
  navUIItems = [
    { name: 'Subject Demo', route: 'subject-demo' },
  ];
  availableLanguages: any[] = [
    { DisplayName: 'Languages.en', Value: 'en' },
    { DisplayName: 'Languages.zh', Value: 'zh' },
  ];

  constructor(private _element: ElementRef,
    private _translate: TranslateService) {
    // Setup the translate
    this.selectedLanguage = 'en';
    this._translate.setDefaultLang('en');
    this._translate.use(this.selectedLanguage);
  }

  toggleFullscreen(): void {
    const elem: any = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  onLanguageChange(): void {
    if (this._translate.currentLang !== this.selectedLanguage) {
      this._translate.use(this.selectedLanguage);
    }
  }
}
