var flag=0;

$(document).add(parent.document).mouseup(function(e) {
    var cont = $('#gistZone');
    if (!cont.is(e.target) && cont.has(e.target).length === 0 && flag==1) {
        $('iframe').remove();
        flag=0;
    }

    var zone = document.getElementById("gistZone");
    zone.style.zIndex="-5";
    $("#content").css("opacity", "1");
    $("#crossImage").css("opacity", "0");

});

function getUniqueId(topic,quest)
{
    switch(topic)
    {
        case 'arrays':
            switch(quest)
            {
                case 'Min Steps In Infinite Grid': return 'cc839c9b76d58925f00fd201cc3211bc';
                case 'Add One To Number': return '0f2d6b86c23740861ba0d6784d84fa18';
                case 'Max Sum Contiguous Subarray': return 'df2007297dae8c14ab40519314d81cbe';
                case 'Maximum Absolute Difference': return 'eca4e805309b8c747fc92cc4e4deca63';
                case 'Repeat and Missing Number Array': return '151cee6fe8c537e56593d751603086ab';
                case 'Flip': return '27f11e859573539d39bd6ace451c0469';
                case 'Max Non Negative SubArray': return 'ca2ea04dc9baf84fed4a42787734740e';
                case 'Spiral Order Matrix II': return '6b0d076184d1fc687f3dec6caa4a8095';
                case 'Pascal Triangle': return '926f057ac283899a6dc4aa6c5fa89778';
                case 'Kth Row of Pascals Triangle': return '37ed3360d746ea58ad7a1a369319b293';
                case 'Anti Diagonals': return '52586bed731f37b24149ee64df31ab58';
                case 'Noble Integer': return 'ecf7818b3c6fdb6ad17370133d526423';
                case 'Largest Number': return '56a224f3bddd98311208325108c938e6';
                case 'Wave Array': return 'bb0e1d18e8b16179467837961dbeaa55';
                case 'Hotel Bookings Possible': return 'aa828314af2287a60ae04ad7773fea87';
                case 'Max Distance': return '5ffb9885b74b8f10ad66b0b56ad695c3';
                case 'Maximum Unsorted Subarray': return '17b42315593216a78cceb62c160e89d0';
                case 'Rotate Matrix': return '6edc71a2471cbe39f2bb84f9d315c954';
                case 'Next Permutation': return 'fbac1a6c36bd02f580b7866b2fa13142';
                case 'Find Permutation': return '628c09e0b1213bca24996231029e930b';
                case 'Merge Intervals': return '49826abbc75cd8a09207dedcb7b3a1d2';
                case 'Set Matrix Zeros': return 'dabb616a4c0b729148691621e5517289';
                case 'First Missing Integer': return '08fa5c2747f49d0a955b5648e4bf3bbc';
                case 'Repeat and Missing Number Array': return '16da67bab45e218c1f6b42e8bb983703';
            }
        break;
        case 'math':
            switch(quest)
            {
                case 'Prime Sum': return 'b5ad5c9aaab54b6f082b8e545c876cbd';
                case 'Sum of pairwise Hamming Distance': return '997be287d9c4653bf69cd2f3926ef437';
                case 'FizzBuzz': return 'b036fa45b59e174cf50c829a21b7f4cc';
                case 'Power Of Two Integers': return '066554004a132b8bad429a14f0f47454';
                case 'Excel Column Number': return 'c2afacac223840a73c30ee77579ff3fd';
                case 'Excel Column Title': return '7932ccb7ad1b5e6b18db46aaea9f3002';
                case 'Points inside Rectangle': return '7b6c87c373b26ae140b61aab69b89181';
                case 'Palindrome Integer': return '276720ff38f588cc650f89c71ad84655';
                case 'Reverse integer': return 'f63d03116ec5ae4bd91bfac97ac1c336';
                case 'Greatest Common Divisor': return 'b733b64ab683066941458f373437c7f4';
                case 'Trailing Zeros in Factorial': return '91a4f15d30a4c8a820883cb39434a242';
                case 'Sorted Permutation Rank': return '99e7e4cef7f3c343acd54cd24260a861';
                case 'Largest Coprime Divisor': return '4480108651cacc9fac06ff288cb3773c';
                case 'Sorted Permutation Rank with Repeats': return '63f7939e9591ff0643daefd73e160551';
                case 'Rearrange Array': return '874a985d4a6bd48c34dcc55bc1f7e650';
                case 'Grid Unique Paths': return '884d9ccfe9cef27a4ff30f82c6ce9fab';
            }
        break;
        case 'binarysearch':
            switch(quest)
            {
                case 'Matrix Median': return 'f1fdb1c16d510077d95ed7b8dccb92cf';
                case 'Square Root of Integer': return 'e00de83baecc9a22da0316fabbf45280';
                case 'Allocate Books': return '5360c0cef9831bc8bb784a33750626df';
                case 'Matrix Search': return 'fc162b07ac62b7689883e20e1d09747d';
                case 'Search for a Range': return '7af7f9282773dc2f5156b4a40edbe811';
                case 'Sorted Insert Position': return '96558708a5b0f0200e09016946cda8a5';
                case 'Implement Power Function': return 'fbb7a57d4bc333f585c76d91172750be';
                case 'Rotated Sorted Array Search': return '6952e7a2de9f091aeeb2f03b950f4921';
            }
        break;
        case 'strings':
            switch(quest)
            {
                
            }
        break;
        case 'bitmanipulation':
            switch(quest)
            {

            }
        break;
        case 'twopointers':
            switch(quest)
            {

            }
        break;
        case 'linkedlists':
            switch(quest)
            {

            }
        break;
        case 'stacksandqueues':
            switch(quest)
            {

            }
        break;
        case 'backtracking':
            switch(quest)
            {

            }
        break;
        case 'hashing':
            switch(quest)
            {

            }
        break;
        case 'heapsandmaps':
            switch(quest)
            {

            }
        break;
        case 'trees':
            switch(quest)
            {

            }
        break;
        case 'dynamicprogramming':
            switch(quest)
            {

            }
        break;
        case 'greedy':
            switch(quest)
            {

            }
        break;
        case 'graphs':
            switch(quest)
            {

            }
        break;
        case 'codeninja':
            switch(quest)
            {

            }
        break;
        default:
            return '';
    }
}

function configureDropDownLists(ddl1,ddl2) 
{

    var arrays = ['','Min Steps In Infinite Grid', 'Add One To Number', 'Max Sum Contiguous Subarray',
                'Maximum Absolute Difference', 'Repeat and Missing Number Array',
                'Flip','Max Non Negative SubArray', 'Spiral Order Matrix II',
                'Pascal Triangle', 'Kth Row of Pascals Triangle', 'Anti Diagonals',
                'Noble Integer', 'Largest Number', 'Wave Array','Hotel Bookings Possible',
                'Max Distance', 'Maximum Unsorted Subarray','Rotate Matrix', 'Next Permutation',
                'Find Permutation', 'Merge Intervals','Set Matrix Zeros','First Missing Integer',
                'Repeat and Missing Number Array'];

    var math = ['','Prime Sum','Sum of pairwise Hamming Distance','FizzBuzz','Power Of Two Integers',
                'Excel Column Number','Excel Column Title','Points inside Rectangle','Palindrome Integer',
                'Reverse integer','Greatest Common Divisor','Trailing Zeros in Factorial',
                'Sorted Permutation Rank','Largest Coprime Divisor','Sorted Permutation Rank with Repeats',
                'Rearrange Array','Grid Unique Paths'];
    
    var binarysearch = ['','Matrix Median','Square Root of Integer','Allocate Books','Matrix Search',
                    'Search for a Range','Sorted Insert Position','Implement Power Function',
                    'Rotated Sorted Array Search'];
    var strings = ['',];
    var bitmanipulation = ['',];
    var twopointers = ['',];
    var linkedlists = ['',];
    var stacksandqueues = ['',];
    var backtracking = ['',];
    var hashing = ['',];
    var heapsandmaps = ['',];
    var trees = ['',];
    var dynamicprogramming = ['',];
    var greedy = ['',];
    var graphs = ['',];
    var codeninja = ['',];

    switch (ddl1.value) 
    {
        case 'arrays':
            ddl2.options.length = 0;
            for (i = 0; i < arrays.length; i++) 
                {
                    createOption(ddl2, arrays[i], arrays[i]);
                }
            break;
        case 'math':
            ddl2.options.length = 0;
            for (i = 0; i < math.length; i++) 
                {
                    createOption(ddl2, math[i], math[i]);
                }
            break;
        case 'binarysearch':
            ddl2.options.length = 0;
            for (i = 0; i < binarysearch.length; i++) 
                {
                    createOption(ddl2, binarysearch[i], binarysearch[i]);
                }
            break;
        case 'strings':
            ddl2.options.length = 0;
            for (i = 0; i < strings.length; i++) 
                {
                    createOption(ddl2, strings[i], strings[i]);
                }
            break;
        case 'bitmanipulation':
            ddl2.options.length = 0;
            for (i = 0; i < bitmanipulation.length; i++) 
                {
                    createOption(ddl2, bitmanipulation[i], bitmanipulation[i]);
                }
            break;
        case 'twopointers':
            ddl2.options.length = 0;
            for (i = 0; i < twopointers.length; i++) 
                {
                    createOption(ddl2, twopointers[i], twopointers[i]);
                }
            break;
        case 'linkedlists':
            ddl2.options.length = 0;
            for (i = 0; i < linkedlists.length; i++) 
                {
                    createOption(ddl2, linkedlists[i], linkedlists[i]);
                }
            break;
        case 'stacksandqueues':
            ddl2.options.length = 0;
            for (i = 0; i < stacksandqueues.length; i++) 
                {
                    createOption(ddl2, stacksandqueues[i], stacksandqueues[i]);
                }
            break;
        case 'backtracking':
            ddl2.options.length = 0;
            for (i = 0; i < backtracking.length; i++) 
                {
                    createOption(ddl2, backtracking[i], backtracking[i]);
                }
            break;
        case 'hashing':
            ddl2.options.length = 0;
            for (i = 0; i < hashing.length; i++) 
                {
                    createOption(ddl2, hashing[i], hashing[i]);
                }
            break;
        case 'heapsandmaps':
            ddl2.options.length = 0;
            for (i = 0; i < heapsandmaps.length; i++) 
                {
                    createOption(ddl2, heapsandmaps[i], heapsandmaps[i]);
                }
            break;
        case 'trees':
            ddl2.options.length = 0;
            for (i = 0; i < trees.length; i++) 
                {
                    createOption(ddl2, trees[i], trees[i]);
                }
            break;
        case 'dynamicprogramming':
            ddl2.options.length = 0;
            for (i = 0; i < dynamicprogramming.length; i++) 
                {
                    createOption(ddl2, dynamicprogramming[i], dynamicprogramming[i]);
                }
            break;
        case 'greedy':
            ddl2.options.length = 0;
            for (i = 0; i < greedy.length; i++) 
                {
                    createOption(ddl2, greedy[i], greedy[i]);
                }
            break;
        case 'graphs':
            ddl2.options.length = 0;
            for (i = 0; i < graphs.length; i++) 
                {
                    createOption(ddl2, graphs[i], graphs[i]);
                }
            break;
        case 'codeninja':
            ddl2.options.length = 0;
            for (i = 0; i < codeninja.length; i++) 
                {
                    createOption(ddl2, codeninja[i], codeninja[i]);
                }
            break;
        default:
            ddl2.options.length = 0;
            break;
    }
}

function createOption(ddl, text, value) 
{
    var opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    ddl.options.add(opt);
}


function completeAndRedirect()
{
    var topic = document.getElementById("ddl").value;
    var quest = document.getElementById("ddl2").value;

    if(topic=="" || quest=="")
    {
        return;
    }   

    console.log(topic);
    console.log(quest);
    // $('#loaderImage').show();
    // var uniqueId = 'cc839c9b76d58925f00fd201cc3211bc';

    //var uniqueId = '49826abbc75cd8a09207dedcb7b3a1d2';

    var uniqueId = getUniqueId(topic,quest);

    flag=1;
    var gistFrame = document.createElement("iframe");
    gistFrame.setAttribute("width", "100%");
    gistFrame.id = "gistFrame";


    var zone = document.getElementById("gistZone");

    zone.style.zIndex="100";
    zone.innerHTML = "";
    zone.appendChild(gistFrame);
    
            // Create the iframe's document
    var gistFrameHTML = '<html><body onload="parent.adjustIframeSize(document.body.scrollHeight)"><scr' + 'ipt type="text/javascript" src="https://gist.github.com/' + uniqueId + '.js"></sc'+'ript></body></html>';
            
            // Set iframe's document with a trigger for this document to adjust the height
    var gistFrameDoc = gistFrame.document;
            
    if (gistFrame.contentDocument) 
    {
        gistFrameDoc = gistFrame.contentDocument;
    } 
    else if (gistFrame.contentWindow) 
    {
        gistFrameDoc = gistFrame.contentWindow.document;
    }
            
    gistFrameDoc.open();
    gistFrameDoc.writeln(gistFrameHTML);
    gistFrameDoc.close();       

    $("#content").css("opacity", "0.3");
    $("#crossImage").css("opacity", "1");   
}


function adjustIframeSize(newHeight) 
{
        var i = document.getElementById("gistFrame");
        i.style.height = "100%";
        i.style.overflow = "scroll";

        //i.style.height = parseInt(newHeight) + "px";
        console.log("size adjusted", newHeight);
}

// $('iframe').on('load', function () {
//             $('#loaderImage').hide();
// });


// document.getElementById("ddl").addEventListener('click', onClickHandler);
// document.getElementById("ddl").addEventListener('mousedown', onMouseDownHandler);

// function onMouseDownHandler(e){



//     var el = e.currentTarget;
    
//     // console.log(e);    
//     if(el.hasAttribute('size') && el.getAttribute('size') == '1'){
//         e.preventDefault();    
//     }
// }
// function onClickHandler(e) {
//     var el = e.currentTarget; 

//     if (el.getAttribute('size') == '1') {
//         el.className += " selectOpen";
//         el.setAttribute('size', '6');
//     }
//     else {
//         el.className = '';
//         el.setAttribute('size', '1');
//     }
// }

