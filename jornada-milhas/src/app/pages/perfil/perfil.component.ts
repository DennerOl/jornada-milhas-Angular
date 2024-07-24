import { Component } from '@angular/core';
import { PessoaUsuaria } from '../core/types/type';
import { TokenService } from '../core/services/token.service';
import { CadastroService } from '../core/services/cadastro.service';
import { FormGroup } from '@angular/forms';
import { FormularioService } from '../core/services/formulario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  titulo = 'Olá ';
  textoBotao = 'Atualizar';
  perfilComponent = true;

  token = '';
  nome = '';
  cadastro!: PessoaUsuaria;
  form!: FormGroup<any> | null;

  constructor(
    private tokenService: TokenService,
    private cadastroService: CadastroService,
    private formularioService: FormularioService
  ) {}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe((cadastro) => {
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome;
      this.carregarFormulario();
    });
  }

  carregarFormulario() {
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado,
      genero: this.cadastro.genero,
    });
  }

  deslogar() {}

  atualizar() {}
}
