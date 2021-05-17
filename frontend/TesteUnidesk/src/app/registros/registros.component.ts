import { Component, OnInit } from '@angular/core';
import { DadosOrdens } from '../model/DadosOrdens';
import { OsService } from '../service/os.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

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

}
