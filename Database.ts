
export class Area{

    private points: Point[];


    constructor(x1, y1, x2, y2){

        this.points = []
        this.points.push(new Point(x1, y1));
        this.points.push(new Point(x2, y2));
    }

    public inside(x, y): boolean{
        let p1 = this.points[0];
        let p2 = this.points[1];
        if(p1.x < x && p2.x > x){
            console.log("find x");
            if(p1.y < y && p2.y > y){
                console.log("find y");
                return true;
            }
        }

        return false;
    }

}


export class Point{

    public x;
    public y;

    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}


export class Art {

    private _area: Area;
    private _img: string;
    private _title: string;
    private _description: string;


    public constructor(area, img, title, description){
        this._area = area;
        this._img = img;
        this._title = title;
        this._description = description;
    }

    public get area(): Area{
        return this._area;
    }

    public get img(): string{
        return this._img;
    }

    public get title(): string{
        return this._title;
    }

    public get description(): string{
        return this._description;
    }


    public get JSON(){
        return {
            img: this.img,
            title: this.title,
            description: this.description
        }
    }



}

export class Database {

    private data: Art[];

    constructor(){

        this.data = [];


        this.data.push(new Art(
            new Area(0, 0, 3, 3), "/images/mona_lisa.jpg", "Mona Lisa, by Leonardo da Vinci"
            , `The Mona Lisa (/ˌmoʊnə ˈliːsə/; Italian: Monna Lisa [ˈmɔnna ˈliːza] or La Gioconda [la dʒoˈkonda], French: La Joconde [la ʒɔkɔ̃d]) is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world".[1]
The painting is thought to be a portrait of Lisa Gherardini, the wife of Francesco del Giocondo, and is in oil on a white Lombardy poplar panel. It is believed to have been painted between 1503 and 1506; however, Leonardo may have continued working on it as late as 1517. It was acquired by King Francis I of France and is now the property of the French Republic, on permanent display at the Louvre Museum in Paris since 1797.[2]
The subject's expression, which is frequently described as enigmatic,[3] the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism were novel qualities that have contributed to the continuing fascination and study of the work`
        ));

        this.data.push(new Art(
           new Area(3, 0, 6, 3), "/images/the_scream.jpg", "The Scream"
            , `The Scream (Norwegian: Skrik) is the popular name given to each of four versions of a composition, created as both paintings and pastels, by Norwegian Expressionist artist Edvard Munch between 1893 and 1910. The German title Munch gave these works is Der Schrei der Natur (The Scream of Nature). The works show a figure with an agonized expression against a landscape with a tumultuous orange sky. Arthur Lubow has described The Scream as "an icon of modern art, a Mona Lisa for our time."[1]
Edvard Munch created the four versions in various media. The National Gallery in Oslo, Norway, holds one of two painted versions (1893, shown here). The Munch Museum holds the other painted version (1910, see gallery, below) and a pastel version from 1893. These three versions have not traveled for years.[2]
The fourth version (pastel, 1895) was sold for $119,922,600 at Sotheby's Impressionist and Modern Art auction on 2 May 2012 to financier Leon Black,[3][4] the fourth highest nominal price paid for a painting at auction.[5] The painting was on display in the Museum of Modern Art in New York from October 2012 to April 2013.
Also in 1895, Munch created a lithograph stone of the image. Of the lithograph prints produced by Munch, several examples survive.[6] Only approximately four dozen prints were made before the original stone was resurfaced by the printer in Munch's absence.[7]
The Scream has been the target of several high-profile art thefts. In 1994, the version in the National Gallery was stolen. It was recovered several months later. In 2004, both The Scream and Madonna were stolen from the Munch Museum, and both were recovered two years later.`
        ));

        this.data.push(new Art(
           new Area(8,0, 11, 3), "/images/vincent_van_gogh_self-portrait.jpg", "Vincent van Gogh"
            , `Vincent Willem van Gogh (Dutch: [ˈvɪnsɛnt ˈʋɪləm vɑn ˈɣɔx] (About this sound listen);[note 1] 30 March 1853 – 29 July 1890) was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life in France, where he died. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. His suicide at 37 followed years of mental illness and poverty.`
        ));

    }

    public find(x, y): false|Art{
        for(let d of this.data){
            if(d.area.inside(x, y)){
                return d;
            }
        }

        return false;

    }


}
