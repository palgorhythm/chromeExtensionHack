let feed = $('#contents');
let feedParent = feed.parent();
feed.remove();
console.log("yeet");

window.onload = maxWindow;

function maxWindow() {
    window.moveTo(0, 0);

    if (document.all) {
        top.window.resizeTo(screen.availWidth, screen.availHeight);
    }

    else if (document.layers || document.getElementById) {
        if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
            top.window.outerHeight = screen.availHeight;
            top.window.outerWidth = screen.availWidth;
        }
    }
}

function randomImage(){
    $.ajax({
        method: 'GET',
        url: 'https://unsplash.it/list',
        success: function(result) {
        // result is whatever the URL sends back from the request
            $('#randomImage').remove();
            $('#titletext').remove();
            let imageURL = result[getRandomInt(result.length)].id;
            feedParent.prepend('<img id="randomImage" src="https://unsplash.it/1200/800?image=' +imageURL+'">');
            feedParent.prepend('<h1 id="titletext">GET BACK TO WORK</h1>');
            $('#titletext').click(function() {
                $('#randomImage').slideToggle();
            });
            $('#randomImage').click(()=>
                    randomImage()
            );
        },
        error: function(err) {
        // if any errors occur during the process you can check out the
        // the error by logging the 'err' argument
        }
    });
}

randomImage();
//alert("ok");
let textElement = feedParent.children()[0];
//console.log(typeof(textElement));
$("#titletext").addClass('beautText');
$("#titletext").animate({right: '1000px'});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }

