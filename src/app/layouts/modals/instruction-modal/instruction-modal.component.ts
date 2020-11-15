import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-instruction-modal',
  templateUrl: './instruction-modal.component.html',
  styleUrls: ['./instruction-modal.component.scss']
})
export class InstructionModalComponent implements OnInit {

  constructor(private _modalService: NgbActiveModal) { }

  ngOnInit() {
  }

  close(): void {
    this._modalService.close()
  }

}
