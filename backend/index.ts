import { app } from "./src/app";


app.listen(process.env.PORT, () => {
    console.log(`Server running is port ${process.env.PORT || 8000}`);
})