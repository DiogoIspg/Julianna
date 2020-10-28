import { Component, OnInit } from '@angular/core';
import { FileSubmission } from '@/_models/fileSubmission';
import { EntregasService } from '@/_services/entregas.service';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {

  fileToUpload: File = null;

  fileSubmissions: FileSubmission[];

  constructor(private entregasService: EntregasService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.entregasService
      .getFilesSubmissions()
      .subscribe(fls => {
        fls.forEach(x => x.displayDate = new Date(x.createdDate).toDateString());
        this.fileSubmissions = fls;
      });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  submitFile() {
    this.entregasService.postFile(this.fileToUpload).subscribe(x => {
      this.refreshData();
    });

    this.fileToUpload = null;
  }

  downloadFile(id: string, filename:string) {
    console.log("Download " + id);
    this.entregasService.getFileById(id, filename);
  }

 
}
