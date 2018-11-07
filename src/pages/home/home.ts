import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public client: string;
  public cpf: number;
  public type: string

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.client = "Sim";
    this.type = "Pessoa Fisica"
  }
  goToItens() {
    if (this.cpf == 47264539806) {
      this.navCtrl.setRoot(ItemsPage)
      return
    } else {
      let toast = this.toastCtrl.create({
        message: "Insira um CPF valido",
        duration: 3000,
        position: "top",
      });
      toast.present();
    }
  }
}
