import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it( 'Should create the Home Coponent', () => {
    expect(component).toBeTruthy();
  });

  it( 'Should have a link to Dashboard', () => {
    const homeLinks = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );
    let exists = false;
    
    homeLinks.map( el => {
      if (el.attributes['routerLink'] === '/dashboard') {
        exists = true;
      }
    });
    
    expect( exists ).toBeTruthy();

  })

});
