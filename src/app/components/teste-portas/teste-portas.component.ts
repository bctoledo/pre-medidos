import { Component, Input, OnInit, Output } from '@angular/core';
import { NgxSerial } from 'ngx-serial';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-teste-portas',
  templateUrl: './teste-portas.component.html',
  styleUrls: ['./teste-portas.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TestePortasComponent implements OnInit {

  port: any;
  serial: NgxSerial;

  pesoAtual: string;
  leituras: number[] = [];

  constructor() {
    let options = { baudRate: 9600, dataBits: 8, parity: 'none', bufferSize: 256, flowControl: 'none', stopBits: 1 };
    this.serial = new NgxSerial(this.dataHandler, options, "\n");
    this.pesoAtual = "";
  }

  ngOnInit(): void {
    // this.realizarLeituras();
  }

  dataHandler = (data: string) => {
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
    if (this.port) {
      //this.pesoAtual = this.serial.connect; //sendData("L1\n"); //L1\n

      const regex = /(\d+(\.\d+)?)/; // Expressão regular para encontrar números decimais
      const matches = this.pesoAtual.match(regex);

      if (matches && matches.length > 1) {
        const number = parseFloat(matches[1]);
        console.log(number); // Output: 313.1
        this.leituras.push(number);
      } else {
        console.log("Nenhum número encontrado na string.");
      }
    }
  }

  close() {
    if (this.port)
      this.serial.close((port: any) => {
        this.port = port;
        this.pesoAtual = "";
      });
  }

  // realizarLeituras() {

  //   if (this.port) {
  //     this.leituras = [];
  //     for (let i = 0; i < 5; i++) {
  //       let leitura = "Leitura " + (i + 1);
  //       this.leituras.push(leitura);
  //       debugger
  //     }
  //   }
  // }

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