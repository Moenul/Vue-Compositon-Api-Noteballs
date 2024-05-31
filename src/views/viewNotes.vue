<template>
  <div class="notes">
    <div class="card has-background-success p-4">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            ref="newNoteRef"
            class="textarea"
            placeholder="Add New Note Here..."
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            :disabled="!newNote"
            @click="addNote"
            class="button is-link is-light"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <!-- note -->
    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
    <!-- note -->
  </div>
</template>

<script setup>
// imports

import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";

const newNote = ref("");

const newNoteRef = ref(null);

// notes
const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus magnam qui voluptatem quae minima, adipisci, sequi perspiciatis placeat repellendus quas aperiam provident, aspernatur assumenda. At consectetur pariatur omnis nulla!",
  },
  {
    id: "id2",
    content: "Simple short content note. We will talk about leter.",
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime();
  let id = currentDate.toString();

  let note = {
    id: id,
    content: newNote.value,
  };
  notes.value.unshift(note);

  newNote.value = "";
  newNoteRef.value.focus();
};

// Delete Note

const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete;
  });
};
</script>
