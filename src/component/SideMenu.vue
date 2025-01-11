<template>
  <div class="sidebar flex flex-col justify-between gap-8 p-6 shadow-md">
    <div>
      <ul class="flex flex-col gap-2">
        <li>
          <RouterLink to="/dashboard" class="flex gap-2 p-4 font-bold">
            <img src="../assets/icons/Dashboard.svg" alt="" class="w-5" />
            Dashboard
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/dashboard/profile" class="navStyle"
            >Profile</RouterLink
          >
        </li>
        <li class="nav-item dropdown" @click="showDropdown('drop1')">
          <Span class="navStyle">Courses</Span>
          <ul
            :class="[
              'dropdown-menu',
              {
                show: isDropdownOpen === 'drop1',
                hidden: isDropdownOpen !== 'drop1',
              },
            ]"
          >
            <li @click="stayOpen">
              <RouterLink to="/dashboard/timetable" class="navStyle">
                <img src="../assets/icons/TimeTable.svg" alt="" class="w-5" />
                TimeTable
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/dashboard/courses" class="navStyle">
                <span class="flex gap-2 font-bold">
                  <img
                    src="../assets/icons/RegisteredCourses.svg"
                    alt=""
                    class="w-5"
                  />
                  Courses
                </span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/dashboard/past-courses" class="navStyle"
                >Past Courses</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/dashboard/attendance"
                class="navStyle"
                @click="closeDropdown"
                >Attendance</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/dashboard/progress-tracker" class="navStyle"
                >Progress Tracker</RouterLink
              >
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown" @click="showDropdown('drop3')">
          <span class="navStyle">Lectures</span>
          <ul
            :class="[
              'dropdown-menu',
              {
                show: isDropdownOpen === 'drop3',
                hidden: isDropdownOpen !== 'drop3',
              },
            ]"
          >
            <li>
              <RouterLink to="/dashboard/lecture-notes" class="navStyle"
                >Lecture Notes</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/dashboard/live-lectures" class="navStyle"
                >Live Lectures</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/dashboard/recorded-lectures" class="navStyle"
                >Recorded Lectures</RouterLink
              >
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown" @click="showDropdown('drop2')">
          <Span class="navStyle"> Tasks </Span>
          <ul
            v-show="isDropdownOpen"
            class="dropdown-menu"
            :class="[
              'dropdown-menu',
              {
                show: isDropdownOpen === 'drop2',
                hidden: isDropdownOpen !== 'drop2',
              },
            ]"
          >
            <li @click="stayOpen">
              <RouterLink to="/dashboard/assignment" class="navStyle"
                >Assignment</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/dashboard/test" class="navStyle"
                >Test</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/dashboard/examinations" class="navStyle"
                >Exams</RouterLink
              >
            </li>
          </ul>
        </li>

        <li>
          <RouterLink to="/dashboard/announcement" class="navStyle"
            >Announcement</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/dashboard/forums" class="navStyle"
            >Forums</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/dashboard/live-chat" class="navStyle"
            >Live Chat</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/dashboard/notifications" class="navStyle"
            >Notifications</RouterLink
          >
        </li>

        <li>
          <RouterLink to="/dashboard/library" class="navStyle"
            >Library</RouterLink
          >
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <RouterLink to="#" class="navStyle">Settings</RouterLink>
        </li>
        <li>
          <RouterLink to="#" class="navStyle">Log-out</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isDropdownOpen = ref(false);

function showDropdown(drop) {
  console.log(drop);
  isDropdownOpen.value = isDropdownOpen.value === drop ? false : drop;
}

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const stayOpen = (event) => {
  event.stopPropagation(); // Prevent event bubbling
};

// function hideDropdown() {
//   isDropdownOpen.value = false;
// }
</script>

<style lang="scss" scoped></style>
