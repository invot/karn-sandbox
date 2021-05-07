import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-st-radio-form',
  templateUrl: './st-radio-form.component.html',
  styleUrls: ['./st-radio-form.component.scss']
})
export class StRadioFormComponent implements OnInit {
  radioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) { }

  submitForm(): void {
    const data = this.radioForm.getRawValue();
    for (const i in this.radioForm.controls) {
      this.radioForm.controls[i].markAsDirty();
      this.radioForm.controls[i].updateValueAndValidity();
    }
    this.getResults(this.formatData(data));
  }

  formatData(data:any) {
    const start = `${data.startDate}T${data.startTime}`;
    const end = `${data.endDate}T${data.endTime}`;
    return {start, end}
  }

  ngOnInit(): void {
    this.radioForm = this.fb.group({
      startDate: new FormControl("2021-04-07", Validators.required),
      endDate: new FormControl("2021-04-08", Validators.required),
      startTime: new FormControl("19:39:38", Validators.required),
      endTime: new FormControl("19:39:38", Validators.required),
    });
  }

  // SERVICE STUFF - SHOULD PROBABLY BE A DIFFERENT FILE

  getResults(data:any){
    const request = `https://stats.radio-t.com/rlb/api/candle?from=${data.start}&to=${data.end}`;
    return this.http.get<any>(request).subscribe(data => {
      console.log(data);
  })
  }

}

