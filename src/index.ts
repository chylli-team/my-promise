// TODO check all throw Error, to change croak it to print line number of caller
export default class Future<T> {
    private _ready: boolean;
    private _cancelled: boolean | null;
    private _callbacks: Array<Function>;
    private static _lastId: number = 0;    
    private _id: number;
    private _result: T | undefined;

    constructor() {
        this._ready = false;
        this._callbacks = [];
        this._id = Future._lastId++;
        this._result = undefined;
        this._cancelled = null;
    }

    get id(): number {
        return this._id;
    }

    _new_with_subs(){
        console.log("not implemented");
    }    

    wait_all() {
        console.log("not implemented");
    }
    
    needs_all() {
        console.log("not implemented");
    }

    and_then() {
        console.log("not implemented");
    }
    
    or_else(){
        console.log("not implemented");
    }
    
    transform(){
        console.log("not implemented");
    }
    
    private _mark_ready(){
        this._ready = true;
        console.log("left part not implemented");
    }

    public done(result: T){
        if(this.is_ready) {
            throw new Error(`Future ${this.id} is already complete and cannot be done twice`);           
        } 
        if(this._result){
            throw new Error(`Future ${this.id} is not a leaf Future, cannot be .done`);           
        }
        this._result = result;
        this._mark_ready();
    }

    done_cb(){
        console.log("not implemented");
    }
    
    fail(){
        console.log("not implemented");
    }
    
    fail_cb(){
        console.log("not implemented");
    }

    on_cancel(){
        console.log("not implemented");
    }

    get is_cancelled(): boolean | null {
        return this._cancelled;
    }
    
    get is_ready(){
        return this._ready;
    }
    
    on_ready(){
        console.log("not implemented");
    }
    
    public get(){
        if(!this.is_ready){
            throw new Error(`Future ${this.id} is not yet completed`);
        }

        return this._result;
        console.log("not implemented");
    }
    
    on_done(){
        console.log("not implemented");
    }
    
    failure(){
        console.log("not implemented");
    }
    
    on_fail(){
        console.log("not implemented");
    }
    
    cancel(){
        console.log("not implemented");
    }
    
    cancel_cb(){
        console.log("not implemented");
    }
    
   
}