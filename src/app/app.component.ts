import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { TranslocoService } from '@ngneat/transloco';

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
export class AppComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

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
    { displayName: 'Languages.en', value: 'en' },
    { displayName: 'Languages.zh', value: 'zh' },
  ];

  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private elementRef: ElementRef,
    private transSvc: TranslocoService,
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
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
    this.transSvc.setActiveLang(this.selectedLanguage);
  }
}
