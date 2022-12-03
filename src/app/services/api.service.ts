import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = "http://jsonplaceholder.typicode.com/users/";
  constructor(private http: HttpClient) {}

  getUsuarios(){
    return this.http.get<any>(this.url);
  }

  postUsuario(data:any){
    return this.http.post<any>(this.url,data);
  }

  putUsuarios(data:any, id:number){
    return this.http.put<any>(this.url+id,data);
  }

  deleteUsuario(id:number){
    return this.http.delete<any>(this.url+id);
  }
  
}
