<template>
    <nav class="c-header">


        <div class="c-header__row">
            <div class="c-header-logo__text">
                            
                <h2 class="c-header-logo-text__element"><span class="c-header-row__c">Compo</span>news</h2>
            </div>

            <router-link to="/" class="c-header-row__object c-header-row__link c-header-row__text">Home</router-link>
            <router-link to="/Category/Health" class="c-header-row__object c-header-row__link c-header-row__text">Health</router-link>
            <router-link to="/Category/Sports" class="c-header-row__object c-header-row__link c-header-row__text">Sports</router-link>
            <router-link to="/Category/Technology" class="c-header-row__object c-header-row__link c-header-row__text">Technology</router-link>
            <router-link to="/Search" class="c-header-row__object c-header-row__link c-header-row__icon">
            <svg  class="c-header-row__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" width="30px" height="30px">
                <g id="surface1">
                <path style=" " d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z "/>
                </g>
            </svg>
            </router-link>
            <router-link to="/Search" class="c-header-row__object c-header-row__link c-header-row__search">Search</router-link>
            <div class="c-header__mobilemenu" id="mobilemenu" v-on:click="ShowMobileMenu">
                <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" 
                xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2
                  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2
                    S29.104,22,28,22z"/>
                </svg>
            </div>
            <div class="c-header__wrapper" id="mobilewrapper">
                <div class="c-header__mobilemenu c-header-wrapper__link" id="mobilemenu" v-on:click="ShowMobileMenu">
                    <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" 
                    xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2
                    s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2
                        S29.104,22,28,22z"/>
                    </svg>
                </div>
                <router-link to="/" class="c-header-wrapper__link">Home</router-link>
                <router-link to="/Category/Health" class="c-header-wrapper__link">Health</router-link>
                <router-link to="/Category/Sports" class="c-header-wrapper__link">Sports</router-link>
                <router-link to="/Category/Technology" class="c-header-wrapper__link">Technology</router-link>
                <router-link to="/Search" class="c-header-wrapper__link">
                <svg  class="c-header-row__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" width="30px" height="30px">
                    <g id="surface1">
                    <path style=" " d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z "/>
                    </g>
                </svg>
                </router-link>
            </div>
        </div>

    </nav>
</template>

<style lang="scss" scoped>
@import "./src/style/components/components.header";
</style>

<script>
export default {
    methods:{
        ShowMobileMenu: function(){
            let mobilemenu = document.getElementById('mobilewrapper');
            if (mobilemenu.style.display === "none") {
                mobilemenu.style.display = "flex";
            } else {
                mobilemenu.style.display = "none";
            }

        },
        ToggleOffMenu: function(){
            let mobilemenu = document.getElementById('mobilewrapper');
            mobilemenu.style.display = "none";
        }


    },
    watch:{
      '$route' : 'ToggleOffMenu'
  },
}
</script>
