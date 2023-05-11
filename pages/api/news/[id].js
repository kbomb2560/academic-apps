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
    read(req, res);
  } else if (req.method === "PUT") {
    update(req, res);
  } else if (req.method === "DELETE") {
    remove(req, res);
  } else {
    res.status(400).send("error!!");
  }
};
