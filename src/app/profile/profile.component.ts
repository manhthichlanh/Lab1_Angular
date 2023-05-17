import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  student = {
    hoten : "Nguyễn Văn Mạnh",
    phai : 0,
    ngaysinh: "11/11/2003",
    hinh: "h1.jpg",
    diem: 10
  }
}
