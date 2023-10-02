
export const CategoryFields = [
    {
        placeholder : "Enter Category Name",
        type : "text",
        id : "category_name",
        lable : "Category Name",
        required : true
    },
]

export const ProductFields = [
    {
        placeholder : "Enter Product Name",
        type : "text",
        id : "name",
        lable : "Product Name",
        required : true
    },
    {
        placeholder : "Enter Product ID",
        type : "number",
        id : "product_id",
        lable : "Product ID",
        required : true,
        min : 1
    },
    {
        placeholder : "Enter Product Category",
        type : "select",
        id : "category",
        lable : "Product Category",
        list : "category_list",
        required : true
    },
    {
        placeholder : "Enter Product Price",
        type : "number",
        id : "price",
        lable : "Product Price",
        required : true,
        min : 1
    },
    {
        placeholder : "Enter Product Colour",
        type : "text",
        id : "colour",
        lable : "Product Colour",
        required : true,
    },
    {
        placeholder : "Enter Product Brand",
        type : "text",
        id : "brand",
        lable : "Product Brand",
        required : true
    },
    {
        placeholder : "Enter Product Description",
        type : "text",
        id : "description",
        lable : "Product Description",
        required : true
    },
    {
        placeholder : "Enter Product Offer Details",
        type : "text",
        id : "offer",
        lable : "Product Offer",
        required : true
    },
    {
        placeholder : "Enter Product Discount Details",
        type : "number",
        id : "discount",
        lable : "Product Discount",
        required : true,
        min : 0
    },
    {
        placeholder : "Product Image",
        type : "file",
        id : "image",
        lable : "Upload Product Image",
        required : false
    },
]