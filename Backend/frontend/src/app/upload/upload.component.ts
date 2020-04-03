import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
  }

  public images;

  selectedImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log(this.images);
    }
  }

  upload(Data: NgForm) {
    const formData = new FormData;
    console.log(Data.value);
    formData.append('name', Data.value.carName);
    formData.append('model', Data.value.carModel);
    formData.append('price', Data.value.carPrice);
    formData.append('image', this.images);
    this.http.post("/api/upload", formData).subscribe(res => {
      if (res['success'])
        this.router.navigateByUrl("");
      else
        alert("Server Error!")
      console.log(res);
    })
  }

}
