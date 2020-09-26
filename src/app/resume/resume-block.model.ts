export interface ResumeBlock {
  item: {
    type: string;
    str: string;
  }[];
  line?: number;
  block?: { type: string };
  return?: boolean;
}
