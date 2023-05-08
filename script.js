function accordionInit(){

    // collecting all items
    const accordion = document.querySelectorAll('.accordion .accordion__element');

    // fn clear className from elements
    function clearClass(nameClass, elemensts){
        elemensts.forEach( (element) => {
            element.classList.remove(nameClass);
        })
    };


    accordion.forEach( (ele) => {
        ele.addEventListener('click', () => {
            if( ele.classList.contains('active') ){
                //if an item is active it deactivates it
                clearClass('active', accordion);
            }else{
                //if an item is not active it clears the others and activates 
                clearClass('active', accordion);
                ele.classList.add('active');
            }
        })
    });
}






// calls fn

accordionInit();