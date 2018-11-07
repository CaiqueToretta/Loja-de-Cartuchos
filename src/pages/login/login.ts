import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HomeClientPage } from '../home-client/home-client';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: string;
  public password: string;
  public typeUser: string;
  public showPass: boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.typeUser = "Cliente"
    this.showPass = false
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToHome(){
    if(this.user == "Caique.Toretta" && this.password == "123456789"){
      this.navCtrl.setRoot(HomePage);
      return
    }
    if(this.user =="Fernando.Martins" && this.password == "123456789"){
       this.navCtrl.setRoot(HomeClientPage);
       return
    }else{
      let toast = this.toastCtrl.create({
        message: "Usuário ou senha incorretos",
        duration: 3000,
        position: "top",
      });
      toast.present();
    }
  }
  updateString(){
    console.log(this.showPass)
  }
}
