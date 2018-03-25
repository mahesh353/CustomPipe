import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
})

// This is parent(container) component which contains child(nested) Component(student-count.component.ts) 
export class AppComponent {

    public students: any;// this variable holds the list of students
    public searchText: any;

    constructor() {
        this.students = [
            { Id: 1, Name: "Mahesh", Address: "Thane", Gender: "Male" },
            { Id: 2, Name: "Nishikant", Address: "Chembur", Gender: "Male" },
            { Id: 3, Name: "Sameer", Address: "Mulund", Gender: "Male" },
            { Id: 4, Name: "Nitin", Address: "Nahur", Gender: "Male" },
            { Id: 4, Name: "Siri", Address: "Worli", Gender: "Female" }
        ];
    }
}