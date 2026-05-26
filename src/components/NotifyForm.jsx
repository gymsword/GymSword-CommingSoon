import React, { useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

import toast from "react-hot-toast";

const NotifyForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter email");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "waitlist"), {
        email,
        createdAt: serverTimestamp(),
      });

      toast.success("You joined the waitlist!");

      setEmail("");

    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-2xl
          flex
          flex-col
          sm:flex-row
          gap-4
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-2xl
          p-4
          shadow-2xl
        "
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            flex-1
            bg-black/30
            border
            border-white/10
            text-white
            px-4
            py-3
            rounded-xl
            outline-none
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            px-6
            py-3
            rounded-xl
            bg-indigo-600
            hover:bg-indigo-700
            transition
            text-white
            font-semibold
          "
        >
          {loading ? "Joining..." : "Notify Me"}
        </button>
      </form>
    </div>
  );
};

export default NotifyForm;