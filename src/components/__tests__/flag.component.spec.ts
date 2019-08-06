import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FlagComponent } from '../flag.component'

describe('FlagComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlagComponent],
      imports: [BrowserModule]
    }).compileComponents();
  }));

  function setup() {
    const fixture = TestBed.createComponent(FlagComponent)
    const flag = fixture.debugElement.componentInstance;
    return { fixture, flag };
  }

  describe('Test different flag sizes', () => {
    it('Should render a large Dutch flag.', async () => {
      const { flag, fixture } = setup()
      flag.code = 'NL'
      flag.size = 'l'

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const flagDiv = compile.querySelector('.flag')

      expect(fixture).toMatchSnapshot()
      expect(flagDiv.className).toBe('flag l border border-radius NL')
    });

    it('Should render a medium Dutch flag.', async () => {
      const { flag, fixture } = setup()
      flag.code = 'NL'
      flag.size = 'm'

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const flagDiv = compile.querySelector('.flag')

      expect(fixture).toMatchSnapshot()
      expect(flagDiv.className).toBe('flag m border border-radius NL')
    });

    it('Should render a small Dutch flag.', async () => {
      const { flag, fixture } = setup();
      flag.code = 'NL'
      flag.size = 's'

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const flagDiv = compile.querySelector('.flag')

      expect(fixture).toMatchSnapshot();
      expect(flagDiv.className).toBe('flag s border border-radius NL')
    });
  })
})
