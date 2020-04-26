import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4  = 5',
    inject([CalculadoraService], (calculadoraService: CalculadoraService) => {
      const soma = calculadoraService.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }));

  it('deve garantir que 1 - 4  = -3',
    inject([CalculadoraService], (calculadoraService: CalculadoraService) => {
      const soma = calculadoraService.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(soma).toEqual(-3);
    }));

  it('deve garantir que 4 / 2  = 2',
    inject([CalculadoraService], (calculadoraService: CalculadoraService) => {
      const soma = calculadoraService.calcular(4, 2, CalculadoraService.DIVISAO);
      expect(soma).toEqual(2);
    }));

  it('deve garantir que 3 * 3  = 9',
    inject([CalculadoraService], (calculadoraService: CalculadoraService) => {
      const soma = calculadoraService.calcular(3, 3, CalculadoraService.MULTIPLICACAO);
      expect(soma).toEqual(9);
    }));

  it('deve retornar 0 operação inválida',
    inject([CalculadoraService], (calculadoraService: CalculadoraService) => {
      const soma = calculadoraService.calcular(3, 3, '%');
      expect(soma).toEqual(0);
    }));
});
