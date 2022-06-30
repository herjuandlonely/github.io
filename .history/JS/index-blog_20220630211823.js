(function(){
    const myBlog = {
        $: (ele) => {
            return document.querySelectorAll(ele);
        },
        "isHide": function () {
            let oldScrollTop = 0;
            let isHide = this.$('.navbarControl')[0];
            const navbarCli = this.$('.navbarCli')[0].children;
            const banner = this.$('.bannerContet')[0];

            function scrollHide () {
                let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop;
                let scrollSet = scrollTop - oldScrollTop;
                oldScrollTop = scrollTop;
                if (scrollSet < 0) {
                    isHide.classList.remove('showAndHide');
                } else {
                    isHide.classList.add('showAndHide');
                    foldBtn.classList.remove('show');
                }
                if (banner.scrollTop > 0) {
                    isHide.classList.remove('showAndHide');
                }
            }

            window.addEventListener("scroll", scrollHide);

            for (let i = 0; i < navbarCli.length; i++) {
                navbarCli[i].onclick = function () {
                    window.removeEventListener("scroll", scrollHide);
                    isHide.classList.add('showAndHide');
                    foldBtn.classList.remove('show');
                    setTimeout(() => {
                        window.addEventListener("scroll", scrollHide);
                    }, 800)
                };
                navbarCli[i].ontouchend = function () {
                    window.removeEventListener("scroll", scrollHide);
                    isHide.classList.add('showAndHide');
                    foldBtn.classList.remove('show');
                    setTimeout(() => {
                        window.addEventListener("scroll", scrollHide);
                    }, 800)
                };
            };
            
        }
    }

    myBlog.isHide();
})()