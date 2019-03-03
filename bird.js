function Bird() {
    this.y = 0;
    this.x = 50;
    this.gravity = 1;
    this.velocity = 0;
    this.lift = -30;

    this.show = function (bird_img) {
        // fill(255);
        // ellipse(this.x, this.y, 25, 25);
        image(bird_img, this.x, this.y)
    }

    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.95
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

    this.up = function () {
        this.velocity += this.lift;
    }
}