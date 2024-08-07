import { postMail } from "@/app/actions/blog";
import { Mail } from "@/shared/models/Post";
import { useState } from "react";

interface Props {
  onClose?: () => void;
  onSuccess?: () => void;
}

export default function ContactForm({ onClose, onSuccess }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const onSend = async () => {
    try {
      if (!content || !email) return;

      const mail: Mail = {
        Name: name,
        Email: email,
        Content: content,
      };

      const response = await postMail(mail);

      if (response?.success && onClose) {
        onClose();
        if (onSuccess) onSuccess();
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full p-8 my-8 md:my-24 md:px-12  lg:px-40 mx-auto rounded-2xl select-none">
      <div className="flex">
        <h1 className="font-bold text-pink-300 uppercase text-5xl">
          Send Shana A Message
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <input
          value={name}
          required
          className="w-full bg-indigo-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Name*"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          required
          className="w-full bg-indigo-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email*"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="my-4">
        <textarea
          value={content}
          required
          placeholder="Message*"
          className="w-full h-32 bg-indigo-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="my-2 w-1/2 mx-auto">
        <button
          onClick={() => {
            onSend();
          }}
          className="g-recaptcha uppercase text-sm font-bold tracking-wide bg-pink-200 text-white p-3 rounded-lg w-full 
                  focus:outline-none focus:shadow-outline hover:bg-violet-300"
          data-sitekey={process.env.RECAPTCHAKEY}
          data-callback="onSubmit"
          data-action="submit"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
