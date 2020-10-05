import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {
  error: string;

  name: string;
  middleName: string;
  lastName: string;
  rfc: string;
  birthDate: string;

  constructor(
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  saveUser() {
    const newUser = {
      name: this.name,
      middleName: this.middleName,
      lastName: this.lastName,
      rfc: this.rfc,
      birthDate: this.birthDate
    };

    this.userService.createUser(newUser).subscribe(() => {
      this.dialogRef.close();
      
    }, (error) =>  {
      console.log(error);
      this.error = 'Ups, hubo un error. Asegurate de no haber ingresado un RFC duplicado e intenta de nuevo.'
    })
  }

}
