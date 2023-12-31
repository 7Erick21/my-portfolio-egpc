import type {
  IOptions, RecursivePartial
} from 'tsparticles-engine'

import { IThemeParticles } from '../interface/Theme'

export const Spider: RecursivePartial<IOptions> = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: { value: '#ffffff', },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: { nb_sides: 5, },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: { opacity: 1, },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: { particles_nb: 4, },
      remove: { particles_nb: 2, },
    },
  },
  retina_detect: true,
}

export const handleThemeParticles = ({
  background, particles, lines
}:IThemeParticles) =>{

  const theme:RecursivePartial<IOptions>= {
    background: { color: { value: background, }, },
    fpsLimit: 60,
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onClick: {
          enable: false,
          mode: 'push',
        },
        onHover: {
          enable: false,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 0.4,
          size: 40,
        },
        push: { quantity: 4, },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: { value: particles, },
      links: {
        color: lines,
        distance: 150,
        enable: true,
        opacity: 0.7,
        width: 2,
        triangles: {
          enable: true,
          color: lines,
          opacity: 0.2,
        },
      },
      collisions: { enable: true, },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: true,
        speed: 6,
        straight: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          value_area: 2000,
        },
        value: 80,
      },
      opacity: { value: 0.9, },
      shape: { type: 'polygon', },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  }

  return theme
}