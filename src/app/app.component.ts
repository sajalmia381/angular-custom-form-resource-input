import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resourceForm!: FormGroup;
  cpuOption: any = {
    min: 0.1,
    max: 10,
    step: 0.1,
  }
  memoryOption: any = {
    min: 1,
    max: 20,
    step: 0.1,
  }
  storageOption: any = {
    min: 5,
    max: 1024,
    step: 1,
  }
  constructor (private fb: FormBuilder) {
    this.resourceForm = this.fb.group({
      name: ['', Validators.required],
      cpu: [, [Validators.required, Validators.min(this.cpuOption.min), Validators.max(this.cpuOption.max)]],
      memory: [, [Validators.required, Validators.min(this.memoryOption.min), Validators.max(this.memoryOption.max)]],
      storage: [, [Validators.required, Validators.min(this.storageOption.min), Validators.max(this.storageOption.max)]]
    })
  }
  
  get name(): FormControl {
    return this.resourceForm.get('name') as FormControl
  }
  
  onSubmit(): void {
    console.log(this.resourceForm.value)
  }
} 
