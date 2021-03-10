import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root-home',
  templateUrl: './app.home.html',
})
export class HomeComponent {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  elementRef: ElementRef;

  navItems = [
    { name: 'KMP Demo', route: 'kmp-demo' },
    { name: 'Sorting Algorithm Demo', route: 'sortalg-demo' },
    { name: 'List Demo', route: 'list-demo' },
    { name: 'Tree Demo', route: 'tree-demo' },
    { name: 'Graph Demo', route: 'graph' },
  ];
  navUIItems = [
    { name: 'Finance Demo', route: 'finance' },
    { name: 'Subject Demo', route: 'subject-demo' },
  ];
  selectedLanguage = 'en';
  availableLanguages: any[] = [
    { DisplayName: 'Languages.en', Value: 'en' },
    { DisplayName: 'Languages.zh', Value: 'zh' },
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, elementRef: ElementRef) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.elementRef = elementRef;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleFullscreen(): void {
    const elem: any = this.elementRef.nativeElement.querySelector('.demo-content');
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
    // if (this._translate. !== this.selectedLanguage) {
    //    this._translate.use(this.selectedLanguage);
    //  }
  }  
}