/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green-1': '#87ce6e',
      "green-2": "#437228",
      'green-3': '#3F6212',
      'red-1': "#F5321F",
      'grey-1': "#E7ECE2",
      'grey-2':"#F7F8FB",
      'grey-3':"#515C6B",
      "grey-4": '#e9ecef',
      "white": "#FFFFFF",
      "red-3":"#a4161a",
      "purple":"#5a189a",
      "purple-light":"#7b2cbf",
      "purple-dark":"#560bad",
      "purple-medium":"#b5179e",
      "red-medium":"#d90429",
      "red-light":"#ef233c"
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'title':['"Syne", sans-serif'],
      'text': [ '"Inter", serif']
    },
    extend: {},
  },
  plugins: [],
}

