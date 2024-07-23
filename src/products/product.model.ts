export type Sizes = 'S'|'M'|'L'|'XL';

export type Product = {title: string, // Con type no se pueden extender los tipos
  createAt: Date,
  stock: number,
  size?: Sizes,
  }
