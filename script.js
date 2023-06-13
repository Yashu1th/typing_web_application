// let typingSpeed=(actualWords/totalTimeTaken)*60; step1

const typing_ground =document.getElementById('textarea');
const btn =document.getElementById('btn');
const score =document.getElementById('score');
const show_sentence=document.getElementById('showSentence');



let startTime, endTime, totalTimeTaken;
const sentence=['The five boxing wizards jump quickly.','Five quacking zephyrs jolt my wax bed.','Two driven jocks help fax my big quiz.','Sphinx of black quartz, judge my vow.','Quick zephyrs blow, vexing daft Jim.','Waltz, bad nymph, for quick jigs vex.'];
//step2
btn.addEventListener('click',()=>{
    switch(btn.innerHTML.toLocaleLowerCase()){
        case "start":
            typing_ground.removeAttribute('disabled');
            startTypingTest();
            break;
        case "done":
            typing_ground.setAttribute('disabled','true');
            endTypingTest();
            break;
    }
})

//step3
const startTypingTest=()=>{
    let randomNumber=Math.floor(Math.random() * sentence.length);

    show_sentence.innerHTML=sentence[randomNumber];
    let date=new Date();
    startTime=date.getTime();

    btn.innerHTML="done";
}

//step4

const endTypingTest=()=>{
    let endDate=new Date();
    endTime=endDate.getTime();
    totalTimeTaken=endTime-startTime;

}
