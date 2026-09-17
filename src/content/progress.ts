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
    label: "interior sketch",
    description: "All kinds of buildings in chematic or working design",
  },
  {
    id: "modeling",
    percent: 84,
    label: "3D modeling",
    description: "Studio provides a full range of 3D interior modeling",
  },
  {
    id: "measurement",
    percent: 96,
    label: "room measurement",
    description: "Development of iperfect design of the project",
  },
  {
    id: "planning",
    percent: 88,
    label: "2d planning",
    description: "We provide 2D planning for great visualization",
  },
];
