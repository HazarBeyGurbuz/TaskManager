import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




task= ['read book','Get up',
'Brush teeth',
'Take a shower',
'Check e-mail',]
dailyTask= ['go shopping','Get to work',
'Pick up groceries']
weeklyTask= ['do exercise','Go home',
'Fall asleep']
monthlyTask= ['work on your project', 'Walk dog']
done=['clean house']





  constructor() { }

  ngOnInit(): void {

  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);


                      }
  }

  addTask(task: { value: string; }){
    this.task.push(task.value)
    task.value=""

  }


}
