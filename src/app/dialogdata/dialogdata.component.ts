import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Dialogdata} from '../../assets/models/dialogdata';

@Component({
  selector: 'app-dialogdata',
  templateUrl: './dialogdata.component.html',
  styleUrls: ['./dialogdata.component.css']
})
export class DialogdataComponent implements OnInit {
  uri = 'http://localhost:4000/dialogdata';
  objecttitles;
  dialogdata;
  selected;

  constructor(private httpService: HttpClient) {
  }

  IsSelected(object) {
    this.selected = object;
  }

  getObject(id) {
    this.httpService.get(`${this.uri + '/' + id}`).subscribe(
      data => {
        this.dialogdata = data as string;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    return this.dialogdata;
  }

  ngOnInit() {
    this.httpService.get(`${this.uri + '/titre'}`).subscribe(
      data => {
        console.log(data);
        this.objecttitles = data as string [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

  }
}
