import { Component } from '@angular/core';

@Component({
  selector: 'app-doswiadczenie',
  templateUrl: './doswiadczenie.component.html',
  styleUrl: './doswiadczenie.component.css'
})
export class DoswiadczenieComponent {
  experienceData = [
    {
      jobTitle: 'Junior Software Engineer',
      company: 'ABC Tech',
      startDate: 'January 2016',
      endDate: 'December 2018',
      jobDescription: 'Worked on developing and maintaining client-side applications. Collaborated with the team to design innovative solutions for our clients.'
    },
    {
      jobTitle: 'Software Engineer',
      company: 'XYZ Solutions',
      startDate: 'January 2019',
      endDate: 'December 2021',
      jobDescription: 'Led a team of junior developers to build robust server-side applications. Implemented agile methodologies to improve the development process.'
    },
    {
      jobTitle: 'Senior Software Engineer',
      company: 'DEF Innovations',
      startDate: 'January 2022',
      endDate: 'Present',
      jobDescription: 'Overseeing the design and development of software applications. Driving the adoption of best practices in code health, testing, and maintainability.'
    }
  ];
}
