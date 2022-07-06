import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  data: any = [];
  public empresas: Array<any>;
  public mostrarTenant: string;

  constructor() {
    this.empresas = [];
    this.mostrarTenant = "";
  }

  ngOnInit(): void {
    this.recuperarEmpresas()
  }

  public async recuperarEmpresas() {
    this.empresas = (await axios.get(`http://localhost:11081/tenants/`)).data;
    this.empresas.map(re => {
      re.checked = false;
    });
  }

  checkAll(event) {
    this.empresas.forEach(element => element.checked = event);
  }

  isCheckedAll() {
    return this.empresas.every(re => re.checked);
  }

  public async EliminarEmpresa() {
    const array = this.empresas.filter(seleccionEmpresa => seleccionEmpresa.checked === true)

    for (let element of array) {
      let respuesta = (await axios.delete(`http://localhost:11081/tenants/${element.id}`)).data;

      if (respuesta == null) {
        this.mostrarTenant = "No se encontró la empresa para eliminar";
        return
      }

      for (let index in this.empresas) {
        if (this.empresas[index].id == element.id) {
          this.empresas.splice(parseInt(index), 1);
        }
      }

      console.log(respuesta.name + " " + respuesta.updatedAt);
      console.log(element.id);
    }
  }

  ConfirmacionEliminar() {
    if(this.SelectionTenant() == true){
      let deleteTenant = confirm("¿Quieres eliminar las empresas?");
      if (deleteTenant == true) {
        this.EliminarEmpresa();
      }
    }
  }

  public SelectionTenant() {
    const array = this.empresas.filter(seleccionEmpresa => seleccionEmpresa.checked === true)
      if (array.length == 0) {
        alert("No se encontró la empresa para eliminar");
        return false;
      }
    return true;
  }

  // ngOnChanges(): void {
  //   this.recuperarEmpresas();
  // }
}
