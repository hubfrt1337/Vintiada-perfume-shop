export const showAddedMessage = (addRef, message) => {
    if (message === "removed") {
        addRef.current.classList.add("add-show")
        setTimeout(() => {
            addRef.current.classList.remove("add-show")
        }, 1500)
    } else {
        addRef.current.classList.add("add-show")
        setTimeout(() => {
            addRef.current.classList.remove("add-show")
        }, 1500)
    }
}