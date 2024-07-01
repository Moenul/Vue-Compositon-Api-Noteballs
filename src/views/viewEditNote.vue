<template>
  <div class="notes">
    <AddEditNote
      v-model="noteContent"
      bg-color="primary"
      placeholder="Edit Note Here..."
      label="Edit Note"
    >
      <template v-slot:button>
        <button class="button is-link is-light mr-2" @click="$router.push('/')">
          Cancel
        </button>
        <button
          class="button is-link is-info"
          :disabled="!noteContent"
          @click="handleToSaveNote"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes.js";
import { useRoute, useRouter } from "vue-router";

const storeNotes = useStoreNotes();

const route = useRoute();
const router = useRouter();

const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleToSaveNote = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
