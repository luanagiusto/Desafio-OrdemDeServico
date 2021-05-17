import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DadosOrdens } from '../model/DadosOrdens';
import { OsService } from '../service/os.service';



@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {


listOrdens: DadosOrdens[];
ordensForm: DadosOrdens;

osPut: DadosOrdens;

  constructor(private osService: OsService) { }

  ngOnInit() {
    this.getOrdens()
    }


 getOrdens() {
    this.osService.listarOrdens().subscribe((data: DadosOrdens[]) => {
      this.listOrdens = data;
  })
  }


      }





