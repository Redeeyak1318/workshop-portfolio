'use client';

import { useState, useActionState, useEffect } from 'react';
import { submitContactForm } from '@/app/actions/contact';

export const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(submitContactForm, {});

  // Reset state if form is closed
  useEffect(() => {
    if (!isOpen && (state.error || state.success)) {
      // Small timeout to allow transition to finish
      setTimeout(() => {
        state.error = undefined;
        state.success = undefined;
      }, 300);
    }
  }, [isOpen, state]);

  if (state.success) {
    return (
      <div className="flex flex-col items-start gap-4 transition-all duration-700">
        <h3 className="font-mono text-sm tracking-widest text-neutral-300 uppercase">
          Message Received
        </h3>
        <p className="text-neutral-500 font-light text-sm tracking-wide">
          Thanks for reaching out. The message is on its way.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm flex flex-col items-start">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-4 text-neutral-400 hover:text-neutral-200 transition-colors duration-300 outline-none focus-visible:text-neutral-200"
        >
          <span className="font-mono text-xs tracking-widest uppercase">Send a Message</span>
          <span className="font-mono text-xs transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">→</span>
        </button>
      ) : (
        <form action={formAction} className="w-full flex flex-col gap-6 transition-all duration-500">
          
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          {state.error && (
            <div className="flex flex-col gap-1 mb-2">
              <span className="font-mono text-xs tracking-widest text-red-400/80 uppercase">Couldn't Send</span>
              <span className="text-neutral-500 font-light text-xs">{state.error}</span>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              disabled={isPending}
              className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-500 outline-none text-neutral-200 font-light text-sm pb-2 transition-colors disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              disabled={isPending}
              className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-500 outline-none text-neutral-200 font-light text-sm pb-2 transition-colors disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required
              disabled={isPending}
              rows={4}
              className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-500 outline-none text-neutral-200 font-light text-sm pb-2 transition-colors resize-none disabled:opacity-50"
            />
          </div>

          <div className="flex items-center gap-6 mt-4">
            <button 
              type="submit" 
              disabled={isPending}
              className="group flex items-center gap-4 text-neutral-400 hover:text-neutral-200 transition-colors duration-300 outline-none focus-visible:text-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-mono text-xs tracking-widest uppercase">
                {isPending ? 'Sending...' : 'Send Message'}
              </span>
              <span className="font-mono text-xs transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">→</span>
            </button>
            
            <button 
              type="button" 
              onClick={() => setIsOpen(false)}
              disabled={isPending}
              className="font-mono text-[10px] tracking-widest uppercase text-neutral-600 hover:text-neutral-400 transition-colors disabled:opacity-50 outline-none focus-visible:text-neutral-400"
            >
              Cancel
            </button>
          </div>

        </form>
      )}
    </div>
  );
};
