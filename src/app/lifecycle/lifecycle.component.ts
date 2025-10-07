import {
  Component, 
  Input, 
  OnInit, 
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  constructor() { // Runs when Angular instantiates the component.
    console.log('CONSTRUCTOR');
  }

  ngOnInit() { // Runs once after Angular has initialized all the component's inputs.
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) { // Runs every time the component's inputs have changed.
    // Suggested not to be implemented, as it is called a lot of times while applcation is running.
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngDoCheck() { // Runs every time this component is checked for changes.
    console.log('ngDoCheck');
  }

  ngAfterContentInit() { // Runs once after the component's content (projected content - ng-content) 
  // has been initialized.
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() { // Runs every time the component's content has been checked for changes.
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() { // Runs once after the component's view (template) has been  initialized.
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() { // Runs every time the component's view has been checked for changes.
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() { // Runs once before the component is destroyed.
    console.log('ngOnDestroy');
  }
}
