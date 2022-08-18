import { Injectable } from "@angular/core";
import {
  Site,
  myConst,
  Warehouse,
  Compagny,
  Provider,
} from "../../models/settings";
import { HttpClient } from "@angular/common/http";
import {
  Coastcenter,
  Category,
  Locations,
  Product,
} from "../../models/settings";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  //Site
  postSite(site: Site) {
    return this.http.post(myConst.url.concat("add_site"), site);
  }
  getSite() {
    return this.http.get(myConst.url.concat("list_site"));
  }
  putSite(site: Site) {
    return this.http.put(myConst.url.concat("update_site"), site);
  }

  //Warehouse
  postWarehouse(warehouse: any) {
    return this.http.post(myConst.url.concat("add_warehouse"), warehouse);
  }
  getWarehouse() {
    return this.http.get(myConst.url.concat("list_warehouse"));
  }
  putWarehouse(warehouse: any) {
    return this.http.put(myConst.url.concat("update_warehouse"), warehouse);
  }

  //Compagnies
  postComagny(compagny: Compagny) {
    return this.http.post(myConst.url.concat("add_compagny"), compagny);
  }
  getComapagny() {
    return this.http.get(myConst.url.concat("list_compagny"));
  }
  putCompagny(compagny: Compagny) {
    return this.http.put(myConst.url.concat("update_compagny"), compagny);
  }

  //Provider
  postPovider(provider: Provider) {
    return this.http.post(myConst.url.concat("add_provider"), provider);
  }
  getProvider() {
    return this.http.get(myConst.url.concat("list_provider"));
  }
  putProvider(provider: Provider) {
    return this.http.put(myConst.url.concat("update_provider"), provider);
  }

  //CoastCenter
  postCoastcenter(coastcenter: Coastcenter) {
    return this.http.post(myConst.url.concat("add_coastcenter"), coastcenter);
  }
  getCoastcenter() {
    return this.http.get(myConst.url.concat("list_coastcenter"));
  }
  putCoastcenter(coastcenter: Coastcenter) {
    return this.http.put(myConst.url.concat("update_coastcenter"), coastcenter);
  }

  //Location
  postLocation(location: Locations) {
    return this.http.post(myConst.url.concat("add_location"), location);
  }
  getLocation() {
    return this.http.get(myConst.url.concat("list_location"));
  }
  putLocation(location: Locations) {
    return this.http.put(myConst.url.concat("update_location"), location);
  }

  //Category
  postCategory(category: Category) {
    return this.http.post(myConst.url.concat("add_category"), category);
  }
  getCategory() {
    return this.http.get(myConst.url.concat("list_category"));
  }
  putCategory(category: Category) {
    return this.http.put(myConst.url.concat("update_category"), category);
  }
  //Produit
  postProduct(produit: any) {
    return this.http.post(myConst.url.concat("add_product"), produit);
  }
  getProduct() {
    return this.http.get(myConst.url.concat("list_product"));
  }
  putPdorduct(product: any) {
    return this.http.put(myConst.url.concat("update_prodcut"), product);
  }
}
