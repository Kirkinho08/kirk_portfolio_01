import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-particles-background',
  standalone: true,
  templateUrl: './particles-background.component.html',
  styleUrls: ['./particles-background.component.scss']
})
export class ParticlesBackgroundComponent implements OnInit {

  ngOnInit(): void {
    this.loadParticlesScript().then(() => {
      this.loadParticles();
    });
  }

  loadParticlesScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = () => resolve();
      script.onerror = (err) => reject(err);
      document.body.appendChild(script);
    });
  }

  loadParticles(): void {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 900
          }
        },
        color: {
          value: '#005f73' // Change this to your preferred shade of blue
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.5,
          random: false
        },
        size: {
          value: 2,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#005f73', // Change this to your preferred shade of blue
          opacity: 0.4,
          width: .5
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
}
