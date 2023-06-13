import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Journal2Component } from './journal2/journal2.component';

describe('Journal2Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Journal2Component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Journal2Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'journals'`, () => {
    const fixture = TestBed.createComponent(Journal2Component);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('journals');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Journal2Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('journals app is running!');
  });
});
