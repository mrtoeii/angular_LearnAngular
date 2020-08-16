import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetworkService } from 'src/app/services/network.service';
import { Product } from 'src/app/models/product.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {
  imagePreview: string | ArrayBuffer
  file: File
  @ViewChild('productForm', { static: true }) productForm: NgForm
  constructor(
    private activatedRoute: ActivatedRoute,
    private networkService: NetworkService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        // console.log(params.id)
        this.feedData(params.id)
      }
    )
  }
  feedData(id: number) {
    this.networkService.getProduct(id).subscribe(
      data => {
        // console.log(data);
        var { id, name, price, stock, image } = { ...data }
        this.imagePreview = image
        this.productForm.setValue({ id, name, price, stock })
      },
      error => {
        console.log(error.message);

      }
    )
  }




  onPrviewImage(event) {
    const metaImage = event.target.files[0]
    if (metaImage) {
      this.file = metaImage
      const reader = new FileReader()
      reader.readAsDataURL(metaImage)
      reader.onload = () => {
        this.imagePreview = reader.result
      }
    }
  }

  onSubmit(productForm: NgForm) {
    if (productForm.invalid) {
      return
    }

    const values = productForm.value
    let product = new Product()
    product.name = values.name
    product.price = values.price
    product.stock = values.stock
    product.image = this.file
    // console.log(product);

    this.networkService.updateProduct(values.id, product).subscribe(
      data => {
     
        // console.log(data);
        this.alertSwal(data)
      },
      error => {
        console.log(error.message);
        // console.log(JSON.stringify(error));

      }
    )
  }

  alertSwal(data) {
    if (data.status == 200) {
      Swal.fire(
        'Success',
        data.msg,
        'success'
      ).then((result) => {
        this.location.back()
      })
    }

    if (data.status == 404) {
      Swal.fire(
        'Error',
        data.msg,
        'error'
      ).then((result) => {
        this.location.back()
      })
    }

  }

}
