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
    btn.innerHTML="start";
    let endDate=new Date();
    endTime=endDate.getTime();
    totalTimeTaken=(endTime-startTime)/1000;
    calculateTypingSpeed(totalTimeTaken);
    show_sentence.innerHTML="";
    typing_ground.value="";
    // console.log(totalTimeTaken);

}

//step 5

const calculateTypingSpeed=(time_taken)=>{
    let totalWords= typing_ground.value.trim();
    let actualWords= totalWords===''? 0 : totalWords.split(" ").length;

    if(actualWords!==0){
        let typingSpeed=(actualWords/time_taken)*60;
        typingSpeed=Math.round(typingSpeed);
        score.innerHTML = `Your typing speed is ${typingSpeed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }

}