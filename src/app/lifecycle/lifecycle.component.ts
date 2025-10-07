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

  ngOnChanges(changes: SimpleChanges) { // Runs every time the component's inputs have changed.
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit() { // Runs once after Angular has initialized all the component's inputs.
    console.log('ngOnInit');
  }

  ngDoCheck() { // Runs every time this component's template is checked for changes.
    // Suggested not to be implemented, as it is called a lot of times while applcation is running.
    console.log('ngDoCheck');
  }

  ngAfterContentInit() { // Runs once after the component's content (children nested inside 
  // this component - projected content - ng-content) 
  // has been initialized.
  // Can be used to read the results of content queries (contentChild or contentChildren).
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() { // Runs every time the component's content has been checked for changes.
    // Suggested not to be implemented, as it is called a lot of times while applcation is running.
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() { // Runs once after the component's view (template) has been  initialized.
    // Can be use to read the results of view queries (viewChild or viewChildren)
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() { // Runs every time the component's view has been checked for changes.
    // Suggested not to be implemented, as it is called a lot of times while applcation is running.
    console.log('ngAfterViewChecked');
  }
  // Attempting to modify states in ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit and
  // ngAfterViewChecked will result in ExpressionChangedAfterItHasBeenCheckedError error.

  ngOnDestroy() { // Runs once before the component is destroyed.
    console.log('ngOnDestroy');
  }
}
