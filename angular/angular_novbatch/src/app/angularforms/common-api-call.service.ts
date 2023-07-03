import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
  

  // url = " http://localhost:3000/user";
  url = " http://localhost:3000/";
  constructor(private http: HttpClient) { }

  // getUser(){
  // return this.http.get(this.url)
  // }


  getApiCall(endPoint: any) {
    let updatedUrl = this.url + endPoint;
    return this.http.get(updatedUrl)
  }

  postApiCall(endPoint: any, data: any) {
    let updatedUrl = this.url + endPoint;
    return this.http.post(updatedUrl, data)
  }

  deleteApiCall(endPoint:any,id:any){
    let url = this.url + endPoint +"/"+id;
    return this.http.delete(url)
  }

  patchApiCall(endPoint: string, data:any, id:number) {
  let url=this.url + endPoint + "/" +id;
  return this.http.patch(url,data)
  }

  putApi(endPoint:any,data:any,id:number) {
    let url=this.url + endPoint + "/" +id;
    return this.http.put(url,data)
    
  }
  
}
