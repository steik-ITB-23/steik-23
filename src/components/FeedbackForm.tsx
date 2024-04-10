"use client";
import React, { useState } from "react";
import Button from "@/components/Button";

interface FeedbackFormProps {
  onSubmit: (feedback: string, isAnonymous: boolean, senderName?: string) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [senderName, setSenderName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(feedback, isAnonymous, isAnonymous ? undefined : senderName);
    // Reset form fields after submission
    setFeedback("");
    setIsAnonymous(false);
    setSenderName("");
  };

  return (
    <div className="border-[1px] border-slate-500 rounded-[24px] w-full sm:w-[640px]" onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleSubmit} className="max-w-full m-10">
        <h1 className="font-bold text-[24px] sm:text-[32px] mb-4">Form Feedback/Saran</h1>
        {!isAnonymous && (
          <div className="mb-4 relative">
            <label className="bg-[#e8eaf0] px-[6px] absolute top-0 left-3 transition-all -translate-y-[10px] text-sm text-[#666666]">
              Nama Pengirim
            </label>
            <input
              type="text"
              className="border-[1px] border-slate-500 rounded-xl px-3 py-2 w-full focus:outline-none focus:border-black bg-[#e8eaf0]"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              required
            />
            <div className="border-b-2 border-transparent absolute bottom-0 left-0 right-0 pointer-events-none"></div>
          </div>
        )}
        <div className="mb-2 relative">
          <label className="bg-[#e8eaf0] px-[6px] absolute top-0 left-3 transition-all -translate-y-[10px] text-sm text-[#666666]">
            Feedback/Saran
          </label>
          <textarea
            className="border-[1px] border-slate-500 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-black bg-[#e8eaf0]"
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required></textarea>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2 bg-[#e8eaf0]"
            id="anonymous"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
          />
          <label className="text-sm cursor-pointer" htmlFor="anonymous">
            Anonymous
          </label>
        </div>
        <Button type="submit" className="w-full bg-[#101351]">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
