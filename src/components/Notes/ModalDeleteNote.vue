<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
          @click="closeModal()"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        Are you sure to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button @click="closeModal()" class="button">Cancel</button>
          <button
            @click="storeNotes.deleteNote(noteId)"
            class="button is-danger"
          >
            Delete
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
// imports
import { onMounted, onUnmounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "@/stores/storeNotes";

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

// emits
const emit = defineEmits(["update:modelValue"]);

// storres
const storeNotes = useStoreNotes();
// storres

// Close Modal
const closeModal = () => {
  emit("update:modelValue", false);
};

// click outside to close
const modalCardRef = ref(null);
onClickOutside(modalCardRef, closeModal);

// Keyboard Handeler
const handleKeybord = (e) => {
  if (e.key === "Escape") closeModal();
};

onMounted(() => {
  document.addEventListener("keyup", handleKeybord);
});

onUnmounted(() => {
  document.removeEventListener("keyup", handleKeybord);
});
</script>
