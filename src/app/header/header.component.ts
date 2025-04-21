import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: false, // Chỉ định rằng đây là một component độc lập
    templateUrl: './header.component.html', //Dành cho những template phức tạp hơn
    styleUrls: ['./header.component.css'], // Chỉ định các tệp CSS cho component này
})

export class HeaderComponent {}

