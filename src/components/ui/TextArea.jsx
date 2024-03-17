import React from 'react'

const TextArea = ({ value, label }) => {
  return (
    <>
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <textarea id="message" rows="4" class="block p-2.5 w-full  text-gray-400 bg-white rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." value={value}></textarea>
    </>
  )
}

export default TextArea