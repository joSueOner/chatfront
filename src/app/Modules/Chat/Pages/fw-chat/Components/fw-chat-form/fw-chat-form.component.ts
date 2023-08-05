import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fw-chat-form',
  templateUrl: './fw-chat-form.component.html',
  styleUrls: ['./fw-chat-form.component.scss']
})
export class FwChatFormComponent implements OnInit{
  @Output("SendMessage")
  sendMessage:EventEmitter<string> = new EventEmitter<string>();

  private _Message: string = "";

  form:FormGroup = new FormGroup({});

  @Input("Message")
  set value(message : string) {
    this._Message = message ? message : "";
    this.form.patchValue({
      message: this._Message
    }, {emitEvent : true})
  }
  

  get FieldMessage(): FormControl{
    return this.form.get("message") as FormControl
  }  

  constructor( private formBuilder:FormBuilder ){
  }

  ngOnInit(): void {
    this.BuildForm();
    this.form.valueChanges.subscribe((value) => {
      this._Message = value.message;
    });
  }

  private BuildForm(){
    this.form = this.formBuilder.group({
      message: [
        ""
      ]

    })

  }

  KeyPress(e: KeyboardEvent) {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.preventDefault();
      this.sendMessage.emit(this._Message)
      this.FieldMessage.setValue("", {emitEvent : true});
      this.FieldMessage.patchValue("", {emitEvent : true});
      this.form.patchValue({
        message: ""
      }, {emitEvent : true})  



    }
    return true;
  }


}
