(function() {
    var carousel = {
        parent: document.querySelector('.slider__slides'),
        arrows: document.querySelectorAll('.slider__control'),
        rightArrowClass: 'slider__control-right',
        current: 0,
        items: document.querySelectorAll('.slider__slide'),
        init: function() {
            var self = this;

            this.arrows.forEach(function(item) {
                item.onclick = function() {
                    if (item.classList.contains(self.rightArrowClass))
                        self.step('next');
                    else
                        self.step('prev');
                };
            });
        },

        step: function(direction) {
            switch(direction) {
                case 'prev':
                    if (this.current <= 0)
                        this.current = this.items.length - 1;
                    else
                        this.current--;
                break;
                case 'next':
                    if (this.current + 1 == this.items.length)
                        this.current = 0;
                    else
                        this.current++;
                break;
            }

            var itemWidth = this.items[0] && this.items[0].offsetWidth || 0;

            this.parent.style.transform =
              'translate(-' + (this.current) * itemWidth + 'px)';
        }
    };

    carousel.init();
})();
