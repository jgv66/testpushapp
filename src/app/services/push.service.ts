import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

const ONESIGNAL_APP_ID = '68e87daa-79cd-45e1-b80e-2980dd469e66';
const FIREBASE_ID_DEL_REMITENTE = '112240695413';

@Injectable({
  providedIn: 'root'
})
export class PushService {


  constructor( private oneSignal: OneSignal ) { }

  configInicial() {

    this.oneSignal
        .startInit( ONESIGNAL_APP_ID, FIREBASE_ID_DEL_REMITENTE );

    this.oneSignal
        .inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal
        .handleNotificationReceived().subscribe((notif) => {
         console.log('notificacion recibida', notif );
    });

    this.oneSignal
        .handleNotificationOpened().subscribe((notif) => {
      // do something when a notification is opened
      console.log('notificacion fue abierta', notif );
    });

    this.oneSignal.endInit();
  }

}
