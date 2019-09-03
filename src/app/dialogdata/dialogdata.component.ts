import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Dialogdata} from '../../assets/models/dialogdata';

@Component({
  selector: 'app-dialogdata',
  templateUrl: './dialogdata.component.html',
  styleUrls: ['./dialogdata.component.css']
})
export class DialogdataComponent implements OnInit {
  url = 'http://localhost:4000/dialogdata';
  objectTitles;
  selected: Dialogdata = null;

  constructor(private httpService: HttpClient) {
  }

  IsSelected(object): void {
    this.httpService.get(`${this.url}/${object._id}`).subscribe(
      data => {
        this.selected = data as Dialogdata;
        console.log(this.selected);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  ngOnInit() {
    this.httpService.get(`${this.url}/titre`).subscribe(
      data => {
        this.objectTitles = data as string [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
