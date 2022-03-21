import { Options } from '@angular-slider/ngx-slider';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-resource-control',
  templateUrl: './resource-control.component.html',
  styleUrls: ['./resource-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ResourceControlComponent),
      multi: true
    }
  ]
})

export class ResourceControlComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder?: string;
  @Input() resourceType?: string;
  
  @Input() min?: number;
  @Input() max?: number;
  @Input() step?: number;
  
  options!: Options;
  // public min!: number;
  // public max!: number;
  // public type!: string;
  
  // Control
  public value!: number;
  public changed!: (value: number) => void
  public touched!: () => void;
  public isDisabled!: boolean;
  
  constructor() {}
  
  ngOnInit(): void {
    this.options = {
      floor: this.min || 0,
      ceil: this.max || 10000,
      step: this.step || 1
    }
  }
  
  public writeValue(value: number): void {
    this.value = value;
  }
  
  // use for change value data type
  public onChanged(event: Event): void {
    const _value: number = Number((<HTMLInputElement>event.target).value);
    this.changed(_value);
    this.writeValue(_value)
  }
  
  public registerOnChange(fn: any): void {
    this.changed = fn;
  }
  
  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
  
  // slider
  onSliderChange(_val: number): void {
    // const _val: number = Number(event.value)
    this.changed(_val);
    this.writeValue(_val)
  }
  
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
