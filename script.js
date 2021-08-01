const text = document.createElement("div")
text.id = "text_id"
const root = document.querySelector("#root")
text.innerHTML = "<h1>Hello!</h1>"
root.append(text)

console.log(text)
console.log(root);
