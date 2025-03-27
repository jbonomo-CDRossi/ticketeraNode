window.onload = function() {
    var canvas = document.getElementById('heartCanvas');
    var context = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;
    var scale = 1;
    var growing = true;

    function drawPixelArtHeart() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.scale(scale, scale);
        context.translate(-canvas.width / 2, -canvas.height / 2);

        var pixelSize = 8;
        var heartPattern = [
            '   0000    00000   ',
            '  2220000  0000000  ',
            ' 22200000  00011000 ',
            '22220000002001111000',
            '32222000000200110000',
            '33220000000000000000',
            ' 332000000000000000 ',
            '  3320000000000000  ',
            '   33200000000000   ',
            '    332000000000    ',
            '     3320000000     ',
            '      33220022      ',
            '       332222       ',
            '        3332        ',
            '         33         ',
            '                    '
        ];

        var colors = {
            '0': '#FF0000', // Rojo
            '1': '#FF6666', // Rojo claro (brillo)
            '2': '#CC0000', // Rojo oscuro (sombra)
            '3': '#990000'  // Rojo más oscuro (sombra profunda)
        };

        for (var y = 0; y < heartPattern.length; y++) {
            for (var x = 0; x < heartPattern[y].length; x++) {
                var color = colors[heartPattern[y][x]];
                if (color) {
                    context.fillStyle = color;
                    context.fillRect(
                        (canvas.width / 2 - (heartPattern[y].length / 2) * pixelSize) + x * pixelSize,
                        (canvas.height / 2 - (heartPattern.length / 2) * pixelSize) + y * pixelSize,
                        pixelSize,
                        pixelSize
                    );
                }
            }
        }

        context.restore();
    }

    function update() {
        if (growing) {
            scale += 0.01;
            if (scale >= 1.2) {
                growing = false;
            }
        } else {
            scale -= 0.01;
            if (scale <= 1) {
                growing = true;
            }
        }
    }

    function loop() {
        update();
        drawPixelArtHeart();
        requestAnimationFrame(loop);
    }

    loop();
};
