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
  company: string;
  adress: string;
  phone: string;
  email: string;
  observation: string;
  town: string;
}

export class Locations {
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
  barrecode: string;
  buyingprice: number;
  sellingprice: number;
  qtystock: number;
  qtyalert: number;
  qtyreapro: number;
  qtyinv: number;
  tva: number;
  location: Locations;
  category: Category;
}

export const myConst = {
  url: "http://127.0.0.1:8080/",
};



  /*func_search(
    search_input: any,
    array_tab: { oid: number, name: string , code:string}[]
  ) {
    if (search_input == "") {
      this.list_site();
    } else {
      array_tab = array_tab.filter((res) => {
        console.log(array_tab);
        return (
          res.name
            .toLocaleLowerCase()
            .match(search_input.toLocaleLowerCase()) &&
          res.code.toLocaleLowerCase().match(search_input.toLocaleLowerCase())
        );
      });
    }
  }

  //Site Management
  Search_site() {
    this.func_search(this.site_search, this.siteList);
  }*/
