<template>
  <div class="card m-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ dateFormatted }}</small>
          <small class="column has-text-right">{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" href="#" class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :noteId="note.id"
    ></ModalDeleteNote>
  </div>
</template>

<script setup>
// imports
import { computed, reactive } from "vue";
import { useDateFormat } from "@vueuse/core";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";

const props = defineProps({
  note: {
    type: Object,
    require: true,
  },
});

// vueUse Date Formated

const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date));
  const formated = useDateFormat(date, "DD MMM YYYY - hh:mm A");
  return formated.value;
});

// Character Length
const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "Characters" : "Character";
  return `${length} ${description}`;
});

// Modal delete

const modals = reactive({
  deleteNote: false,
});
</script>
