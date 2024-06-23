import { useModal } from "@/shared/hooks/useModal";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface Props {
  onChange?: (date: Date) => void;
}

export const DatePicker = ({ onChange }: Props) => {
  const [modal, showModal] = useModal();

  return (
    <>
      <button
        className="btn text-sm text-white bg-purple-300 hover:bg-purple-200 shadow-sm group mr-3 rounded-s-none"
        onClick={() => {
          showModal("", (onClose) => (
            <div className="px-3 h-90">
              <DayPicker
                mode="single"
                onSelect={(date) => {
                  if (onChange && date) {
                    onChange(date);
                  }
                  onClose();
                }}
              />
            </div>
          ));
        }}
      >
        SetDate
      </button>
      {modal}
    </>
  );
};
