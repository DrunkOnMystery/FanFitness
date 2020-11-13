import axios from "axios";

export default {
    // Gets all books
    getExercises: function() {
      return axios.get("/api/exercises");
    },
    // Gets the book with the given id
    getExercise: function(id) {
      return axios.get("/api/exercises/" + id);
    },
    // Deletes the book with the given id
    deleteExercise: function(id) {
      return axios.delete("/api/exercises/" + id);
    },
    // Saves a book to the database
    saveExercise: function(bookData) {
      return axios.post("/api/exercises", exerciseData);
    }
  };