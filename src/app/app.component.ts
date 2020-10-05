import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from './components/add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PagoDiario Challenge';
  users$ = new BehaviorSubject<User[]>([]);

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getAllUsers().subscribe((data: User[]) => this.users$.next(data));
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.fetchUsers();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => this.fetchUsers());
  }
}
