(function() {
    var carousel = {
        arrows: document.querySelectorAll('.review__control'),
        current: 0,
        items: document.querySelectorAll('.slider__slide'),
        init: function() {
            var self = this;

            document.querySelectorAll('.slider__control').forEach(function(item) {
              item.classList.remove('slider__control_no-js');
            });

            this.arrows.forEach(function(item) {
                item.classList.remove('review__arrow_no-js');
                item.onclick = function() {
                    if (item.classList.contains('review__control_right'))
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
            document.querySelector('.slider__control_' + (this.current + 1)).click();
        }
    };

    carousel.init();
})();
