function Minkovsky(arPoints, depth, x0, y0, x1, y1) {

    if (depth == 0) {
        arPoints.push({
            x: x1,
            y: y1
        });
        return;
    }

    let x = [];
    let y = [];
    x[0] = x0;
    y[0] = y0;
    x[8] = x1;
    y[8] = y1;


    let dx = (x[8] - x[0]) * 1 / 4;
    let dy = (y[8] - y[0]) * 1 / 4;

    x[1] = x[0] + dx;
    y[1] = y[0] + dy;

    x[4] = x[0] + dx * 2;
    y[4] = y[0] + dy * 2;

    x[7] = x[0] + dx * 3;
    y[7] = y[0] + dy * 3;


    x[2] = x[1] + (y[4] - y[1]);
    x[3] = x[2] + (x[4] - x[1]);
    x[5] = x[4] - (y[7] - y[4]);
    x[6] = x[5] + (x[7] - x[4]);

    y[2] = y[1] - (x[4] - x[1]);
    y[3] = y[2] + (y[4] - y[1]);
    y[5] = y[4] + (x[7] - x[4]);
    y[6] = y[5] + (y[7] - y[4]);

    for (let i = 0; i < 8; i++) {
        Minkovsky(arPoints, depth - 1, x[i], y[i], x[i + 1], y[i + 1]);
    }
}
