import { Component } from '@angular/core';
import { PassagensService } from '../core/services/passagens.service';
import { DadosBusca, Passagem } from '../core/types/type';
import { FormBuscaService } from '../core/services/form-busca.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent {
  passagens: Passagem[] = [];

  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {}

  ngOnInit(): void {
    const buscaPadrao: DadosBusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };
    const busca = this.formBuscaService.formEstaValido
      ? this.formBuscaService.obterDadosBusca()
      : buscaPadrao;
    this.passagensService.getPassagens(busca).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
    });
  }

  busca(ev: DadosBusca) {
    this.passagensService.getPassagens(ev).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
    });
  }
}
