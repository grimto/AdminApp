import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Dialogdata} from '../../assets/models/dialogdata';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-datadetails',
  templateUrl: './datadetails.component.html',
  styleUrls: ['./datadetails.component.css']
})
export class DatadetailsComponent implements OnInit {
  @Input() dialogdetails: Dialogdata;
  url = 'http://localhost:4000/dialogdata';

  constructor(private httpService: HttpClient) {
  }

  UpdateObject() {
    console.log(this.dialogdetails);
    return this
      .httpService
      .put(`${this.url}/updateId/${this.dialogdetails._id}`,
        this.dialogdetails);
  }

  ngOnInit() {
  }

}
