export interface ProgressItem {
  id: string;
  percent: number;
  label: string;
  description: string;
}

export const progressItems: ProgressItem[] = [
  {
    id: "sketch",
    percent: 92,
    label: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "modeling",
    percent: 84,
    label: "Dolor sit amet",
    description: "Integer posuere erat a ante venenatis dapibus posuere velit.",
  },
  {
    id: "measurement",
    percent: 96,
    label: "Consectetur elit",
    description: "Nullam quis risus eget urna mollis ornare vel eu leo.",
  },
  {
    id: "planning",
    percent: 88,
    label: "Adipiscing sed",
    description: "Curabitur blandit tempus porttitor maecenas faucibus mollis.",
  },
];
