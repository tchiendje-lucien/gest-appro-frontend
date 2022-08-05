export class Site {
  oid: number;
  code: string;
  name: string;
}

export class Warehouse {
  oid: number;
  code: string;
  name: string;
  site: Site;
}

export class Compagny {
  oid: number;
  code: string;
  name: string;
}

export class Coastcenter {
  oid: number;
  code: string;
  name: string;
}

export class Provider {
  oid: number;
  code: string;
  name: string;
}

export class Location {
  oid: number;
  code: string;
  name: string;
}

export class Category {
  oid: number;
  code: string;
  name: string;
}

export class Product {
  oid: number;
  name: string;
  description: string;
  barrecode: number;
  buyingprice: number;
  sellingprice: number;
  qtystock: number;
  qtyalert: number;
  qtyreapro: number;
  qtyinv: number;
  tva: number;
  location: Location;
  category: Category;
}
