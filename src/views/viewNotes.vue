<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      bg-color="success"
      placeholder="Add New Note Here..."
      label="Add Note"
    >
      <template v-slot:button>
        <button
          :disabled="!newNote"
          @click="addNote"
          class="button is-link is-light"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <!-- Loading -->
    <button
      v-if="!storeNotes.notedLoaded"
      class="is-loading mt-6 button is-large is-ghost is-fullwidth"
    ></button>
    <!-- note -->
    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
      <div
        v-if="!storeNotes.notes.length"
        class="is-size-5 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        No notes add yet ...
      </div>
    </template>
    <!-- note -->
  </div>
</template>

<script setup>
// imports

import { ref, onMounted } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useWatchCharacters } from "@/use/useWatchCharacters";

// storres
const storeNotes = useStoreNotes();
// storres

// mounted
onMounted(() => {
  storeNotes.getNotes();
});

const newNote = ref("");

const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};
// Watcher
useWatchCharacters(newNote);
</script>
