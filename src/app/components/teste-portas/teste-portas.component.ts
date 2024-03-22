import { Component, OnInit } from '@angular/core';
import { NgxSerial } from 'ngx-serial';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teste-portas',
  templateUrl: './teste-portas.component.html',
  styleUrls: ['./teste-portas.component.css']
})
export class TestePortasComponent implements OnInit {
  portasDisponiveis: string[] = [];
  port: any;

  serial: NgxSerial;
  pesoAtual: string;

  constructor() {
    let options = { baudRate: 9600, dataBits: 8, parity: 'none', bufferSize: 256, flowControl: 'none', stopBits: 1 };
    this.serial = new NgxSerial(this.dataHandler, options, "\n");
    this.pesoAtual = "";
  }

  ngOnInit(): void {
    //this.listarPortasDisponiveis();
  }

  dataHandler(data: string) {
    console.log("From balanca -> " + data);
    this.pesoAtual = data.toString();
  }

  connect() {
    if (!this.port) {
      this.serial.connect((port: any) => {
        this.port = port;
      });
    }
  }

  toggleL1() {
    debugger
    if (this.port)
      //this.pesoAtual = this.serial.connect; //sendData("L1\n"); //L1\n

      debugger;
  }

  close() {
    if (this.port)
      this.serial.close((port: any) => {
        this.port = port;

      });
  }

  //   listarPortasDisponiveis() {
  //     this.serial.list()
  //       .then((portas: string[]) => {
  //         this.portasDisponiveis = portas;
  //       })
  //       .catch((error: any) => {
  //         console.error('Erro ao listar portas:', error);
  //       });
  //   }
}