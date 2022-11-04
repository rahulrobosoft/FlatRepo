import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {



  ngOnInit(): void {
  }

  // url: SafeResourceUrl;
  // constructor(private sanitizer: DomSanitizer) {
  //   const baseUrl = 'https://outlook.office.com/mail/deeplink?AttachmentId=AAMkAGY0YTc2NTMwLWI3NmEtNDI4OS1iMGRlLWFhYzQ2ZWM1Y2M4YwBGAAAAAAAVQMoSvqPCTp%2BbHHEziLzQBwC2Y3bWa4oXT7guDLbCMO4fAAAAAAEMAAC2Y3bWa4oXT7guDLbCMO4fAAAn6GhjAAABEgAQACtCgHavUhVAucoU714uRCQ%3D&ItemId=AAMkAGY0YTc2NTMwLWI3NmEtNDI4OS1iMGRlLWFhYzQ2ZWM1Y2M4YwBGAAAAAAAVQMoSvqPCTp%2BbHHEziLzQBwC2Y3bWa4oXT7guDLbCMO4fAAAAAAEMAAC2Y3bWa4oXT7guDLbCMO4fAAAn6GhjAAA%3D';
  //   this.url = this.sanitizer.bypassSecurityTrustResourceUrl(baseUrl);
  // }

}
