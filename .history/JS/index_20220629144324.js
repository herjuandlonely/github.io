(function(){
    const myBlog = {
        $: (ele) => {
            return document.querySelectorAll(ele);
        },
        'bannerIcon': function () {
            const QQ = this.$('.banner-icon-qq')[0];
            const WX = this.$('.banner-icon-wx')[0];

            QQ.onclick = function () {
                WX.children[1].classList.remove('d-show');
                this.children[1].classList.toggle('d-show');
            };
            QQ.onmouseenter = function () {
                this.children[1].classList.add('d-show');
            };
            QQ.onmouseleave = function () {
                this.children[1].classList.remove('d-show');
            };
            WX.onclick = function () {
                QQ.children[1].classList.remove('d-show');
                this.children[1].classList.toggle('d-show');
            };
            WX.onmouseenter = function () {
                this.children[1].classList.add('d-show');
            };
            WX.onmouseleave = function () {
                this.children[1].classList.remove('d-show');
            };
        },
        'callMe': function () {
            const send = this.$('.send')[0];
            const closeBtn = this.$('.alertNodeContent')[1].children[0];
            const alertNode = this.$('.alertNode')[1];

            const alertAll = this.$('.alertAll')[0];
            const alertNodeMd = this.$('.alertNode')[0];
            const good = this.$('.good')[0];
            const cancel = this.$('.cancel')[0];
            
            send.onclick = function () {
                if (firstNameIput.value === '') {
                    firstNameIput.classList.add('is-invalid');
                } else {
                    firstNameIput.classList.remove('is-invalid');
                    firstNameIput.classList.add('is-valid');
                };
                if (lastNameIput.value === '') {
                    lastNameIput.classList.add('is-invalid');
                } else {
                    lastNameIput.classList.remove('is-invalid');
                    lastNameIput.classList.add('is-valid');
                };
                if (msgIput.value === '') {
                    msgIput.classList.add('is-invalid');
                } else {
                    msgIput.classList.remove('is-invalid');
                    msgIput.classList.add('is-valid');
                };
                if (firstNameIput && lastNameIput && msgIput.value !== '') {
                    alertAll.classList.remove('d-none');
                    return false
                }
            };

            closeBtn.onclick = function () {
                alertAll.classList.add('d-none');
            };

            good.onclick = () => {
                alertAll.classList.remove('d-none');
            };
            cancel.onclick = () => {
                alertAll.classList.remove('d-none');
            };
        },
        "isHide": function () {
            let oldScrollTop = 0;
            let isHide = this.$('.navbarControl')[0];
            const navbarCli = this.$('.navbarCli')[0].children;

            function scrollHide () {
                let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop;
                let scrollSet = scrollTop - oldScrollTop;
                oldScrollTop = scrollTop;
                if (scrollSet < 0) {
                    isHide.classList.remove('showAndHide');
                } else {
                    isHide.classList.add('showAndHide');
                }
            }

            window.addEventListener("scroll", scrollHide);

            for (let i = 0; i < navbarCli.length; i++) {
                navbarCli[i].onclick = function () {
                    setTimeout(() => {
                        console.log('hi');
                        isHide.classList.add('showAndHide');
                    }, 700);
                };
            };
        }
    }

    myBlog.bannerIcon();
    myBlog.callMe();
    myBlog.isHide();
})()