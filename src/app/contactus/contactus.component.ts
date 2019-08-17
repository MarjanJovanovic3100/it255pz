import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusForm: FormGroup;
  sending: boolean;
  status:number=-1;

  constructor(private fb: FormBuilder, private emailService: EmailService, private router: Router) { }

  ngOnInit() {
    this.contactusForm = this.fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'message' : [null, Validators.required],
    });
    this.sending = false;
  }

  sendMessage(formData: NgForm) {
    this.sending = true;
    let first_name = formData['firstName'];
    let last_name = formData['lastName'];
    let email = formData['email'];
    let message = formData['message'];

    this.emailService.sendEmail(first_name,last_name,email,message).subscribe(data=>{
      if(data.success){
        this.status=1;
      }else{
        this.status=0;
      }
    });

    setTimeout(() => {
      this.sending = false;
      this.cancelForm();
    }, 1000);
  }

  cancel() {
    this.cancelForm();
  }

  cancelForm() {
    this.router.navigate([{outlets: { popup: null }}] );
  }


}