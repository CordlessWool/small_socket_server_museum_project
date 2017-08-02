"use strict";
var Area = (function () {
    function Area(x1, y1, x2, y2) {
        this.points = [];
        this.points.push(new Point(x1, y1));
        this.points.push(new Point(x2, y2));
    }
    Area.prototype.inside = function (x, y) {
        var p1 = this.points[0];
        var p2 = this.points[1];
        if (p1.x < x && p2.x > x) {
            console.log("find x");
            if (p1.y < y && p2.y > y) {
                console.log("find y");
                return true;
            }
        }
        return false;
    };
    return Area;
}());
exports.Area = Area;
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.Point = Point;
var Art = (function () {
    function Art(area, img, title, description) {
        this._area = area;
        this._img = img;
        this._title = title;
        this._description = description;
    }
    Object.defineProperty(Art.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Art.prototype, "img", {
        get: function () {
            return this._img;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Art.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Art.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Art.prototype, "JSON", {
        get: function () {
            return {
                img: this.img,
                title: this.title,
                description: this.description
            };
        },
        enumerable: true,
        configurable: true
    });
    return Art;
}());
exports.Art = Art;
var Database = (function () {
    function Database() {
        this.data = [];
        this.data.push(new Art(new Area(0, 0, 3, 3), "/images/mona_lisa.jpg", "Mona Lisa, by Leonardo da Vinci", "The Mona Lisa (/\u02CCmo\u028An\u0259 \u02C8li\u02D0s\u0259/; Italian: Monna Lisa [\u02C8m\u0254nna \u02C8li\u02D0za] or La Gioconda [la d\u0292o\u02C8konda], French: La Joconde [la \u0292\u0254k\u0254\u0303d]) is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as \"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world\".[1]\nThe painting is thought to be a portrait of Lisa Gherardini, the wife of Francesco del Giocondo, and is in oil on a white Lombardy poplar panel. It is believed to have been painted between 1503 and 1506; however, Leonardo may have continued working on it as late as 1517. It was acquired by King Francis I of France and is now the property of the French Republic, on permanent display at the Louvre Museum in Paris since 1797.[2]\nThe subject's expression, which is frequently described as enigmatic,[3] the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism were novel qualities that have contributed to the continuing fascination and study of the work"));
        this.data.push(new Art(new Area(3, 0, 6, 3), "/images/the_scream.jpg", "The Scream", "The Scream (Norwegian: Skrik) is the popular name given to each of four versions of a composition, created as both paintings and pastels, by Norwegian Expressionist artist Edvard Munch between 1893 and 1910. The German title Munch gave these works is Der Schrei der Natur (The Scream of Nature). The works show a figure with an agonized expression against a landscape with a tumultuous orange sky. Arthur Lubow has described The Scream as \"an icon of modern art, a Mona Lisa for our time.\"[1]\nEdvard Munch created the four versions in various media. The National Gallery in Oslo, Norway, holds one of two painted versions (1893, shown here). The Munch Museum holds the other painted version (1910, see gallery, below) and a pastel version from 1893. These three versions have not traveled for years.[2]\nThe fourth version (pastel, 1895) was sold for $119,922,600 at Sotheby's Impressionist and Modern Art auction on 2 May 2012 to financier Leon Black,[3][4] the fourth highest nominal price paid for a painting at auction.[5] The painting was on display in the Museum of Modern Art in New York from October 2012 to April 2013.\nAlso in 1895, Munch created a lithograph stone of the image. Of the lithograph prints produced by Munch, several examples survive.[6] Only approximately four dozen prints were made before the original stone was resurfaced by the printer in Munch's absence.[7]\nThe Scream has been the target of several high-profile art thefts. In 1994, the version in the National Gallery was stolen. It was recovered several months later. In 2004, both The Scream and Madonna were stolen from the Munch Museum, and both were recovered two years later."));
        this.data.push(new Art(new Area(8, 0, 11, 3), "/images/vincent_van_gogh_self-portrait.jpg", "Vincent van Gogh", "Vincent Willem van Gogh (Dutch: [\u02C8v\u026Ans\u025Bnt \u02C8\u028B\u026Al\u0259m v\u0251n \u02C8\u0263\u0254x] (About this sound listen);[note 1] 30 March 1853 \u2013 29 July 1890) was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life in France, where he died. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. His suicide at 37 followed years of mental illness and poverty."));
    }
    Database.prototype.find = function (x, y) {
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var d = _a[_i];
            if (d.area.inside(x, y)) {
                return d;
            }
        }
        return false;
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=Database.js.map