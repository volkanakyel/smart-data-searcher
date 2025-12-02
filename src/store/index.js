import { defineStore } from "pinia";
import EventService from "@/services/EventServices.js";

export const useUserStore = defineStore("users", {
  state: () => ({
    users: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      try {
        const response = await EventService.getUsers();
        this.users = response.data;
        console.log("Fetched users:", this.users);
      } catch (error) {
        this.error = error.message;
        console.error("Failed to fetch users:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
