import { Component, OnInit } from '@angular/core';
import { ProprietarioService } from '../proprietario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateProprietario } from '../proprietario.model';

@Component({
  selector: 'app-update-proprietario',
  templateUrl: './update-proprietario.component.html',
  styleUrls: ['./update-proprietario.component.css']
})
export class UpdateProprietarioComponent implements OnInit {

  id: string;
  request: UpdateProprietario;

  constructor(private proprietarioService: ProprietarioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.proprietarioService.getProprietario(this.id).subscribe(res => { 
      this.request = {
        nome: `${res.nome}`,
        endereco : `${res.endereco}`
      };
    });
  }

  atualizar(){
    this.proprietarioService.updateProprietario(this.id, this.request).subscribe(res => {
      alert(`Nome: ${res.nome}, Endereco: ${res.endereco}`);
      this.router.navigate(['/proprietarios']);
    });
  }

}
