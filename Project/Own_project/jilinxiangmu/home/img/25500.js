
        !function () {
            function lload(f) {
                if (document.readyState == 'complete') f()
                else setTimeout(f, 10)
            }

            document.write('<script type="text/javascript" id="g25500"><\/script>')

            lload(function () {
                var g1 = document.getElementById(''), g0 = document.createElement('iframe')
                var g = document.getElementById('g25500')

                g0.style.zIndex = 99999;
                g0.style.width = '230px'
                g0.style.height = '26px'
                g0.style.border = '0';
                g0.frameBorder = '0'
                g0.allowTransparency = true
                g0.scrolling = 'no'
                g0.src = 'http://ext.weather.com.cn/25500.html'
                if (g1) g1.appendChild(g0)
                else { g.parentNode.insertBefore(g0, g) }


                //
                var s1 = document.createElement('script');
                s1.type = 'text/javascript';
                s1.src = 'http://cfps.cw.china-netwave.com/ashx/GetPutWay.ashx?lid=16&width=320&height=250&divId=20130927112831582&domain=lyt.jl.gov.cn&pluginid=25500';
                if (g1) g1.appendChild(s1);
                else g.parentNode.insertBefore(s1, g);

                var s2 = document.createElement('script');
                s2.type = 'text/javascript';
                s2.src = 'http://cfps.cw.china-netwave.com/ashx/GetPutWay.ashx?lid=52&width=360&height=300&divId=20130927112831582&domain=lyt.jl.gov.cn&pluginid=25500';
                if (g1) g1.appendChild(s2);
                else g.parentNode.insertBefore(s2, g);
                //
            })
        }()
        //