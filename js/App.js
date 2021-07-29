$(document).ready(function(){


    $('#profile_ripple').ripples({
         resolution: 512,
         dropRadius:10
    });

    const bars = document.querySelectorAll('.progress_bar');
    // console.log(bars);

    bars.forEach(function(bar){
            let percentage = bar.dataset.percent;
           
            let tooltip = bar.children[0];
            tooltip.innerText = percentage + '%';
            bar.style.width = percentage + '%';

            console.log(percentage);
            
    });
    
    const counters = document.querySelectorAll('.counter');

    // console.log(counters);

    function runCounter(){
        counters.forEach(counter =>{
            counter.innerText = 0;

            let target = +counter.dataset.count;

            let step = target / 100;
            
            let countIt = function(){
                let displayCount = +counter.innerText;
                if(displayCount < target)
                {
                    counter.innerText =Math.ceil(displayCount + step);
                    countIt();
                }else{
                    counter.innerText = target;
                }
            }
            // console.log(target);
            countIt();
        })
     }
    // runCounter();

    let counterSection = document.querySelector('.counter_section');

    let options = {
        rootMargin : '0px 0px -200px 0px'
    }

    let done = 0;

    const sectionObserver = new IntersectionObserver(function(entries){

        if(entries[0].isIntersecting && done!=0){
            done = 1;
            runCounter();
        }
    },options)

    sectionObserver.observe(counterSection);


    // Image fillter

    var $wrapper = $('.portfolio_wrapper');

    //Initialize isotope 
    $wrapper.isotope({
        filter : '*',
        layoutMode : 'masnory',
        animationOptions : {
            duration : 750,
            easing : 'linear' //animation motion
        }
    })

    let links = document.querySelectorAll('.tabs a');
    console.log(links);

    links.forEach(link => {
        let selector = link.dataset.filter;
        console.log(selector);

        links.addEventListener('click',function(e) {
                
            e.preventDefault();

            $wrapper.isotope({

                filter : '*',
                layoutMode : 'masnory',
                animationOptions : {
                    duration : 750,
                    easing : 'linear' //animation motion
                }
                
            })
        })

        links.function(link =>{
            link.classList .remove('active');
        })

        e.target.classList.add('active');
    });


    //magnify pop

    $('.magnify').magnificPopup({
        type : 'image',

        gallery : {
            enabled : true
        },
            
        zoom : {
            enable : true
        }
    });

    //slicer

    $('.slider').slick({
            arrow: false,
            autoplay: true                 
    });
});

