<template>
  <div>
    <div class="">
      <div>
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <p class="text-sm">Welcome to your dashboard</p>

        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              class="card shadow-md border-l-4 border-myBlue rounded-md p-4 flex justify-between items-center"
            >
              <div>
                <h3 class="text-lg font-bold">Current Session</h3>
                <p class="text-sm">2024/2025</p>
              </div>
              <div>
                <img src="../assets/icons/calendar.svg" alt="" class="w-10" />
              </div>
            </div>
            <div
              class="card shadow-md border-l-4 border-myBlue rounded-md p-4 flex justify-between items-center"
            >
              <div>
                <h3 class="text-lg font-bold">Current Semester</h3>
                <p class="text-sm">First Semester</p>
              </div>
              <div>
                <img src="../assets/icons/semester.svg" alt="" class="w-10" />
              </div>
            </div>
            <div
              class="card shadow-md border-l-4 border-myBlue rounded-md p-4 flex justify-between items-center"
            >
              <div>
                <h3 class="text-lg font-bold">Programme Type</h3>
                <p class="text-sm">HND (Online)</p>
              </div>
              <div>
                <img
                  src="../assets/icons/programme-type.svg"
                  alt=""
                  class="w-10"
                />
              </div>
            </div>
            <div
              class="card shadow-md border-l-4 border-myBlue rounded-md p-4 flex justify-between items-center"
            >
              <div>
                <h3 class="text-lg font-bold">Current Level</h3>
                <p class="text-sm">HND II</p>
              </div>
              <div>
                <img src="../assets/icons/book.svg" alt="" class="w-10" />
              </div>
            </div>
          </div>

          <div>
            <!-- <Bar /> -->
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              cumque itaque deleniti aliquam veritatis, natus voluptate ad,
              amet, earum nam aperiam voluptatibus optio possimus error ut
              asperiores ipsa mollitia recusandae sunt necessitatibus placeat?
              Voluptatem quisquam, inventore ipsam praesentium, eos
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
