export abstract  class ShowInputTemplate{

  public show(inputElement: HTMLElement){
    this.showWithCss(inputElement);
    this.operationsForRenderInput();
  }


  public showWithCss(inputElement: HTMLElement): void{
    inputElement.classList.remove('hide');
  }

  public abstract operationsForRenderInput(): void;
}
