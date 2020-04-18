;(function() {

    const depth_input = document.getElementById('depth');
    const canvas = document.getElementById('f');

    canvas.width = 800;
    canvas.height = 700;

    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();

    let POINTS = [];

    const mood_list = {
        dragon: {
            action: ()=>{
                let x0 = canvas.width / 2,
                    y0 = 165,
                    x1 = canvas.width / 2,
                    y1 = 615;

                ctx.beginPath();
                ctx.moveTo(x0, y0);
                Dragon (POINTS, depth_input.value, x0, y0, x1, y1);
            },
            depth: 9,
            max_depth: 15
        },
        minkovsky: {
            action: ()=>{
                let x0 = 0,
                    y0 = canvas.height / 2,
                    x1 = canvas.width,
                    y1 = canvas.height / 2;
                ctx.beginPath();
                ctx.moveTo(x0, y0);
                Minkovsky(POINTS, depth_input.value, x0, y0, x1, y1);
            },
            depth: 2,
            max_depth: 5
        },
        hilbert: {
            action: ()=>{
                ctx.beginPath();
                Hilbert(POINTS, depth_input.value, canvas.width, canvas.height)
            },
            depth: 5,
            max_depth: 8
        }
    }

    for (let mood_name in mood_list) {
        mood_list[mood_name].button = document.getElementById(mood_name);
        mood_list[mood_name].button.addEventListener('click',()=>{
            SetMood(mood_name);
        });
    }



    let CURRENT_MOOD = '';

    SetMood('hilbert');

    depth_input.onchange = ()=>{
        SetMood(CURRENT_MOOD);
    }



    function SetMood(mood_name) {

        const mood = mood_list[mood_name];

        depth_input.max = mood.max_depth;

        if (CURRENT_MOOD != mood_name)
        {
//            if (depth_input.value > mood.max_depth)
            {
                depth_input.value = mood.depth;
            }

            if (CURRENT_MOOD) {
                mood_list[CURRENT_MOOD].button.classList.remove('active');
            }
        }

        mood.button.classList.add('active');
        CURRENT_MOOD = mood_name;


        POINTS = [];
        ctx.clearRect(0,0,canvas.width,canvas.height);


        mood.action();

        POINTS.forEach((point, i) => {
            ctx.lineTo(point.x, point.y);
        });

        ctx.stroke();
    }


})()

