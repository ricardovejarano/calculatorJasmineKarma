import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(public navCtrl: NavController) { }

  // ========== SIMPLE =============
  firstNumber = null;
  secondNumber = null;
  result = '';
  // ========== COMPLEX =============
  parcialOperation = ''; // Shows string parcial result
  actualNumber = 0;      // Display current number
  resultComplex = 0;     // Display parcial result in second row of the complex calculator
  lastCharacter = '';
  alreadyOperator = false;
  arrayOperations = [];

  ngOnInit() {
  }

  renderResult(index: number, a: number, b: number) {
    switch (index) {
      case 0: this.result = this.sum(a, b).toString();
        break;
      case 1: this.result = this.substraction(a, b).toString();
        break;
      case 2: this.result = this.mul(a, b).toString();
        break;
      case 3: this.result = this.div(a, b).toString();
        break;
      case 4: this.result = this.pow(a, b).toString();
        break;
    }
  }

  clear() {
    this.firstNumber = null;
    this.secondNumber = null;
    this.result = '';
  }


  sum(a: number, b: number) {
    return a + b;
  }

  substraction(a: number, b: number) {
    return a - b;
  }

  mul(a: number, b: number) {
    return a * b;
  }

  div(a: number, b: number) {
    if (a === 0 && b === 0) {
      return 'indefined';
    } else {
      return a / b;
    }
  }

  pow(number: number, pow: number) {
    return Math.pow(number, pow);
  }


  // ============================= complex calculatorx ===============================//

  renderParcialOperation(character) {
    this.parcialOperation = this.convertParcialOperation(this.parcialOperation, character);
    this.resultComplex = this.calculateResultFromString(this.parcialOperation);
  }

  convertParcialOperation(history, character) {
    if (this.alreadyOperator !== true || this.isOperator(character) === false) {
      history += character;
    }
    this.isOperator(character) === true ? this.alreadyOperator = true : this.alreadyOperator = false;
    this.lastCharacter = character.toString();
    return history.toString();
  }

  equal() {

  }

  isOperator(character) {
    if (character === '+' || character === '-' || character === '÷' || character === 'x') {
      this.lastCharacter = this.lastOperator(character);
      this.arrayOperations.push(this.lastCharacter);
      return true;
    } else {
      return false;
    }
  }

  lastOperator(operator) {
    let lastOperator = '';
    switch (operator) {
      case '+': lastOperator = '+';
        break;
      case '-': lastOperator = '-';
        break;
      case '÷': lastOperator = '÷';
        break;
      case 'x': lastOperator = 'x';
        break;
    }
    return lastOperator;
  }

  calculateResultFromString(allOperation) {
    const result = 0;
    const arraySplitted: Array<number> = [];
    // let totalArray = 0;

    console.log(allOperation.split('+').length);
    console.log(allOperation.split('-').length);
    console.log(allOperation.split('÷').length);
    console.log(allOperation.split('x').length);

    /*
    for (let j = 0; j < totalArray; j++) {
      console.log(Number(allOperation.split('+')[j]));
      console.log(Number(allOperation.split('-')[j]));
      console.log(Number(allOperation.split('÷')[j]));
      console.log(Number(allOperation.split('x')[j]));
    }
    */
    /*
    if (allOperation.split('+')[j]) {
      arraySplitted.push(Number(allOperation.split('+')[j]));
    } else if (allOperation.split('-')[j]) {
      arraySplitted.push(Number(allOperation.split('-')[j]));
    } else if (allOperation.split('÷')[j]) {
      arraySplitted.push(Number(allOperation.split('÷')[j]));
    } else if (allOperation.split('x')[j]) {
      arraySplitted.push(Number(allOperation.split('x')[j]));
    }*/

    // console.log('ArraySplitted', arraySplitted, 'ArrayOperators', this.arrayOperations);
    /*
    for (let x = 0; x < arraySplitted.length; x++) {
      result += arraySplitted[x];
    }
    */
    return result;
  }

}
