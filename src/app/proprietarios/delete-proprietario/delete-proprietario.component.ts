import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprietarioService } from '../proprietario.service';
import { Proprietario } from '../proprietario.model';

@Component({
  selector: 'app-delete-proprietario',
  templateUrl: './delete-proprietario.component.html',
  styleUrls: ['./delete-proprietario.component.css']
})
export class DeleteProprietarioComponent implements OnInit {

  id: string;
  proprietario: Proprietario;

  constructor(private proprietarioService: ProprietarioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.proprietarioService.getProprietario(this.id).subscribe(res => {
      this.proprietario = res;
    });
  }

  delete() {
    this.proprietarioService.deleteProprietario(this.id).subscribe(res => {
      alert('Removido com sucesso!');
      this.router.navigate(['/proprietarios']);
    },
    error =>{
      alert('Não é possível remover com associação a imóveis!');
      this.router.navigate(['/proprietarios']);
    });
  }
}
