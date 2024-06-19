<template>
  <div class="card m-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
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
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";

const props = defineProps({
  note: {
    type: Object,
    require: true,
  },
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
