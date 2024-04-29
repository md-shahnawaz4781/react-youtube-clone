export const API_KEY = 'AIzaSyC6H-LV8rPhFcZlRf6woHC0jueDXZEZ6VE' //Fill your API keys

export const value_converter = (value)=>{
        if(value>=1000000){
            return Math.floor(value/1000000) +'M'
        }
        else if(value>=1000){
            return Math.floor(value/1000) +'K'
        }
        else{
            return value
        }
}