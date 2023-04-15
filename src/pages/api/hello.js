// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { useReducer } from "react";

export default function handler(req, res) {
  res.status(200).json({ data: [{ img: "https://anu", name: "iya ini anu" }] });
}
