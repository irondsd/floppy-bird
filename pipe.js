function Pipe(speed = 3, substractGap = 0) {
    this.maxGap = height - 60 - substractGap;
    this.minGap = 100
    this.gap = random(this.minGap, this.maxGap);
    this.top = random(5, height - this.gap);
    this.bottom = height - (this.top + this.gap);
    this.x = width;
    this.w = 30
    this.speed = speed;

    this.show = function (pipe_headImg, pipe_bodyImg) {
        fill(34, 139, 34);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
        image(pipe_headImg, this.x - 2, this.top - 15)
        image(pipe_headImg, this.x - 2, height - this.bottom)
    }

    this.update = function () {
        this.x -= this.speed;
    }

    this.offscreen = function () {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }

    this.hits = function (Bird) {
        if (Bird.y + 5 < this.top || Bird.y > height - this.bottom) {
            if (Bird.x + 5 > this.x && Bird.x < this.x + this.w) {
                return true;
            }
        }
        return false;
    }

    this.passed = function (Bird) {
        if (Bird.x > this.x) {
            return true;
        }

        return false;
    }
}