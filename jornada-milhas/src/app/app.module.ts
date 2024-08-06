import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaComponent } from './pages/busca/busca.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AutenticacaoInterceptor } from './pages/core/interceptors/autenticacao.interceptor';
import { MaterialModule } from './pages/core/material/matirial.module';
import { DepoimentosComponent } from './pages/home/depoimentos/depoimentos.component';
import { HomeComponent } from './pages/home/home/home.component';
import { PromocoesComponent } from './pages/home/home/promocoes/promocoes/promocoes.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromocoesComponent,
    LoginComponent,
    CadastroComponent,
    PerfilComponent,
    BuscaComponent,
    DepoimentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
