import { Router } from "express";

function invertWord(word: string): string {
  return word.split('').reverse().join('');
}

export function initEndpoints(

): Router {
  const router = new Router();

  router.get("/:word", (req, res) => res.send(invertWord(req.params.word)));

  return router;
}
