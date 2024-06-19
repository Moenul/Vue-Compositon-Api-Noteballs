import { defineStore } from "pinia";
import { db } from "@/js/firebase";
import { collection, getDocs } from "firebase/firestore";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        // {
        //   id: "id1",
        //   content:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus magnam qui voluptatem quae minima, adipisci, sequi perspiciatis placeat repellendus quas aperiam provident, aspernatur assumenda. At consectetur pariatur omnis nulla!",
        // },
        // {
        //   id: "id2",
        //   content: "Simple short content note. We will talk about leter.",
        // },
      ],
    };
  },
  actions: {
    async getNotes() {
      const querySnapshot = await getDocs(collection(db, "notes"));
      querySnapshot.forEach((doc) => {
        let note = {
          id: doc.id,
          content: doc.data().content,
        };
        this.notes.push(note);
      });
    },
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      let note = {
        id: id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      console.log("index", index);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharacterCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
