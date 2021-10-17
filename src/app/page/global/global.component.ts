import { Component, OnInit } from '@angular/core';
import { Friends, Gallery, } from './models/friends.model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

  public friends: Friends;
  public otherGallery: Gallery;
  

  constructor() { 
    this.friends = {
     hero:{
      cover:{
        src:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/05/friends-reunion-2348571.jpg' ,
        alt:'central perk' ,
      },
      title: 'WELCOME TO:',
      description: 'F.R.I.E.N.D.S is a comedy sitcom emmited from September 22, 1994 to May 6, 2004. During 10 seasons, we enyoyed the adventures of Ross, Reachel, Mónica , Chandles and Joey, a group of friends in their 20s and 30s who live in Manhattan, New York City. ',
     },
     gallery:{
       galleryTitle:'MEET THE GANG:',
       character:[
         {
         name: 'Ross Geller',
         about: 'dinosaurs lover',
         img:{
           src:'https://media.revistagq.com/photos/5cb725b0cd5468d970512e0c/16:9/w_1280,c_limit/ross_geller_friends_1863.jpg',
           alt:'Ross photo',
         },
       },
       {
        name: 'Monica Geller',
        about:'cook and compulsive cleaner',
        img:{
          src:'https://tn.com.ar/resizer/GJ59oLhegCX_SeRh1BXbkfIxlcQ=/1440x0/smart/filters:quality(60)/cloudfront-us-east-1.images.arcpublishing.com/artear/Y2PSBBVNP7MAIAETT5YOK2TPJQ.png',
          alt:'Monica photo',
        },
      },
      {
        name: 'Rachel Green',
        about:'fashion victim',
        img:{
          src:'https://phantom-telva.unidadeditorial.es/1edd29d086fa0a2ac043c32b140a3451/crop/0x0/949x527/resize/828/f/jpg/assets/multimedia/imagenes/2020/04/06/15861716951408.jpg',
          alt:'rachel photo',
        },
      },
      {
        name: 'Chandler Bing',
        about:'the funny one',
        img:{
          src:'https://i.kym-cdn.com/entries/icons/facebook/000/033/657/tempsnip2.jpg',
          alt:'chandler photo',
        },
      },
      {
        name: 'Joey Tribbiani',
        about: 'frustrated actor',
        img:{
          src:'https://media.revistagq.com/photos/5ca5f4a4267a329590724851/16:9/w_1280,c_limit/abrigo_balenciaga_9000_dolares_inspirado_joey_friends_3816.jpg',
          alt:'joey photo',
        },
      },
      {
        name: 'Phoebe Buffay',
        about:'artist, weirdo',
        img:{
          src:'https://static.onecms.io/wp-content/uploads/sites/13/2015/09/10/lisa-kudrow-friends.jpg',
          alt:'phoebe photo',
        }
      }
    ]
  },
    
  },
  this.otherGallery={
    galleryTitle:'TOP CHAPTERS',
    character:[
      {
      name: '5x14',
      about: 'The One Where Everybody Finds Out',
      img:{
        src:'https://i.blogs.es/cffecf/mis-ojos-phoebe/1366_2000.jpeg',
        alt:'5 14',
      },
    },
    {
     name: '6x17',
     about:'The One With Unagi',
     img:{
       src:'https://i.blogs.es/3c1baa/unagi/1366_2000.jpeg',
       alt:'unagi',
     },
   },
   {
     name: '4x12',
     about:'The One With The Embryos',
     img:{
       src:'https://i.blogs.es/f00f57/friends-4x12/1366_2000.jpeg',
       alt:'4 12',
     },
   },
   {
     name: '8x04',
     about:'The One With The Videotape',
     img:{
       src:'https://i.blogs.es/5c5cd0/friends-8x04/1366_2000.jpeg',
       alt:'408',
     },
   },
   {
     name: '5x08',
     about: 'The One With All The Thanksgivings',
     img:{
       src:'https://bestlifeonline.com/wp-content/uploads/sites/3/2020/12/thanksgiving-turkey.jpg?fit=1020%2C574&ssl=1',
       alt:'508',
     }, 
   },
   {
     name: '4x07',
     about:'The One Where Chandler Crosses the Line',
     img:{
       src:'https://i.blogs.es/0ecc8f/friends-4x07/1366_2000.jpeg',
       alt:'407',
     }
   }
 ]}
 }
  ngOnInit(): void {}

}
