import jwt from "jsonwebtoken";
import "dotenv/config";

const { JWT_SECRET } = process.env;

const payload = {
    id: "65d38214d639477f19524d71"
};

const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });
// console.log(token)
const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const { id } = jwt.verify(token, JWT_SECRET);
    // console.log(id)
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDM4MjE0ZDYzOTQ3N2YxOTUyNGQ3MSIsImlhdCI6MTcwODM2MTI4OSwiZXhwIjoxNzA4NDQ0MDg5fQ.c7P1otwcefJWcszki2KzcsyVdxrSYcomL9QkvapJ2i9";
    jwt.verify(invalidToken, JWT_SECRET);
}
catch (error) {
    console.log(error.message);
}