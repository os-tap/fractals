function Dragon (arPoints, depth, x0, y0, x1, y1, k=1) {

    if (depth == 0) {
        arPoints.push({
            x: x1,
            y: y1
        });
        return;
    }

    let angle = 45*Math.PI/180 * k;
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);


    var xx = cos * ((x1 - x0) * cos - (y1 - y0) * sin) + x0;
    var yy = cos * ((x1 - x0) * sin + (y1 - y0) * cos) + y0;


    Dragon (arPoints, depth - 1, x0, y0, xx, yy, 1);
    Dragon (arPoints, depth - 1, xx, yy, x1, y1, -1);

}
