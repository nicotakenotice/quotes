export interface Entry {
  type: string;
  slug: string;
  title: string;
  authors: string[];
  quotes: Quote[];
}

export interface Quote {
  text: string;
  characters?: string[];
}
