import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dialogdata} from '../../assets/models/dialogdata';

@Component({
  selector: 'app-datadetails',
  templateUrl: './datadetails.component.html',
  styleUrls: ['./datadetails.component.css']
})
export class DatadetailsComponent implements OnInit {
  @Input() dialogdetails: Dialogdata;
  uri = 'http://localhost:4000/dialogdata';
  constructor(private httpService: HttpClient) { }

  UpdateObject(title, paragraph, caption) {
    const object = {title, paragraph, caption};
    this.httpService.put(`${this.uri + '/update/' + title}`, object);
  }

  ngOnInit() {
  }

}
