<template>
  <div class="sidebar flex flex-col justify-around gap-8 p-6 shadow-md">
    <div>
      <ul class="flex flex-col gap-2">
        <li>
          <RouterLink to="/dashboard" class="flex gap-2 p-4 font-bold">
            <img src="../assets/icons/Dashboard.svg" alt="" class="w-5" />
            Dashboard
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/dashboard/profile" class="navStyle">
            <img src="../assets/icons/profile.svg" alt="" class="w-5" /> Profile
          </RouterLink>
        </li>
        <li class="nav-item dropdown" @click="showDropdown('drop1')">
          <Span class="navStyle">
            <img src="../assets/icons/courses.svg" alt="" class="w-5" /> Courses
          </Span>
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
            <li @click="stayOpen">
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
            <li @click="stayOpen">
              <RouterLink to="/dashboard/past-courses" class="navStyle">
                <img
                  src="../assets/icons/RegisteredCourses.svg"
                  alt=""
                  class="w-5"
                />
                Past Courses
              </RouterLink>
            </li>
            <li @click="stayOpen">
              <RouterLink to="/dashboard/attendance" class="navStyle">
                <img src="../assets/icons/Attendance.svg" alt="" class="w-5" />
                Attendance
              </RouterLink>
            </li>
            <li @click="stayOpen">
              <RouterLink to="/dashboard/progress-tracker" class="navStyle">
                <img
                  src="../assets/icons/Progress Tracker.svg"
                  alt=""
                  class="w-5"
                />Progress Tracker</RouterLink
              >
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown" @click="showDropdown('drop3')">
          <span class="navStyle">
            <img src="../assets/icons/lecture.svg" alt="" class="w-5" />
            Lectures
          </span>
          <ul
            :class="[
              'dropdown-menu',
              {
                show: isDropdownOpen === 'drop3',
                hidden: isDropdownOpen !== 'drop3',
              },
            ]"
          >
            <li @click="stayOpen">
              <RouterLink to="/dashboard/lecture-notes" class="navStyle">
                <img
                  src="../assets/icons/lecture-notes.svg"
                  alt=""
                  class="w-5"
                />
                Lecture Notes
              </RouterLink>
            </li>
            <li @click="stayOpen">
              <RouterLink to="/dashboard/live-lectures" class="navStyle">
                <img
                  src="../assets/icons/Live Lectures.svg"
                  alt=""
                  class="w-5"
                />
                Live Lectures
              </RouterLink>
            </li>
            <li @click="stayOpen">
              <RouterLink to="/dashboard/recorded-lectures" class="navStyle">
                <img
                  src="../assets/icons/Recorded Lectures.svg"
                  alt=""
                  class="w-5"
                />
                Recorded Lectures
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown" @click="showDropdown('drop2')">
          <Span class="navStyle">
            <img src="../assets/icons/tasks.svg" alt="" class="w-5" /> Tasks
          </Span>
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
              <RouterLink to="/dashboard/assignment" class="navStyle">
                <img src="../assets/icons/Assignment.svg" alt="" class="w-5" />
                Assignment
              </RouterLink>
            </li>
            <li @click="stayOpen">
              <RouterLink to="/dashboard/test" class="navStyle">
                <img src="../assets/icons/Exams.svg" alt="" class="w-5" /> Test
              </RouterLink>
            </li>
            <li @click="stayOpen">
              <RouterLink to="/dashboard/examinations" class="navStyle">
                <img src="../assets/icons/Exams.svg" alt="" class="w-5" /> Exams
              </RouterLink>
            </li>
          </ul>
        </li>

        <li @click="closeDropdown">
          <RouterLink to="/dashboard/announcement" class="navStyle">
            <img src="../assets/icons/Announcement.svg" alt="" class="w-5" />
            Announcement
          </RouterLink>
        </li>
        <li @click="closeDropdown">
          <RouterLink to="/dashboard/forums" class="navStyle">
            <img src="../assets/icons/Forums.svg" alt="" class="w-5" /> Forums
          </RouterLink>
        </li>
        <li @click="closeDropdown">
          <RouterLink to="/dashboard/live-chat" class="navStyle">
            <img src="../assets/icons/Live Chat.svg" alt="" class="w-5" /> Live
            Chat
          </RouterLink>
        </li>
        <li @click="closeDropdown">
          <RouterLink to="/dashboard/notifications" class="navStyle">
            <img src="../assets/icons/Notifications.svg" alt="" class="w-5" />
            Notifications
          </RouterLink>
        </li>

        <li @click="closeDropdown">
          <RouterLink to="/dashboard/library" class="navStyle">
            <img src="../assets/icons/Library.svg" alt="" class="w-5" /> Library
          </RouterLink>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li @click="closeDropdown">
          <RouterLink to="/dashboard/settings" class="navStyle">
            <img src="../assets/icons/Settings.svg" alt="" class="w-5" />
            Settings
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/login" class="navStyle">
            <img src="../assets/icons/Log-out.svg" alt="" class="w-5" /> Log-out
          </RouterLink>
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
