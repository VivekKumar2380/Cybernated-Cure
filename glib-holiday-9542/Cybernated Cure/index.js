const toggle = document.querySelector(".toggle");
    const menu=document.querySelector(".menu");
    const items =document.querySelectorAll(".item");

    // toggle mobile menu 
    function toggleMenu(){
        if(menu.classList.contains("active")){
            menu.classList.remove("active");
            toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
        }else{
            menu.classList.add("active");
            toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
        }
    }

    // Activate Submenu 
    function toggleItem(){
        if(this.classList.contains("submenu-active")){
            this.classList.remove("submenu-active");
        }
        else if(menu.querySelector(".submenu-active")){
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
            this.classList.add("submenu-active");
        }
        else{
            this.classList.add("submenu-active")
        }
    }

    // close Submenu from Anywhere 

    function closeSubmenu(e){
        if(menu.querySelector(".submenu-active")){
            let isClickInside =menu.querySelector(".submenu-active").contains(e.target);
            if(!isClickInside && menu.querySelector(".submenu-active")){
                menu.querySelector(".submenu-active").classList.remove("submenu-active");
            }
        }
    }
    // Event Listner 
    toggle.addEventListener("click", toggleMenu, false);
    for( let item of items){
        if(item.querySelector(".submenu")){
            item.addEventListener("click", toggleItem, false );
        }
        item.addEventListener("keypress", toggleItem, false);
    }
    document.addEventListener("click" , closeSubmenu , false)