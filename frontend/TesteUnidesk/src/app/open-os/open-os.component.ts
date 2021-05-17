import { Component, OnInit } from '@angular/core';
import { DadosOrdens } from '../model/DadosOrdens';
import { OsService } from '../service/os.service';

@Component({
  selector: 'app-open-os',
  templateUrl: './open-os.component.html',
  styleUrls: ['./open-os.component.css']
})
export class OpenOSComponent implements OnInit {

  listOrdens: DadosOrdens[];
  ordensForm: DadosOrdens = new DadosOrdens;


  constructor(private osService: OsService) { }

  ngOnInit(){
  }

  cadastrarOrdem() {
    this.osService.criarOrdens(this.ordensForm).subscribe((dados: DadosOrdens) => {
      this.ordensForm = dados;
      location.assign('/status')
    })

    }



    }



