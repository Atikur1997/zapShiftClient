import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, user_email, review: reviewText, user_photoURL } = review;
  return (
    <div className="card bg-base-200 shadow-xl rounded-2xl p-6 h-full flex flex-col">
      <FaQuoteLeft className="text-4xl text-primary opacity-40 mb-4" />

      <p className="text-sm text-gray-600 leading-relaxed min-h-[100px]">
        {reviewText}
      </p>

      <div className="divider divider-dashed my-4"></div>

      <div className="flex items-center gap-3 mt-auto">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full bg-primary">
            <img src={user_photoURL} />{" "}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="font-semibold text-base text-primary">{userName}</h2>
          <p className="text-xs text-gray-500 break-all">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
