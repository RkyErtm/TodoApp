export class Model{
    user;
    items;

    constructor(){
        this.user="Rukiye";
        this.items = [
            new TodoItem("Breakfast",true),
            new TodoItem("Sport",false),
            new TodoItem("Cinema",false),
            new TodoItem("Read a Book",false),
          ];
    }

}

export class TodoItem{
    description;
    action;

    constructor(description: any,action: any){
        this.description=description;
        this.action=action;
    }
}