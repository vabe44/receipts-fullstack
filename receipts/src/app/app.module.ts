import { RecommendedReceiptsComponent } from './../components/recommended-receipts/recommended-receipts';
import { ReceiptCardDetailedComponent } from './../components/receipt-card-detailed/receipt-card-detailed';
import { AboutPage } from './../pages/about/about';
import { CreateReceiptPage } from './../pages/create-receipt/create-receipt';
import { ReceiptPage } from './../pages/receipt/receipt';
import { SearchPipe } from './../pipes/search';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReceiptsProvider } from '../providers/receipts/receipts';

import { ReceiptCardComponent } from '../components/receipt-card/receipt-card';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ReceiptCardComponent,
    ReceiptCardDetailedComponent,
    RecommendedReceiptsComponent,
    SearchPipe,
    ReceiptPage,
    CreateReceiptPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ReceiptPage,
    CreateReceiptPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ReceiptsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
