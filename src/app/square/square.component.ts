import { Component, OnInit} from '@angular/core';
import {} from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NoCompComponent } from './no-comp/no-comp.component';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})


export class SquareComponent implements OnInit {

  panda: boolean = false;
  count: number = 0;
  buttonHeight = 38;
  buttonWidth = 100;
  ps: boolean = false;
  messages: Array<String> = [
    'Are you sure about this, please reconsider',
    'Oh come Onnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    'Pretty please with sugar, honey, chocolate, swiss chocolate and twix on top',
    'But Im your babyyyy',
    'You cant say No now, can you'
  ];
  changeMind: string = 'Change your mind?';
  disableMind: boolean = false;
  constructor
  (
    private modalService: NgbModal
  ) { }


  ngOnInit(): void {
    console.log('hello')
  }

  ifYes(): void {
    this.panda = !this.panda;
    this.count = 5;
  }

  ifNo(): void {

    this.buttonHeight +=50;
    this.buttonWidth +=50;
    const modalRef = this.modalService.open(NoCompComponent);

    modalRef.componentInstance.count = this.count;
    modalRef.componentInstance.message = this.messages[this.count % this.messages.length];
    this.count++;
  }

  mindChange(): void {
    this.ps = true;
    this.changeMind = 'You mine noww';
    this.disableMind = true;
    const modalRef = this.modalService.open(NoCompComponent);

    modalRef.componentInstance.message = 'Nopee, you cantt, you stuck with me nowww';
    modalRef.componentInstance.count = this.count;
  }

  psFn(): void {
    const modalRef = this.modalService.open(NoCompComponent);

    modalRef.componentInstance.message = 'To my dear valentine';
    modalRef.componentInstance.ps = this.ps;
    modalRef.componentInstance.count = 6;

  }
}
