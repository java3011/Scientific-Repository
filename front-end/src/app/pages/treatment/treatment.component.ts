import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Treatment } from 'src/app/interfaces/treatment';
import { TreatmentService } from 'src/app/services/treatment.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
  treatmentForm: FormGroup;

  constructor(private fb:FormBuilder, private http:TreatmentService) { 
    this.treatmentForm=this.fb.group({
      treatmentinfo: ["",[Validators.required, Validators.maxLength(100)]],
      numberofbeams: [""]
    });
  }

  ngOnInit(): void {}

  sendDataTreatment(){
    let lista:Treatment={
      treatmentinfo:this.treatmentForm.get('treatmentinfo')?.value,
      numberofbeams:this.treatmentForm.get('numberofbeams')?.value
    }
    
    this.http.PostTreatment(lista).subscribe(datos =>{
      console.log(datos);
    });

  }

}
