import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Exam } from '../../models/exam';

@Component({
  selector: 'app-exam7',
  templateUrl: './exam7.component.html',
  styleUrl: './exam7.component.scss'
})
export class Exam7Component implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  @Input() examForm!: FormGroup;
  form!: FormGroup;
  //output
  @Output() formValueChanged = new EventEmitter<FormGroup>();
  //editor
  editorOptions = {theme: 'vs-dark', language: 'typescript'};
  ngOnInit(): void {
    this.exam7Form(this.examForm?.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['examForm'] && changes['examForm'].currentValue) {
      this.exam7Form(this.examForm.value);
    }
  }

  exam7Form(exam: Exam) {
    this.form = this.formBuilder.group({
      no: [exam?.no],
      questionType: [exam?.questionType],
      script: [exam?.script],
      title: [exam?.title],
      answer: [exam?.answer],
      language: [exam?.language],
      mermaid: [exam?.mermaid],
      code: [exam?.code],
      markdown: [exam?.markdown],
    });
    this.form.valueChanges.subscribe(value => {
      this.formValueChanged.emit(this.form);
    });
  }

}
