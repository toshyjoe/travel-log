import { OnInit } from '@angular/core'
import { stringify } from 'querystring';

export class SearchTripRequest implements OnInit{
    useroptionnel	:	string;
    titleoptionnel	:	string;
    searchoptionnel	:	string;
    sortoptionnel	:	string;
    hrefoptionnel	:	string;
    idoptionnel	    :	string;
    pageoptionnel	:	number;
    pageSizeoptionnel	:	number;
    includeoptionnel	:	string;

    params : string; 
    
    constructor(){
        this.params = ''; 
    }
    
    ngOnInit(): void {
        this.initObject(); 
    }

    getParams() {
        this.params = ''; 
        this.params = this.addNotNullParams(); 
        return this.params; 
    }

    addParam(name, value){
        if(value != null) {
                
            var p = '?'; 
            if(this.params.length > 0 ){
                p = '&'; 
            } 

            p = p.concat(name, '=', value); 
            this.params = this.params.concat(p); 
        }
    }

    addNotNullParams(){

        this.addParam('title', this.titleoptionnel); 
        this.addParam('search', this.searchoptionnel); 
        this.addParam('user', this.useroptionnel); 
        this.addParam('sort', this.sortoptionnel); 
        this.addParam('href', this.hrefoptionnel); 
        this.addParam('id', this.idoptionnel); 
        this.addParam('page', this.pageoptionnel); 
        this.addParam('pageSize', this.pageSizeoptionnel); 
    
        return this.params; 
                
    }

   



    initObject(){
        this.useroptionnel = null; 
        this.titleoptionnel = null; 
        this.searchoptionnel =null;  
        this.sortoptionnel = 'title';  
        this.hrefoptionnel = null;  
        this.idoptionnel = null; 
        this.pageoptionnel = 1; 
        this.pageSizeoptionnel = 10; 
        this.includeoptionnel = null; 

        /*
        
        this.useroptionnel = null; 
        this.titleoptionnel = null; 
        this.searchoptionnel = null; 
        this.sortoptionnel = 'title'; 
        this.hrefoptionnel = null; 
        this.idoptionnel = null; 
        this.pageoptionnel = 1; 
        this.pageSizeoptionnel = 10; 
        this.includeoptionnel = null; 
         */
    }

}
