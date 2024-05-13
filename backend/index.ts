import { app } from "./src/app";


app.listen(process.env.PORT, () => {
    console.log(`Server running ${process.env.PORT}`);
})