import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus magnam qui voluptatem quae minima, adipisci, sequi perspiciatis placeat repellendus quas aperiam provident, aspernatur assumenda. At consectetur pariatur omnis nulla!",
        },
        {
          id: "id2",
          content: "Simple short content note. We will talk about leter.",
        },
      ],
    };
  },
});
