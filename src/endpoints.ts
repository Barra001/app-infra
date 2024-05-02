import { Router } from "express";

function invertWord(word: string): object {
  const startTime = new Date().getTime();
  const fibonacci = calculateFibonacci(word.length);
  const invertedWord = word.split('').reverse().join('');
  const endTime = new Date().getTime();
  const timeInSeconds = (endTime - startTime) / 1000;
  const result = { word: word, inverted: invertedWord, n: word.length, fibonacci: fibonacci, time: timeInSeconds};
  return result;
}

function calculateFibonacci(n: number): number {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

export function initEndpoints(

): Router {
  const router = new Router();

  router.get("/:word", (req, res) => res.json(invertWord(req.params.word)));

  router.get("/status", (req, res) => res.send("OK"));

  return router;
}
