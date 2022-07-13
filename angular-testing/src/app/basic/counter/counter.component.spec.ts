import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent; //Componente que voy a probar
  let fixture: ComponentFixture<CounterComponent>; // Sacamos el componente que vamos a probar
  let compiled: HTMLElement; 

  beforeEach(async () => {  //Funcion que se va a ejecutar antes que ninguna otra prueba
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy(); //Prueba de que el componente deberia de exisitir
  });

  it('Prueba para validar la estrucutra del html, tiene que ser igual al snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it(' increaseBy debe de incrimentar basado en el argumento', () => { //Funcion para saber que esta trabajando de la manera correcta o que tu esperas
    component.increaseBy(5); // Aumentamos en 5  
    expect(component.counter).toBe(15) //Aqui lo que esperamos es que la variable counter sea 15
  })

  it('Hacer click en los botones debe de incrementar en 1 o decrementar en 1',() => {  //Al pulsar se supone que deberia de incrimentar
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click(); //El aumenta boton
    expect(component.counter).toBe(11)
    buttons[1].click(); //El decrementa boton
    buttons[1].click(); //llamamos a click 2 veces puesto que en la linea 38 esta seteado a 11 asi que hay que bajarlo hasta 9. 
    expect(component.counter).toBe(9)
  })

  it( 'Cambiar el counter debe de actualizar la eitqueta', () => {
    component.increaseBy(10);  //icrementamos en 10 el valor de counter
    fixture.detectChanges(); //actualixza el elemento o los detecta
    const h1 = compiled.querySelector('h1'); 
    expect(h1?.textContent).toContain('20'); // esperamos que h1 (texto contnido sea  20)
  })
});
