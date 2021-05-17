import { Component, OnInit } from '@angular/core';
import { DadosOrdens } from '../model/DadosOrdens';
import { OsService } from '../service/os.service';

@Component({
  selector: 'app-close-os',
  templateUrl: './close-os.component.html',
  styleUrls: ['./close-os.component.css'],
})
export class CloseOSComponent implements OnInit {


  listOrdens: DadosOrdens[];
  ordensForm: DadosOrdens = new DadosOrdens;
  id: Number;

  constructor(private osService: OsService) { }

  ngOnInit(): void {
    this.findOrdens()
  }

  findOrdens(){
    this.osService.listarOrdens().subscribe((data: DadosOrdens[]) => {
      this.listOrdens = data;
  })
}

fecharOS() {
  this.osService.criarOrdens(this.ordensForm).subscribe((dados: DadosOrdens) => {
    this.ordensForm = dados;
    location.assign('/status')
  })

  }

 
}
