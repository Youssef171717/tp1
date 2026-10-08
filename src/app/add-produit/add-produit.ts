import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';

@Component({
  imports: [FormsModule],
  selector: 'app-add-produit',
  standalone: true,
  templateUrl: './add-produit.html'
})
export class AddProduit implements OnInit {
  newProduit = new Produit();
  constructor() {}

  ngOnInit(): void {}
  addProduit(){
    console.log(this.newProduit);
  }
}