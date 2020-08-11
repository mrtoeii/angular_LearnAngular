import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {
  imagePreview: string | ArrayBuffer
  file: File
  constructor(
    private networkService: NetworkService
  ) { }

  ngOnInit(): void {
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
    this.networkService.addProduct(product).subscribe(
      data =>{
        // console.log(JSON.stringify(data));
        console.log(data);
        // this.dataSource.data = data
      },
      error => {
        console.log(error.message);
        // console.log(JSON.stringify(error));

      }
    )
  }
}
