class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate.getTime();
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  start() {
    const daysDisplay = this.selector.querySelector('[data-value="days"]')
    const hoursDisplay = this.selector.querySelector('[data-value="hours"]')
    const minsDisplay = this.selector.querySelector('[data-value="mins"]')
    const secsDisplay = this.selector.querySelector('[data-value="secs"]')
    
    setInterval(() => {
      const currentDate = new Date().getTime();
      const time = this.targetDate - currentDate;
      
      daysDisplay.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      hoursDisplay.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      minsDisplay.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      secsDisplay.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.start()
 

