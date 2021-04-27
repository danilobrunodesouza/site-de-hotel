import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { TemplateCentralizadoResponsivoComponent } from './shared/components/templates/template-centralizado-responsivo/template-centralizado-responsivo.component';
import { ExibeErroValidacaoFormularioComponent } from './shared/components/exibe-erro-validacao-formulario/exibe-erro-validacao-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HeaderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
