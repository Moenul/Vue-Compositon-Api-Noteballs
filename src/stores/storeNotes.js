import { defineStore } from "pinia";
import { db } from "@/js/firebase";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

const notesCollectionRef = collection(db, "notes");
const notesCollectionQuery = query(
  notesCollectionRef,
  orderBy("date", "desc"),
  limit(10)
);

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [],
      notedLoaded: false,
    };
  },
  actions: {
    async getNotes() {
      this.notedLoaded = false;
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          };
          notes.push(note);
        });
        this.notes = notes;
        this.notedLoaded = true;
      });
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString();
      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date: date,
      });
    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionRef, id), {
        content: content,
      });
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
