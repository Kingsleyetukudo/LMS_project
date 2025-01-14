<template>
  <main>
    <div class="dashboard">
      <!-- <div class="sideNav"> -->
      <SideMenu class="sidebar-area" :openNavBar="toggleSidebar" />
      <!-- </div> -->
      <User @openSideBar="handleSideBar" class="header-area mx-4 rounded-md" />
      <div class="main-content main-area">
        <div v-if="$route.path === '/dashboard'">
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
                    <img
                      src="../assets/icons/calendar.svg"
                      alt=""
                      class="w-10"
                    />
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
                    <img
                      src="../assets/icons/semester.svg"
                      alt=""
                      class="w-10"
                    />
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
                  asperiores ipsa mollitia recusandae sunt necessitatibus
                  placeat? Voluptatem quisquam, inventore ipsam praesentium, eos
                  ducimus, deserunt maxime accusantium obcaecati porro aut
                  molestias vel impedit! Provident saepe eius pariatur
                  perspiciatis, laboriosam odio accusamus ratione. Quidem
                  officiis culpa facilis placeat reiciendis. Modi quasi unde
                  rerum rem. Ipsam, aliquam repellendus dolores, at nostrum
                  fugit eum omnis, voluptate alias nulla vitae animi? Quos aut
                  nemo, expedita libero dicta eveniet recusandae quod
                  necessitatibus. Illo voluptatem aspernatur nostrum sed
                  explicabo. Voluptatibus sapiente at totam perspiciatis ad sint
                  voluptas provident expedita pariatur, magni, in neque, earum
                  ratione. Omnis eius a odit, ex cumque obcaecati! Facilis
                  doloribus fugit odit maxime accusamus tempora voluptatibus
                  deleniti inventore, libero saepe beatae. Tenetur debitis
                  repudiandae laudantium aut quo tempora! Suscipit autem dolores
                  veniam illum at inventore odio, beatae natus, quas dolore
                  ipsum nostrum in porro assumenda quod perspiciatis rem ut
                  voluptates! Eum beatae sed adipisci iusto ratione
                  necessitatibus mollitia recusandae obcaecati! Provident dicta,
                  vitae expedita dolorum, assumenda architecto nulla fugit
                  beatae perferendis cumque iusto? Possimus quasi sed earum odio
                  dolore quisquam alias molestias cum expedita error illum
                  praesentium laudantium nostrum fugit fuga eveniet, quod
                  perspiciatis odit vero, non debitis quis magni eligendi eius.
                  Sapiente quae magni, porro autem beatae, molestias placeat
                  tempora fuga modi assumenda excepturi aut recusandae, rem quod
                  consectetur. Voluptatibus ex ipsa debitis iste inventore,
                  molestiae necessitatibus. Dicta non neque porro laudantium
                  ipsum. Quis explicabo expedita debitis labore nobis! Aliquid
                  officiis praesentium placeat cumque esse odit, sapiente quod
                  dolorum cum officia necessitatibus doloremque fugit vel ad
                  nesciunt exercitationem, itaque enim eligendi laborum quaerat
                  ex. Fugiat nam voluptatibus id autem animi porro eius, minus
                  deleniti rerum quos earum laudantium ipsam odio, adipisci
                  commodi mollitia. Eveniet sed officiis ducimus explicabo,
                  optio accusantium impedit. Reiciendis error, aperiam cum
                  corporis, asperiores beatae dolorem harum, omnis maiores iusto
                  fuga mollitia quia pariatur culpa explicabo? Earum possimus
                  sed distinctio sunt nihil suscipit maiores magni animi
                  adipisci dolore cum dolores illo odit officia eum, facilis
                  ipsa, magnam illum corrupti. Deleniti ea doloribus culpa,
                  impedit veniam esse sequi amet magnam dolores, molestiae quo
                  nesciunt vel laboriosam? Placeat expedita perspiciatis eum ad
                  similique accusamus pariatur error ut rem minus consequuntur
                  harum sed incidunt odit hic, dolor vitae quia? Autem non
                  debitis, exercitationem dolores voluptates hic assumenda earum
                  consequatur eveniet amet, nihil animi! Praesentium eaque
                  quidem eligendi magnam. Cumque labore reiciendis unde, eum
                  quas nulla. Doloribus dolorum, laboriosam nobis, quidem
                  corrupti ipsum quas est aliquid, natus consequatur culpa
                  nesciunt labore excepturi. Expedita iusto aut optio
                  perspiciatis obcaecati. Animi dolore vero pariatur maxime
                  repellat, reiciendis quis facilis facere, repellendus
                  necessitatibus sed? Cum voluptate doloribus alias iure, labore
                  illum itaque quaerat. Vero, qui et nesciunt quasi aliquam
                  fugiat odio similique velit saepe doloremque! Molestias soluta
                  id nemo ratione ducimus perspiciatis pariatur aliquid
                  reprehenderit aliquam libero. Sed, quisquam! Culpa neque est
                  eveniet esse exercitationem tenetur quidem eligendi fuga,
                  voluptates veniam recusandae laudantium expedita eos dolorum
                  assumenda nulla quia suscipit debitis iusto ipsam voluptate.
                  Dolorem suscipit, sed quasi repellendus dignissimos totam
                  voluptas deleniti hic voluptates rem! Debitis fuga modi fugit
                  ad libero earum recusandae itaque. Veniam quam recusandae
                  harum asperiores cupiditate perferendis laudantium quis
                  doloremque dolor error. Voluptatum sapiente aperiam placeat a
                  cum qui in officiis. Possimus provident amet placeat
                  aspernatur aut dignissimos autem alias tempora nulla
                  reprehenderit quas totam obcaecati repellat voluptatem,
                  quaerat quasi asperiores suscipit similique! Dolores commodi
                  labore delectus optio nemo quis praesentium inventore adipisci
                  explicabo soluta. Provident quidem reprehenderit at iste,
                  suscipit laboriosam harum magni accusantium dignissimos
                  deleniti, pariatur dolores quibusdam labore ipsum fuga
                  consectetur? Ex distinctio blanditiis repellendus nostrum
                  voluptates aliquid sapiente excepturi, laborum quibusdam minus
                  reiciendis delectus deserunt repellat animi ipsum illum
                  temporibus. Saepe, quis? Optio molestiae dolorem mollitia quia
                  explicabo reprehenderit doloremque unde ut nesciunt nam,
                  voluptas quibusdam vel quidem quo aliquam ex facere
                  temporibus. Ut ex at in quaerat adipisci, vel architecto et
                  repellat distinctio qui aliquid sunt assumenda a saepe. Nemo,
                  recusandae. Ipsum rerum dicta, molestiae quos veritatis
                  excepturi consequuntur eius atque iure corrupti placeat harum
                  debitis, laborum illum vitae sapiente iusto omnis dolorum
                  labore reprehenderit adipisci nihil! Maiores in eum
                  doloremque, distinctio nobis voluptatibus corporis accusamus
                  dolor, architecto temporibus molestiae veritatis hic non.
                  Eaque totam cum eius molestiae ut officia assumenda nesciunt
                  laudantium repellendus quis. Fugit aperiam quisquam magnam
                  tenetur deleniti nisi maiores unde id quaerat omnis facilis
                  atque officia animi nesciunt maxime labore cumque voluptatibus
                  voluptatem vel, autem necessitatibus beatae quae. Veritatis,
                  cum hic eum aliquid fugit ducimus magni earum ad laboriosam
                  illo voluptas officiis in illum totam amet sapiente quia atque
                  odio tenetur vitae natus asperiores. Omnis illo laboriosam
                  fuga blanditiis non? Sit, aperiam itaque. Dolor, modi eius
                  quaerat perspiciatis exercitationem odio a autem voluptatem
                  corporis omnis suscipit mollitia soluta nisi delectus, enim
                  architecto temporibus consectetur tempore voluptatibus nobis
                  aspernatur necessitatibus debitis minima. In reprehenderit qui
                  laboriosam asperiores expedita sequi? Delectus distinctio
                  quidem amet temporibus optio pariatur unde asperiores,
                  expedita ipsum recusandae culpa odio! Tempore cum perferendis
                  nobis nesciunt accusamus inventore fugiat rem ratione delectus
                  nulla quasi voluptate saepe suscipit tenetur ipsum eligendi,
                  dolorem praesentium facilis consequuntur nam quidem error sint
                  consectetur deleniti. Maiores, quaerat mollitia! Accusantium
                  culpa quibusdam soluta voluptatem ea ullam eos, odit mollitia
                  quo sapiente a. Voluptate commodi omnis quis quos! Dolorem,
                  facere. Nesciunt in temporibus totam praesentium eius, quasi
                  rerum adipisci nulla! Sed eius accusantium obcaecati possimus,
                  quae minus, consequuntur quibusdam saepe sit maiores facere
                  odit sunt, fuga nemo natus. Tempora rem explicabo et debitis
                  accusantium! Mollitia sit labore unde veniam, quasi deleniti
                  quae at provident voluptatem porro reprehenderit quos laborum
                  in quo debitis consequuntur perspiciatis facere similique.
                  Accusamus dolor tempora nesciunt labore illum? Deserunt fuga
                  voluptatem molestiae magnam a nesciunt aspernatur cumque
                  dolore, veniam sint enim fugit optio natus totam temporibus
                  delectus, provident nobis nulla? Laudantium dolore blanditiis
                  accusamus sint adipisci nesciunt illo recusandae pariatur,
                  saepe quo, ut ullam quibusdam qui aliquam quisquam rem eaque
                  voluptas quos fugit, vitae perspiciatis sequi totam!
                  Perferendis minus, optio quo dolorum ad iusto dicta voluptatem
                  quas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <RouterView />
      </div>
      <Footer class="footer-area" />
    </div>
  </main>
</template>

<script setup>
import User from "@/component/User.vue";
import SideMenu from "@/component/SideMenu.vue";
import Footer from "@/component/Footer.vue";
import Bar from "@/component/charts/Bar.vue";
import { ref } from "vue";

const toggleSidebar = ref(false);

const handleSideBar = (value) => {
  toggleSidebar.value = value;
  console.log("sidebar opened", toggleSidebar.value);
};
</script>
