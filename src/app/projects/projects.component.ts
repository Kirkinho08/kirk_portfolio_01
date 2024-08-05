import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'ChatGPT Discord Bot',
      description: 'Simple chat bot used in Discord servers.',
      screenshots: [
        'assets/gptbot_example1.png',
        'assets/gptbot_example2.png',
        'assets/gptbot_code1.png',
        'assets/gptbot_code2.png',
        'assets/gptbot_code3.png',
        'assets/gptbot_github1.png',
        'assets/gptbot_github2.png'

      ],
      link: 'https://example.com/project1'
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description of project 2.',
      screenshots: [
        'assets/images/project2-1.png',
        'assets/images/project2-2.png',
        'assets/images/project2-3.png'
      ],
      link: 'https://example.com/project2'
    },

    {
      id: 3,
        name: 'Project 3',
        description: 'Description of project 3.',
        screenshots: [
          'assets/images/project2-1.png',
          'assets/images/project2-2.png',
          'assets/images/project2-3.png'
        ],
        link: 'https://example.com/project2'
    }
    // Add more projects here
  ];
}
