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
    <!-- note -->
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    <!-- note -->
  </div>
</template>

<script setup>
// imports

import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import AddEditNote from "@/components/Notes/AddEditNote.vue";

// storres
const storeNotes = useStoreNotes();
// storres

const newNote = ref("");

const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};
</script>
