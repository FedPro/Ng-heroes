import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { HeroService } from './services/hero.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';

    constructor(private primengConfig: PrimeNGConfig, service: HeroService) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}