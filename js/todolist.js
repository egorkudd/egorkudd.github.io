const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const BUTTON = document.getElementById("add")

let items = getItems()

function getItems() {
    return JSON.parse(localStorage.getItem("note_list") || "[]");
}

function setItems(items) {
    localStorage.setItem("note_list", JSON.stringify(items));
}

function addItem() {
    items.unshift({
        description: "",
        completed: false
    });
    setItems(items);
    refreshList();
}

function updateItem(item, key, value) {
    item[key] = value;
    setItems(items);
    refreshList();
}

function refreshList() {
    items.sort((a, b) => {
        if (a.completed) return 1;
        if (b.completed) return -1;
        return a.description < b.description ? -1 : 1;
    });

    ITEMS_CONTAINER.innerHTML = "";

    for (const item of items) {
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", descriptionInput.value);
        });
        completedInput.addEventListener("change", () => {
            updateItem(item, "completed", completedInput.checked);
        });

        ITEMS_CONTAINER.append(itemElement);
    }
}

BUTTON.addEventListener("click", () => {
    addItem();
});

refreshList()