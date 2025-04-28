import { ActivityCard } from "@/@types/activity-card";
import { Panel } from "../../components/panel";

const backlogActivities: ActivityCard[] = [
  {
    title: "Definir requisitos",
    deadline: new Date("2025-09-22"),
    project: {
      id: "0000001",
      name: "Smart Parking",
      description: "Estacionamento inteligente",
      deadline: new Date(),
      members: [
        {
          id: "23123123",
          name: "Sérgio Montana",
          email: "sergio@example.com",
          role: "gerente",
          avatar: "/none",
        },
        {
          id: "1251521",
          name: "Laura Braga",
          email: "laura@example.com",
          role: "analista",
          avatar: "/none",
        },
        {
          id: "789456",
          name: "Marcelo Dias",
          email: "marcelo@example.com",
          role: "desenvolvedor",
          avatar: "/none",
        },
        {
          id: "654321",
          name: "César Lima",
          email: "cesar@example.com",
          role: "designer",
          avatar: "/none",
        },
      ],
    },
    members: [
      {
        id: "23123123",
        name: "Sérgio Montana",
        email: "sergio@example.com",
        role: "gerente",
        avatar: "/none",
      },
    ],
  },
];

const inProgressActivities: ActivityCard[] = [
  {
    title: "Desenvolver API de autenticação",
    deadline: new Date(),
    project: {
      id: "0000001",
      name: "Smart Parking",
      description: "Estacionamento inteligente",
      deadline: new Date(),
      members: [
        {
          id: "23123123",
          name: "Sérgio Montana",
          email: "sergio@example.com",
          role: "gerente",
          avatar: "/none",
        },
        {
          id: "1251521",
          name: "Laura Braga",
          email: "laura@example.com",
          role: "analista",
          avatar: "/none",
        },
        {
          id: "789456",
          name: "Marcelo Dias",
          email: "marcelo@example.com",
          role: "desenvolvedor",
          avatar: "/none",
        },
        {
          id: "654321",
          name: "César Lima",
          email: "cesar@example.com",
          role: "designer",
          avatar: "/none",
        },
      ],
    },
    members: [
      {
        id: "789456",
        name: "Marcelo Dias",
        email: "marcelo@example.com",
        role: "desenvolvedor",
        avatar: "/none",
      },
      {
        id: "23123123",
        name: "Sérgio Montana",
        email: "sergio@example.com",
        role: "gerente",
        avatar: "/none",
      },
    ],
  },
];

const inReviewActivities: ActivityCard[] = [
  {
    title: "Testes de integração",
    deadline: new Date(),
    project: {
      id: "0000001",
      name: "Smart Parking",
      description: "Estacionamento inteligente",
      deadline: new Date(),
      members: [
        {
          id: "23123123",
          name: "Sérgio Montana",
          email: "sergio@example.com",
          role: "gerente",
          avatar: "/none",
        },
        {
          id: "1251521",
          name: "Laura Braga",
          email: "laura@example.com",
          role: "analista",
          avatar: "/none",
        },
        {
          id: "789456",
          name: "Marcelo Dias",
          email: "marcelo@example.com",
          role: "desenvolvedor",
          avatar: "/none",
        },
        {
          id: "654321",
          name: "César Lima",
          email: "cesar@example.com",
          role: "designer",
          avatar: "/none",
        },
      ],
    },
    members: [
      {
        id: "1251521",
        name: "Laura Braga",
        email: "laura@example.com",
        role: "analista",
        avatar: "/none",
      },
      {
        id: "789456",
        name: "Marcelo Dias",
        email: "marcelo@example.com",
        role: "desenvolvedor",
        avatar: "/none",
      },
    ],
  },
];

const doneActivities: ActivityCard[] = [
  {
    title: "Protótipo do app mobile",
    deadline: new Date(),
    project: {
      id: "0000001",
      name: "Smart Parking",
      description: "Estacionamento inteligente",
      deadline: new Date(),
      members: [
        {
          id: "23123123",
          name: "Sérgio Montana",
          email: "sergio@example.com",
          role: "gerente",
          avatar: "/none",
        },
        {
          id: "1251521",
          name: "Laura Braga",
          email: "laura@example.com",
          role: "analista",
          avatar: "/none",
        },
        {
          id: "789456",
          name: "Marcelo Dias",
          email: "marcelo@example.com",
          role: "desenvolvedor",
          avatar: "/none",
        },
        {
          id: "654321",
          name: "César Lima",
          email: "cesar@example.com",
          role: "designer",
          avatar: "/none",
        },
      ],
    },
    members: [
      {
        id: "654321",
        name: "César Lima",
        email: "cesar@example.com",
        role: "designer",
        avatar: "/none",
      },
    ],
  },
  {
    title: "Protótipo do app mobile",
    deadline: new Date(),
    project: {
      id: "0000001",
      name: "Smart Parking",
      description: "Estacionamento inteligente",
      deadline: new Date(),
      members: [
        {
          id: "23123123",
          name: "Sérgio Montana",
          email: "sergio@example.com",
          role: "gerente",
          avatar: "/none",
        },
        {
          id: "1251521",
          name: "Laura Braga",
          email: "laura@example.com",
          role: "analista",
          avatar: "/none",
        },
        {
          id: "789456",
          name: "Marcelo Dias",
          email: "marcelo@example.com",
          role: "desenvolvedor",
          avatar: "/none",
        },
        {
          id: "654321",
          name: "César Lima",
          email: "cesar@example.com",
          role: "designer",
          avatar: "/none",
        },
      ],
    },
    members: [
      {
        id: "654321",
        name: "César Lima",
        email: "cesar@example.com",
        role: "designer",
        avatar: "/none",
      },
    ],
  },
  {
    title: "Protótipo do app mobile",
    deadline: new Date(),
    project: {
      id: "0000001",
      name: "Smart Parking",
      description: "Estacionamento inteligente",
      deadline: new Date(),
      members: [
        {
          id: "23123123",
          name: "Sérgio Montana",
          email: "sergio@example.com",
          role: "gerente",
          avatar: "/none",
        },
        {
          id: "1251521",
          name: "Laura Braga",
          email: "laura@example.com",
          role: "analista",
          avatar: "/none",
        },
        {
          id: "789456",
          name: "Marcelo Dias",
          email: "marcelo@example.com",
          role: "desenvolvedor",
          avatar: "/none",
        },
        {
          id: "654321",
          name: "César Lima",
          email: "cesar@example.com",
          role: "designer",
          avatar: "/none",
        },
      ],
    },
    members: [
      {
        id: "654321",
        name: "César Lima",
        email: "cesar@example.com",
        role: "designer",
        avatar: "/none",
      },
    ],
  },
  {
    title: "Protótipo do app mobile",
    deadline: new Date(),
    project: {
      id: "0000001",
      name: "Smart Parking",
      description: "Estacionamento inteligente",
      deadline: new Date(),
      members: [
        {
          id: "23123123",
          name: "Sérgio Montana",
          email: "sergio@example.com",
          role: "gerente",
          avatar: "/none",
        },
        {
          id: "1251521",
          name: "Laura Braga",
          email: "laura@example.com",
          role: "analista",
          avatar: "/none",
        },
        {
          id: "789456",
          name: "Marcelo Dias",
          email: "marcelo@example.com",
          role: "desenvolvedor",
          avatar: "/none",
        },
        {
          id: "654321",
          name: "César Lima",
          email: "cesar@example.com",
          role: "designer",
          avatar: "/none",
        },
      ],
    },
    members: [
      {
        id: "654321",
        name: "César Lima",
        email: "cesar@example.com",
        role: "designer",
        avatar: "/none",
      },
    ],
  },
  {
    title: "Protótipo do app mobile",
    deadline: new Date(),
    project: {
      id: "0000001",
      name: "Smart Parking",
      description: "Estacionamento inteligente",
      deadline: new Date(),
      members: [
        {
          id: "23123123",
          name: "Sérgio Montana",
          email: "sergio@example.com",
          role: "gerente",
          avatar: "/none",
        },
        {
          id: "1251521",
          name: "Laura Braga",
          email: "laura@example.com",
          role: "analista",
          avatar: "/none",
        },
        {
          id: "789456",
          name: "Marcelo Dias",
          email: "marcelo@example.com",
          role: "desenvolvedor",
          avatar: "/none",
        },
        {
          id: "654321",
          name: "César Lima",
          email: "cesar@example.com",
          role: "designer",
          avatar: "/none",
        },
      ],
    },
    members: [
      {
        id: "654321",
        name: "César Lima",
        email: "cesar@example.com",
        role: "designer",
        avatar: "/none",
      },
    ],
  },
  {
    title: "Protótipo do app mobile",
    deadline: new Date(),
    project: {
      id: "0000001",
      name: "Smart Parking",
      description: "Estacionamento inteligente",
      deadline: new Date(),
      members: [
        {
          id: "23123123",
          name: "Sérgio Montana",
          email: "sergio@example.com",
          role: "gerente",
          avatar: "/none",
        },
        {
          id: "1251521",
          name: "Laura Braga",
          email: "laura@example.com",
          role: "analista",
          avatar: "/none",
        },
        {
          id: "789456",
          name: "Marcelo Dias",
          email: "marcelo@example.com",
          role: "desenvolvedor",
          avatar: "/none",
        },
        {
          id: "654321",
          name: "César Lima",
          email: "cesar@example.com",
          role: "designer",
          avatar: "/none",
        },
      ],
    },
    members: [
      {
        id: "654321",
        name: "César Lima",
        email: "cesar@example.com",
        role: "designer",
        avatar: "/none",
      },
    ],
  },
  {
    title: "Protótipo do app mobile",
    deadline: new Date(),
    project: {
      id: "0000001",
      name: "Smart Parking",
      description: "Estacionamento inteligente",
      deadline: new Date(),
      members: [
        {
          id: "23123123",
          name: "Sérgio Montana",
          email: "sergio@example.com",
          role: "gerente",
          avatar: "/none",
        },
        {
          id: "1251521",
          name: "Laura Braga",
          email: "laura@example.com",
          role: "analista",
          avatar: "/none",
        },
        {
          id: "789456",
          name: "Marcelo Dias",
          email: "marcelo@example.com",
          role: "desenvolvedor",
          avatar: "/none",
        },
        {
          id: "654321",
          name: "César Lima",
          email: "cesar@example.com",
          role: "designer",
          avatar: "/none",
        },
      ],
    },
    members: [
      {
        id: "654321",
        name: "César Lima",
        email: "cesar@example.com",
        role: "designer",
        avatar: "/none",
      },
    ],
  },
  {
    title: "Protótipo do app mobile",
    deadline: new Date(),
    project: {
      id: "0000001",
      name: "Smart Parking",
      description: "Estacionamento inteligente",
      deadline: new Date(),
      members: [
        {
          id: "23123123",
          name: "Sérgio Montana",
          email: "sergio@example.com",
          role: "gerente",
          avatar: "/none",
        },
        {
          id: "1251521",
          name: "Laura Braga",
          email: "laura@example.com",
          role: "analista",
          avatar: "/none",
        },
        {
          id: "789456",
          name: "Marcelo Dias",
          email: "marcelo@example.com",
          role: "desenvolvedor",
          avatar: "/none",
        },
        {
          id: "654321",
          name: "César Lima",
          email: "cesar@example.com",
          role: "designer",
          avatar: "/none",
        },
      ],
    },
    members: [
      {
        id: "654321",
        name: "César Lima",
        email: "cesar@example.com",
        role: "designer",
        avatar: "/none",
      },
    ],
  },

];

export default function InitializatingProject() {
  return (
    <section className="h-full">
      <h1 className="text-3xl font-semibold">Iniciação</h1>
      <div className="mt-10 grid grid-cols-4 gap-4 h-7/8">
        <Panel title="Backlog" cards={backlogActivities} />
        <Panel title="Em andamento" cards={inProgressActivities} />
        <Panel title="Em análise" cards={inReviewActivities} />
        <Panel title="Concluído" cards={doneActivities} />
      </div>
    </section>
  );
}
