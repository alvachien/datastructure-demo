/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 * 
 * File: subject-demo.component.ts
 * 
 */

import { Component, OnInit } from '@angular/core';
import { FormulaParser, Polynomial } from 'actslib';

@Component({
  selector: 'demoapp-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.scss'],
})
export class SubjectDemoComponent implements OnInit {
  /**
   * Polynomial part
   */
  _polynomial: Polynomial | null;
  mathExpress: string;
  mathExpressEval: string;
  PolynomialDisplayStrings: string[];  
  polAddCoef: number;
  polAddExp: number;
  polEval: number;
  polNewForAdd: string;
  polNewForMultiply: string;
  private _polForAdd: Polynomial | null;
  private _polForMultiply: Polynomial | null;

  constructor() {    
    this._polynomial = null;
    this.PolynomialDisplayStrings = [];
    this.mathExpress = '';
    this.mathExpressEval = '';
    this.polAddCoef = 0;
    this.polAddExp = 0;
    this.polEval = 0;
    this.polNewForAdd = '';
    this.polNewForMultiply = '';
    this._polForAdd = null;
    this._polForMultiply = null;
  }

  ngOnInit() {
  }

  /**
   * Math Expression
   */
  public OnMathExpressEval(): void {
    let insForm: FormulaParser = new FormulaParser();
    
    try {
      insForm.init(this.mathExpress);
      this.mathExpressEval = insForm.evaulate().toString();
    } catch(err: any) {
      this.mathExpressEval = err.toString();
    }

    
  }
  /**
   * Polynomial part
   */
  public OnPolynomialRandomGenerate(): void {
    this._polynomial = new Polynomial();
    this.PolynomialDisplayStrings = [];

    const nterms: number = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i <= nterms; i++) {
      const cof: number = Math.floor(Math.random() * 50 + 1);
      this._polynomial.NewTerm(cof, i);
    }

    this.PolynomialDisplayStrings.push(this._polynomial.Print());
  }
  public OnPolynomialNewTerm(): void {
    if (this.polAddCoef !== 0) {
      this._polynomial?.NewTerm(this.polAddCoef, this.polAddExp);
      let rst = this._polynomial?.Print();
      if (rst) {
        this.PolynomialDisplayStrings.push(rst);
      }
    }
  }
  public OnPolynomialEval(): void {
    const rst = this._polynomial?.Eval(this.polEval);
    if (rst) {
      this.PolynomialDisplayStrings.push(this._polynomial?.Print() + ' = ' + rst.toString() + ' when x = ' + this.polEval.toString());
    }
  }
  public OnPolynomialNewForAddRandom(): void {
    this._polForAdd = new Polynomial();
    const nterms: number = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i <= nterms; i++) {
      const cof: number = Math.floor(Math.random() * 20 + 10);
      this._polForAdd.NewTerm(cof, i);
    }

    this.polNewForAdd = this._polForAdd.Print();
  }
  public OnPolynomialAdd(): void {
    if (this._polForAdd !== null) {
      const rst = this._polynomial?.Add(this._polForAdd);
      this.PolynomialDisplayStrings.push(rst!.Print());
    }
  }
  public OnPolynomialNewForMultiplyRandom(): void {
    this._polForMultiply = new Polynomial();
    const nterms: number = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i <= nterms; i++) {
      const cof: number = Math.floor(Math.random() * 20 + 30);
      this._polForMultiply.NewTerm(cof, i);
    }

    this.polNewForMultiply = this._polForMultiply.Print();
  }
  public OnPolynomialMultiply(): void {
    if (this._polForMultiply !== null) {
      const rst = this._polynomial?.Multiply(this._polForMultiply);
      this.PolynomialDisplayStrings.push(rst!.Print());
    }
  }
  public OnPolynomialRetset(): void {
    this._polynomial = null;
    this.PolynomialDisplayStrings = [];
    this.polAddCoef = 0;
    this.polAddExp = 0;
    this.polEval = 0;
    this.polNewForAdd = '';
    this.polNewForMultiply = '';
    this._polForAdd = null;
    this._polForMultiply = null;
  }
}
