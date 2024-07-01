import { defineStore } from "pinia";
import { db } from "@/js/firebase";
import { useStoreAuth } from "@/stores/storeAuth";
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

let notesCollectionRef;
let notesCollectionQuery;
let getNoteSnapshot; 

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [],
      notedLoaded: false,
    };
  },
  actions: {
    init() {
      const storeAuth = useStoreAuth();
      notesCollectionRef = collection(db, "users", storeAuth.user.id, "notes");
      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"),limit(10));
      this.getNotes();
    },
    async getNotes() {
      this.notedLoaded = false;
      getNoteSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
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
    clearNotes(){
      this.notes = []
      if (getNoteSnapshot) getNoteSnapshot()
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
