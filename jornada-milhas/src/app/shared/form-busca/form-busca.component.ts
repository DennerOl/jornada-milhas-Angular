import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/pages/core/services/form-busca.service';
import { PassagensService } from 'src/app/pages/core/services/passagens.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent {
  @Output() realizarBusca = new EventEmitter();
  constructor(public formBuscaService: FormBuscaService) {}

  buscar() {
    if (this.formBuscaService.formEstaValido) {
      const formBuscaValue = this.formBuscaService.obterDadosBusca();
      this.realizarBusca.emit(formBuscaValue);
    } else {
      alert('O formulário precisa ser preenchido');
    }
  }
}

//aula listando passagens
