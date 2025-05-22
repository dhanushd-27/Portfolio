"use server"

import quotes from "@/assets/quotes.json"

export async function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}