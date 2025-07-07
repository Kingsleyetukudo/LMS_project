<template>
  <div class="max-w-xl mx-auto bg-white p-6 rounded shadow">
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
      <!-- Stepper -->
      <div class="flex justify-between mb-6">
        <div
          v-for="(step, idx) in steps"
          :key="idx"
          class="flex-1 flex flex-col items-center"
        >
          <div
            class="w-8 h-8 flex items-center justify-center rounded-full"
            :class="
              currentStep === idx
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-700'
            "
          >
            {{ idx + 1 }}
          </div>
          <span
            class="text-xs mt-1"
            :class="currentStep === idx ? 'font-bold text-blue-600' : ''"
            >{{ step }}</span
          >
        </div>
      </div>

      <!-- Step 1: Personal Info -->
      <div v-if="currentStep === 0" class="space-y-4">
        <h2 class="text-lg font-semibold mb-2">Personal Information</h2>
        <input
          v-model="form.firstName"
          type="text"
          placeholder="First Name"
          class="form-input w-full"
          required
        />
        <input
          v-model="form.lastName"
          type="text"
          placeholder="Last Name"
          class="form-input w-full"
          required
        />
        <input
          v-model="form.dob"
          type="date"
          placeholder="Date of Birth"
          class="form-input w-full"
          required
        />
        <select v-model="form.gender" class="form-input w-full" required>
          <option value="" disabled>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <!-- Step 2: Contact Info -->
      <div v-if="currentStep === 1" class="space-y-4">
        <h2 class="text-lg font-semibold mb-2">Contact Information</h2>
        <input
          v-model="form.email"
          type="email"
          placeholder="Email Address"
          class="form-input w-full"
          required
        />
        <input
          v-model="form.phone"
          type="tel"
          placeholder="Phone Number"
          class="form-input w-full"
          required
        />
        <input
          v-model="form.address"
          type="text"
          placeholder="Home Address"
          class="form-input w-full"
          required
        />
        <input
          v-model="form.city"
          type="text"
          placeholder="City"
          class="form-input w-full"
          required
        />
        <input
          v-model="form.state"
          type="text"
          placeholder="State"
          class="form-input w-full"
          required
        />
      </div>

      <!-- Step 3: Academic Info -->
      <div v-if="currentStep === 2" class="space-y-4">
        <h2 class="text-lg font-semibold mb-2">Academic Information</h2>
        <input
          v-model="form.institution"
          type="text"
          placeholder="Institution Name"
          class="form-input w-full"
          required
        />
        <input
          v-model="form.department"
          type="text"
          placeholder="Department"
          class="form-input w-full"
          required
        />
        <input
          v-model="form.programme"
          type="text"
          placeholder="Programme (e.g. BSc Computer Science)"
          class="form-input w-full"
          required
        />
        <input
          v-model="form.level"
          type="text"
          placeholder="Level (e.g. 100, 200)"
          class="form-input w-full"
          required
        />
        <input
          v-model="form.jambRegNo"
          type="text"
          placeholder="JAMB Registration Number"
          class="form-input w-full"
          required
        />
      </div>

      <!-- Step 4: Upload Documents -->
      <div v-if="currentStep === 3" class="space-y-4">
        <h2 class="text-lg font-semibold mb-2">Upload Required Documents</h2>
        <div>
          <label class="block mb-1 font-medium">WAEC Result</label>
          <input
            type="file"
            @change="onFileChange($event, 'waec')"
            accept=".pdf,.jpg,.jpeg,.png"
            class="form-input w-full"
            required
          />
        </div>
        <div>
          <label class="block mb-1 font-medium">NECO Result</label>
          <input
            type="file"
            @change="onFileChange($event, 'neco')"
            accept=".pdf,.jpg,.jpeg,.png"
            class="form-input w-full"
          />
        </div>
        <div>
          <label class="block mb-1 font-medium">FSLC</label>
          <input
            type="file"
            @change="onFileChange($event, 'fslc')"
            accept=".pdf,.jpg,.jpeg,.png"
            class="form-input w-full"
          />
        </div>
        <div>
          <label class="block mb-1 font-medium">JAMB Result</label>
          <input
            type="file"
            @change="onFileChange($event, 'jambResult')"
            accept=".pdf,.jpg,.jpeg,.png"
            class="form-input w-full"
            required
          />
        </div>
        <div>
          <label class="block mb-1 font-medium">JAMB Admission Letter</label>
          <input
            type="file"
            @change="onFileChange($event, 'jambLetter')"
            accept=".pdf,.jpg,.jpeg,.png"
            class="form-input w-full"
            required
          />
        </div>
        <div>
          <label class="block mb-1 font-medium">LGA Certificate</label>
          <input
            type="file"
            @change="onFileChange($event, 'lga')"
            accept=".pdf,.jpg,.jpeg,.png"
            class="form-input w-full"
            required
          />
        </div>
        <div>
          <label class="block mb-1 font-medium">Birth Certificate</label>
          <input
            type="file"
            @change="onFileChange($event, 'birthCert')"
            accept=".pdf,.jpg,.jpeg,.png"
            class="form-input w-full"
            required
          />
        </div>
        <div>
          <label class="block mb-1 font-medium">Passport Photograph</label>
          <input
            type="file"
            @change="onFileChange($event, 'passport')"
            accept=".jpg,.jpeg,.png"
            class="form-input w-full"
            required
          />
        </div>
      </div>

      <!-- Step 5: Review & Submit -->
      <div v-if="currentStep === 4" class="space-y-4">
        <h2 class="text-lg font-semibold mb-2">Review & Submit</h2>
        <div class="text-sm">
          <div>
            <strong>Name:</strong> {{ form.firstName }} {{ form.lastName }}
          </div>
          <div><strong>Date of Birth:</strong> {{ form.dob }}</div>
          <div><strong>Gender:</strong> {{ form.gender }}</div>
          <div><strong>Email:</strong> {{ form.email }}</div>
          <div><strong>Phone:</strong> {{ form.phone }}</div>
          <div>
            <strong>Address:</strong> {{ form.address }}, {{ form.city }},
            {{ form.state }}
          </div>
          <div><strong>Institution:</strong> {{ form.institution }}</div>
          <div><strong>Department:</strong> {{ form.department }}</div>
          <div><strong>Programme:</strong> {{ form.programme }}</div>
          <div><strong>Level:</strong> {{ form.level }}</div>
          <div><strong>JAMB Reg No:</strong> {{ form.jambRegNo }}</div>
          <div class="mt-2"><strong>Uploaded Documents:</strong></div>
          <ul class="list-disc ml-6">
            <li v-for="doc in uploadedDocuments" :key="doc.key">
              {{ doc.key.toUpperCase() }}: {{ doc.file.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-between mt-6">
        <button
          type="button"
          class="px-4 py-2 bg-gray-300 rounded"
          @click="prevStep"
          :disabled="currentStep === 0"
        >
          Previous
        </button>
        <button
          v-if="currentStep < steps.length - 1"
          type="button"
          class="px-4 py-2 bg-blue-600 text-white rounded"
          @click="nextStep"
        >
          Next
        </button>
        <button
          v-else
          type="submit"
          class="px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
});

const route = useRoute();
const userId = route.params.userId || props.userId;

onMounted(() => {
  console.log("User ID from URL:", userId);
  // Optionally fetch user data here
});

const steps = ["Personal", "Contact", "Academic", "Documents", "Review"];
const currentStep = ref(0);

const form = ref({
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  institution: "",
  department: "",
  programme: "",
  level: "",
  jambRegNo: "",
  documents: {
    waec: null,
    neco: null,
    fslc: null,
    jambResult: null,
    jambLetter: null,
    lga: null,
    birthCert: null,
    passport: null,
  },
});

const nextStep = () => {
  if (currentStep.value < steps.length - 1) currentStep.value++;
};
const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--;
};

const onFileChange = (event, key) => {
  const file = event.target.files[0];
  if (file) {
    form.value.documents[key] = file;
  }
};

const uploadedDocuments = computed(() =>
  Object.entries(form.value.documents)
    .filter(([_, file]) => !!file)
    .map(([key, file]) => ({ key, file }))
);

const handleSubmit = () => {
  alert(
    "Registration submitted!\n" +
      JSON.stringify(
        {
          ...form.value,
          documents: Object.fromEntries(
            Object.entries(form.value.documents).map(([k, v]) => [
              k,
              v ? v.name : null,
            ])
          ),
        },
        null,
        2
      )
  );
};
</script>

<style scoped>
.form-input {
  @apply border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400;
}
</style>
