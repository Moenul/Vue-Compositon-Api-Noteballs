<template>
  <div class="card p-4" :class="`has-background-${bgColor}`">
    <div class="field">
      <div class="control">
        <div class="label" v-if="label">{{ label }}</div>
        <textarea
          :value="props.modelValue"
          @input="emit('update:modelValue', $event.target.value)"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
// props
const props = defineProps({
  modelValue: {
    type: String,
    require: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Write Here...",
  },
  label: {
    type: String,
    require: true,
  },
});

// emits
const emit = defineEmits(["update:modelValue"]);

// Focus Textarea
const textareaRef = ref(null);

const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextarea,
});
</script>
