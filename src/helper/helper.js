class Helper{
  body
  constructor(){
    this.body = document.querySelector('body');
  }
  

  showMessagePopup=(id)=>{
    this.body.classList +=' popup-shown';
    const popup = document.querySelector(id);
    popup.classList+=' shown'
  }

  closeMessagePopup=()=>{
    this.body.classList.remove('popup-shown');
    const popups = document.querySelectorAll('.message-box');
    if(popups){
      for(var i=0; i<popups.length; i++){ 
        popups[i].classList.remove('shown');
      }
    }
  }
}

export default new Helper();