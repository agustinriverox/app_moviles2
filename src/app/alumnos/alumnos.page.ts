import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, MenuController } from '@ionic/angular';
import { animationFrameScheduler } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements AfterViewInit {

  data: any;

  constructor(public menu: MenuController, private activeroute: ActivatedRoute,
    private router: Router, private animationCtrl: AnimationController) {  
        this.activeroute.queryParams.subscribe(params => {
            this.data = this.router.getCurrentNavigation().extras.state.user;
            console.log(this.data)
    });

    
    }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.toggle('first');
  }

  ngAfterViewInit(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#item'))
    .duration(2000)
    .fromTo('color', 'black', 'yellow')
    .iterations(Infinity)
    .play()
  }
}
