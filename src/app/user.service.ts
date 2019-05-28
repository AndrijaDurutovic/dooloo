import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) {
    this.http = http;
  }
  saveUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post("http://192.168.0.9:8080/registration", user);

  }
  loginUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post("http://192.168.0.9:8080/login", user);

  }
  getAllUsers(token: any): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.get("http://192.168.0.9:8080/users", { headers: headers });

  }

  getUser(token: any, ): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.get("http://192.168.0.9:8080/getuser" , { headers: headers });

  }

  deleteUser(user: any) {
    const headers = new HttpHeaders ({'Access-Control-Allow-Origin': '*'});
    return this.http.delete("http://192.168.0.9:8080/users/" +user);
   
  }
  updateUser(id, user) {
    const headers = new HttpHeaders ({'Access-Control-Allow-Origin': '*'});
    return this.http.put("http://192.168.0.9:8080/users/" +id, user);
   
  }
  getUserById(token, id): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.get("http://192.168.0.9:8080/users/" +id , { headers: headers });

  }

  insert(subject): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' });
    return this.http.post("http://192.168.0.9:8080/courses/", subject );
  }
  getInsert(): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' });
    return this.http.get("http://192.168.0.9:8080/courses/",);
}

deleteRow(id_course): Observable<any> {
  const headers = new HttpHeaders({ 'Authorization': 'Bearer ' });
  return this.http.delete("http://192.168.0.9:8080/courses/" +id_course);

}
updateRow(id_course, subjects): Observable<any> {
  const headers = new HttpHeaders({ 'Authorization': 'Bearer ' });
  return this.http.put("http://192.168.0.9:8080/courses/" +id_course, subjects, {headers: headers});

}
getUpdateById(id_course): Observable<any> {
  const headers = new HttpHeaders({ 'Authorization': 'Bearer ' });
  return this.http.get("http://192.168.0.9:8080/courses/" + id_course );
}
}