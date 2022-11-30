import base from "./base";

export const GetCategories = () => base.get("/categories");
// payload : {name, image, description, parentId}
export const AddCategory = (payload) => base.post("/categories", payload);
