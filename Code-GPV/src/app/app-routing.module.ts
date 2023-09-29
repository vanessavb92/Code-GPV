// Se você estiver usando Angular, considere usar uma abordagem Angular para manipular o DOM em vez de manipular diretamente com JavaScript puro.
// Você pode criar um componente e usar diretivas ngIf/ngHide para mostrar/ocultar elementos.

// Angular Example:
// No seu componente:
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-seu-componente',
//   templateUrl: './seu-componente.component.html',
//   styleUrls: ['./seu-componente.component.css']
// })
// export class SeuComponente {
//   exibirCadastro = false;
//   toggleCadastro() {
//     this.exibirCadastro = !this.exibirCadastro;
//   }
// }

// HTML:
// <button (click)="toggleCadastro()">Mostrar/Ocultar Cadastro</button>
// <div *ngIf="exibirCadastro">
//   <!-- Seu formulário de cadastro aqui -->
// </div>
