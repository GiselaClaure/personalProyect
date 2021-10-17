
export interface Friends {
    hero: Hero;
    gallery: Gallery;
}
export interface Hero{
    cover: Img;
    title: string;
    description: string;
}
export interface Img{
    src: string;
    alt: string;
}
export interface GalleryContent{
    name: string;
    about:string;
    img: Img;
}
export interface Gallery{
    galleryTitle: string;
    character: GalleryContent[];
}

