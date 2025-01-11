<template>
  <div class="countdown">
    <!-- <h1 v-if="!isNewYear">New Year Countdown</h1> -->
    <p class="text-9xl font-extrabold text-center text-red-700 leading-130">
      Happy New Year Glorifiers!
    </p>
    <!-- <div class="timer" v-if="!isNewYear">
      <p class="text-8xl font-extrabold text-blue-800">
        {{ minutes }} Minutes : {{ seconds }} Seconds
      </p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "CountdownTimer",
  data() {
    return {
      timer: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isNewYear: false, // Flag to toggle the New Year message
    };
  },
  methods: {
    calculateTime() {
      const now = new Date().getTime();
      const nextYear = new Date(
        `January 1, ${new Date().getFullYear() + 1} 00:00:00`
      ).getTime();
      const timeDifference = nextYear - now;

      if (timeDifference > 0) {
        this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      } else {
        clearInterval(this.timer); // Stop the timer
        this.isNewYear = true; // Set the flag to true to display the message
      }
    },
  },
  mounted() {
    this.calculateTime(); // Initial calculation
    this.timer = setInterval(this.calculateTime, 1000); // Update every second
  },
  beforeUnmount() {
    clearInterval(this.timer); // Cleanup the interval on component unmount
  },
};
</script>

<style scoped>
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.timer {
  font-size: 2rem;
  color: #333;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ff6f61;
}
</style>
