export interface Event {
  date: string;
  title: string;
  link: string;
  comment?: string;
}

export interface Link {
  title: string;
  link: string;
  text: string;
}
export interface Publication {
  link: string;
  text: string;
  date: string;
  comment: string;
}
