"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const feedbackSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  rating: z.string().refine((val) => ["1", "2", "3", "4", "5"].includes(val), {
    message: "Please select a rating",
  }),
  message: z.string().min(10, "Feedback must be at least 10 characters long"),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

export default function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      rating: "",
      message: "",
    },
  });

  const onSubmit = async (data: FeedbackFormValues) => {
    setIsSubmitting(true);
    try {
      console.log(data);
      // Add your submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      alert("Feedback submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-8">Share Your Feedback</h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input
              {...form.register("name")}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            {form.formState.errors.name && (
              <p className="text-red-500 mt-1">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              {...form.register("email")}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2">Rating</label>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    type="radio"
                    {...form.register("rating")}
                    value={rating}
                    className="sr-only"
                  />
                  <span className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 cursor-pointer hover:bg-gray-800 transition-colors">
                    {rating}
                  </span>
                </label>
              ))}
            </div>
            {form.formState.errors.rating && (
              <p className="text-red-500 mt-1">
                {form.formState.errors.rating.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea
              {...form.register("message")}
              rows={4}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            {form.formState.errors.message && (
              <p className="text-red-500 mt-1">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
}
