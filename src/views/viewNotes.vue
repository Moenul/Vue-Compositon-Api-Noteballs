<template>
  <div class="notes">
    <div class="card has-background-success p-4">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add New Note Here..." />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link is-light">Add New Note</button>
        </div>
      </div>
    </div>

    <div v-for="i in 3" class="card m-4">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          voluptatibus magnam qui voluptatem quae minima, adipisci, sequi
          perspiciatis placeat repellendus quas aperiam provident, aspernatur
          assumenda. At consectetur pariatur omnis nulla!
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>
