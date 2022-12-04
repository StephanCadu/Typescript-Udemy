"use strict";
var Geometry;
(function (Geometry) {
    let Area;
    (function (Area) {
        Area.retangleArea = (base, height) => {
            return base * height;
        };
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
