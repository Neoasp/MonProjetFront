import { Component, OnInit } from '@angular/core';
import { Adherent, AdherentQueryService } from '../core/services/adherent-query.service';


@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.scss']
})
export class AdherentComponent implements OnInit {
  adherents: Adherent[];

  constructor(private adherentQueryService: AdherentQueryService,) { }

  ngOnInit() {
    this.adherentQueryService.getAdherents().subscribe (
      result => this.adherents = result
    )}

}
