import { Component } from '@angular/core';

@Component({
  selector: 'app-edukacja',
  templateUrl: './edukacja.component.html',
  styleUrl: './edukacja.component.css'
})
export class EdukacjaComponent {
  educationData = [
    {
      degree: 'High School Diploma',
      institution: 'ABC High School',
      startDate: 'September 2010',
      endDate: 'June 2014',
      description: 'Completed high school with a strong foundation in mathematics and science.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'XYZ University',
      startDate: 'September 2014',
      endDate: 'June 2018',
      description: 'Studied various aspects of computer science including algorithms, data structures, software design, and computer architecture.'
    },
    {
      degree: 'Master of Science in Software Engineering',
      institution: 'DEF University',
      startDate: 'September 2018',
      endDate: 'June 2020',
      description: 'Specialized in software engineering with a focus on software development, project management, and quality assurance.'
    }
  ];
}
