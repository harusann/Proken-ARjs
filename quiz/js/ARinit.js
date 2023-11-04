    const quiz = [
        {
            "quiz":"大阪電気通信大学には2つのキャンパスがある",
            "answer":"yes"
        },
        {
            "quiz":"大阪電気通信大学の略称はOETU",
            "answer":"no"
        },
        {
            "quiz":"A号館３階にはプロジェクトルームがある",
            "answer":"yes"
        },
        {
            "quiz":"Z号館にある生協の施設は3つ",
            "answer":"no"
        },
        {
            "quiz":"大阪電気通信大学の学部学科は5学部20学科",
            "answer":"no"
        }
    ]

    let quiz_num = 0;
    let correct_answers = 0;
    let is_nextClick = true;
    let is_ansClick = true;

    const $quiz_text = document.getElementsByClassName('quiz-text');
    const $type_text = document.getElementsByClassName('type-text');
    const $yes_button = document.getElementsByClassName('yes-button');
    const $yes_text = document.getElementsByClassName('yes-text');
    const $no_button = document.getElementsByClassName('no-button');
    const $no_text = document.getElementsByClassName('no-text');
    const $next_button = document.getElementsByClassName('next-button');
    const $next_text = document.getElementsByClassName('next-text');
    const $end_text = document.getElementsByClassName('end-text');
    const $point_text = document.getElementsByClassName('point-text');
    const $clear_num = document.getElementsByClassName('clear-num');

    const change_text = ($dom, txt) => {
        $dom.innerHTML = '';
        $dom.setAttribute('data-text', txt);
        aframeMutlByte();
    };

    AFRAME.registerComponent('yes-button', {
        init: () => {
            $yes_button[0].addEventListener('mouseup', (event) => {
                if(is_ansClick === true) {
                    if(quiz[quiz_num]['answer'] === 'yes'){
                        console.log('正解');
                        correct_answers++;
                    }
                    else console.log('不正解')
                    change_text($quiz_text[0], quiz[quiz_num]['answer']);
                    change_text($type_text[0], '答え');
                    $next_button[0].setAttribute('visible', 'true');
                    $next_text[0].setAttribute('visible', 'true');
                    $yes_button[0].setAttribute('visible', 'false');
                    $yes_text[0].setAttribute('visible', 'false');
                    $no_button[0].setAttribute('visible', 'false');
                    $no_text[0].setAttribute('visible', 'false');
                    is_nextClick = true;
                    is_ansClick = false;
                }
            });
        }
    });

    AFRAME.registerComponent('no-button', {
        init: () => {
            $no_button[0].addEventListener('mouseup', (event) => {
                if (is_ansClick === true) {
                    if(quiz[quiz_num]['answer'] === 'no') {
                        console.log('正解');
                        correct_answers++;
                    }
                    else console.log('不正解')
                    change_text($quiz_text[0], quiz[quiz_num]['answer']);
                    change_text($type_text[0], '答え');
                    $next_button[0].setAttribute('visible', 'true');
                    $next_text[0].setAttribute('visible', 'true');
                    $yes_button[0].setAttribute('visible', 'false');
                    $no_button[0].setAttribute('visible', 'false');
                    $yes_text[0].setAttribute('visible', 'false');
                    $no_text[0].setAttribute('visible', 'false');
                    is_nextClick = true;
                    is_ansClick = false;
                }
            });
        }
    });

    AFRAME.registerComponent('next-button', {
        init: () => {
            $next_button[0].addEventListener('mouseup', (event) => {
                if(is_nextClick === true) {
                    quiz_num = quiz_num + 1;
                    if(quiz.length - 1 >= quiz_num){
                        console.log('問題 : ' + (quiz_num + 1))
                        change_text($quiz_text[0], quiz[quiz_num]['quiz']);
                        change_text($type_text[0], '問題');
                        $next_button[0].setAttribute('visible', 'false');
                        $next_text[0].setAttribute('visible', 'false');
                        $yes_button[0].setAttribute('visible', 'true');
                        $no_button[0].setAttribute('visible', 'true');
                        $yes_text[0].setAttribute('visible', 'true');
                        $no_text[0].setAttribute('visible', 'true');
                        is_ansClick = true;
                    }
                    else {
                        change_text($point_text[0], '' + correct_answers + ' / ' + quiz.length)
                        $quiz_text[0].setAttribute('visible', 'false');
                        $type_text[0].setAttribute('visible', 'false');
                        $next_button[0].setAttribute('visible', 'false');
                        $next_text[0].setAttribute('visible', 'false');
                        $end_text[0].setAttribute('visible', 'true');
                        $point_text[0].setAttribute('visible', 'true');
                        $clear_num[0].innerHTML = 'クリア数　1 / 1';
                    }
                    is_nextClick = false;
                }
            });
        }
    });