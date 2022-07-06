import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import axios from 'axios';

@Component({
    selector: 'consultas',
    templateUrl: './consultas.component.html'
})

export class ConsultasComponent {
    public nombreDelComponente: string;
    public resultado: string;
    public empresas: Array<any>;
    public mostrarAccount: string;
    @ViewChild('txt_tenantName') tenantName: ElementRef;
    public tenantValue: any;

    constructor() {
        this.nombreDelComponente = "Empresa"
        this.resultado = "";
        this.empresas = [];
        this.mostrarAccount = "";
    }

    public async ObtencionEmpresa() {
        const tenant = "6297df89218d2f4a196ed6e6"; //Aquí se debe cambiar a alguna "tenant" registrada en la base de datos 

        axios.get(`http://localhost:11081/tenants/${tenant}`)
            .then((response) => {
                console.log(typeof (response));
                console.log(response);

                console.log(response.data.name);

                this.resultado = response.data.name;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    public async ObtencionDeTodasLasEmpresas() {
        this.empresas = (await axios.get(`http://localhost:11081/tenants/`)).data;
    }

    async EliminarAccount() {
        const account = "62b3a7aed80831d2daeb6948";
        let respuesta = (await axios.delete(`http://localhost:11081/accounts/${account}`)).data;

        if (respuesta == null) {
            this.mostrarAccount = "No se encontró la cuenta para eliminar";
            return
        }
        this.mostrarAccount = respuesta.email + " " + respuesta.updatedAt;
    }

    // public async CreateTennat() {
    //     await axios.post('http://localhost:11081/tenants/', { name: `${this.tenantName.nativeElement.value}` })

    //     console.log(this.tenantName.nativeElement.value);
    // }

    // public async addTenant() {
    //     await axios.post('http://localhost:11081/tenants', {

    //         name: this.tenantValue,

    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


    public async addTenant() {
        return await axios.post('http://localhost:11081/tenants', { name: 'Empresa 11' });
    }

    // public async modifyTenant() {

    //     const tenant = "629679fcca02f7eaa9e761d1";

    //     return await axios.patch(`http://localhost:11081/tenants/${tenant}`, {

    //         name: 'Empresa 100'

    //     });

    // }

    // public async ModifyTenant(){
    //     await axios.put('http://localhost:11081/tenants/',)
    // }
}