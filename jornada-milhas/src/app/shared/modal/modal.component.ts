import { Component } from '@angular/core';
import { FormBuscaService } from 'src/app/pages/core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(public formBuscaService: FormBuscaService) {}
}
