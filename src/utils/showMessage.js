export const showAddedMessage = (addRef) => {
        addRef.current.classList.add("add-show")
        console.log(addRef.current)
        setTimeout(() => {
            addRef.current.classList.remove("add-show")
        }, 1500)
    }