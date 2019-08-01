import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FlagComponent } from '../flag.component'

describe('FlagComponent', () => {
  let component: FlagComponent;
  let fixture: ComponentFixture<FlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlagComponent],
      imports: [BrowserModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('Should display a flight', () => {
    component.code = 'nl'

    expect(fixture).toMatchSnapshot();
  });
})
