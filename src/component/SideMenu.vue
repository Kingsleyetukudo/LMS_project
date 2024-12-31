<template>
  <div class="sidebar flex flex-col gap-8 p-6 shadow-md">
    <div>
      <ul class="flex flex-col gap-2">
        <li><RouterLink to="/"> Dashboard</RouterLink></li>
        <li><RouterLink to="/timetable">TimeTable </RouterLink></li>
        <li><RouterLink to="courses">Registered Courses</RouterLink></li>
        <li>Past Courses</li>
        <li>Attendance</li>
        <li>Progress Tracker</li>
        <li>Assignment</li>
        <li>Test</li>
        <li>Exams</li>
        <li>Announcement</li>
        <li>Forums</li>
        <li>Live Chat</li>
        <li>Notifications</li>
        <li>Live Lectures</li>
        <li>Recorded Lectures</li>
      </ul>
    </div>
    <div>
      <ul>
        <li>Settings</li>
        <li>Log-out</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
