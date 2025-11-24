"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
  const [submitted, setSubmitted] = useState(false);

  const messageValue = watch("message") || "";

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted:", data);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">Simple Form With Validations</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
            })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <Input
            type="tel"
            placeholder="123-456-7890"
            {...register("phone", {
              required: "Phone is required",
              pattern: { value: /^[0-9-+() ]+$/, message: "Invalid phone number" }
            })}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <Textarea
            placeholder="Your message"
            {...register("message", {
              required: "Message is required",
              maxLength: { value: 300, message: "Max 300 characters" }
            })}
          />
          <p className="text-xs text-gray-500 mt-1">{messageValue.length}/300</p>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <Button type="submit" className="w-full">Submit</Button>

        {submitted && (
          <p className="text-green-500 text-center mt-2 font-medium">
            Form submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}