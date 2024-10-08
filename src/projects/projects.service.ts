import { Injectable } from '@nestjs/common'
@Injectable()
export class ProjectsService {
  findAll() {
    return [
      {
        title: 'React',
        link: 'https://github.com/Henrique0498/portfolio',
        description:
          'Este projeto foi criado com o proposito de ser meu portfólio em React, onde eu utilizei o framework mais utilizando do React, que é o NextJs.',
        colors: {
          background: 'bg-white',
          iconBackground: 'bg-purple-500'
        },
        icon: 'simple-icons:react',
        technologies: [
          {
            children: 'TypeScript',
            color: 'blue'
          },
          {
            children: 'Testing Library',
            color: 'red'
          },
          {
            children: 'Sass',
            color: 'pink'
          }
        ]
      },
      {
        title: 'Vue',
        link: 'https://github.com/Henrique0498/portfolio-vue',
        description:
          'Este projeto foi criado com o proposito de ser meu portfólio em Vue, onde eu utilizei o framework mais utilizando do Vue, que é o NuxtJs.',
        colors: {
          background: 'bg-white',
          iconBackground: 'bg-green-500'
        },
        icon: 'simple-icons:vuedotjs',
        technologies: [
          {
            children: 'TypeScript',
            color: 'blue'
          },
          {
            children: 'Vitest',
            color: 'green'
          },
          {
            children: 'Sass',
            color: 'pink'
          }
        ]
      },
      {
        title: 'Angula',
        link: 'https://github.com/Henrique0498/Cyber1-Group',
        description:
          'Este foi um CRUD criado em Angular e PHP, utilizando como bando de dados local o PostgreSQL.',
        colors: {
          background: 'bg-white',
          iconBackground: 'bg-red-500'
        },
        icon: 'simple-icons:angularjs',
        technologies: [
          {
            children: 'TypeScript',
            color: 'blue'
          },
          {
            children: 'PHP',
            color: 'blue'
          },
          {
            children: 'Sass',
            color: 'pink'
          }
        ]
      }
    ]
  }
}
