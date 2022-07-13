import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CharizardComponent } from './charizard.component';
import { PokemonService } from '../services/pokemon.service';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled:HTMLElement; 
  let service:PokemonService;
  let httpMock:HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      declarations: [ CharizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService); //  
  httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test debe de hacer match con el spanshot', () => {
    console.log(compiled.innerHTML)
  })

  it('test debe de cargar la imagen direcatmente', () => {
    const dummyRicky = {
      name: 'aaadadad',
      img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    }
    const request = httpMock.expectOne('https://rickandmortyapi.com/api/character');
    expect ( request.request.method).toBe('GET'); 
    request.flush(dummyRicky);

    fixture.detectChanges();
    console.log(compiled.innerHTML)
  })

});
