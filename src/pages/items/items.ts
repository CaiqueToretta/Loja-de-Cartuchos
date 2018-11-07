import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyItemsPage } from '../buy-items/buy-items';


@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }
  initializeItems() {
    this.items = [
      'HP 91 DESIGNJET (C9162A)',
      'HP 92 DESIGNJET (C9262A)',
      'HP 93 DESIGNJET (C9362A)',
      'HP 94 DESIGNJET (C9462A)',
      'HP 95 DESIGNJET (C9562A)',
      'HP 96 DESIGNJET (C9662A)',
      'HP 97 DESIGNJET (C9762A)',
      'HP 98 DESIGNJET (C9862A)',
    ];
  }
  getItems(ev: any) {
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  openModal(){
    this.navCtrl.push(BuyItemsPage)
  }
}
