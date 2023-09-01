const rdmNbr = num => Math.floor(Math.random() * num); //gets random number between 0 and num-1

const weirdFortune = { //options for the fortune
    badFortune: ['you are an evil person', 'you are a bad person', 'you should be better', 'you are a lost cause'],
    advice: ['eat 5 raw onions', 'consume chicken soup daily', 'drink 70l of oat milk', 'babysit a monkey', 'learn capoeira'],
    reward: ['be considered good', 'be successful', 'find love']
};

let message = []; //the message 

for(let array in weirdFortune) {
    let idx = rdmNbr(weirdFortune[array].length);

    switch(array){
        case 'badFortune':
            message.push(`Your fortune reads: ${weirdFortune[array][idx]}.`);
            break;
        case 'advice':
            message.push(`To improve you must ${weirdFortune[array][idx]}.`);
            break;
        case 'reward':
            message.push(`Only after that will you ${weirdFortune[array][idx]}.`);
            break;
        default:
            message.push('I cannot read your fortune.');
    }
};

function formatMsg (msg) {
    const format = message.join(' ');
    console.log(format);
};

formatMsg(message);