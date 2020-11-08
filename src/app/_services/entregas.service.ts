import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'app/_models/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { FileSubmission } from '@/_models/fileSubmission';
import {Http, Headers, ResponseContentType} from '@angular/http';
import { saveAs } from 'file-saver';

@Injectable({ providedIn: 'root' })
export class EntregasService {
    constructor(private http: HttpClient) { }


    postFile(fileToUpload: File, folderName: string): Observable<any> {

        const endpoint = `${environment.apiUrl}/filesubmission/${folderName}`;
        const formData: FormData = new FormData();
        // let reqHeaders = new HttpHeaders({ 'Content-Type': 'application/octet-stream'});

        formData.append(fileToUpload.name, fileToUpload, fileToUpload.name);
        
        return this.http.post(endpoint, formData);
    }

    getFilesSubmissions(): Observable<FileSubmission[]> {
        const endpoint = `${environment.apiUrl}/filesubmission/`;

        return this.http.get<FileSubmission[]>(endpoint);
    }

    getFileById(id:string, fileName: string) {
        const endpoint = `${environment.apiUrl}/filesubmission/${id}`;

        this.http.get(endpoint, { responseType: 'blob' }).subscribe(x => {
            saveAs(x, fileName);
        });
    }
 
}