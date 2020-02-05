import { Component, OnInit } from '@angular/core';
import { Activity, ActivityQueryService } from '../core/services/activity-query.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  
  activities: Activity[];

  constructor(private activityQueryService: ActivityQueryService) { }

  ngOnInit() {
    this.activityQueryService.getActivities().subscribe (
      result => this.activities = result
    );
  }

}
