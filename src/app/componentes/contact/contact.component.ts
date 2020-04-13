import { Component, OnInit } from '@angular/core';
import { DataDbService} from '../../services/data-db.service';
import {FormControl,FormGroup, FormControlName, Validators} from '@angular/forms';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  createFormGroup()
  { return new FormGroup({
      email:new FormControl('',[Validators.required,Validators.minLength(5)]),
      name:new FormControl('',[Validators.required,Validators.minLength(5)]),
      message:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(100)])
    });
  }


  contactForm:FormGroup;


  constructor(private dbData:DataDbService) {
    this.contactForm=this.createFormGroup();
   }

  ngOnInit(): void {
  }

  onResetform(){
    this.contactForm.reset();
  }

  onSaveForm(){
    console.log('Saved',this.contactForm.value);
    if(this.contactForm.valid){
      this.dbData.saveMessage(this.contactForm.value)
    }else{
      console.log('NO es Valido');
    }
  }


  get name() {return this.contactForm.get('name')}
  get email() {return this.contactForm.get('email')}
  get message() {return this.contactForm.get('message')}
}
