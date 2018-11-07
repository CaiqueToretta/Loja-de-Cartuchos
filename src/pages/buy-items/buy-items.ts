import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ItemsPage } from '../items/items';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-buy-items',
  templateUrl: 'buy-items.html',
})
export class BuyItemsPage {

  public value: number;
  public qtd: number;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.value = 63;
    this.qtd = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyItemsPage');
  }
  moreItems() {
    this.qtd = this.qtd++
    console.log(this.qtd++);
    this.value = 63
    this.value = this.value * this.qtd;
  }
  anyLessItems() {
    this.qtd = this.qtd--
    console.log(this.qtd--)
    this.value = 63
    this.value = this.value * this.qtd;
    if (this.value < 0 && this.qtd < 0) {
      this.value = 0;
      this.qtd = 0
    }
  }
  confirm() {
    const alert = this.alertCtrl.create({
      title: 'Insira o Cartão e digite sua senha',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.validate();
        }
      }]
    });
    alert.present();
  }
  validate() {
    let loading = this.loadingCtrl.create({
      content: 'Validando compra'
    });
    loading.present();

    setTimeout(() => {
      const alert = this.alertCtrl.create({
        title: 'Compra finalizada com sucesso',
        message: 'Oque dejesa fazer?',
        buttons: [{
          text: 'Outra compra',
          handler: () => {
            this.navCtrl.setRoot(ItemsPage)
          }
        },
          {
            text: 'Voltar para o menu',
            handler: () => {
              this.navCtrl.setRoot(HomePage)
            }
        }]
      });
      alert.present();
      loading.dismiss();
    }, 5000);
   
  }
}
