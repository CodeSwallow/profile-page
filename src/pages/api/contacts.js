import contactData from "@/data/contact.json";

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(contactData.contact);
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
