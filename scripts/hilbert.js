function Hilbert(arPoints, depth, w, h) {

    let total_length = h < w ? 0.9 * h : 0.9 * w;
    let start_length = total_length / (Math.pow(2, depth) - 1);

    let X = (w - total_length) / 2;
    let Y = (h - total_length) / 2;

    arPoints.push({
        x: X,
        y: Y
    })


    recurs(depth, start_length, 0);

    //Init


    function SetPoint(dx, dy) //функция отрисовки линии
    {
        X += dx;
        Y += dy;
        arPoints.push({
            x: X,
            y: Y
        })
    }

    function recurs(depth, dx, dy) {
        if (depth > 1) recurs(depth - 1, dy, dx);
        SetPoint(dx, dy);
        if (depth > 1) recurs(depth - 1, dx, dy);
        SetPoint(dy, dx);
        if (depth > 1) recurs(depth - 1, dx, dy);
        SetPoint(-dx, -dy);
        if (depth > 1) recurs(depth - 1, -dy, -dx);

    }

}
