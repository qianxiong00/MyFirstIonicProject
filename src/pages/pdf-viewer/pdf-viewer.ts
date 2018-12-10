import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-pdf-viewer',
  templateUrl: 'pdf-viewer.html'
})
export class PdfViewerPage extends BasePage {

    constructor(private document: DocumentViewer, private file: File) {
        super()
    }

    openLocalPdf() {
        const options: DocumentViewerOptions = {
            title: 'My PDF'
        }

        this.document.viewDocument('assets/sample.pdf', 'application/pdf', options)
    }
}