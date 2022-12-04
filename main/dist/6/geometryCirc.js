"use strict";
var Geometry;
(function (Geometry) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        Area.circleArea = (radius) => {
            return PI * (radius ** 2);
        };
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
