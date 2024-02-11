import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-no-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './no-comp.component.html',
  styleUrl: './no-comp.component.scss'
})
export class NoCompComponent {

   message: string = '';
   count: number = 0;

   constructor(
    private modal: NgbModal
   ) {}

   onClose(): void {
    console.log(this.count);
    this.modal.dismissAll();
   }
}
