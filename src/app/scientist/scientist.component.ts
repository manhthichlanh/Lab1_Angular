import { Component } from '@angular/core';
import { NhaKhoaHoc } from './NhaKhoaHoc';
@Component({
  selector: 'app-root',
  templateUrl: './scientist.component.html',
  styleUrls: ['./scientist.component.css']
})
export class ScientistComponent {
  listNhaKH: NhaKhoaHoc[] = [
    {id: 1, ho: 'Tạ Quang', ten: 'Bửu', sinh: 1910, mat: 1986},
    {id: 2, ho: 'Nguyễn Văn', ten: 'Hóa', sinh: 1937, mat: 2008},
    {id: 3, ho: 'Trần Đại', ten: 'Nghĩa', sinh: 1921, mat: 2015},
    {id: 4, ho: 'Lê Đức', ten: 'Anh', sinh: 1930, mat: 2019},
    {id: 5, ho: 'Nguyễn Thị', ten: 'Thắm', sinh: 1940, mat: 2022}
  ];
  render() {
    const list = document.querySelector(".list-group") as HTMLUListElement;


    const html = this.listNhaKH.map((item,i)=>{
      return `<li class="list-group-item">${i+1}. ${item.ho} ${item.ten} | ${item.sinh} - ${item.mat}</li>`
    }).join("");

    list.innerHTML = html;

  }
}
