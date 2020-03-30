import React, { useState } from 'react';
import { useForm, ValidationError } from '@statickit/react';

export default function OptInForm(props) {
  const [state, handleSubmit] = useForm("optInForm");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} class="mt-6 max-w-md w-full mx-auto">
      <div class="flex">
        <label htmlFor="email" class="block w-full">
          <input
            id="email"
            type="email"
            name="email"
            class="form-input bg-gray-200 w-full border-0 rounded-r-none "
            placeholder="Email address"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </label>
        <button type="submit" disabled={state.submitting} class="bg-blue-500 text-white rounded-l-none rounded-sm px-6">
          Subscribe
        </button>
      </div>
      <p class="text-sm text-gray-800 mt-1 text-center">We will not spam you, and you may unsubscribe at any time.</p>
    </form>
  );
}
