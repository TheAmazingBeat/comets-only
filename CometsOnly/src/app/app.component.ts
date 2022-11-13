import { Component, ViewEncapsulation } from '@angular/core';
import { APIService } from './shared/api.service';
import { Profile } from './shared/profile.model';
import { Profile2 } from './shared/profile2.model';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/xp.css/dist/XP.css'],
})
export class AppComponent {
  title = 'CometsOnly';

  signedIn: boolean = true;

  profiles: Profile[] = [];

  constructor(private API: APIService) {}

  // GETS A MATCH PROFILE
  match(): Profile {
    this.API.getProfile();
    return {
      name: this.API.profile.Name,
      age: this.API.profile.Age,
      lang: this.API.profile.Lang,
      os: this.API.profile.OS,
      editor: this.API.profile.Editor,
      lastShower: this.API.profile.LastShower,
      code: this.API.profile.Code,
    };
  }
}
