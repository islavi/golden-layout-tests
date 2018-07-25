import { Injectable } from '@angular/core';
import { Toast, BodyOutputType, ToasterService } from 'angular2-toaster';

@Injectable()
export class NotificationService {

    private toasterService: ToasterService;

    constructor(toasterService: ToasterService) {
        this.toasterService = toasterService;
    }

    public showNotification = (type: string, title: string, body: string) => {
        const toast: Toast = {
          type: type,
          title: title,
          body: body,
          timeout: 5000,
          showCloseButton: true,
          bodyOutputType: BodyOutputType.TrustedHtml,
        };
        this.toasterService.popAsync(toast);
      }

}
