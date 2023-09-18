import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
var cadastroLink = document.getElementById("contato-link");
var cadastroForm = document.getElementById("contato-form");

cadastroLink.addEventListener("click", function() {
    if (cadastroForm.style.display === "none" || cadastroForm.style.display === "") {
        cadastroForm.style.display = "block";
    } else {
        cadastroForm.style.display = "none";
    }
});
