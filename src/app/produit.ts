import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.html'
})
export class Produits implements OnInit {

  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produits = this.produitService.listeProduit();
  }
}