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
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click.prevent="handleDeleteClicked"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
// imports
import { computed } from "vue";

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

// Emits

const emit = defineEmits(["deleteClicked"]);

// Handle Delete Clicked

const handleDeleteClicked = () => {
  emit("deleteClicked", props.note.id);
};
</script>
