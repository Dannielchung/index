(function($) {
    $.fn.movieSlice = function(options) {
        var setting = $.extend({
            movieElement: "#movieElement",
            next: "#nextMovie",
            prev: "#prevMovie",
            first: "#firstMovie",
            last: "#lastMovie",
            replacePath: function(str, path) {
                if (path) {
                    return str.replace(/thumbnail/, path);
                } else {
                    return str.replace(/thumbnail/, "movie");
                }
            }
        }, options || {});
        var thumbnails = this;
        // 為每一個縮略圖，設定相應的數據，以此可以在showPhoto通過下標訪問。
        thumbnails.each(function(index, el) {
            $(this).data("photo-number", index);
        });
        setting.cur = 0;
        this.on("click", function(event) {
            showPhoto($(this).data("photo-number"));
            // $(setting.movieElement).attr('src', setting.replacePath($(this).attr("src"), "movie"));
        });

        $(setting.movieElement).click(function() {
            showPhoto(setting.cur + 1);
        });

        $(setting.prev).on("click", function() { showPhoto(setting.cur - 1) });
        $(setting.next).on("click", function() { showPhoto(setting.cur + 1) });
        $(setting.first).on("click", function() { showPhoto(0) });
        $(setting.last).on("click", function() { showPhoto(thumbnails.length - 1) });

        function showPhoto(index) {
            if (index >= thumbnails.length) {
                index = 0;
            } else if (index < 0) {
                index = thumbnails.length - 1;
            }
            $(setting.movieElement).attr('src', setting.replacePath(thumbnails[index].src))
            .css("opacity",0.0)
            .animate({opacity: 1.0},1000);
            setting.cur = index;
        }
        showPhoto(0);
        return this;
    };
})(jQuery); /* 傳入jQuery作為參數 */
