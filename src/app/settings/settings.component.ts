import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  Site,
  Locations,
  Warehouse,
  Compagny,
  Category,
} from "../models/settings";
import { SettingsService } from "../services/settings/settings.service";
import { Provider, Coastcenter, Product } from "../models/settings";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
  // Classe propriety
  site: Site;
  warehouse: Warehouse;
  compagny: Compagny;
  category: Category;
  location: Locations;
  provider: Provider;
  coastcenter: Coastcenter;
  product: Product;

  //List Propriety
  siteList: Site[];
  compagnyList: Compagny[];
  warehouseList: Warehouse[];
  categoryList: Category[];
  locationList: Locations[];
  providerList: Provider[];
  coastcenterList: Coastcenter[];
  productList: Product[];

  //Other Proriety
  site_search: any;
  wh_search: any;
  compagny_search: any;
  category_search: any;
  location_search: any;
  provider_search: any;
  coastcenter_search: any;
  product_search: any;
  key: string = "id";
  reverse: boolean = false;
  btn_state: boolean = true;
  btn_state_wh: boolean = true;
  btn_state_location: boolean = true;
  btn_state_provider: boolean = true;
  btn_state_coastC: boolean = true;
  btn_state_compagny: boolean = true;
  btn_state_cat: boolean = true;
  btn_state_product = true;
  whDataForm: {
    oid: number;
    code: string;
    name: string;
    site: { oid: Site };
  };
  prodDataForm: {
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
    location: { oid: Locations };
    category: { oid: Category };
  };
  p: number = 1;
  p_site: number = 1;
  p_cat: number = 1;
  p_compagny: number = 1;
  p_wh: number = 1;
  p_local: number = 1;
  p_provider: number = 1;
  p_coastC: number = 1;
  p_prod: number = 1;

  constructor(
    private settingsService: SettingsService,
    private formBuilder: FormBuilder
  ) {}

  siteselect;

  ngOnInit() {
    this.site = new Site();
    this.compagny = new Compagny();
    this.warehouse = new Warehouse();
    this.category = new Category();
    this.location = new Locations();
    this.provider = new Provider();
    this.coastcenter = new Coastcenter();
    this.product = new Product();
    this.list_product();
    this.list_site();
    this.list_warehouse();
    this.list_compagny();
    this.list_category();
    this.list_location();
    this.list_provider();
    this.list_coastcenter();
  }

  site_form = this.formBuilder.group({
    oid: new FormControl(-1, Validators.required),
    code: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
  });
  product_form = this.formBuilder.group({
    oid: new FormControl(-1, Validators.required),
    name: new FormControl("", Validators.required),
    barrecode: new FormControl("", Validators.required),
    buyingprice: new FormControl("", Validators.required),
    sellingprice: new FormControl("", [Validators.required]),
    qtystock: new FormControl("", Validators.required),
    qtyalert: new FormControl("", Validators.required),
    qtyreapro: new FormControl("", Validators.required),
    qtyinv: new FormControl("", Validators.required),
    tva: new FormControl("", Validators.required),
    description: new FormControl(),
    location: new FormControl(FormGroup),
    category: new FormControl(FormGroup),
  });
  provider_form = this.formBuilder.group({
    oid: new FormControl(-1, Validators.required),
    code: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    company: new FormControl("", Validators.required),
    adress: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    observation: new FormControl("No comment", Validators.required),
    town: new FormControl("", Validators.required),
  });
  coastcenter_form = this.formBuilder.group({
    oid: new FormControl(-1, Validators.required),
    code: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
  });

  location_form = this.formBuilder.group({
    oid: new FormControl(-1, Validators.required),
    code: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
  });
  category_form = this.formBuilder.group({
    oid: new FormControl(-1, Validators.required),
    code: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
  });
  compagny_form = this.formBuilder.group({
    oid: new FormControl(-1, Validators.required),
    code: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
  });
  wh_form = this.formBuilder.group({
    oid: new FormControl(-1, Validators.required),
    name: new FormControl("", Validators.required),
    code: new FormControl("", Validators.required),
    site: new FormControl(null),
  });

  //Getter Site
  get code_site() {
    return this.site_form.get("code");
  }
  get name_site() {
    return this.site_form.get("name");
  }

  //Getter warehouse
  get name_wh() {
    return this.wh_form.get("name");
  }
  get oid_wh() {
    return this.wh_form.get("oid");
  }
  get code_wh() {
    return this.wh_form.get("code");
  }
  get site_wh() {
    return this.wh_form.get("site");
  }

  //Getter Comagny
  get code_compagny() {
    return this.compagny_form.get("code");
  }
  get name_compagny() {
    return this.compagny_form.get("name");
  }

  //Getter Category
  get code_category() {
    return this.category_form.get("code");
  }
  get name_category() {
    return this.category_form.get("name");
  }

  //Getter Location
  get code_location() {
    return this.location_form.get("code");
  }
  get name_location() {
    return this.location_form.get("name");
  }

  //Getter Provider
  get code_provider() {
    return this.provider_form.get("code");
  }
  get name_provider() {
    return this.provider_form.get("name");
  }
  get company_provider() {
    return this.provider_form.get("company");
  }
  get adress_provider() {
    return this.provider_form.get("adress");
  }
  get phone_provider() {
    return this.provider_form.get("phone");
  }
  get email_provider() {
    return this.provider_form.get("email");
  }
  get observation_provider() {
    return this.provider_form.get("observation");
  }
  get town_provider() {
    return this.provider_form.get("town");
  }

  //Getter Coast Center
  get code_coastcenter() {
    return this.coastcenter_form.get("code");
  }
  get name_coastcenter() {
    return this.coastcenter_form.get("name");
  }

  //Getter Product
  get name_product() {
    return this.product_form.get("name");
  }
  get description_product() {
    return this.product_form.get("description");
  }
  get barrecode_product() {
    return this.product_form.get("barrecode");
  }
  get buyingprice_product() {
    return this.product_form.get("buyingprice");
  }
  get sellingprice_product() {
    return this.product_form.get("sellingprice");
  }
  get qtystock_product() {
    return this.product_form.get("qtystock");
  }
  get qtyalert_product() {
    return this.product_form.get("qtyalert");
  }
  get qtyreapro_product() {
    return this.product_form.get("qtyreapro");
  }
  get qtyinv_product() {
    return this.product_form.get("qtyinv");
  }
  get tva_product() {
    return this.product_form.get("tva");
  }
  get location_prod() {
    return this.product_form.get("location") as object;
  }
  get category_prod() {
    return this.product_form.get("category") as object;
  }

  //Function declaration
  desable_btn(code: string, name: string, states: boolean) {
    if (code == null || name == null || code == "" || name == "") {
      states = true;
    } else {
      states = false;
    }
  }

  //Site Management

  ClickedRowSite(index) {
    this.site_form.patchValue({
      oid: index.oid,
      code: index.code,
      name: index.name,
    });
  }

  cancel_site() {
    this.site_form.patchValue({
      oid: -1,
      code: null,
      name: null,
    });
  }

  Search_site() {
    if (this.site_search == "") {
      this.list_site();
    } else {
      this.siteList = this.siteList.filter((res) => {
        return (
          res.name
            .toLocaleLowerCase()
            .match(this.site_search.toLocaleLowerCase()) ||
          res.code
            .toLocaleLowerCase()
            .match(this.site_search.toLocaleLowerCase())
        );
      });
    }
  }

  sort_site(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  add_site() {
    if (this.site_form.valid) {
      if (this.site_form.get("oid").value == -1) {
        this.settingsService.postSite(this.site).subscribe({
          next: (response) => {
            alert("Le site a été enreigistrer avec success");
            //this.siteList = [this.site, ...this.siteList];
            this.cancel_site();
            console.log(response)
            //this.siteList.push(response as Site)
            this.list_site()
          },
          error: (e) => {
            alert(e.error.message);
            console.log(e.error.message);
          },
        });
      } else {
        if (confirm("Voullez vous vraiment effectuer cette modification ?")) {
          this.settingsService.putSite(this.site_form.value).subscribe({
            next: (response) => {
              alert("Le site a été modifier avec success");
              //this.siteList = [this.site, ...this.siteList];
              this.cancel_site();
              this.list_site()
            },
            error: (e) => {
              alert(e.error.message);
              console.log(e.error.message);
            },
          });
        } else {
        }
      }
    } else {
      alert("Veillez remplir tout les champs");
    }
  }

  list_site() {
    this.settingsService.getSite().subscribe({
      next: (response) => {
        this.siteList = response as Array<Site>;
        console.log(this.siteList);
      },
    });
  }

  site_change_input() {
    if (
      this.site.code == null ||
      this.site.name == null ||
      this.site.code == "" ||
      this.site.name == ""
    ) {
      this.btn_state = true;
    } else {
      this.btn_state = false;
    }
  }

  //Warehouse Management

  ClickedRowWh(index) {
    this.wh_form.patchValue({
      oid: index.oid,
      code: index.code,
      name: index.name,
      site: index.site.oid,
    });

    this.whDataForm = {
      oid: index.oid,
      code: index.code,
      name: index.name,
      site: { oid: index.site.oid },
    };
    console.log(this.whDataForm);
  }
  cancel_warehouse() {
    this.wh_form.patchValue({
      oid: -1,
      code: null,
      name: null,
      site: null,
      //site: this.wh_form.controls['site'].patchValue('', {onlySelf: true})
    });
    this.whDataForm = {
      oid: null,
      code: null,
      name: null,
      site: { oid: null },
    };
  }
  Search_wh() {
    if (this.wh_search == "") {
      this.list_warehouse();
    } else {
      this.warehouseList = this.warehouseList.filter((res) => {
        return (
          res.name
            .toLocaleLowerCase()
            .match(this.wh_search.toLocaleLowerCase()) ||
          res.code.toLocaleLowerCase().match(this.wh_search.toLocaleLowerCase())||
          res.site.name.toLocaleLowerCase().match(this.wh_search.toLocaleLowerCase())
        );
      });
    }
  }

  sort_wh(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  warehouse_change_input() {
    if (
      this.warehouse.code == null ||
      this.warehouse.name == null ||
      this.warehouse.code == "" ||
      this.warehouse.name == ""
    ) {
      this.btn_state_wh = true;
    } else {
      this.btn_state_wh = false;
    }
    // this.desable_btn(this.warehouse.code, this.warehouse.name, this.btn_state);
  }

  add_warehouse() {
    this.whDataForm = {
      oid: this.wh_form.get("oid").value,
      code: this.wh_form.get("code").value,
      name: this.wh_form.get("name").value,
      site: { oid: this.wh_form.get("site").value },
    };
    console.log(this.whDataForm);
    if (this.wh_form.valid) {
      if (this.wh_form.get("oid").value == -1) {
        this.settingsService.postWarehouse(this.whDataForm).subscribe({
          next: (response) => {
            alert("L'entrepot a été enreigistrer avec success");
            //this.warehouseList = [this.warehouse, ...this.warehouseList];
            this.cancel_warehouse();
            this.list_warehouse()
          },
          error: (e) => {
            alert(e.error.message);
            console.log(e.error.message);
          },
        });
      } else {
        if (confirm("Voullez vous vraiment effectuer cette modification ?")) {
          this.settingsService.putWarehouse(this.whDataForm).subscribe({
            next: (response) => {
              alert("L'entrepot a été modifier avec success");
              //this.warehouseList = [this.warehouse, ...this.warehouseList];
              this.cancel_warehouse();
              this.list_warehouse()
            },
            error: (e) => {
              alert(e.error.message);
              console.log(e.error.message);
            },
          });
        }
      }
    } else {
      alert("Veillez remplir tout les champs");
    }
  }

  list_warehouse() {
    this.settingsService.getWarehouse().subscribe({
      next: (response) => {
        this.warehouseList = response as Array<Warehouse>;
        console.log(this.warehouseList);
      },
    });
  }

  //Compagny Management

  ClickedRowCompagny(index) {
    this.compagny_form.patchValue({
      oid: index.oid,
      code: index.code,
      name: index.name,
    });
  }

  cancel_compagny() {
    this.compagny_form.patchValue({
      oid: -1,
      code: null,
      name: null,
    });
  }
  Search_compagny() {
    if (this.compagny_search == "") {
      this.list_compagny();
    } else {
      this.compagnyList = this.compagnyList.filter((res) => {
        return (
          res.name
            .toLocaleLowerCase()
            .match(this.compagny_search.toLocaleLowerCase()) ||
          res.code
            .toLocaleLowerCase()
            .match(this.compagny_search.toLocaleLowerCase())
        );
      });
    }
  }

  sort_compagny(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  compagny_change_input() {
    if (
      this.compagny.code == null ||
      this.compagny.name == null ||
      this.compagny.code == "" ||
      this.compagny.name == ""
    ) {
      this.btn_state_compagny = true;
    } else {
      this.btn_state_compagny = false;
    }
    //this.desable_btn(this.compagny.code, this.compagny.name);
  }

  add_compagny() {
    console.log(this.compagny_form.get("oid").value);
    if (this.compagny_form.valid) {
      if (this.compagny_form.get("oid").value == -1) {
        this.settingsService.postComagny(this.compagny).subscribe({
          next: (response) => {
            alert("La compagnie a été enreigistrer avec success");
            //this.compagnyList = [this.compagny, ...this.compagnyList];
            //this.compagny_form.reset()
            this.cancel_compagny();
            this.list_compagny()
          },
          error: (e) => {
            alert(e.error.message);
            console.log(e.error);
          },
        });
      } else {
        if (confirm("Voulez vous vraiment effectuer cette modification ?")) {
          console.log(this.compagny_form.value);
          this.settingsService.putCompagny(this.compagny_form.value).subscribe({
            next: (response) => {
              alert("La compagnie a été modifier avec success");
              //this.compagnyList = [this.cmpDataForm, ...this.compagnyList];
              // this.compagny_form.reset();
              // console.log(this.compagny_form.value)
              this.cancel_compagny();
              this.list_compagny()
            },
            error: (e) => {
              alert(e.error.message);
              console.log(e.error);
            },
          });
        } else {
          //this.compagny_form.reset();
          //this.cmpDataForm.oid = null;
        }
      }
    } else {
      alert("Veillez remplir tout les champs");
    }
  }

  list_compagny() {
    this.settingsService.getComapagny().subscribe({
      next: (response) => {
        this.compagnyList = response as Array<Compagny>;
        console.log(this.compagnyList);
      },
    });
  }

  //Category Management

  ClickedRowCategory(index) {
    this.category_form.patchValue({
      oid: index.oid,
      code: index.code,
      name: index.name,
    });
  }

  cancel_category() {
    this.category_form.patchValue({
      oid: -1,
      code: null,
      name: null,
    });
    //console.log(this.category_form.get('oid').value)
  }
  Search_category() {
    if (this.category_search == "") {
      this.list_category();
    } else {
      this.categoryList = this.categoryList.filter((res) => {
        return (
          res.name
            .toLocaleLowerCase()
            .match(this.category_search.toLocaleLowerCase()) ||
          res.code
            .toLocaleLowerCase()
            .match(this.category_search.toLocaleLowerCase())
        );
      });
    }
  }

  sort_category(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  category_change_input() {
    if (
      this.category.code == null ||
      this.category.name == null ||
      this.category.code == "" ||
      this.category.name == ""
    ) {
      this.btn_state_cat = true;
    } else {
      this.btn_state_cat = false;
    }
    //this.desable_btn(this.category.code, this.category.name);
  }

  add_category() {
    if (this.category_form.valid) {
      if (this.category_form.get("oid").value == -1) {
        this.settingsService.postCategory(this.category).subscribe({
          next: (response) => {
            alert("La categorie a été enreigistrer avec success");
            //this.categoryList = [this.category, ...this.categoryList];
            this.cancel_category();
            this.list_category()
          },
          error: (e) => {
            alert(e.error.message);
            console.log(e.error.message);
          },
        });
      } else {
        if (confirm("Voulez vous vraiment effectuer cette modification ?")) {
          this.settingsService.putCategory(this.category_form.value).subscribe({
            next: (response) => {
              alert("La categorie a été modifie avec success");
              //this.categoryList = [this.category, ...this.categoryList];
              this.cancel_category();
              this.list_category()
            },
            error: (e) => {
              alert(e.error.message);
              console.log(e.error.message);
            },
          });
        } else {
          // Do nothing!
        }
      }
    } else {
      alert("Veillez remplir tout les champs");
    }
  }

  list_category() {
    this.settingsService.getCategory().subscribe({
      next: (response) => {
        this.categoryList = response as Array<Category>;
        console.log(this.categoryList);
      },
    });
  }

  //Location Management

  ClickedRowLocation(index) {
    this.location_form.patchValue({
      oid: index.oid,
      code: index.code,
      name: index.name,
    });
  }

  cancel_location() {
    this.location_form.patchValue({
      oid: -1,
      code: null,
      name: null,
    });
    //console.log(this.category_form.get('oid').value)
  }
  Search_location() {
    if (this.location_search == "") {
      this.list_location();
    } else {
      this.locationList = this.locationList.filter((res) => {
        return (
          res.name
            .toLocaleLowerCase()
            .match(this.location_search.toLocaleLowerCase()) ||
          res.code
            .toLocaleLowerCase()
            .match(this.location_search.toLocaleLowerCase())
        );
      });
    }
  }

  sort_location(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  location_change_input() {
    if (
      this.location.code == null ||
      this.location.name == null ||
      this.location.code == "" ||
      this.location.name == ""
    ) {
      this.btn_state_location = true;
    } else {
      this.btn_state_location = false;
    }
    //this.desable_btn(this.location.code, this.location.name);
  }

  add_location() {
    if (this.location_form.valid) {
      if (this.location_form.get("oid").value == -1) {
        this.settingsService.postLocation(this.location).subscribe({
          next: (response) => {
            alert("L'emplacement a été enreigistrer avec success");
            // this.locationList = [this.location, ...this.locationList];
            this.cancel_location();
            this.list_location()
          },
          error: (e) => {
            alert(e.error.message);
            console.log(e.error.message);
          },
        });
      } else {
        if (confirm("Voulez vous vraiment effectuer cette modification ?")) {
          this.settingsService.putLocation(this.location_form.value).subscribe({
            next: (response) => {
              alert("L'emplacement a été modifier avec success");
              //this.locationList = [this.location, ...this.locationList];
              this.cancel_location();
              this.list_location()
            },
            error: (e) => {
              alert(e.error.message);
              console.log(e.error.message);
            },
          });
        } else {
          // Do nothing!
        }
      }
    } else {
      alert("Veillez remplir tout les champs");
    }
  }

  list_location() {
    this.settingsService.getLocation().subscribe({
      next: (response) => {
        this.locationList = response as Array<Locations>;
        console.log(this.locationList);
      },
    });
  }

  //Provider Management

  ClickedRowProvider(index) {
    this.provider_form.patchValue({
      oid: index.oid,
      code: index.code,
      name: index.name,
      company: index.company,
      adress: index.adress,
      phone: index.phone,
      email: index.email,
      town: index.town,
      observation: index.observation,
    });
  }

  cancel_provider() {
    this.provider_form.patchValue({
      oid: -1,
      code: null,
      name: null,
      company: null,
      adress: null,
      phone: null,
      email: null,
      town: null,
      observation: "No comment",
    });
  }
  Search_provider() {
    if (this.provider_search == "") {
      this.list_provider();
    } else {
      this.providerList = this.providerList.filter((res) => {
        return (
          res.name
            .toLocaleLowerCase()
            .match(this.provider_search.toLocaleLowerCase()) ||
          res.code
            .toLocaleLowerCase()
            .match(this.provider_search.toLocaleLowerCase())
        );
      });
    }
  }

  sort_provider(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  provider_change_input() {
    if (
      this.provider.code == null ||
      this.provider.name == null ||
      this.provider.adress == null ||
      this.provider.company == null ||
      this.provider.email == null ||
      this.provider.phone == null ||
      this.provider.town == null ||
      this.provider.code == "" ||
      this.provider.name == "" ||
      this.provider.adress == "" ||
      this.provider.company == "" ||
      this.provider.email == "" ||
      this.provider.phone == "" ||
      this.provider.town == ""
    ) {
      this.btn_state_provider = true;
    } else {
      this.btn_state_provider = false;
    }
    // this.desable_btn(this.provider.code, this.provider.name);
  }

  add_provider() {
    if (this.provider_form.valid) {
      if (this.provider_form.get("oid").value == -1) {
        this.settingsService.postPovider(this.provider).subscribe({
          next: (response) => {
            alert("Le forunisseur a été enreigistrer avec success");
            // this.providerList = [this.provider, ...this.providerList];
            this.cancel_provider();
            this.list_provider()
          },
          error: (e) => {
            alert(e.error.message);
            console.log(e.error.message);
          },
        });
      } else {
        if (confirm("Voullez vous vraiment effectuer cette modification ?")) {
          this.settingsService.putProvider(this.provider_form.value).subscribe({
            next: (response) => {
              alert("Le forunisseur a été modifier avec success");
              // this.providerList = [this.provider, ...this.providerList];
              this.cancel_provider();
              this.list_provider()
            },
            error: (e) => {
              alert(e.error.message);
              console.log(e.error.message);
            },
          });
        } else {
          // Do nothing!
        }
      }
    } else {
      alert("Veillez remplir tout les champs");
    }
  }

  list_provider() {
    this.settingsService.getProvider().subscribe({
      next: (response) => {
        this.providerList = response as Array<Provider>;
        console.log(this.providerList);
      },
    });
  }

  //Coast Center Management

  ClickedRowCoastcenter(index) {
    this.coastcenter_form.patchValue({
      oid: index.oid,
      code: index.code,
      name: index.name,
    });
  }

  cancel_coastcenter() {
    this.coastcenter_form.patchValue({
      oid: -1,
      code: null,
      name: null,
    });
  }

  Search_coastcenter() {
    if (this.coastcenter_search == "") {
      this.list_coastcenter();
    } else {
      this.coastcenterList = this.coastcenterList.filter((res) => {
        return (
          res.name
            .toLocaleLowerCase()
            .match(this.coastcenter_search.toLocaleLowerCase()) ||
          res.code
            .toLocaleLowerCase()
            .match(this.coastcenter_search.toLocaleLowerCase())
        );
      });
    }
  }

  sort_coastcenter(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  coastcenter_change_input() {
    if (
      this.coastcenter.code == null ||
      this.coastcenter.name == null ||
      this.coastcenter.code == "" ||
      this.coastcenter.name == ""
    ) {
      this.btn_state_coastC = true;
    } else {
      this.btn_state_coastC = false;
    }
    //this.desable_btn(this.coastcenter.code, this.coastcenter.name);
  }

  add_coastcenter() {
    if (this.coastcenter_form.valid) {
      if (this.coastcenter_form.get("oid").value == -1) {
        this.settingsService.postCoastcenter(this.coastcenter).subscribe({
          next: (response) => {
            alert("L'imputation a été enreigistrer avec success");
            //this.coastcenterList = [this.coastcenter, ...this.coastcenterList];
            this.cancel_coastcenter();
            this.list_coastcenter()
          },
          error: (e) => {
            alert(e.error.message);
            console.log(e.error.message);
          },
        });
      } else {
        if (confirm("Voulez vous vraiment effectuer cette modification ?")) {
          this.settingsService
            .putCoastcenter(this.coastcenter_form.value)
            .subscribe({
              next: (response) => {
                alert("L'imputation a été modifiée avec success");
                this.cancel_coastcenter();
                this.list_coastcenter()
              },
              error: (e) => {
                alert(e.error.message);
                console.log(e.error.message);
              },
            });
        } else {
          // Do nothing!
        }
      }
    } else {
      alert("Veillez remplir tout les champs");
    }
  }

  list_coastcenter() {
    this.settingsService.getCoastcenter().subscribe({
      next: (response) => {
        this.coastcenterList = response as Array<Coastcenter>;
        console.log(this.coastcenterList);
      },
    });
  }

  //Product Management

  ClickedRowProduct(index) {
    this.product_form.patchValue({
      oid: index.oid,
      name: index.name,
      description: index.description,
      barrecode: index.barrecode,
      buyingprice: index.buyingprice,
      sellingprice: index.sellingprice,
      qtystock: index.qtystock,
      qtyalert: index.qtyalert,
      qtyreapro: index.qtyreapro,
      qtyinv: index.qtyinv,
      tva: index.tva,
      location: index.location.oid,
      category: index.category.oid,
    });
    console.log(this.product_form.value);
    //this.warehouse.site = index.site.oid;

    this.prodDataForm = {
      oid: index.oid,
      name: index.name,
      description: index.description,
      barrecode: index.barrecode,
      buyingprice: index.buyingprice,
      sellingprice: index.sellingprice,
      qtystock: index.qtystock,
      qtyalert: index.qtyalert,
      qtyreapro: index.qtyreapro,
      qtyinv: index.qtyinv,
      tva: index.tva,
      location: { oid: index.location.oid },
      category: { oid: index.category.oid },
    };
    console.log(this.whDataForm);
  }
  cancel_product() {
    this.product_form.patchValue({
      oid: -1,
      name: null,
      description: null,
      barrecode: null,
      buyingprice: null,
      sellingprice: null,
      qtystock: null,
      qtyalert: null,
      qtyreapro: null,
      qtyinv: null,
      tva: null,
      location: { oid: null },
      category: { oid: null },
    });
    this.prodDataForm = {
      oid: -1,
      name: null,
      description: null,
      barrecode: null,
      buyingprice: null,
      sellingprice: null,
      qtystock: null,
      qtyalert: null,
      qtyreapro: null,
      qtyinv: null,
      tva: null,
      location: { oid: null },
      category: { oid: null },
    };
  }

  Search_product() {
    if (this.product_search == "") {
      this.list_product();
    } else {
      this.productList = this.productList.filter((res) => {
        return (
          res.name
            .toLocaleLowerCase()
            .match(this.product_search.toLocaleLowerCase()) ||
          res.category.name
            .toLocaleLowerCase()
            .match(this.product_search.toLocaleLowerCase())
        );
      });
    }
  }

  sort_product(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  product_change_input() {
    if (
      this.product.barrecode == null ||
      this.product.name == null ||
      this.product.buyingprice == null ||
      this.product.qtyalert == null ||
      this.product.qtyinv == null ||
      this.product.qtyreapro == null ||
      this.product.qtystock == null ||
      this.product.sellingprice == null ||
      this.product.tva == null ||
      this.product.name == ""
    ) {
      this.btn_state_product = true;
    } else {
      this.btn_state_product = false;
    }
    //this.desable_btn(this.product.code, this.product.name);
  }

  add_product() {
    this.prodDataForm = {
      oid: this.product_form.get("oid").value,
      name: this.product_form.get("name").value,
      description: this.product_form.get("description").value,
      barrecode: this.product_form.get("barrecode").value,
      buyingprice: this.product_form.get("buyingprice").value,
      sellingprice: this.product_form.get("sellingprice").value,
      qtystock: this.product_form.get("qtystock").value,
      qtyalert: this.product_form.get("qtyalert").value,
      qtyreapro: this.product_form.get("qtyreapro").value,
      qtyinv: this.product_form.get("qtyinv").value,
      tva: this.product_form.get("tva").value,
      location: { oid: this.product_form.get("location").value },
      category: { oid: this.product_form.get("category").value },
    };
    if (this.product_form.valid) {
      if (this.product_form.get("oid").value == -1) {
        this.settingsService.postProduct(this.prodDataForm).subscribe({
          next: (response) => {
            alert("Le produit a été enreigistrer avec success");
            //this.productList = [this.product, ...this.productList];
            this.cancel_product();
            this.list_product()
          },
          error: (e) => {
            alert(e.error.message);
            console.log(e.error.message);
          },
        });
      } else {
        if (confirm("Voulez vous vraiment effectuer cette modification ?")) {
          this.settingsService.putPdorduct(this.prodDataForm).subscribe({
            next: (response) => {
              alert("Le produit a été modifier avec success");
              //this.productList = [this.product, ...this.productList];
              this.cancel_product();
              this.list_product()
            },
            error: (e) => {
              alert(e.error.message);
              console.log(e.error.message);
            },
          });
        }
      }
    } else {
      alert("Veillez remplir tout les champs");
    }
  }

  list_product() {
    this.settingsService.getProduct().subscribe({
      next: (response) => {
        this.productList = response as Array<Product>;
        console.log(this.productList);
      },
    });
  }
}
