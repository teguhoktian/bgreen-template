export const sidebarToggle = () => {
    const width = document.body.clientWidth
    const isMobile = width < 768
    if(isMobile){
        const target = document.getElementById('sidebar')
        if(target.classList.contains('-translate-x-full')){
            target.classList.remove('-translate-x-full')
            target.classList.add('translate-x-0')
            document.getElementById('overlaySidebar').classList.add('block')
            document.getElementById('overlaySidebar').classList.remove('hidden')
        }else{
            target.classList.add('-translate-x-full')
            target.classList.remove('translate-x-0')
            document.getElementById('overlaySidebar').classList.add('hidden')
            document.getElementById('overlaySidebar').classList.remove('block')
        }
    }
}
