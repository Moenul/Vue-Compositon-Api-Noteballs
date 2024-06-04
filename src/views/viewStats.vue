<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total number of notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Total character of all notes</td>
          <td>{{ storeNotes.totalCharacterCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// imports
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();

console.log(storeNotes.totalNotesCount);
</script>
