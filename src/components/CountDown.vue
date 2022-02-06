<template>
   <div class="outer-container">
    <div class="inner-container">
      <h1>Not Fancy Countdown Timer</h1>
      <div class="countdown">
        <h2>
          {{ timeLeft }}
        </h2>
        <h3>Countdown ends at <span>{{ endTime }}</span></h3>
      </div>

      <ul class="columns is-mobile is-centered">
        <li v-for="(time, index) in times" :key="index" class="column time">
          <a v-on:click.prevent="setTime(time.sec)" :class="[
                'button',
                'is-link',
                {'is-active': time.sec === selectedTime && endTime !== 0 }
              ]">
              {{ time.display }}
            </a>
        </li>
      </ul>

      <!-- Social Media Footer -->
      <div class="social-media-footer">
        <!-- GitHub -->
        <div class="github-code">
          <i class="fa fa-github" aria-hidden="true"></i>
          <a href="https://github.com/samanthaming/not-fancy-countdown-timer" target="_blank">
    View code on GitHub
  </a>
        </div>
        <div class="columns is-mobile social-columns">
          <div class="column">
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <a href="https://twitter.com/samantha_ming" target="_blank">samantha_ming</a>
          </div>
          <div class="column">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <a href="https://www.facebook.com/hisamanthaming" target="_blank">hi.samanthaming</a>
          </div>
          <div class="column">
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <a href="https://www.instagram.com/samanthaming/" target="_blank">samanthaming</a>
          </div>
        </div>
      </div>
      <!--end social media-->
    </div>
  </div>
</template>

<script>
export default {
    name: "CountDown",
  data: {
    selectedTime: 0,
    timeLeft: "00:00",
    endTime: "0",
    times: [
      {
        sec: 3,
        display: "3s",
      },
      {
        sec: 600,
        display: " 10m",
      },
      {
        sec: 1800,
        display: "30m",
      },
    ],
  },
  methods: {
    setTime(seconds) {
      clearInterval(intervalTimer);
      this.timer(seconds);
    },
    timer(seconds) {
      const now = Date.now();
      const end = now + seconds * 1000;
      this.displayTimeLeft(seconds);

      this.selectedTime = seconds;
      // this.initialTime = seconds;
      this.displayEndTime(end);
      this.countdown(end);
    },
    countdown(end) {
      // this.initialTime = this.selectedTime;
      intervalTimer = setInterval(() => {
        const secondsLeft = Math.round((end - Date.now()) / 1000);

        if (secondsLeft === 0) {
          this.endTime = 0;
        }

        if (secondsLeft < 0) {
          clearInterval(intervalTimer);
          return;
        }
        this.displayTimeLeft(secondsLeft);
      }, 1000);
    },
    displayTimeLeft(secondsLeft) {
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      this.timeLeft = `${zeroPadded(minutes)}:${zeroPadded(seconds)}`;
    },
    displayEndTime(timestamp) {
      const end = new Date(timestamp);
      const hour = end.getHours();
      const minutes = end.getMinutes();

      this.endTime = `${hourConvert(hour)}:${zeroPadded(minutes)}`;
    },
    zeroPadded(num) {
      // 4 --> 04
      return num < 10 ? `0${num}` : num;
    },
    hourConvert(hour) {
      // 15 --> 3
      return hour % 12 || 12;
    },
  },
};
</script>

<style>
.outer-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
/* ==================
 *  APP
 * ================== */
.countdown {
  margin: 5px 0 30px;
}
h1 {
  text-align: center;
  font-size: 18px;
  color: hsl(204, 86%, 43%);
}
h2 {
  font-size: 120px;
  width: 390px;
  line-height: 1;
  text-align: center;
}
h3 {
  font-size: 28px;
  display: flex;
  align-items: baseline;
  justify-content: center;
}
h3 span {
  width: 70px;
  border-bottom: 2px solid hsl(348, 100%, 71%);
  margin-left: 15px;
  text-align: center;
}
.time {
  display: flex;
  justify-content: center;
}
.columns {
  margin-left: 0;
  margin-right: 0;
}
/* ==================
*  SOCIAL MEDIA
* ================== */
.social-media-footer {
  --font-color: hsl(204, 86%, 99%);
  --font-size: 0.8rem;
  margin-top: 1.9375rem;
}
.social-columns {
  display: flex;
  justify-content: center;

  padding-bottom: 0.625rem;
  font-size: var(--font-size);
  color: var(--font-color);
  width: 100%;
}
.social-columns .column {
  padding: 0.4rem;
  text-align: center;

  /* to work with bulma */
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.social-columns a {
  text-decoration: none;
  color: var(--font-color);

  /* to work with bulma */
  padding-left: 2px;
}
.social-columns a:hover {
  text-decoration: underline;
}
/* GITHUB */
.github-code {
  color: var(--font-color);
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 0.625rem;
}
.github-code a {
  text-decoration: none;
  color: var(--font-color);
}
.github-code a:hover {
  text-decoration: underline;
}

</style>
