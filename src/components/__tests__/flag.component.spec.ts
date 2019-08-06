import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FlagComponent } from '../flag.component'

const IMG_URL = 'https://raw.githubusercontent.com/Yummygum/flag-pack-core/master/svg'

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

  describe('Tests the different props', () => {
    it('Should render a large US flag with drop shadow.', async () => {
      const { flag, fixture } = setup()
      flag.code = 'US'
      flag.dropshadow = true

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const flagDiv = compile.querySelector('.flag')

      expect(fixture).toMatchSnapshot()
      expect(flagDiv.className).toBe('flag l border border-radius dropshadow US')
    });

    it('Should render a large US flag with a custom classname.', async () => {
      const { flag, fixture } = setup()
      flag.code = 'US'
      flag.className = 'custom-flag-class'

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const flagDiv = compile.querySelector('.flag')

      expect(fixture).toMatchSnapshot()
      expect(flagDiv.className).toBe('flag l border border-radius US custom-flag-class')
    });

    describe('Tests the different gradients', () => {
      it('Should render a large Belgium flag with a real-linear gradient', async () => {
        const { flag, fixture } = setup();
        flag.code = 'BE'
        flag.gradient = 'real-linear'

        fixture.detectChanges()
        const compile = fixture.debugElement.nativeElement
        const flagDiv = compile.querySelector('.flag')

        expect(fixture).toMatchSnapshot();
        expect(flagDiv.className).toBe('flag l border border-radius BE real-linear')
      });

      it('Should render a large Belgium flag with a top-down gradient', async () => {
        const { flag, fixture } = setup();
        flag.code = 'BE'
        flag.gradient = 'top-down'

        fixture.detectChanges()
        const compile = fixture.debugElement.nativeElement
        const flagDiv = compile.querySelector('.flag')

        expect(fixture).toMatchSnapshot();
        expect(flagDiv.className).toBe('flag l border border-radius BE top-down')
      });

      it('Should render a large Belgium flag with a real-circular gradient', async () => {
        const { flag, fixture } = setup();
        flag.code = 'BE'
        flag.gradient = 'real-circular'

        fixture.detectChanges()
        const compile = fixture.debugElement.nativeElement
        const flagDiv = compile.querySelector('.flag')

        expect(fixture).toMatchSnapshot();
        expect(flagDiv.className).toBe('flag l border border-radius BE real-circular')
      });
    })

    describe('Tests the border prop', () => {
      it('Should render a flag with a border', async () => {
        const { flag, fixture } = setup()
        flag.code = 'IT'
        flag.hasBorder = true

        fixture.detectChanges()
        const compile = fixture.debugElement.nativeElement
        const flagDiv = compile.querySelector('.flag')

        expect(fixture).toMatchSnapshot()
        expect(flagDiv.className).toBe('flag l border border-radius IT')
      })

      it('Should render a flag without a border', async () => {
        const { flag, fixture } = setup()
        flag.code = 'IT'
        flag.hasBorder = false

        fixture.detectChanges()
        const compile = fixture.debugElement.nativeElement
        const flagDiv = compile.querySelector('.flag')

        expect(fixture).toMatchSnapshot()
        expect(flagDiv.className).toBe('flag l border-radius IT')
      })
    })

    it('Should render a flag with a border-radius of 10px', async () => {
      const { flag, fixture } = setup()
      flag.code = 'IT'
      flag.customBorderRadius = '10px'

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const flagDiv = compile.querySelector('.flag')

      expect(fixture).toMatchSnapshot()
      expect(flagDiv.getAttribute('style')).toBe('border-radius: 10px;')
    })

    it('Should render a flag with no border-radius', async () => {
      const { flag, fixture } = setup()
      flag.code = 'IT'
      flag.hasBorderRadius = false

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const flagDiv = compile.querySelector('.flag')

      expect(fixture).toMatchSnapshot()
      expect(flagDiv.className).toBe('flag l border IT')
    })
  })

  test('Flag with no code given along (should throw a error)', async () => {
    const { fixture } = setup()

    expect(() => {
      fixture.detectChanges()
    }).toThrow("Cannot read property 'alpha2' of undefined")
  })

  describe('Test if it renders the correct IMG urls', () => {
    test('Japan - small', async () => {
      const { flag, fixture } = setup()
      flag.code = 'JO'
      flag.size = 's'

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const image = compile.querySelector('img')

      expect(image.getAttribute('src')).toBe(`${IMG_URL}/s/JO.svg?sanitize=true`)
    })

    test('Japan - medium', async () => {
      const { flag, fixture } = setup()
      flag.code = 'JO'
      flag.size = 'm'

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const image = compile.querySelector('img')

      expect(image.getAttribute('src')).toBe(`${IMG_URL}/m/JO.svg?sanitize=true`)
    })

    test('Japan - large', async () => {
      const { flag, fixture } = setup()
      flag.code = 'JO'
      flag.size = 'l'

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const image = compile.querySelector('img')

      expect(image.getAttribute('src')).toBe(`${IMG_URL}/l/JO.svg?sanitize=true`)
    })

    test('Alpha-3 code (Norway - small)', async () => {
      const { flag, fixture } = setup()
      flag.code = 'NOR'
      flag.size = 's'

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const image = compile.querySelector('img')

      expect(image.getAttribute('src')).toBe(`${IMG_URL}/s/NO.svg?sanitize=true`)
    })

    test('Numeric code (Canada - medium)', async () => {
      const { flag, fixture } = setup()
      flag.code = '124'
      flag.size = 'm'

      fixture.detectChanges()
      const compile = fixture.debugElement.nativeElement
      const image = compile.querySelector('img')

      expect(image.getAttribute('src')).toBe(`${IMG_URL}/m/CA.svg?sanitize=true`)
    })
  })
})
