import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { CallapiService } from '../services/callapi.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  statusbtn: boolean = false
  data: any
  constructor(formbd: FormBuilder, public callapi: CallapiService) {


  }


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  get formcontroldata() { return this.data.controls }

  cl() {

  }
  ngOnInit(): void {
    this.callapi.getStudentAll().subscribe(data=>{})
    Swal.fire({
      confirmButtonText: 'ตกลง',
      showCancelButton: true}).then(result => {})
  }

}
