import { Component, OnInit } from '@angular/core';
import { EntregasService } from '@/_services/entregas.service';
import { TopNavBarComponent } from '../top-nav-bar/topnavbar.component';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})

export class EntregasComponent implements OnInit {

  constructor(private entregasService: EntregasService) { }

  ngOnInit() {
  }

  // refreshData() {
  //   this.entregasService
  //     .getFilesSubmissions()
  //     .subscribe(fls => {
  //       fls.forEach(x => x.displayDate = new Date(x.createdDate).toDateString());
  //       this.fileSubmissions = fls;
  //     });
  // }
}
