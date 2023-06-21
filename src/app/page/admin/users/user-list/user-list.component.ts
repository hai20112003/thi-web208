import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  users: IUser[] = [];
  usersList: IUser[] = [];
  totalLength:any;
  p: number = 1;
  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe(
      (data: any) => {
        this.users = data.data;
        this.usersList = data.data;
        this.totalLength = data.data.length;
      },
      (error) => console.log(error)
    );
  }
  onSearchChange(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    if(searchValue){
      this.users = this.users.filter((users) => {
        const nameMatch = users.name.toLowerCase().includes(searchValue.toLowerCase());
        const field1Match = users.email.toLowerCase().includes(searchValue.toLowerCase());
        const field2Match = users.phone.toLowerCase().includes(searchValue.toLowerCase());
        return nameMatch || field1Match || field2Match;
      });
    } else{
      this.users = this.usersList
    }
  }
}
