export default function news(req, res) {
  //req = รับข้อมูลเป็นอะไร
  //res = ส่งข้อมูลกับเป็นอะไร
  console.log("show news");
  res.json({ news: "data news" });
}
