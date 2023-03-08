import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  ngAfterContentInit(){
    console.log(this.paragraphEl?.nativeElement.textContent);
    
  }
  @ContentChild ('paragraph') paragraphEl:ElementRef | undefined;

}
