export default function handler(req, res) {
  console.log();
  console.log("req: ", req);
  console.log();
  console.log("res: ", res);
  res.status(200).json({ text: "Hello" });
}
