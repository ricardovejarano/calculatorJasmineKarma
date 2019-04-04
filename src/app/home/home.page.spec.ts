import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Adding two numbers', () => {
    const result = component.sum(6, 3);
    expect(result).toEqual(9);
  });

  it('Subs two numbers', () => {
    const result = component.substraction(6, 3);
    expect(result).toEqual(3);
  });

  it('Mul two numbers', () => {
    const result = component.mul(6, 3);
    expect(result).toEqual(18);
  });

  it('Div two numbers', () => {
    const result = component.div(6, 3);
    expect(result).toEqual(2);
  });

  it('Div 0/0', () => {
    const result = component.div(0, 0);
    expect(result).toEqual('indefined');
  });

});
