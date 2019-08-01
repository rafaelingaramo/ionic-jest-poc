import { TestBed, ComponentFixture,  } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { HomePageModule } from './home.module'
import { HomePage } from './home.page'

let component: HomePage;
let fixture: ComponentFixture<HomePage>;

describe('HomePageComponent', () => {
  beforeEach(async () => {
    /*executa antes de todo teste
      pode ser declarado 1 ou mais vezes
    */
    TestBed.configureTestingModule({
      imports: [HomePageModule],
      declarations: [
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage)
    component = fixture.componentInstance
  })

  beforeAll(async () => {
    /*executa antes de todos os testes
      pode ser declarado 1 ou mais vezes
    */
  })

  afterEach(() => {
    /*executa depois de cada */
    fixture.destroy();
    component = null;
  })

  afterAll(() => {
    /* executa depois de todos */
  })

  it('Home Page is created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  })

  it('Should match its own Snapshot', () => {
    //expect(fixture).toMatchSnapshot()
  })

  it('Should validate screen labels', () => {
    const firstNameLabel = fixture.debugElement.query(By.css("#home-page-first-name")).nativeElement
    const lastNameLabel = fixture.debugElement.query(By.css("#home-page-last-name")).nativeElement
    const addressLabel = fixture.debugElement.query(By.css("#home-page-address")).nativeElement
    const notesLabel = fixture.debugElement.query(By.css("#home-page-notes")).nativeElement
    const createAccountButton = fixture.debugElement.query(By.css("#home-page-button-create-account")).nativeElement
    
    expect(firstNameLabel.textContent).toBe("First Name *")
    expect(lastNameLabel.textContent).toBe("Last Name *")
    expect(addressLabel.textContent).toBe("Address")
    expect(notesLabel.textContent).toBe("Notes")
    expect(createAccountButton.textContent).toBe("Create account")
  })
})