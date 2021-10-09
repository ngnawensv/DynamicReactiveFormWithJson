import {Component, OnInit} from '@angular/core';
import {JsonFormData} from "./components/json-form/json-form.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DynamicReactiveFormWithJson';

  public formData: JsonFormData;
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.http.get('/assets/my-form.json').subscribe((formData: JsonFormData) => {
        this.formData = formData;
      });
  }
}
