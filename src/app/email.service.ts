import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface myData{
  success:boolean,
  message:string
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }
  
  sendEmail(first_name,last_name,email,message){
    const body={
      first_name,
      last_name,
      email,
      message
    };

    return this.http.post<myData>('http://localhost/api/server.php',body)
  }
}
