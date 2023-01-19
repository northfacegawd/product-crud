interface Option {
  type: string;
  label: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  options: Option[];
}
