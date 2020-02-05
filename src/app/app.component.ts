import { Component } from '@angular/core';
import {Adherent, AdherentQueryService} from './core/services/adherent-query.service'
import {Activity, ActivityQueryService} from './core/services/activity-query.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monProjet';

  

  constructor (private adherentQueryService: AdherentQueryService, private activityQueryService: ActivityQueryService, private router: Router) {
    
  }

  ngOnInit() {}
  
  
}
