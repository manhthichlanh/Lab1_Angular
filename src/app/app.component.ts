import { Component } from '@angular/core';
import { NhaKhoaHoc,SanPham } from './type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Làm lab 1';




  myclick() {
    const app = document.querySelector("app-root") as HTMLElement;
    app.innerText = "1231"
  }
}
