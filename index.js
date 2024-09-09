
    const menuBtn = document.getElementById("open-menu")
    const sidebar = document.getElementById("sidebar")
    const closeMenu = document.getElementById("closeMenu")

    menuBtn.addEventListener("click", function() {
        sidebar.style.display = "inline-block"
    })

    closeMenu.addEventListener("click", () => {
        sidebar.style.display = "none"
    })


