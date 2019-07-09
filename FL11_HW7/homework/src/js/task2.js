if (confirm('Do you want to play the game?')) {
  do {
    let maxPrize = 100;
    let totalPrize = 0;
    let range = 8;
    do {
      let randomNumber = Math.round(Math.random()*range);
      let totalAttempt = 3;
      let attempt = totalAttempt;
      for (attempt; attempt > 0; attempt--) {
        let double = 2;
        let sessionPrize = Math.floor(maxPrize/Math.pow(double,totalAttempt - attempt));
        let inputNumber = parseInt(prompt(`
          Enter a number from 0 to ${range}
          Attempts left: ${attempt}
          Total prize: ${totalPrize}$
          Possible prize in current attempt: ${sessionPrize}$
        `));
        if (inputNumber === randomNumber) {
          totalPrize += sessionPrize;
          let prizeCoefficient = 2;
          maxPrize *= prizeCoefficient;
          let rangeCoefficient = 4;
          range += rangeCoefficient;
          break;
        }
      }
      if (attempt === 0) {
        break;
      }
    } while (confirm(`Congratulations! Your prize is ${totalPrize}`));
  } while (confirm('Do you want to play the game again?'));
} else {
  alert('You did not become a millionaire, but you can');
}
