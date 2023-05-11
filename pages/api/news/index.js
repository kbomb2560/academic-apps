import {
  create,
  list,
  read,
  update,
  remove,
} from "../../../server/controllers/news";

//export default function news (req, res) {  //เขียนแบบเดิม function
export default (req, res) => {
  //arrow function
  //code
  if (req.method === "GET") {
    list(req, res);
  } else if (req.method === "POST") {
    create(req, res);
  } else {
    res.status(400).send("error!!");
  }
};
