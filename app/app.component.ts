import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {}

  getBase64Image(img) {
    var canvas = document.createElement('canvas');
    console.log('image');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL('image/png');
    return dataURL;
  }

  download() {
    let doc = new jsPDF();

    doc.autoTable({ html: '#table' });

    doc.output('datauri', 'test.pdf');
  }
}
