import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {

  constructor() { }

  bottomModel={
    title: 'Wanna know',
    characters:[
      {
       nombre: 'Gunther',
       who:'Central Perk waiter who has a huge crush on Rachel',
       img:{
         src:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/11/friends-gunther.jpg',
         alt:'gunther',
       }
      },
      {
        nombre: 'Jack & Judy Geller',
        who:"Ross and Monica's parents who",
        img:{
          src:'https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OCHV6TIRLJE7DHCXT6MSV44SKY.jpg',
          alt:'jackJudy',
        }
       },
       {
        nombre: 'Janice',
        who:"Chandler's ex girlfriend who accasionally coincides with the gang.",
        img:{
          src:'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/12-cosas-sobre-friends-segun-janice-que-no-sabias/janice-es-mas-que-atenta-con-los-fans/113786497-1-esl-ES/Janice-es-mas-que-atenta-con-los-fans.jpg?resize=480:*',
          alt:'janice',
        }
       },
       {
        nombre: 'Mike',
        who:"a.k.a Crap Bag. He's Phoebe's lover",
        img:{
          src:'https://cheesecake.articleassets.meaww.com/537646/uploads/affb57e0-bef2-11eb-bc97-efe415e1a6ea_800_420.png',
          alt:'mike ',
        }
       }
    ],
    button: 'Start!',
  }

  ngOnInit(): void {
  }
  public onClickProduct(): void {
    if(this.bottomModel.button == 'Start!') {
      this.bottomModel.button = 'One'
    }else if(this.bottomModel.button == 'One') {
      this.bottomModel.button = 'Two'
    } else if(this.bottomModel.button == 'Two') {
      this.bottomModel.button = 'Three'
    } else if(this.bottomModel.button == 'Three') {
      this.bottomModel.button = 'Four'
    }else if(this.bottomModel.button == 'Four') {
      this.bottomModel.button = 'Start!'
    }

    
  }
}
