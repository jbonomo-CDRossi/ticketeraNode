window.onload = function() {
    var canvas = document.getElementById('coinCanvas');
    var context = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;
    var angle = 0;

    function drawPixelArtCoin() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(angle);
        context.translate(-canvas.width / 2, -canvas.height / 2);

        var pixelSize = 8;
        var coinPattern1 = [
            '  000000  ',
            ' 01111110 ',
            '012222210',
            '023$$$320',
            '023$$$320',
            '012222210',
            ' 01111110 ',
            '  000000  '
        ];

        var coinPattern2 = [
            '  444444  ',
            ' 45555554 ',
            '456666654',
            '467@@@764',
            '467@@@764',
            '456666654',
            ' 45555554 ',
            '  444444  '
        ];

        var colors = {
            '0': 'gold',
            '1': '#D4AF37',
            '2': '#B8860B',
            '3': '#8B4513',
            '$': 'black',
            '4': '#C0C0C0', // Plata
            '5': '#A9A9A9', // Plata más oscura
            '6': '#808080', // Gris
            '7': '#696969', // Gris oscuro
            '@': 'black'
        };

        var currentPattern = (Math.sin(angle) >= 0) ? coinPattern1 : coinPattern2;

        for (var y = 0; y < currentPattern.length; y++) {
            for (var x = 0; x < currentPattern[y].length; x++) {
                var color = colors[currentPattern[y][x]];
                if (color) {
                    context.fillStyle = color;
                    context.fillRect(
                        (canvas.width / 2 - (currentPattern[y].length / 2) * pixelSize) + x * pixelSize,
                        (canvas.height / 2 - (currentPattern.length / 2) * pixelSize) + y * pixelSize,
                        pixelSize,
                        pixelSize
                    );
                }
            }
        }

        context.restore();
    }

    function update() {
        angle += 0.05;
        if (angle >= Math.PI * 2) {
            angle = 0;
        }
    }

    function loop() {
        update();
        drawPixelArtCoin();
        requestAnimationFrame(loop);
    }

    loop();
};