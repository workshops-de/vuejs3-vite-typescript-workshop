<template>
  <label for="search">🔎 </label>
  <input id="search" v-model="search" placeholder="Search for books by title" />
  <table>
    <BookListItem
      v-for="(book, index) in filteredBooks"
      :key="book.isbn"
      v-bind="book"
      @read="readBook(index)"
    />
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BookListItem from "@/components/BookListItem.vue";
import http from "@/utils/http";
import type { Book } from "../types";

interface ComponentData {
  search: string;
  books: Book[];
}

export default defineComponent({
  name: "BookList",
  components: {
    BookListItem,
  },
  data(): ComponentData {
    return {
      search: "",
      books: [],
    };
  },
  computed: {
    filteredBooks(): Book[] {
      return this.books.filter((book) => book.title.includes(this.search));
    },
  },
  methods: {
    readBook(index: number) {
      this.books[index] = {
        ...this.books[index],
        read: true,
      };
    },
    async updateBooks() {
      const books = await http<Book[]>("http://localhost:4730/books");
      this.books = books;
    },
  },
  created() {
    this.updateBooks();
  },
});
</script>

<style>
table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  padding: 8px;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #dddddd;
}
</style>
